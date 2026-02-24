import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { useState, useEffect } from "react";

export default function InjurySection({ data, onUpdate }) {
    const [pressedButtons, setPressedButtons] = useState({});
    const [otherText, setOtherText] = useState('');

    const lesiones = [
        "Laceración", "Abrasión", "Contusión", "Sincope", "Luxación",
        "Fractura", "Esguince", "Inconsciente", "Hematoma", "Avulsión",
        "Edema", "Punción", "Quemadura"
    ];

    // Inicializar pressedButtons basado en datos existentes
    useEffect(() => {
        const selectedLesiones = Object.keys(pressedButtons).filter(key => pressedButtons[key]);
        
        // Agregar "otro" si existe
        if (otherText.trim()) {
            selectedLesiones.push(otherText.trim());
        }
        
        onUpdate(selectedLesiones);
    }, [pressedButtons, otherText, onUpdate]);

    const handlePress = (lesion) => {
        setPressedButtons(prev => ({
            ...prev,
            [lesion]: !prev[lesion]
        }));
        // onUpdate se llama en el useEffect
    };

    const handleOtherChange = (text) => {
        setOtherText(text);
        // onUpdate se llama en el useEffect
    };

    return (
        <View style={{ marginTop: 50, marginRight: 15 }}>
            <Text style={styles.title}>Tipo de Lesión</Text>

            <View style={styles.options}>
                {lesiones.map((lesion, index) => {
                    return (
                        <TouchableOpacity
                            style={[
                                styles.lesion,
                                pressedButtons[lesion] && styles.buttonPressed
                            ]}
                            key={index}
                            onPress={() => handlePress(lesion)}
                        >
                            <Text style={[
                                styles.text,
                                pressedButtons[lesion] && styles.textOnPress
                            ]}>
                                {lesion}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

            <TextInput
                placeholder="Otra lesión (especificar):"
                style={styles.other}
                value={otherText}
                onChangeText={handleOtherChange}
            />

            {data && data.length > 0 && (
                <View style={styles.selectedContainer}>
                    <Text style={styles.selectedLabel}>Lesiones seleccionadas:</Text>
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

    lesion: {
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