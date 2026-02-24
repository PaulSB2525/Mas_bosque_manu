import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";

export default function ESCGWSection({ data, onUpdate }) {
    const [showMotora, setShowMotora] = useState(false);
    const [showVerbal, setShowVerbal] = useState(false);
    const [showOcular, setShowOcular] = useState(false);
    const [total, setTotal] = useState(0);

    const respuestas = [
        {
            name: "Respuesta Motora",
            field: "motora",
            show: showMotora,
            setShow: setShowMotora,
            items: [
                { type: "Obedece ordenes", points: 6 },
                { type: "Localiza el dolor", points: 5 },
                { type: "Movimiento retirada", points: 4 },
                { type: "Flexion hipertonica", points: 3 },
                { type: "Extension hipertonica", points: 2 },
                { type: "Ninguna", points: 1 }
            ]
        },

        {
            name: "Respuesta Verbal",
            field: "verbal",
            show: showVerbal,
            setShow: setShowVerbal,
            items: [
                { type: "Orientada", points: 5 },
                { type: "Confusa", points: 4 },
                { type: "Palabras inadecuadas", points: 3 },
                { type: "Sonidos Incomprensibles", points: 2 },
                { type: "Ninguna", points: 1 }
            ]
        },

        {
            name: "Respuesta Ocular",
            field: "ocular",
            show: showOcular,
            setShow: setShowOcular,
            items: [
                { type: "Espontanea", points: 4 },
                { type: "Estimulo verbal", points: 3 },
                { type: "Estimulo Doloroso", points: 2 },
                { type: "Ninguna", points: 1 }
            ]
        }
    ];

    useEffect(() => {
        // Calcular total
        const motoraPoints = data.motora ? data.motora.points || data.motora : 0;
        const verbalPoints = data.verbal ? data.verbal.points || data.verbal : 0;
        const ocularPoints = data.ocular ? data.ocular.points || data.ocular : 0;
        
        const sum = motoraPoints + verbalPoints + ocularPoints;
        setTotal(sum);
    }, [data.motora, data.verbal, data.ocular]);

    const handleSelection = (field, item) => {
        onUpdate({ [field]: item.points });
    };

    const getSelectedLabel = (field) => {
        const value = data[field];
        if (!value) return '';
        
        const respuesta = respuestas.find(r => r.field === field);
        const item = respuesta.items.find(i => i.points === value);
        return item ? item.type : '';
    };

    return (
        <View style={{ marginRight: 15, marginTop: 50 }}>
            <Text style={styles.title}>Nivel de Conciencia: Escala de Glasgow</Text>

            {respuestas.map((respuesta, indexRespuestas) => {
                const selectedLabel = getSelectedLabel(respuesta.field);
                
                return (
                    <View key={indexRespuestas} style={styles.respuestaContainer}>
                        {selectedLabel !== '' && (
                            <Text style={styles.label}>{respuesta.name}</Text>
                        )}

                        <View style={styles.container}>
                            <TouchableOpacity
                                onPress={() => respuesta.setShow(!respuesta.show)}
                                style={styles.respuestasButton}
                            >
                                <View style={styles.headerDropDown}>
                                    <Text style={styles.text}>
                                        {selectedLabel === '' ? respuesta.name : selectedLabel}
                                    </Text>
                                    <AntDesign
                                        name={respuesta.show ? "up" : "down"}
                                        size={20}
                                        color="rgb(95, 89, 89)"
                                    />
                                </View>

                                {respuesta.show && (
                                    <>
                                        <View style={{ flex: 1, borderWidth: 1, marginTop: 10, borderColor: '#e0e0e0' }} />

                                        <View style={styles.dropDown}>
                                            {respuesta.items.map((item, index) => {
                                                return (
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            handleSelection(respuesta.field, item);
                                                            respuesta.setShow(false);
                                                        }}
                                                        key={index}
                                                        style={{ marginTop: 8, paddingVertical: 5 }}
                                                    >
                                                        <Text style={{ color: "#2f3c42", fontSize: 17 }}>
                                                            {item.type + " (" + item.points + ")"}
                                                        </Text>
                                                    </TouchableOpacity>
                                                );
                                            })}
                                        </View>
                                    </>
                                )}
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            })}

            <View style={styles.total}>
                <Text style={{ fontSize: 22, fontWeight: "800", color: "#535f64" }}>Total: {total}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "600",
        color: "#2f3c42",
        marginBottom: 15
    },
    
    respuestaContainer: {
        marginBottom: 15
    },
    
    container: {
        borderRadius: 15,
        backgroundColor: "white",
        padding: 15,
        marginTop: 10,
        marginRight: 15,
        marginLeft: 5,
        boxShadow: "0px 2px 10px rgb(167, 161, 161)"
    },

    respuestasButton: {
        width: "100%",
        paddingVertical: 10,
        borderRadius: 15,
        backgroundColor: "#eef1f3",
        paddingHorizontal: 20,
    },

    headerDropDown: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    text: {
        fontSize: 18,
        color: "#535f64f8",
        fontWeight: "500"
    },

    dropDown: {
        backgroundColor: "#eef1f3",
        marginTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 10
    },

    total: {
        backgroundColor: "white",
        padding: 15,
        marginTop: 25,
        boxShadow: "0px 2px 10px rgb(167, 161, 161)",
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        alignSelf: "center",
        borderRadius: 40,
        marginBottom: 20
    },

    label: {
        fontSize: 14,
        color: "gray",
        marginBottom: 5,
        marginLeft: 20,
        fontWeight: "600"
    }
});