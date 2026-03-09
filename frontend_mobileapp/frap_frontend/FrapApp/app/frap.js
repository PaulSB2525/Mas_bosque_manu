import { StyleSheet, Text, ScrollView, View, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect, useRef, useCallback } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import { router } from "expo-router";

// Importación de secciones
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

import API_URL from "../config";

// ---------------------------------------------------------------------------
// CLAVES DE ALMACENAMIENTO
// ---------------------------------------------------------------------------
const STORAGE_KEYS = {
  PENDING_REPORTS: '@frapapp/pending_reports',
  OFFLINE_MODE: '@frapapp/offline_mode',
  LAST_SYNC: '@frapapp/last_sync',
  AUTH_TOKEN: '@frapapp/auth_token',
  USER_DATA: '@frapapp/user_data',
};

// ---------------------------------------------------------------------------
// HELPERS (Recuperada la legibilidad original)
// ---------------------------------------------------------------------------

/** Obtiene el token guardado */
const getAuthToken = async () => {
  try {
    return await AsyncStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  } catch (error) {
    console.error('Error al obtener token:', error);
    return null;
  }
};

/** Convierte una URI local a base64 */
const uriToBase64 = async (uri) => {
  if (!uri) return null;
  if (uri.startsWith('data:')) return uri;

  try {
    const response = await fetch(uri);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.warn('No se pudo convertir imagen a base64:', error);
    return null;
  }
};

