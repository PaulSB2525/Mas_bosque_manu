import { StyleSheet, View, Text, TouchableOpacity, Modal, Switch, TextInput, Image, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SignatureScreen from 'react-native-signature-canvas';
import { useState, useRef } from "react";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

export default function TransportSection({ data, onUpdate }) {
    const [showSignCanvas, setShowSignCanvas] = useState(false);
    const signatureRef = useRef(null);

    const handleToggle = (value) => {
        onUpdate({ traslado_aceptado: value });
        if (!value) {
            // Limpiar datos cuando se desactiva
            onUpdate({
                numero_unidad: '',
                nombre_operador: '',
                firma_operador: ''
            });
        }
    };

    const handleUnitChange = (text) => {
        onUpdate({ numero_unidad: text });
    };

    const handleOperatorChange = (text) => {
        onUpdate({ nombre_operador: text });
    };

    const handleSignature = (signature) => {
        if (signature) {
            onUpdate({ firma_operador: signature });
            setShowSignCanvas(false);
        }
    };

    const handleClearSignature = () => {
        if (signatureRef.current) {
            signatureRef.current.clearSignature();
        }
    };

    const handleConfirmSignature = () => {
        if (signatureRef.current) {
            signatureRef.current.readSignature();
        }
    };

    const handleDeleteSignature = () => {
        Alert.alert(
            "Eliminar firma",
            "¿Estás seguro de que quieres eliminar la firma del operador?",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Eliminar",
                    style: "destructive",
                    onPress: () => {
                        onUpdate({ firma_operador: '' });
                    }
                }
            ]
        );
    };

    return (
        <View style={{ marginRight: 15, marginTop: 50, marginBottom: 30 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text style={styles.title}>Traslado Aceptado</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81afffa4' }}
                    thumbColor={data.traslado_aceptado ? '#326bac' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={handleToggle}
                    value={data.traslado_aceptado}
                    style={{ transform: [{ scale: 1.2 }], top: -10 }}
                />
            </View>
            
            {data.traslado_aceptado && (
                <View style={styles.container}>
                    <Text style={styles.sectionTitle}>Información del Traslado</Text>
                    
                    <View style={styles.inputGroup}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>Número de Unidad:</Text>
                            <TextInput placeholderTextColor="#888888"
                                placeholder="Ej: ABC-001"
                                style={styles.input}
                                value={data.numero_unidad}
                                onChangeText={handleUnitChange}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>Nombre del Operador:</Text>
                            <TextInput placeholderTextColor="#888888"
                                placeholder="Nombre completo"
                                style={styles.input}
                                value={data.nombre_operador}
                                onChangeText={handleOperatorChange}
                            />
                        </View>
                    </View>

                    <View style={styles.signatureSection}>
                        <Text style={styles.signatureLabel}>Firma del Operador:</Text>
                        
                        {data.firma_operador ? (
                            <View style={styles.signaturePreviewContainer}>
                                <Image
                                    source={{ uri: data.firma_operador }}
                                    style={styles.signaturePreview}
                                    resizeMode="contain"
                                />
                                <View style={styles.signatureButtons}>
                                    <TouchableOpacity
                                        style={[styles.signatureButton, styles.newSignatureButton]}
                                        onPress={() => setShowSignCanvas(true)}
                                    >
                                        <FontAwesome5 name="pen" size={14} color="white" />
                                        <Text style={styles.signatureButtonText}>Nueva Firma</Text>
                                    </TouchableOpacity>
                                    
                                    <TouchableOpacity
                                        style={[styles.signatureButton, styles.deleteSignatureButton]}
                                        onPress={handleDeleteSignature}
                                    >
                                        <FontAwesome5 name="trash" size={14} color="white" />
                                        <Text style={styles.signatureButtonText}>Eliminar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ) : (
                            <TouchableOpacity
                                style={styles.signatureButtonEmpty}
                                onPress={() => setShowSignCanvas(true)}
                            >
                                <FontAwesome5 name="signature" size={24} color="#666" />
                                <Text style={styles.signatureButtonEmptyText}>Capturar Firma del Operador</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            )}

            <Modal
                visible={showSignCanvas}
                animationType="slide"
                transparent={false}
                onRequestClose={() => setShowSignCanvas(false)}
            >
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Firma del Operador</Text>
                        <View style={styles.signatureContainer}>
                            <SignatureScreen
                                ref={signatureRef}
                                onOK={handleSignature}
                                onEmpty={() => Alert.alert("Firma vacía", "El operador debe firmar en el área")}
                                descriptionText=""
                                clearText="Limpiar"
                                confirmText="Guardar"
                                webStyle={webStyle}
                                autoClear={false}
                                imageType="image/png"
                            />
                        </View>
                        
                        <View style={styles.modalButtons}>
                            <TouchableOpacity
                                style={[styles.modalButton, styles.clearButton]}
                                onPress={handleClearSignature}
                            >
                                <FontAwesome5 name="trash" size={20} color="white" />
                                <Text style={styles.modalButtonText}>Limpiar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.modalButton, styles.cancelButton]}
                                onPress={() => setShowSignCanvas(false)}
                            >
                                <Text style={[styles.modalButtonText, styles.cancelButtonText]}>Cancelar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.modalButton, styles.confirmButton]}
                                onPress={handleConfirmSignature}
                            >
                                <FontAwesome name="check-circle" size={20} color="white" />
                                <Text style={styles.modalButtonText}>Guardar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </Modal>
        </View>
    );
}

