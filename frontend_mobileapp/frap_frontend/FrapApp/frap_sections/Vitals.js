import { StyleSheet, TextInput, View, Text } from "react-native";
import { useState } from "react";

export default function VitalsSection({ data, onUpdate }) {
    const handleChange = (field, value) => {
        onUpdate({ [field]: value });
    };

    const vitals = [
        { text: "Temp. (°C)", field: "Temp", keyboardType: "numeric", placeholder: "Ej: 36.5" },
        { text: "FC", field: "FC", keyboardType: "numeric", placeholder: "Ej: 80" },
        { text: "FR", field: "FR", keyboardType: "numeric", placeholder: "Ej: 16" },
        { text: "SpO2", field: "SpO2", keyboardType: "numeric", placeholder: "Ej: 98" },
        { text: "T/A", field: "T_A", keyboardType: "default", placeholder: "Ej: 120/80" },
        { text: "GLU", field: "GLU", keyboardType: "numeric", placeholder: "Ej: 90" }
    ];

    return (
        <View style={{ marginRight: 15, marginTop: 30 }}>
            <Text style={styles.title}>Signos Vitales</Text>

            <View style={styles.section}>
                {vitals.map((vital, index) => {
                    return (
                        <View key={index} style={styles.vitalContainer}>
                            <View style={styles.topLabel}>
                                <Text style={styles.vitalLabel}>{vital.text}</Text>
                            </View>
                            <TextInput
                                placeholder={vital.placeholder}
                                style={styles.vital}
                                keyboardType={vital.keyboardType}
                                value={data[vital.field] ? data[vital.field].toString() : ''}
                                onChangeText={(newInput) => {
                                    if (vital.field === "T_A") {
                                        handleChange(vital.field, newInput);
                                    } else {
                                        // Convertir a número si es posible
                                        const numValue = newInput ? parseInt(newInput) : '';
                                        handleChange(vital.field, numValue);
                                    }
                                }}
                            />
                        </View>
                    );
                })}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        flexDirection: "row",
        flexWrap: "wrap",
        rowGap: 15,
        columnGap: 15,
        marginLeft: 5,
        justifyContent: "space-between"
    },
    
    title: {
        fontSize: 30,
        fontWeight: "600",
        color: "#2f3c42",
        marginBottom: 10
    },

    vitalContainer: {
        width: "47%"
    },

    vitalLabel: {
        fontSize: 14,
        color: "#666",
        marginBottom: 5,
        fontWeight: "600",
        marginLeft: 5
    },

    vital: {
        padding: 15,
        backgroundColor: "white",
        borderRadius: 10,
        color: "#2f3c42",
        fontSize: 18,
        fontWeight: "500",
        boxShadow: "0px 2px 10px rgb(167, 161, 161)",
        paddingHorizontal: 10
    },

    topLabel: {
        backgroundColor: "white", 
        borderRadius: 10, 
        bottom: -15, 
        zIndex: 2, 
        width: 100, 
        left: 13, 
        paddingLeft: 5
    }
});