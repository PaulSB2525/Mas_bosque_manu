import { StyleSheet, View, Text, TextInput, TouchableOpacity, Platform } from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

export default function PatientSection({ data, onUpdate }) {
  const [generoLabel, setGeneroLabel] = useState('Género');
  const [showGeneros, setShowGeneros] = useState(false);

  // Estados locales para los campos de texto para evitar re-renders pesados
  const [alergiasText, setAlergiasText] = useState(data.alergias?.join(', ') || '');
  const [patologiasText, setPatologiasText] = useState(data.patologias?.join(', ') || '');
  const [medicamentosText, setMedicamentosText] = useState(data.medicamentos?.join(', ') || '');

  const handleChange = (field, value) => {
    onUpdate({ [field]: value });
  };

  const handleArrayChange = (field, value) => {
    const arrayValue = value.split(',').map(item => item.trim()).filter(item => item);
    onUpdate({ [field]: arrayValue });
  };

  const generos = [
    { label: 'Femenino', value: 0 },
    { label: 'Masculino', value: 1 },
    { label: 'Otro', value: 2 }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Datos del Paciente</Text>

      <TextInput
        placeholder="Nombre Completo"
        style={styles.mainInput}
        value={data.nombre}
        onChangeText={(val) => handleChange('nombre', val)}
      />

      <View style={styles.row}>
        <TextInput
          placeholder="Edad"
          style={[styles.mainInput, { flex: 1, marginTop: 0 }]}
          keyboardType="numeric"
          value={data.edad ? data.edad.toString() : ''}
          onChangeText={(val) => handleChange('edad', val ? parseInt(val) : '')}
        />
        <TouchableOpacity
          onPress={() => setShowGeneros(!showGeneros)}
          style={[styles.dropdownContainer, { flex: 1.5 }]}
        >
          <View style={styles.headerDropDown}>
            <Text style={styles.dropdownText}>{generoLabel}</Text>
            <AntDesign name={showGeneros ? "up" : "down"} size={18} color="#535f64" />
          </View>

          {showGeneros && (
            <View style={styles.dropDownList}>
              {generos.map((op, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => {
                    setGeneroLabel(op.label);
                    setShowGeneros(false);
                    handleChange('genero', op.value);
                  }}
                  style={styles.dropItem}
                >
                  <Text style={styles.dropItemText}>{op.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.multiLineContainer}>
        {/* Campo Reutilizable para Alergias, Patologías, etc. */}
        {[
          { label: 'Alergias', field: 'alergias', val: alergiasText, set: setAlergiasText, ph: "Ej: Penicilina..." },
          { label: 'Patologías', field: 'patologias', val: patologiasText, set: setPatologiasText, ph: "Ej: Diabetes..." },
          { label: 'Medicamentos', field: 'medicamentos', val: medicamentosText, set: setMedicamentosText, ph: "Ej: Metformina..." }
        ].map((item, idx) => (
          <View key={idx} style={styles.wrapper}>
            <View style={styles.floatingLabel}>
              <Text style={styles.arrayLabelText}>{item.label}</Text>
            </View>
            <TextInput
              multiline
              style={styles.textArea}
              placeholder={item.ph}
              value={item.val}
              onChangeText={(text) => {
                item.set(text);
                handleArrayChange(item.field, text);
              }}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingRight: 20
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#2f3c42",
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 5
  },
  mainInput: {
    height: 55,
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 12,
    fontSize: 18,
    fontWeight: "500",
    color: "#2f3c42",
    marginBottom: 15,
    marginLeft: 5,
    ...Platform.select({
      ios: { shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
      android: { elevation: 3 }
    })
  },
  row: {
    flexDirection: "row",
    gap: 10,
    marginLeft: 5,
    marginBottom: 15,
    zIndex: 100 // Para que el dropdown no quede debajo
  },
  dropdownContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: 15,
    justifyContent: "center",
    height: 55,
    ...Platform.select({
      ios: { shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
      android: { elevation: 3 }
    })
  },
  headerDropDown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  dropdownText: {
    fontSize: 18,
    color: "#2f3c42",
    fontWeight: "500"
  },
  dropDownList: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 10,
    zIndex: 1000,
    borderWidth: 1,
    borderColor: '#eee',
    elevation: 5
  },
  dropItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0'
  },
  dropItemText: {
    fontSize: 16,
    color: '#2f3c42'
  },
  multiLineContainer: {
    marginLeft: 5,
    marginTop: 10
  },
  wrapper: {
    marginTop: 20,
    position: 'relative'
  },
  floatingLabel: {
    position: 'absolute',
    top: -10,
    left: 15,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    zIndex: 5,
    borderRadius: 5
  },
  arrayLabelText: {
    fontSize: 13,
    color: "#165057",
    fontWeight: "700"
  },
  textArea: {
    padding: 15,
    paddingTop: 18,
    backgroundColor: "white",
    borderRadius: 12,
    fontSize: 17,
    fontWeight: "500",
    color: "#2f3c42",
    minHeight: 80,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    ...Platform.select({
      ios: { shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
      android: { elevation: 2 }
    })
  }
});