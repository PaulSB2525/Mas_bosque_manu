import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

export default function PatientSection({ data, onUpdate }) {
    const handleChange = (field, value) => {
        onUpdate({ [field]: value });
    };

    const handleArrayChange = (field, value) => {
        // Convertir string a array separado por comas
        const arrayValue = value.split(',').map(item => item.trim()).filter(item => item);
        onUpdate({ [field]: arrayValue });
    };

    const [genero, setGenero] = useState('Genero');
    const [showGeneros, setShowGeneros] = useState(false);
    
    const [alergiasText, setAlergiasText] = useState('');
    const [patologiasText, setPatologiasText] = useState('');
    const [medicamentosText, setMedicamentosText] = useState('');
    
    const generos = [
        { label: 'Femenino', value: 0 },
        { label: 'Masculino', value: 1 },
        { label: 'Otro', value: 2 }
    ];

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
        >
            <Text style={styles.title}>Datos del Paciente</Text>

            <TextInput
                placeholder="Nombre Completo: "
                style={[styles.general, { flex: 1 }]}
                value={data.nombre}
                onChangeText={(newNombre) => handleChange('nombre', newNombre)}
            />

            <View style={{ flexDirection: "row", gap: 10 }}>
                <TextInput
                    placeholder="Edad"
                    style={[styles.general, { flex: 1 }]}
                    keyboardType="numeric"
                    value={data.edad ? data.edad.toString() : ''}
                    onChangeText={(newEdad) => handleChange('edad', newEdad ? parseInt(newEdad) : '')}
                />
                <TouchableOpacity
                    onPress={() => setShowGeneros(!showGeneros)}
                    style={[styles.general, { flex: 2, height: "auto" }]}
                >
                    <View style={styles.headerDropDown}>
                        <Text style={styles.text}>{genero}</Text>
                        <AntDesign
                            name={showGeneros ? "up" : "down"}
                            size={20}
                            color="rgb(95, 89, 89)"
                        />
                    </View>

                    {showGeneros && (
                        <>
                            <View style={{ flex: 1, borderWidth: 1, marginTop: 10, borderColor: '#e0e0e0' }} />

                            <View style={styles.dropDown}>
                                {generos.map((generoOption, index) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => {
                                                setGenero(generoOption.label);
                                                setShowGeneros(false);
                                                handleChange('genero', generoOption.value);
                                            }}
                                            key={index}
                                            style={{ marginTop: 5, paddingVertical: 8 }}
                                        >
                                            <Text style={styles.genders}>{generoOption.label}</Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        </>
                    )}

                </TouchableOpacity>
            </View>
            
            <View style={{ marginRight: 15, marginLeft: 5, marginBottom: 30 }}>
                {/* Alergias */}
                <View style={styles.wrapper}>
                    <View style={styles.label}>
                        <Text style={styles.arrayLabel}>Alergias</Text>
                    </View>
                    <TextInput
                        multiline
                        textAlignVertical="center"
                        style={styles.optionals}
                        placeholder="Ej: Penicilina, Aspirina, ..."
                        value={alergiasText}
                        onChangeText={(text) => {
                            setAlergiasText(text);
                            handleArrayChange('alergias', text);
                        }}
                    />
                    
                </View>

                {/* Patologías */}
                <View style={styles.wrapper}>
                    <View style={styles.label}>
                        <Text style={styles.arrayLabel}>Patologías</Text>
                    </View>
                    <TextInput
                        multiline
                        textAlignVertical="center"
                        style={styles.optionals}
                        placeholder="Ej: Diabetes, Hipertensión, ..."
                        value={patologiasText}
                        onChangeText={(text) => {
                            setPatologiasText(text);
                            handleArrayChange('patologias', text);
                        }}
                    />
                    
                </View>

                {/* Medicamentos */}
                <View style={styles.wrapper}>
                    <View style={styles.label}>
                        <Text style={styles.arrayLabel}>Medicamentos</Text>
                    </View>
                    <TextInput
                        multiline
                        textAlignVertical="center"
                        style={styles.optionals}
                        placeholder="Ej: Metformina, Losartán, ..."
                        value={medicamentosText}
                        onChangeText={(text) => {
                            setMedicamentosText(text);
                            handleArrayChange('medicamentos', text);
                        }}
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "700",
        color: "#2f3c42",
        marginRight: 15,
        marginTop: 50
    },

    general: {
        height: 60,
        padding: 15,
        backgroundColor: "white",
        borderRadius: 15,
        boxShadow: "0px 2px 10px rgb(167, 161, 161)",
        marginLeft: 5,
        fontSize: 20,
        fontWeight: "500",
        color: "#2f3c42",
        marginRight: 15,
        marginTop: 20
    },

    optionals: {
        padding: 15,
        backgroundColor: "white",
        borderRadius: 15,
        boxShadow: "0px 2px 10px rgb(167, 161, 161)",
        fontSize: 19,
        fontWeight: "500",
        color: "#2f3c42",
        minHeight: 70,
        marginTop: 5
    },

    wrapper: {
        marginTop: 10
    },

    headerDropDown: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
        alignItems: "center"
    },

    dropDown: {
        marginTop: 10,
        paddingHorizontal: 10
    },

    genders: {
        color: "#2f3c42",
        fontSize: 18,
        fontWeight: "500"
    },

    text: {
        fontSize: 20,
        color: "#535f64e8",
        fontWeight: "500"
    },

    arrayLabel: {
        fontSize: 16,
        color: "#666",
        marginBottom: 8,
        fontWeight: "600"
    },

    arrayPreview: {
        backgroundColor: "#f0f8ff",
        padding: 10,
        borderRadius: 10,
        marginTop: 8,
        borderWidth: 1,
        borderColor: "#d0e7ff"
    },

    arrayPreviewText: {
        fontSize: 14,
        color: "#2f3c42",
        fontStyle: "italic"
    },

    label: {
        backgroundColor: "white", 
        borderRadius: 10, 
        bottom: -20, 
        zIndex: 2, 
        width: 150, 
        left: 13, 
        paddingLeft: 15
    }
});