/** Procesa imágenes y firmas para almacenamiento offline */
const serializeImages = async (payload) => {
  const result = { ...payload };

  result.firma_paciente = await uriToBase64(payload.firma_paciente) ?? payload.firma_paciente;
  result.firma_testigo = await uriToBase64(payload.firma_testigo) ?? payload.firma_testigo;
  result.firma_operador = await uriToBase64(payload.firma_operador) ?? payload.firma_operador;

  if (Array.isArray(payload.fotografias)) {
    result.fotografias = await Promise.all(
      payload.fotografias.map(async (foto) => {
        if (typeof foto === 'string') return await uriToBase64(foto) ?? foto;
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
            <View style={[styles.offlineBadge, { backgroundColor: '#f39c12' }]}>
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
    nombre: '', edad: '', genero: 0, alergias: [], patologias: [], medicamentos: []
  });

  const [reportData, setReportData] = useState({
    paciente_id: null,
    fecha_hora: new Date().toISOString(),
    lugar_nombre: '',
    signos_vitales: { Temp: '', FC: '', FR: '', SpO2: '', T_A: '', GLU: '' },
    nivel_conciencia: { motora: null, verbal: null, ocular: null },
    lesiones: [], pupilas: [], anatomicas: [], observaciones: '', recomendaciones: '',
    traslado_aceptado: false, numero_unidad: '', nombre_operador: '', firma_operador: '',
    firma_paciente: '', nombre_testigo: '', firma_testigo: '', insumos: [], fotografias: []
  });

  const [isOffline, setIsOffline] = useState(false);
  const [pendingReportsCount, setPendingReportsCount] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const isSyncingRef = useRef(false);

  // Callbacks memorizados
  const handlePupilsUpdate = useCallback((pupilas) => updateReportData({ pupilas }), []);
  const handleAnatomicasUpdate = useCallback((anatomicas) => updateReportData({ anatomicas }), []);
  const handleInjuriesUpdate = useCallback((lesiones) => updateReportData({ lesiones }), []);

  useEffect(() => {
    loadPendingReportsCount();
    const unsubscribe = NetInfo.addEventListener(state => {
      const offline = !state.isConnected;
      setIsOffline(offline);
      if (!offline && !isSyncingRef.current) {
        loadPendingReportsCount().then(count => {
          if (count > 0) syncPendingReports();
        });
      }
    });
    return unsubscribe;
  }, []);

  const updateReportData = (newData) => setReportData(prev => ({ ...prev, ...newData }));
  const updatePatientData = (newData) => setPatientData(prev => ({ ...prev, ...newData }));

  // -----------------------------------------------------------------------
  // REPORTES PENDIENTES Y SINCRONIZACIÓN
  // -----------------------------------------------------------------------

  const loadPendingReportsCount = async () => {
    try {
      const raw = await AsyncStorage.getItem(STORAGE_KEYS.PENDING_REPORTS);
      const reports = raw ? JSON.parse(raw) : [];
      setPendingReportsCount(reports.length);
      return reports.length;
    } catch (error) {
      return 0;
    }
  };

  const syncPendingReports = async () => {
    if (isSyncingRef.current) return;
    isSyncingRef.current = true;

    try {
      const raw = await AsyncStorage.getItem(STORAGE_KEYS.PENDING_REPORTS);
      let reports = raw ? JSON.parse(raw) : [];
      if (reports.length === 0) { isSyncingRef.current = false; return; }

      const token = await getAuthToken();
      const headers = {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` })
      };

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
          if (!patientRes.ok) throw new Error('Error paciente');
          const patientResult = await patientRes.json();

          // 2. Crear reporte
          const reportPayload = { ...reportFields, paciente_id: patientResult.data?.id || patientResult.id };
          const reportRes = await fetch(`${API_URL}/api/reportes`, {
            method: 'POST',
            headers,
            body: JSON.stringify(reportPayload),
          });
          if (!reportRes.ok) throw new Error('Error reporte');

        } catch (error) {
          failedReports.push({ ...report, attempts: (report.attempts || 0) + 1 });
        }
      }

      const remaining = failedReports.filter(r => r.attempts < 3);
      await AsyncStorage.setItem(STORAGE_KEYS.PENDING_REPORTS, JSON.stringify(remaining));
      setPendingReportsCount(remaining.length);
      if (remaining.length === 0) await AsyncStorage.removeItem(STORAGE_KEYS.OFFLINE_MODE);

    } catch (error) {
      console.error('Error en sincronización:', error);
    } finally {
      isSyncingRef.current = false;
    }
  };

  // -----------------------------------------------------------------------
  // GUARDAR REPORTE
  // -----------------------------------------------------------------------
  const handleSaveReport = async () => {
    if (isSaving) return;

    // Validaciones básicas
    if (!patientData.nombre.trim() || !patientData.edad || !reportData.lugar_nombre) {
      Alert.alert("Error", "Los campos de nombre, edad y lugar son requeridos.");
      return;
    }

    setIsSaving(true);
    try {
      if (isOffline) {
        await saveOfflineReport();
      } else {
        await enviarDatosOnline();
      }
    } catch (error) {
      Alert.alert("Error", "No se pudo guardar el reporte.");
    } finally {
      setIsSaving(false);
    }
  };

  const saveOfflineReport = async () => {
    try {
      const reportPayload = {
        paciente: { ...patientData, edad: parseInt(patientData.edad) || 0 },
        ...reportData,
        signos_vitales: buildSignosVitales(),
        nivel_conciencia: buildNivelConciencia()
      };

      const serialized = await serializeImages(reportPayload);
      const raw = await AsyncStorage.getItem(STORAGE_KEYS.PENDING_REPORTS);
      const reports = raw ? JSON.parse(raw) : [];

      reports.push({
        ...serialized,
        id: `offline_${Date.now()}`,
        createdAt: new Date().toISOString(),
        attempts: 0
      });

      await AsyncStorage.setItem(STORAGE_KEYS.PENDING_REPORTS, JSON.stringify(reports));
      setPendingReportsCount(reports.length);

      Alert.alert("Guardado Offline ✅", "El reporte se enviará al recuperar conexión.", [{ text: "OK", onPress: resetForm }]);
    } catch (e) {
      Alert.alert("Error", "Error al guardar localmente.");
    }
  };

  const enviarDatosOnline = async () => {
    try {
      const headers = { 'Content-Type': 'application/json' };
      // 1. Crear paciente
      const pRes = await fetch(`${API_URL}/api/pacientes`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ ...patientData, edad: parseInt(patientData.edad) || 0 }),
      });
      const pData = await pRes.json();
      if (!pData.success) throw new Error('Error Paciente');

      // 2. Crear reporte
      const rPayload = {
        ...reportData,
        paciente_id: pData.data.id,
        signos_vitales: buildSignosVitales(),
        nivel_conciencia: buildNivelConciencia()
      };

      const rRes = await fetch(`${API_URL}/api/reportes`, {
        method: 'POST',
        headers,
        body: JSON.stringify(rPayload),
      });
      const rData = await rRes.json();

      if (rData.success) {
        Alert.alert("Éxito ✅", "Reporte guardado en el servidor", [{ text: "OK", onPress: () => { resetForm(); router.replace("/home"); } }]);
      }
    } catch (error) {
      Alert.alert("Error de conexión", "¿Desea guardar el reporte localmente?", [
        { text: "Cancelar" },
        { text: "Guardar Offline", onPress: saveOfflineReport }
      ]);
    }
  };

  const buildSignosVitales = () => {
    const raw = reportData.signos_vitales;
    const v = {
      Temp: raw.Temp ? parseFloat(raw.Temp) : null,
      FC: parseInt(raw.FC) || null,
      FR: parseInt(raw.FR) || null,
      SpO2: parseInt(raw.SpO2) || null,
      T_A: raw.T_A || null,
      GLU: parseInt(raw.GLU) || null,
    };
    Object.keys(v).forEach(k => { if (v[k] === null) delete v[k]; });
    return v;
  };

  const buildNivelConciencia = () => {
    const nc = reportData.nivel_conciencia;
    return (nc.motora || nc.verbal || nc.ocular) ? nc : null;
  };

  const resetForm = () => {
    setPatientData({ nombre: '', edad: '', genero: 0, alergias: [], patologias: [], medicamentos: [] });
    setReportData({
      paciente_id: null, fecha_hora: new Date().toISOString(), lugar_nombre: '',
      signos_vitales: { Temp: '', FC: '', FR: '', SpO2: '', T_A: '', GLU: '' },
      nivel_conciencia: { motora: null, verbal: null, ocular: null },
      lesiones: [], pupilas: [], anatomicas: [], observaciones: '', recomendaciones: '',
      traslado_aceptado: false, numero_unidad: '', nombre_operador: '', firma_operador: '',
      firma_paciente: '', nombre_testigo: '', firma_testigo: '', insumos: [], fotografias: []
    });
  };

  // -----------------------------------------------------------------------
  // RENDER (Con corrección de espaciado)
  // -----------------------------------------------------------------------
  return (
    <SafeAreaView style={styles.frapContainer}>
      <Header isOffline={isOffline} pendingCount={pendingReportsCount} />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={80}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Secciones envueltas en contenedores para evitar amontonamiento */}
          <View style={styles.sectionWrapper}><General data={reportData} onUpdate={updateReportData} /></View>
          <View style={styles.sectionWrapper}><Patient data={patientData} onUpdate={updatePatientData} /></View>

          <View style={styles.sectionWrapper}>
             <Vitals
               data={reportData.signos_vitales}
               onUpdate={(v) => updateReportData({ signos_vitales: { ...reportData.signos_vitales, ...v } })}
             />
          </View>

          <View style={styles.sectionWrapper}>
            <ESCGW
              data={reportData.nivel_conciencia}
              onUpdate={(g) => updateReportData({ nivel_conciencia: { ...reportData.nivel_conciencia, ...g } })}
            />
          </View>

          <Pupils data={reportData.pupilas} onUpdate={handlePupilsUpdate} />
          <Injury data={reportData.lesiones} onUpdate={handleInjuriesUpdate} />
          <AnatomicId data={reportData.anatomicas} onUpdate={handleAnatomicasUpdate} />
          <Supplies data={reportData.insumos} onUpdate={(insumos) => updateReportData({ insumos })} />

          <Notes
            observaciones={reportData.observaciones}
            recomendaciones={reportData.recomendaciones}
            onUpdate={(u) => updateReportData(u)}
          />

          <Pictures data={reportData.fotografias} onUpdate={(fotografias) => updateReportData({ fotografias })} />
          <Signature data={reportData.firma_paciente} onUpdate={(f) => updateReportData({ firma_paciente: f })} />

          <Witness
            data={{ nombre_testigo: reportData.nombre_testigo, firma_testigo: reportData.firma_testigo }}
            onUpdate={(u) => updateReportData(u)}
          />

          <Transport
            data={{
              traslado_aceptado: reportData.traslado_aceptado,
              numero_unidad: reportData.numero_unidad,
              nombre_operador: reportData.nombre_operador,
              firma_operador: reportData.firma_operador
            }}
            onUpdate={(u) => updateReportData(u)}
          />

          <SaveButton
            onSave={handleSaveReport}
            isOffline={isOffline}
            isSaving={isSaving}
            pendingCount={pendingReportsCount}
            onManualSync={syncPendingReports}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  frapContainer: {
    flex: 1,
    backgroundColor: "#f4f7f6" // Color de fondo claro para contrastar con tarjetas
  },
  scrollContent: {
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 40
  },
  sectionWrapper: {
    marginBottom: 20 // Espacio generoso entre secciones críticas
  },
  header: {
    backgroundColor: "#165057",
    borderRadius: 15,
    margin: 10,
    padding: 12
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold"
  },
  statusContainer: {
    flexDirection: 'row'
  },
  offlineBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff6b6b',
    padding: 6,
    borderRadius: 10
  },
  offlineText: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold'
  },
  pendingBadge: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: 5,
    paddingHorizontal: 5
  },
  pendingText: {
    color: '#ff6b6b',
    fontSize: 10,
    fontWeight: 'bold'
  }
});