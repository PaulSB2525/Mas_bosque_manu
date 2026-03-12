import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import { useState, useEffect } from "react";

export default function AnatomicSection({ data, onUpdate }) {
    const [pressedButtons, setPressedButtons] = useState({});
    const [otherText, setOtherText] = useState('');

    const anatomicas = [
        "Cráneo", "Cara", "Cuello", "Columna", "Tórax", "Abdomen", "Clavícula",
        "Brazo", "Antebrazo", "Mano", "Dedos M.", "Pelvis", "Muslo", "Rodilla",
        "Pierna", "Tobillo", "Pie", "Dedos P.", "Hombro", "Genitales"
    ];

    // Inicializar pressedButtons basado en datos existentes
    useEffect(() => {
        const selectedAnatomicas = Object.keys(pressedButtons).filter(key => pressedButtons[key]);
        
        // Agregar "otro" si existe
        if (otherText.trim()) {
            selectedAnatomicas.push(otherText.trim());
        }
        
        onUpdate(selectedAnatomicas);
    }, [pressedButtons, otherText, onUpdate]);

    const handlePress = (anatomica) => {
        setPressedButtons(prev => ({
            ...prev,
            [anatomica]: !prev[anatomica]
        }));
        // onUpdate se llama automáticamente en el useEffect
    };

    const handleOtherChange = (text) => {
        setOtherText(text);
        // onUpdate se llama automáticamente en el useEffect
    };

    return (
        <View style={{ marginTop: 50, marginRight: 15 }}>
            <Text style={styles.title}>Identificación Anatómica</Text>

            <View style={styles.options}>
                {anatomicas.map((anatomica, index) => {
                    return (
                        <TouchableOpacity
                            style={[
                                styles.anatomica,
                                pressedButtons[anatomica] && styles.buttonPressed
                            ]}
                            key={index}
                            onPress={() => handlePress(anatomica)}
                        >
                            <Text style={[
                                styles.text,
                                pressedButtons[anatomica] && styles.textOnPress
                            ]}>
                                {anatomica}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

            <TextInput placeholderTextColor="#888888"
                placeholder="Otra área (especificar):"
                style={styles.other}
                value={otherText}
                onChangeText={handleOtherChange}
            />

            {data && data.length > 0 && (
                <View style={styles.selectedContainer}>
                    <Text style={styles.selectedLabel}>Áreas seleccionadas:</Text>
                    <Text style={styles.selectedText}>{data.join(', ')}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "600",
        color: "#2f3c42",
    },

    options: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginLeft: 10,
        rowGap: 20,
        columnGap: 10,
        marginTop: 15,
        justifyContent: "center"
    },

    anatomica: {
        borderRadius: 30,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 8,
        paddingHorizontal: 20,
        minWidth: 90,
        maxWidth: 120,
        boxShadow: "0px 2px 10px rgb(167, 161, 161)",
        height: 50,
    },

    text: {
        fontSize: 12,
        color: "#2f3c42",
        fontWeight: "600"
    },

    buttonPressed: {
        backgroundColor: "#78797ada"
    },

    textOnPress: {
        color: "white"
    },

    other: {
        backgroundColor: "white",
        borderRadius: 25,
        marginTop: 20,
        paddingHorizontal: 20,
        fontSize: 18,
        height: 50,
        padding: 15,
        boxShadow: "0px 2px 10px rgb(167, 161, 161)"
    },

    selectedContainer: {
        backgroundColor: "#f0f8ff",
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        marginLeft: 5,
        borderWidth: 1,
        borderColor: "#d0e7ff"
    },

    selectedLabel: {
        fontSize: 14,
        color: "#666",
        fontWeight: "600",
        marginBottom: 5
    },

    selectedText: {
        fontSize: 16,
        color: "#2f3c42",
        fontStyle: "italic"
    }
});