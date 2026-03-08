import { StyleSheet, Text, ScrollView, View, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect, useRef, useCallback } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import General from "../frap_sections/General";
import Patient from "../frap_sections/Patient";
import Vitals from "../frap_sections/Vitals";
import ESCGW from "../frap_sections/ESCGW";
import Pupils from "../frap_sections/Pupils";
import Signature from "../frap_sections/Signature";
import Pictures from "../frap_sections/Pictures";
import Injury from "../frap_sections/Injury";
import AnatomicId from "../frap_sections/AnatomicId";
import Notes from "../frap_sections/Notes";
import Witness from "../frap_sections/Witness";
import Transport from "../frap_sections/Transportation";
import Supplies from "../frap_sections/Supplies";
import SaveButton from "../frap_sections/SaveButton";
import { router } from "expo-router";

import API_URL from "../config"; 

// ---------------------------------------------------------------------------
// CLAVES DE ALMACENAMIENTO
// ---------------------------------------------------------------------------
const STORAGE_KEYS = {
    PENDING_REPORTS: '@frapapp/pending_reports',
    OFFLINE_MODE:    '@frapapp/offline_mode',
    LAST_SYNC:       '@frapapp/last_sync',
    AUTH_TOKEN:      '@frapapp/auth_token',
    USER_DATA:       '@frapapp/user_data',
};

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------

/** Obtiene el token guardado (puede ser null si no hay sesión) */
const getAuthToken = async () => {
    try {
        return await AsyncStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    } catch (error) {
        console.error('Error al obtener token:', error);
        return null;
    }
};

/**
 * Convierte una URI local (file://) a base64 para poder serializar
 * imágenes/firmas en AsyncStorage sin depender del sistema de archivos.
 * Si la URI ya es base64 (data:...) la devuelve tal cual.
 */
const uriToBase64 = async (uri) => {
    if (!uri) return null;
    if (uri.startsWith('data:')) return uri; // ya está en base64

    try {
        const response = await fetch(uri);
        const blob = await response.blob();
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror  = reject;
            reader.readAsDataURL(blob);
        });
    } catch (error) {
        console.warn('No se pudo convertir imagen a base64, se omite:', error);
        return null;
    }
};

/**
 * Procesa todas las imágenes y firmas del payload convirtiéndolas a base64
 * para que puedan guardarse en AsyncStorage sin romper JSON.
 */
const serializeImages = async (payload) => {
    const result = { ...payload };

    // Firmas (SVG paths o URIs)
    result.firma_paciente  = await uriToBase64(payload.firma_paciente)  ?? payload.firma_paciente;
    result.firma_testigo   = await uriToBase64(payload.firma_testigo)   ?? payload.firma_testigo;
    result.firma_operador  = await uriToBase64(payload.firma_operador)  ?? payload.firma_operador;

    // Fotografías (array de URIs)
    if (Array.isArray(payload.fotografias)) {
        result.fotografias = await Promise.all(
            payload.fotografias.map(async (foto) => {
                if (typeof foto === 'string') {
                    return await uriToBase64(foto) ?? foto;
                }
                if (typeof foto === 'object' && foto.uri) {
                    return { ...foto, uri: await uriToBase64(foto.uri) ?? foto.uri };
                }
                return foto;
            })
        );
    }

    return result;
};

// ---------------------------------------------------------------------------
// HEADER COMPONENTE
// ---------------------------------------------------------------------------
function Header({ isOffline, pendingCount }) {
    if (!isOffline && pendingCount === 0) return null;
    return (
        <View style={styles.header}>
            <View style={styles.headerContent}>
                <Text style={styles.headerText}>Registro de Atención Prehospitalaria</Text>
                <View style={styles.statusContainer}>
                    {isOffline && (
                        <View style={styles.offlineBadge}>
                            <Text style={styles.offlineText}>OFFLINE</Text>
                            {pendingCount > 0 && (
                                <View style={styles.pendingBadge}>
                                    <Text style={styles.pendingText}>{pendingCount}</Text>
                                </View>
                            )}
                        </View>
                    )}
                    {!isOffline && pendingCount > 0 && (
                        <View style={[styles.offlineBadge, {backgroundColor: '#f39c12'}]}>
                            <Text style={styles.offlineText}>{pendingCount} pendientes</Text>
                        </View>
                    )}
                </View>
            </View>
        </View>
    );
}

