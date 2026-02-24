import { StyleSheet, View, Text, TouchableOpacity, Modal, Image, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SignatureScreen from 'react-native-signature-canvas';
import { useState, useRef } from "react";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

export default function SignatureSection({ data, onUpdate }) {
    const [showSignCanvas, setShowSignCanvas] = useState(false);
    const signatureRef = useRef(null);

    const handleSignature = (signature) => {
        if (signature) {
            onUpdate(signature);
            setShowSignCanvas(false);
        }
    };

    const handleClear = () => {
        if (signatureRef.current) {
            signatureRef.current.clearSignature();
        }
    };

    const handleConfirm = () => {
        if (signatureRef.current) {
            signatureRef.current.readSignature();
        }
    };

    const handleDelete = () => {
        Alert.alert(
            "Eliminar firma",
            "¿Estás seguro de que quieres eliminar esta firma?",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Eliminar",
                    style: "destructive",
                    onPress: () => {
                        onUpdate('');
                    }
                }
            ]
        );
    };

    return (
        <View style={{ marginRight: 15, marginTop: 50 }}>
            <Text style={styles.title}>Firma del Paciente</Text>

            <View style={styles.mainContainer}>
                <TouchableOpacity
                    style={styles.signButton}
                    onPress={() => setShowSignCanvas(true)}
                >
                    <Text style={styles.buttonText}>
                        {data ? "Firmar de Nuevo" : "Firmar Aquí"}
                    </Text>
                </TouchableOpacity>

                {data ? (
                    <View style={styles.signaturePreviewContainer}>
                        <Image
                            source={{ uri: data }}
                            style={styles.signaturePreview}
                            resizeMode="contain"
                        />
                        <TouchableOpacity
                            style={styles.deleteButton}
                            onPress={handleDelete}
                        >
                            <FontAwesome5
                                name="trash"
                                size={16}
                                color="white"
                            />
                            <Text style={styles.deleteButtonText}>Eliminar</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={styles.placeholderContainer}>
                        <FontAwesome5
                            name="signature"
                            size={40}
                            color="#ccc"
                        />
                        <Text style={styles.placeholderText}>Firma no capturada</Text>
                    </View>
                )}
            </View>

            <Modal
                visible={showSignCanvas}
                animationType="slide"
                transparent={false}
                onRequestClose={() => setShowSignCanvas(false)}
            >
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Firme en el área</Text>
                        <View style={styles.signatureContainer}>
                            <SignatureScreen
                                ref={signatureRef}
                                onOK={handleSignature}
                                onEmpty={() => Alert.alert("Firma vacía", "Por favor firme en el área")}
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
                                onPress={handleClear}
                            >
                                <FontAwesome5
                                    name="trash"
                                    color="white"
                                    size={24}
                                />
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
                                onPress={handleConfirm}
                            >
                                <FontAwesome
                                    name="check-circle"
                                    color="white"
                                    size={24}
                                />
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
        marginBottom: 13
    },

    mainContainer: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },

    signButton: {
        backgroundColor: "#165057",
        borderRadius: 15,
        paddingVertical: 15,
        width: "100%",
        alignItems: "center",
        marginBottom: 20
    },

    buttonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "600"
    },

    signaturePreviewContainer: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#f8f9fa",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#e9ecef"
    },

    signaturePreview: {
        width: 250,
        height: 100,
        marginBottom: 15
    },

    deleteButton: {
        backgroundColor: "#e74c3c",
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 10
    },

    deleteButtonText: {
        color: "white",
        fontSize: 14,
        fontWeight: "600"
    },

    placeholderContainer: {
        alignItems: "center",
        justifyContent: "center",
        padding: 40,
        backgroundColor: "#f8f9fa",
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#e9ecef",
        borderStyle: "dashed"
    },

    placeholderText: {
        color: "#999",
        fontSize: 16,
        marginTop: 10,
        fontStyle: "italic"
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