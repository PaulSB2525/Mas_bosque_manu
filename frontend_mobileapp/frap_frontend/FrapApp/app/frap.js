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

// Claves para AsyncStorage
const STORAGE_KEYS = {
    PENDING_REPORTS: '@frapapp/pending_reports',
    OFFLINE_MODE: '@frapapp/offline_mode',
    LAST_SYNC: '@frapapp/last_sync',
    AUTH_TOKEN: '@frapapp/auth_token'
};

function Header({ isOffline, pendingCount }) {
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
                </View>
            </View>
        </View>
    );
}

// Función para obtener token de autenticación
const getAuthToken = async () => {
    try {
        return await AsyncStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    } catch (error) {
        console.error('Error al obtener token:', error);
        return null;
    }
};

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
        signos_vitales: {
            Temp: '',
            FC: '',
            FR: '',
            SpO2: '',
            T_A: '',
            GLU: ''
        },
        nivel_conciencia: {
            motora: null,
            verbal: null,
            ocular: null
        },
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

    const [isOffline, setIsOffline] = useState(false);
    const [pendingReportsCount, setPendingReportsCount] = useState(0);
    const [isSaving, setIsSaving] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    // Referencia para evitar múltiples sincronizaciones
    const isSyncingRef = useRef(false);

    const handlePupilsUpdate = useCallback((pupilas) => {
        updateReportData({ pupilas });
    }, []);

    const handleAnatomicasUpdate = useCallback((anatomicas) => {
        updateReportData({ anatomicas });
    }, []);

    const handleInjuriesUpdate = useCallback((lesiones) => {
        updateReportData({ lesiones });
    }, []);

    // Verificar conexión y autenticación al cargar
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            const offline = !state.isConnected;
            setIsOffline(offline);
            
            // Si se reconecta y hay reportes pendientes, sincronizar
            if (!offline && pendingReportsCount > 0 && !isSyncingRef.current) {
                syncPendingReports();
            }
        });

        // Cargar reportes pendientes al iniciar

        //por el momento no
        //loadPendingReportsCount();
        
        // Verificar autenticación
        
        // Aun autenticamos tokens, checar backend
        // checkAuthentication();

        return unsubscribe;
    }, []);

    const checkAuthentication = async () => {
        try {
            const token = await getAuthToken();
            if (!token) {
                setIsAuthenticated(false);
                Alert.alert(
                    "Sesión expirada",
                    "Tu sesión ha expirado. Por favor inicia sesión nuevamente.",
                    [{ text: "OK", onPress: () => router.replace("/") }]
                );
            }
        } catch (error) {
            console.error('Error al verificar autenticación:', error);
        }
    };

    const updateReportData = (newData) => {
        setReportData(prev => ({
            ...prev,
            ...newData
        }));
    };

    const updatePatientData = (newData) => {
        setPatientData(prev => ({
            ...prev,
            ...newData
        }));
    };

    // Guardar reporte localmente
    const saveReportLocally = async (reportPayload) => {
        try {
            const pendingReports = await AsyncStorage.getItem(STORAGE_KEYS.PENDING_REPORTS);
            const reports = pendingReports ? JSON.parse(pendingReports) : [];
            
            // Agregar timestamp y ID único para el reporte offline
            const offlineReport = {
                ...reportPayload,
                id: `offline_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
                createdAt: new Date().toISOString(),
                status: 'pending',
                attempts: 0
            };
            
            reports.push(offlineReport);
            await AsyncStorage.setItem(STORAGE_KEYS.PENDING_REPORTS, JSON.stringify(reports));
            
            // Actualizar contador
            setPendingReportsCount(reports.length);
            
            // Guardar modo offline
            await AsyncStorage.setItem(STORAGE_KEYS.OFFLINE_MODE, 'true');
            
            return offlineReport.id;
        } catch (error) {
            console.error('Error al guardar localmente:', error);
            throw error;
        }
    };

    // Cargar contador de reportes pendientes
    const loadPendingReportsCount = async () => {
        try {
            const pendingReports = await AsyncStorage.getItem(STORAGE_KEYS.PENDING_REPORTS);
            const reports = pendingReports ? JSON.parse(pendingReports) : [];
            setPendingReportsCount(reports.length);
        } catch (error) {
            console.error('Error al cargar reportes pendientes:', error);
        }
    };

    // Sincronizar reportes pendientes
    const syncPendingReports = async () => {
        if (isSyncingRef.current) return;
        
        isSyncingRef.current = true;
        
        try {
            const pendingReports = await AsyncStorage.getItem(STORAGE_KEYS.PENDING_REPORTS);
            let reports = pendingReports ? JSON.parse(pendingReports) : [];
            
            if (reports.length === 0) {
                isSyncingRef.current = false;
                return;
            }
            
            console.log(`Sincronizando ${reports.length} reportes pendientes...`);
            
            const successfulReports = [];
            const failedReports = [];
            
            // Obtener token para autenticación
            const token = await getAuthToken();
            const headers = {
                'Content-Type': 'application/json',
                ...(token && { 'Authorization': `Bearer ${token}` })
            };
            
            // Intentar enviar cada reporte
            for (const report of reports) {
                try {
                    // Separar paciente y reporte para enviar por separado
                    const { paciente, ...reportData } = report;
                    
                    // 1. Crear paciente
                    const patientResponse = await fetch(`${API_URL}/api/pacientes`, {
                        method: 'POST',
                        headers: headers,
                        body: JSON.stringify(paciente),
                    });
                    
                    if (!patientResponse.ok) {
                        throw new Error('Error al crear paciente offline');
                    }
                    
                    const patientResult = await patientResponse.json();
                    
                    // 2. Crear reporte con ID del paciente
                    const reportPayload = {
                        ...reportData,
                        paciente_id: patientResult.id
                    };
                    
                    const reportResponse = await fetch(`${API_URL}/api/reportes`, {
                        method: 'POST',
                        headers: headers,
                        body: JSON.stringify(reportPayload),
                    });
                    
                    if (reportResponse.ok) {
                        successfulReports.push(report.id);
                        console.log(`Reporte ${report.id} sincronizado exitosamente`);
                    } else {
                        throw new Error('Error al crear reporte offline');
                    }
                    
                } catch (error) {
                    console.error(`Error al sincronizar reporte ${report.id}:`, error);
                    report.attempts = (report.attempts || 0) + 1;
                    failedReports.push(report);
                }
            }
            
            // Remover reportes exitosos
            const updatedReports = failedReports.filter(report => report.attempts < 3); // Máximo 3 intentos
            
            // Actualizar almacenamiento
            await AsyncStorage.setItem(STORAGE_KEYS.PENDING_REPORTS, JSON.stringify(updatedReports));
            
            // Actualizar contador
            setPendingReportsCount(updatedReports.length);
            
            // Si se sincronizaron todos, limpiar modo offline
            if (updatedReports.length === 0) {
                await AsyncStorage.removeItem(STORAGE_KEYS.OFFLINE_MODE);
                await AsyncStorage.setItem(STORAGE_KEYS.LAST_SYNC, new Date().toISOString());
            }
            
            // Mostrar resultado
            if (successfulReports.length > 0) {
                Alert.alert(
                    "Sincronización completada",
                    `${successfulReports.length} reporte(s) enviados exitosamente`,
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

    // Manejar guardado (online/offline)
    const handleSaveReport = async () => {
        if (isSaving || !isAuthenticated) return;
        
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

            // Validar formato de presión arterial
            if (reportData.signos_vitales.T_A && !/^\d{2,3}\/\d{2,3}$/.test(reportData.signos_vitales.T_A)) {
                Alert.alert("Error", "Formato de presión arterial inválido. Use: 120/80");
                return;
            }

            // Si está offline, guardar localmente
            if (isOffline) {
                await saveOfflineReport();
                return;
            }

            // Si está online, intentar enviar directamente
            await enviarDatosOnline();

        } catch (error) {
            console.error('Error al guardar reporte:', error);
            Alert.alert("Error", "Ocurrió un error al guardar el reporte");
        } finally {
            setIsSaving(false);
        }
    };

    // Guardar reporte offline
    const saveOfflineReport = async () => {
        try {
            // Preparar datos del paciente (para crear localmente)
            const pacientePayload = {
                ...patientData,
                edad: parseInt(patientData.edad) || 0,
                _id: `offline_patient_${Date.now()}`
            };

            // Preparar reporte para almacenamiento offline
            const reportPayload = {
                paciente: pacientePayload,
                fecha_hora: reportData.fecha_hora,
                lugar_nombre: reportData.lugar_nombre,
                observaciones: reportData.observaciones || '',
                recomendaciones: reportData.recomendaciones || '',
                traslado_aceptado: reportData.traslado_aceptado,
                numero_unidad: reportData.numero_unidad || '',
                nombre_operador: reportData.nombre_operador || '',
                firma_operador: reportData.firma_operador || '',
                firma_paciente: reportData.firma_paciente || '',
                nombre_testigo: reportData.nombre_testigo || '',
                firma_testigo: reportData.firma_testigo || '',
                signos_vitales: {
                    Temp: reportData.signos_vitales.Temp ? parseInt(reportData.signos_vitales.Temp) : null,
                    FC: reportData.signos_vitales.FC ? parseInt(reportData.signos_vitales.FC) : null,
                    FR: reportData.signos_vitales.FR ? parseInt(reportData.signos_vitales.FR) : null,
                    SpO2: reportData.signos_vitales.SpO2 ? parseInt(reportData.signos_vitales.SpO2) : null,
                    T_A: reportData.signos_vitales.T_A || '',
                    GLU: reportData.signos_vitales.GLU ? parseInt(reportData.signos_vitales.GLU) : null
                },
                nivel_conciencia: reportData.nivel_conciencia.motora || 
                                 reportData.nivel_conciencia.verbal || 
                                 reportData.nivel_conciencia.ocular ? 
                                 reportData.nivel_conciencia : null,
                lesiones: reportData.lesiones,
                pupilas: reportData.pupilas,
                anatomicas: reportData.anatomicas,
                insumos: reportData.insumos,
                fotografias: reportData.fotografias
            };

            // Guardar localmente
            const reportId = await saveReportLocally(reportPayload);
            
            Alert.alert(
                "Guardado Offline",
                `Reporte guardado localmente (ID: ${reportId.substring(0, 8)}...)\nSe enviará automáticamente cuando haya conexión.`,
                [
                    { 
                        text: "Ver Reportes Pendientes", 
                        onPress: () => showPendingReports() 
                    },
                    { 
                        text: "Nuevo Reporte", 
                        onPress: resetForm,
                        style: "default"
                    }
                ]
            );

        } catch (error) {
            console.error('Error al guardar offline:', error);
            Alert.alert("Error", "No se pudo guardar el reporte offline");
        }
    };

    // Enviar datos online
    const enviarDatosOnline = async () => {
        try {
            // Obtener token para autenticación
            // Por el momento sin token, debo de revisar eso en el backend con los permisos de admin
            //const token = await getAuthToken();
            const headers = {
                'Content-Type': 'application/json',
                //...(token && { 'Authorization': `Bearer ${token}` })
            };

            // 1. Crear paciente en backend
            const patientResponse = await fetch(`${API_URL}/api/pacientes`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    ...patientData,
                    edad: parseInt(patientData.edad) || 0
                }),
            });

            const patientResult = await patientResponse.json();
            console.log(patientResult);
 
            if (!patientResult.success) {
                throw new Error(patientResult.message || 'Error al crear paciente');
            }

            // 2. Preparar y enviar reporte
            const reportPayload = {
                paciente_id: patientResult.data.id,
                fecha_hora: reportData.fecha_hora,
                lugar_nombre: reportData.lugar_nombre,
                observaciones: reportData.observaciones || '',
                recomendaciones: reportData.recomendaciones || '',
                traslado_aceptado: reportData.traslado_aceptado,
                numero_unidad: reportData.numero_unidad || '',
                nombre_operador: reportData.nombre_operador || '',
                firma_operador: reportData.firma_operador || '',
                firma_paciente: reportData.firma_paciente || '',
                nombre_testigo: reportData.nombre_testigo || '',
                firma_testigo: reportData.firma_testigo || '',
                signos_vitales: {
                    Temp: reportData.signos_vitales.Temp ? parseInt(reportData.signos_vitales.Temp) : null,
                    FC: reportData.signos_vitales.FC ? parseInt(reportData.signos_vitales.FC) : null,
                    FR: reportData.signos_vitales.FR ? parseInt(reportData.signos_vitales.FR) : null,
                    SpO2: reportData.signos_vitales.SpO2 ? parseInt(reportData.signos_vitales.SpO2) : null,
                    T_A: reportData.signos_vitales.T_A || '',
                    GLU: reportData.signos_vitales.GLU ? parseInt(reportData.signos_vitales.GLU) : null
                },
                nivel_conciencia: reportData.nivel_conciencia.motora || 
                                 reportData.nivel_conciencia.verbal || 
                                 reportData.nivel_conciencia.ocular ? 
                                 reportData.nivel_conciencia : undefined,
                lesiones: reportData.lesiones,
                pupilas: reportData.pupilas,
                anatomicas: reportData.anatomicas,
                insumos: reportData.insumos,
                fotografias: reportData.fotografias
            };

            // Limpiar campos nulos
            Object.keys(reportPayload.signos_vitales).forEach(key => {
                if (reportPayload.signos_vitales[key] === null || reportPayload.signos_vitales[key] === '') {
                    delete reportPayload.signos_vitales[key];
                }
            });

            if (!reportPayload.nivel_conciencia) {
                delete reportPayload.nivel_conciencia;
            }

            // 3. Enviar reporte
            const reportResponse = await fetch(`${API_URL}/api/reportes`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(reportPayload),
            });

            const reportResult = await reportResponse.json();
            console.log(reportResult);
            console.log(reportResult.success);

            if (!reportResult.success) {
                throw new Error(reportResult.message || 'Error al crear reporte');
            }

            Alert.alert(
                "Éxito",
                "Reporte guardado en el servidor",
                [{ text: "OK", onPress: () => {
                    resetForm; 
                    router.replace("/home");
                }}]
            );

        } catch (error) {
            console.error('Error al enviar online:', error);
            
            // Verificar si es error de autenticación
            if (error.message && error.message.includes('401') || error.message.includes('token')) {
                setIsAuthenticated(false);

                //Credenciales aun no se pueden guardar bien
                Alert.alert(
                    "Sesión expirada",
                    "Tu sesión ha expirado. El reporte se guardará localmente.",
                    [
                        { text: "OK", onPress: () => {
                            setIsOffline(true);
                            saveOfflineReport();
                        }}
                    ]
                );
                return;
            }
            
            // Si falla el envío online por otra razón, intentar guardar offline
            /*
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
            );*/
        }
    };

    // Mostrar reportes pendientes
    const showPendingReports = async () => {
        try {
            const pendingReports = await AsyncStorage.getItem(STORAGE_KEYS.PENDING_REPORTS);
            const reports = pendingReports ? JSON.parse(pendingReports) : [];
            
            if (reports.length === 0) {
                Alert.alert("Reportes Pendientes", "No hay reportes pendientes de enviar.");
                return;
            }
            
            const reportList = reports.map((r, i) => 
                `• ${i+1}. ${r.paciente.nombre} - ${new Date(r.createdAt).toLocaleDateString()}`
            ).join('\n');
            
            Alert.alert(
                `Reportes Pendientes (${reports.length})`,
                reportList,
                [
                    { text: "Cerrar" },
                    { 
                        text: "Sincronizar Ahora", 
                        onPress: syncPendingReports
                    }
                ]
            );
        } catch (error) {
            console.error('Error al mostrar reportes pendientes:', error);
        }
    };

    // Sincronización manual
    const handleManualSync = () => {
        if (pendingReportsCount > 0) {
            Alert.alert(
                "Sincronizar",
                `¿Enviar ${pendingReportsCount} reporte(s) pendientes al servidor?`,
                [
                    { text: "Cancelar", style: "cancel" },
                    { text: "Sincronizar", onPress: syncPendingReports }
                ]
            );
        } else {
            Alert.alert("Sincronizar", "No hay reportes pendientes para sincronizar.");
        }
    };

    const resetForm = () => {
        setPatientData({
            nombre: '',
            edad: '',
            genero: 0,
            alergias: [],
            patologias: [],
            medicamentos: []
        });
        
        setReportData({
            paciente_id: null,
            fecha_hora: new Date().toISOString(),
            lugar_nombre: '',
            signos_vitales: {
                Temp: '',
                FC: '',
                FR: '',
                SpO2: '',
                T_A: '',
                GLU: ''
            },
            nivel_conciencia: {
                motora: null,
                verbal: null,
                ocular: null
            },
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
    };

    return (
        <SafeAreaView style={styles.frapContainer}>
            
            {/* No me gusta el header, cambio posible
            <Header 
                isOffline={isOffline}
                pendingCount={pendingReportsCount}
            />
            */}
            
            <ScrollView showsVerticalScrollIndicator={false}>
                <General 
                    data={reportData}
                    onUpdate={updateReportData}
                />

                <Patient 
                    data={patientData}
                    onUpdate={updatePatientData}
                />

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

                <Pupils 
                    data={reportData.pupilas}
                    onUpdate={handlePupilsUpdate}  // ← función memoizada
                />

                <Injury 
                    data={reportData.lesiones}
                    onUpdate={handleInjuriesUpdate}
                />

                <AnatomicId 
                    data={reportData.anatomicas}
                    onUpdate={(handleAnatomicasUpdate)}
                />

                <Supplies 
                    data={reportData.insumos}
                    onUpdate={(insumos) => updateReportData({ insumos })}
                />

                <Notes 
                    observaciones={reportData.observaciones}
                    recomendaciones={reportData.recomendaciones}
                    onUpdate={(updates) => updateReportData(updates)}
                />

                <Pictures 
                    data={reportData.fotografias}
                    onUpdate={(fotografias) => updateReportData({ fotografias })}
                />

                <Signature 
                    data={reportData.firma_paciente}
                    onUpdate={(firma_paciente) => updateReportData({ firma_paciente })}
                />

                <Witness 
                    data={{
                        nombre_testigo: reportData.nombre_testigo,
                        firma_testigo: reportData.firma_testigo
                    }}
                    onUpdate={(updates) => updateReportData(updates)}
                />

                <Transport 
                    data={{
                        traslado_aceptado: reportData.traslado_aceptado,
                        numero_unidad: reportData.numero_unidad,
                        nombre_operador: reportData.nombre_operador,
                        firma_operador: reportData.firma_operador
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

    statusContainer: {
        marginLeft: 10
    },

    offlineBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ff6b6b',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        gap: 6
    },

    offlineText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold'
    },

    pendingBadge: {
        backgroundColor: 'white',
        borderRadius: 10,
        minWidth: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    pendingText: {
        color: '#ff6b6b',
        fontSize: 10,
        fontWeight: 'bold'
    }
});