// ---------------------------------------------------------------------------
// PANTALLA PRINCIPAL
// ---------------------------------------------------------------------------
export default function Frap() {
    const [patientData, setPatientData] = useState({
        nombre: '',
        edad: '',
        genero: 0,
        alergias: [],
        patologias: [],
        medicamentos: []
    });

    const [reportData, setReportData] = useState({
        paciente_id: null,
        fecha_hora: new Date().toISOString(),
        lugar_nombre: '',
        signos_vitales: { Temp: '', FC: '', FR: '', SpO2: '', T_A: '', GLU: '' },
        nivel_conciencia: { motora: null, verbal: null, ocular: null },
        lesiones: [],
        pupilas: [],
        anatomicas: [],
        observaciones: '',
        recomendaciones: '',
        traslado_aceptado: false,
        numero_unidad: '',
        nombre_operador: '',
        firma_operador: '',
        firma_paciente: '',
        nombre_testigo: '',
        firma_testigo: '',
        insumos: [],
        fotografias: []
    });

    const [isOffline, setIsOffline]                   = useState(false);
    const [pendingReportsCount, setPendingReportsCount] = useState(0);
    const [isSaving, setIsSaving]                     = useState(false);

    // Evitar sincronizaciones en paralelo
    const isSyncingRef = useRef(false);

    // Callbacks memorizados para secciones pesadas
    const handlePupilsUpdate     = useCallback((pupilas)    => updateReportData({ pupilas }),    []);
    const handleAnatomicasUpdate = useCallback((anatomicas) => updateReportData({ anatomicas }), []);
    const handleInjuriesUpdate   = useCallback((lesiones)   => updateReportData({ lesiones }),   []);

    // -----------------------------------------------------------------------
    // MONTAR: escuchar red y cargar contador de pendientes
    // -----------------------------------------------------------------------
    useEffect(() => {
        // Cargar cantidad de reportes pendientes al abrir la pantalla
        loadPendingReportsCount();

        const unsubscribe = NetInfo.addEventListener(state => {
            const offline = !state.isConnected;
            setIsOffline(offline);

            // Al recuperar conexión, sincronizar automáticamente si hay pendientes
            if (!offline && !isSyncingRef.current) {
                loadPendingReportsCount().then(count => {
                    if (count > 0) syncPendingReports();
                });
            }
        });

        return unsubscribe;
    }, []);

    // -----------------------------------------------------------------------
    // HELPERS DE ESTADO
    // -----------------------------------------------------------------------
    const updateReportData  = (newData) => setReportData(prev  => ({ ...prev,  ...newData }));
    const updatePatientData = (newData) => setPatientData(prev => ({ ...prev, ...newData }));

    // -----------------------------------------------------------------------
    // REPORTES PENDIENTES: cargar, guardar, sincronizar
    // -----------------------------------------------------------------------

    /** Devuelve el número de reportes pendientes y actualiza el estado */
    const loadPendingReportsCount = async () => {
        try {
            const raw = await AsyncStorage.getItem(STORAGE_KEYS.PENDING_REPORTS);
            const reports = raw ? JSON.parse(raw) : [];
            setPendingReportsCount(reports.length);
            return reports.length;
        } catch (error) {
            console.error('Error al cargar reportes pendientes:', error);
            return 0;
        }
    };

    /**
     * Guarda un reporte en la cola local de pendientes.
     * Las imágenes y firmas se convierten a base64 antes de serializar.
     */
    const saveReportLocally = async (reportPayload) => {
        try {
            // Serializar imágenes/firmas a base64 para poder guardar en AsyncStorage
            const serializedPayload = await serializeImages(reportPayload);

            const raw = await AsyncStorage.getItem(STORAGE_KEYS.PENDING_REPORTS);
            const reports = raw ? JSON.parse(raw) : [];

            const offlineReport = {
                ...serializedPayload,
                id:        `offline_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
                createdAt: new Date().toISOString(),
                status:    'pending',
                attempts:  0
            };

            reports.push(offlineReport);
            await AsyncStorage.setItem(STORAGE_KEYS.PENDING_REPORTS, JSON.stringify(reports));
            await AsyncStorage.setItem(STORAGE_KEYS.OFFLINE_MODE, 'true');

            setPendingReportsCount(reports.length);
            return offlineReport.id;
        } catch (error) {
            console.error('Error al guardar localmente:', error);
            throw error;
        }
    };

    /**
     * Intenta subir todos los reportes pendientes al servidor.
     * Se llama automáticamente al recuperar conexión o manualmente por el usuario.
     */
    const syncPendingReports = async () => {
        if (isSyncingRef.current) return;
        isSyncingRef.current = true;

        try {
            const raw = await AsyncStorage.getItem(STORAGE_KEYS.PENDING_REPORTS);
            let reports = raw ? JSON.parse(raw) : [];

            if (reports.length === 0) { isSyncingRef.current = false; return; }

            console.log(`Sincronizando ${reports.length} reportes pendientes...`);

            const token = await getAuthToken();
            const headers = {
                'Content-Type': 'application/json',
                ...(token && { 'Authorization': `Bearer ${token}` })
            };

            const successIds  = [];
            const failedReports = [];

            for (const report of reports) {
                try {
                    const { paciente, id, createdAt, status, attempts, ...reportFields } = report;

                    // 1. Crear paciente
                    const patientRes = await fetch(`${API_URL}/api/pacientes`, {
                        method: 'POST',
                        headers,
                        body: JSON.stringify(paciente),
                    });

                    if (!patientRes.ok) throw new Error('Error al crear paciente offline');

                    const patientResult = await patientRes.json();

                    // 2. Crear reporte con el ID del paciente recién creado
                    const reportPayload = { ...reportFields, paciente_id: patientResult.data?.id || patientResult.id };

                    const reportRes = await fetch(`${API_URL}/api/reportes`, {
                        method: 'POST',
                        headers,
                        body: JSON.stringify(reportPayload),
                    });

                    if (!reportRes.ok) throw new Error('Error al crear reporte offline');

                    successIds.push(id);
                    console.log(`✅ Reporte ${id} sincronizado`);

                } catch (error) {
                    console.error(`❌ Error al sincronizar ${report.id}:`, error);
                    failedReports.push({ ...report, attempts: (report.attempts || 0) + 1 });
                }
            }

            // Conservar sólo los que fallaron y aún no superaron 3 intentos
            const remaining = failedReports.filter(r => r.attempts < 3);
            await AsyncStorage.setItem(STORAGE_KEYS.PENDING_REPORTS, JSON.stringify(remaining));
            setPendingReportsCount(remaining.length);

            if (remaining.length === 0) {
                await AsyncStorage.removeItem(STORAGE_KEYS.OFFLINE_MODE);
                await AsyncStorage.setItem(STORAGE_KEYS.LAST_SYNC, new Date().toISOString());
            }

            if (successIds.length > 0) {
                Alert.alert(
                    "Sincronización completada",
                    `${successIds.length} reporte(s) enviados exitosamente` +
                    (remaining.length > 0 ? `\n${remaining.length} reporte(s) fallaron y se reintentarán.` : ''),
                    [{ text: "OK" }]
                );
            }

        } catch (error) {
            console.error('Error en sincronización:', error);
            Alert.alert("Error", "No se pudo completar la sincronización");
        } finally {
            isSyncingRef.current = false;
        }
    };

    // -----------------------------------------------------------------------
    // GUARDAR REPORTE (decide online vs offline)
    // -----------------------------------------------------------------------
    const handleSaveReport = async () => {
        if (isSaving) return;
        setIsSaving(true);

        try {
            // Validaciones básicas
            if (!patientData.nombre.trim()) {
                Alert.alert("Error", "Nombre del paciente es requerido");
                return;
            }
            if (!patientData.edad) {
                Alert.alert("Error", "Edad del paciente es requerida");
                return;
            }
            if (!reportData.lugar_nombre) {
                Alert.alert("Error", "Lugar de ocurrencia es requerido");
                return;
            }
            if (reportData.signos_vitales.T_A && !/^\d{2,3}\/\d{2,3}$/.test(reportData.signos_vitales.T_A)) {
                Alert.alert("Error", "Formato de presión arterial inválido. Use: 120/80");
                return;
            }

            if (isOffline) {
                await saveOfflineReport();
            } else {
                await enviarDatosOnline();
            }

        } catch (error) {
            console.error('Error al guardar reporte:', error);
            Alert.alert("Error", "Ocurrió un error al guardar el reporte");
        } finally {
            setIsSaving(false);
        }
    };

    // -----------------------------------------------------------------------
    // GUARDAR OFFLINE
    // -----------------------------------------------------------------------
    const saveOfflineReport = async () => {
        try {
            const pacientePayload = {
                ...patientData,
                edad: parseInt(patientData.edad) || 0,
                _id: `offline_patient_${Date.now()}`
            };

            const vitales = buildSignosVitales();
            const nivelConciencia = buildNivelConciencia();

            const reportPayload = {
                paciente: pacientePayload,
                fecha_hora:        reportData.fecha_hora,
                lugar_nombre:      reportData.lugar_nombre,
                observaciones:     reportData.observaciones     || '',
                recomendaciones:   reportData.recomendaciones   || '',
                traslado_aceptado: reportData.traslado_aceptado,
                numero_unidad:     reportData.numero_unidad     || '',
                nombre_operador:   reportData.nombre_operador   || '',
                firma_operador:    reportData.firma_operador    || '',
                firma_paciente:    reportData.firma_paciente    || '',
                nombre_testigo:    reportData.nombre_testigo    || '',
                firma_testigo:     reportData.firma_testigo     || '',
                signos_vitales:    vitales,
                nivel_conciencia:  nivelConciencia,
                lesiones:          reportData.lesiones,
                pupilas:           reportData.pupilas,
                anatomicas:        reportData.anatomicas,
                insumos:           reportData.insumos,
                fotografias:       reportData.fotografias   // se serializan en saveReportLocally
            };

            const reportId = await saveReportLocally(reportPayload);

            Alert.alert(
                "Guardado Offline ✅",
                `Reporte guardado localmente.\nID: ${reportId.substring(0, 12)}...\n\nSe enviará automáticamente cuando haya conexión.`,
                [
                    { text: "Ver Pendientes",   onPress: showPendingReports },
                    { text: "Nuevo Reporte",     onPress: resetForm, style: "default" }
                ]
            );

        } catch (error) {
            console.error('Error al guardar offline:', error);
            Alert.alert("Error", "No se pudo guardar el reporte offline");
        }
    };

    // -----------------------------------------------------------------------
    // ENVIAR ONLINE
    // -----------------------------------------------------------------------
    const enviarDatosOnline = async () => {
        try {
            // Por el momento sin token (ajustar cuando el backend lo requiera)
            const headers = { 'Content-Type': 'application/json' };

            // 1. Crear paciente
            const patientResponse = await fetch(`${API_URL}/api/pacientes`, {
                method: 'POST',
                headers,
                body: JSON.stringify({ ...patientData, edad: parseInt(patientData.edad) || 0 }),
            });

            const patientResult = await patientResponse.json();
            console.log('Paciente:', patientResult);

            if (!patientResult.success) {
                throw new Error(patientResult.message || 'Error al crear paciente');
            }

            const vitales       = buildSignosVitales();
            const nivelConciencia = buildNivelConciencia();

            // 2. Preparar reporte
            const reportPayload = {
                paciente_id:       patientResult.data.id,
                fecha_hora:        reportData.fecha_hora,
                lugar_nombre:      reportData.lugar_nombre,
                observaciones:     reportData.observaciones     || '',
                recomendaciones:   reportData.recomendaciones   || '',
                traslado_aceptado: reportData.traslado_aceptado,
                numero_unidad:     reportData.numero_unidad     || '',
                nombre_operador:   reportData.nombre_operador   || '',
                firma_operador:    reportData.firma_operador    || '',
                firma_paciente:    reportData.firma_paciente    || '',
                nombre_testigo:    reportData.nombre_testigo    || '',
                firma_testigo:     reportData.firma_testigo     || '',
                signos_vitales:    vitales,
                nivel_conciencia:  nivelConciencia,
                lesiones:          reportData.lesiones,
                pupilas:           reportData.pupilas,
                anatomicas:        reportData.anatomicas,
                insumos:           reportData.insumos,
                fotografias:       reportData.fotografias
            };

            if (!reportPayload.nivel_conciencia) delete reportPayload.nivel_conciencia;

            // 3. Enviar reporte
            const reportResponse = await fetch(`${API_URL}/api/reportes`, {
                method: 'POST',
                headers,
                body: JSON.stringify(reportPayload),
            });

            const reportResult = await reportResponse.json();
            console.log('Reporte:', reportResult);

            if (!reportResult.success) {
                throw new Error(reportResult.message || 'Error al crear reporte');
            }

            Alert.alert(
                "Éxito ✅",
                "Reporte guardado en el servidor",
                [{ text: "OK", onPress: () => { resetForm(); router.replace("/home"); } }]
            );

        } catch (error) {
            console.error('Error al enviar online:', error);

            // Si falla por conexión, ofrecer guardar offline
            Alert.alert(
                "Error de conexión",
                "No se pudo conectar al servidor. ¿Desea guardar el reporte localmente?",
                [
                    { text: "Cancelar", style: "cancel" },
                    {
                        text: "Guardar Offline",
                        onPress: () => {
                            setIsOffline(true);
                            saveOfflineReport();
                        }
                    }
                ]
            );
        }
    };

    // -----------------------------------------------------------------------
    // HELPERS DE PAYLOAD
    // -----------------------------------------------------------------------

    /** Convierte los signos vitales a números y elimina los vacíos */
    const buildSignosVitales = () => {
        const raw = reportData.signos_vitales;
        const v = {
            Temp: raw.Temp  ? parseInt(raw.Temp)  : null,
            FC:   raw.FC    ? parseInt(raw.FC)    : null,
            FR:   raw.FR    ? parseInt(raw.FR)    : null,
            SpO2: raw.SpO2  ? parseInt(raw.SpO2)  : null,
            T_A:  raw.T_A   || null,
            GLU:  raw.GLU   ? parseInt(raw.GLU)   : null,
        };
        // Eliminar nulos y vacíos para no mandar campos basura al servidor
        Object.keys(v).forEach(k => { if (v[k] === null || v[k] === '') delete v[k]; });
        return v;
    };

    /** Devuelve nivel_conciencia sólo si tiene al menos un valor */
    const buildNivelConciencia = () => {
        const nc = reportData.nivel_conciencia;
        if (nc.motora || nc.verbal || nc.ocular) return nc;
        return null;
    };

    // -----------------------------------------------------------------------
    // MOSTRAR PENDIENTES / SINCRONIZACIÓN MANUAL
    // -----------------------------------------------------------------------
    const showPendingReports = async () => {
        try {
            const raw = await AsyncStorage.getItem(STORAGE_KEYS.PENDING_REPORTS);
            const reports = raw ? JSON.parse(raw) : [];

            if (reports.length === 0) {
                Alert.alert("Reportes Pendientes", "No hay reportes pendientes de enviar.");
                return;
            }

            const reportList = reports.map((r, i) =>
                `• ${i+1}. ${r.paciente?.nombre ?? 'Sin nombre'} — ${new Date(r.createdAt).toLocaleDateString()}`
            ).join('\n');

            Alert.alert(
                `Reportes Pendientes (${reports.length})`,
                reportList,
                [
                    { text: "Cerrar" },
                    { text: "Sincronizar Ahora", onPress: syncPendingReports }
                ]
            );
        } catch (error) {
            console.error('Error al mostrar reportes pendientes:', error);
        }
    };

    const handleManualSync = () => {
        if (pendingReportsCount > 0) {
            Alert.alert(
                "Sincronizar",
                `¿Enviar ${pendingReportsCount} reporte(s) pendientes al servidor?`,
                [
                    { text: "Cancelar",      style: "cancel" },
                    { text: "Sincronizar",   onPress: syncPendingReports }
                ]
            );
        } else {
            Alert.alert("Sincronizar", "No hay reportes pendientes para sincronizar.");
        }
    };

    // -----------------------------------------------------------------------
    // RESET DEL FORMULARIO
    // -----------------------------------------------------------------------
    const resetForm = () => {
        setPatientData({ nombre: '', edad: '', genero: 0, alergias: [], patologias: [], medicamentos: [] });
        setReportData({
            paciente_id: null,
            fecha_hora: new Date().toISOString(),
            lugar_nombre: '',
            signos_vitales: { Temp: '', FC: '', FR: '', SpO2: '', T_A: '', GLU: '' },
            nivel_conciencia: { motora: null, verbal: null, ocular: null },
            lesiones: [], pupilas: [], anatomicas: [],
            observaciones: '', recomendaciones: '',
            traslado_aceptado: false,
            numero_unidad: '', nombre_operador: '',
            firma_operador: '', firma_paciente: '',
            nombre_testigo: '', firma_testigo: '',
            insumos: [], fotografias: []
        });
    };

    // -----------------------------------------------------------------------
    // RENDER
    // -----------------------------------------------------------------------
    return (
        <SafeAreaView style={styles.frapContainer}>
            <Header isOffline={isOffline} pendingCount={pendingReportsCount} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <General    data={reportData}  onUpdate={updateReportData} />
                <Patient    data={patientData} onUpdate={updatePatientData} />
                <Vitals
                    data={reportData.signos_vitales}
                    onUpdate={(newVitals) => updateReportData({
                        signos_vitales: { ...reportData.signos_vitales, ...newVitals }
                    })}
                />
                <ESCGW
                    data={reportData.nivel_conciencia}
                    onUpdate={(newGlasgow) => updateReportData({
                        nivel_conciencia: { ...reportData.nivel_conciencia, ...newGlasgow }
                    })}
                />
                <Pupils      data={reportData.pupilas}    onUpdate={handlePupilsUpdate} />
                <Injury      data={reportData.lesiones}   onUpdate={handleInjuriesUpdate} />
                <AnatomicId  data={reportData.anatomicas} onUpdate={handleAnatomicasUpdate} />
                <Supplies    data={reportData.insumos}    onUpdate={(insumos) => updateReportData({ insumos })} />
                <Notes
                    observaciones={reportData.observaciones}
                    recomendaciones={reportData.recomendaciones}
                    onUpdate={(updates) => updateReportData(updates)}
                />
                <Pictures   data={reportData.fotografias} onUpdate={(fotografias) => updateReportData({ fotografias })} />
                <Signature  data={reportData.firma_paciente} onUpdate={(firma_paciente) => updateReportData({ firma_paciente })} />
                <Witness
                    data={{ nombre_testigo: reportData.nombre_testigo, firma_testigo: reportData.firma_testigo }}
                    onUpdate={(updates) => updateReportData(updates)}
                />
                <Transport
                    data={{
                        traslado_aceptado: reportData.traslado_aceptado,
                        numero_unidad:     reportData.numero_unidad,
                        nombre_operador:   reportData.nombre_operador,
                        firma_operador:    reportData.firma_operador
                    }}
                    onUpdate={(updates) => updateReportData(updates)}
                />
                <SaveButton
                    onSave={handleSaveReport}
                    isOffline={isOffline}
                    isSaving={isSaving}
                    pendingCount={pendingReportsCount}
                    onManualSync={handleManualSync}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

// ---------------------------------------------------------------------------
// ESTILOS
// ---------------------------------------------------------------------------
const styles = StyleSheet.create({
    frapContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingBottom: 10,
        paddingTop: 20,
        backgroundColor: "#40b67127"
    },

    header: {
        backgroundColor: "#165057",
        borderRadius: 20,
        marginBottom: 15,
        marginRight: 20,
        padding: 10
    },

    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        flex: 1
    },

    statusContainer: { marginLeft: 10 },

    offlineBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ff6b6b',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        gap: 6
    },

    offlineText:  { color: 'white', fontSize: 12, fontWeight: 'bold' },

    pendingBadge: {
        backgroundColor: 'white',
        borderRadius: 10,
        minWidth: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    pendingText: { color: '#ff6b6b', fontSize: 10, fontWeight: 'bold' }
});