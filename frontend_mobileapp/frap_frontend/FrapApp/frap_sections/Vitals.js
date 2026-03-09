import { StyleSheet, TextInput, View, Text, Platform } from "react-native";

export default function VitalsSection({ data, onUpdate }) {
  const handleChange = (field, value) => {
    onUpdate({ [field]: value });
  };

  const vitals = [
    { text: "Temp. (°C)", field: "Temp", keyboardType: "numeric", placeholder: "36.5" },
    { text: "FC", field: "FC", keyboardType: "numeric", placeholder: "80" },
    { text: "FR", field: "FR", keyboardType: "numeric", placeholder: "16" },
    { text: "SpO2", field: "SpO2", keyboardType: "numeric", placeholder: "98" },
    { text: "T/A", field: "T_A", keyboardType: "default", placeholder: "120/80" },
    { text: "GLU", field: "GLU", keyboardType: "numeric", placeholder: "90" }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signos Vitales</Text>

      <View style={styles.grid}>
        {vitals.map((vital, index) => (
          <View key={index} style={styles.vitalContainer}>
            <View style={styles.topLabel}>
              <Text style={styles.vitalLabel}>{vital.text}</Text>
            </View>
            <TextInput
              placeholder={vital.placeholder}
              style={styles.input}
              keyboardType={vital.keyboardType}
              value={data[vital.field] ? data[vital.field].toString() : ''}
              onChangeText={(newInput) => {
                if (vital.field === "T_A") {
                  handleChange(vital.field, newInput);
                } else {
                  const numValue = newInput ? parseInt(newInput) : '';
                  handleChange(vital.field, numValue);
                }
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
    marginRight: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#2f3c42",
    marginBottom: 20,
    marginLeft: 5
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingLeft: 5,
  },
  vitalContainer: {
    width: "48%",
    marginBottom: 25,
    position: 'relative',
  },
  topLabel: {
    backgroundColor: "white",
    position: 'absolute',
    top: -10,
    left: 12,
    zIndex: 10,
    paddingHorizontal: 6,
    borderRadius: 4,
    ...Platform.select({
      ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 1 },
      android: { elevation: 2 }
    })
  },
  vitalLabel: {
    fontSize: 12,
    color: "#165057",
    fontWeight: "700",
  },
  input: {
    padding: 12,
    backgroundColor: "white",
    borderRadius: 12,
    color: "#2f3c42",
    fontSize: 18,
    fontWeight: "500",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    ...Platform.select({
      ios: { shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
      android: { elevation: 3 }
    })
  }
});