const webStyle = `.m-signature-pad {box-shadow: none; border: 2px dashed #ccc;}
                .m-signature-pad--body {border: none;}
                .m-signature-pad--footer {display: none; margin: 0px;}
                body,html {height: 100%; width: 100%;}`;

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "600",
        color: "#2f3c42",
        marginBottom: 20
    },

    container: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },

    sectionTitle: {
        fontSize: 22,
        fontWeight: "600",
        color: "#2f3c42",
        marginBottom: 20,
        textAlign: "center"
    },

    inputGroup: {
        gap: 20,
        marginBottom: 25
    },

    inputContainer: {
        marginBottom: 15
    },

    inputLabel: {
        fontSize: 16,
        fontWeight: "600",
        color: "#495057",
        marginBottom: 8
    },

    input: {
        backgroundColor: "#f8f9fa",
        borderRadius: 10,
        padding: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#dee2e6"
    },

    signatureSection: {
        marginBottom: 25
    },

    signatureLabel: {
        fontSize: 16,
        fontWeight: "600",
        color: "#495057",
        marginBottom: 12
    },

    signaturePreviewContainer: {
        alignItems: "center",
        backgroundColor: "#f8f9fa",
        borderRadius: 15,
        padding: 20,
        borderWidth: 1,
        borderColor: "#e9ecef"
    },

    signaturePreview: {
        width: 250,
        height: 100,
        marginBottom: 15
    },

    signatureButtons: {
        flexDirection: "row",
        gap: 10,
        width: "100%"
    },

    signatureButton: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        paddingVertical: 10,
        borderRadius: 8
    },

    newSignatureButton: {
        backgroundColor: "#3498db"
    },

    deleteSignatureButton: {
        backgroundColor: "#e74c3c"
    },

    signatureButtonText: {
        color: "white",
        fontSize: 14,
        fontWeight: "600"
    },

    signatureButtonEmpty: {
        backgroundColor: "#f8f9fa",
        borderWidth: 2,
        borderColor: "#dee2e6",
        borderStyle: "dashed",
        borderRadius: 15,
        padding: 30,
        alignItems: "center",
        justifyContent: "center",
        gap: 10
    },

    signatureButtonEmptyText: {
        color: "#666",
        fontSize: 16,
        fontWeight: "500",
        textAlign: "center"
    },

    instructions: {
        backgroundColor: "#f0f8ff",
        borderRadius: 10,
        padding: 15,
        borderWidth: 1,
        borderColor: "#d0e7ff"
    },

    instructionsTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: "#165057",
        marginBottom: 8
    },

    instructionsText: {
        fontSize: 14,
        color: "#495057",
        marginBottom: 4
    },

    modalContainer: {
        flex: 1,
        backgroundColor: "white"
    },

    modalTitle: {
        fontSize: 22,
        fontWeight: "600",
        color: "#2f3c42",
        textAlign: "center",
        paddingVertical: 15,
        backgroundColor: "#f8f9fa",
        borderBottomWidth: 1,
        borderBottomColor: "#e9ecef"
    },

    signatureContainer: {
        flex: 1,
        margin: 10,
        borderWidth: 2,
        borderColor: "#e9ecef",
        borderRadius: 10,
        overflow: "hidden"
    },

    modalButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        backgroundColor: "#f8f9fa",
        borderTopWidth: 1,
        borderTopColor: "#e9ecef",
        gap: 10
    },

    modalButton: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        paddingVertical: 12,
        borderRadius: 10
    },

    clearButton: {
        backgroundColor: "#e74c3c"
    },

    cancelButton: {
        backgroundColor: "#f8f9fa",
        borderWidth: 1,
        borderColor: "#dee2e6"
    },

    confirmButton: {
        backgroundColor: "#27ae60"
    },

    modalButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600"
    },

    cancelButtonText: {
        color: "#495057"
    }
});