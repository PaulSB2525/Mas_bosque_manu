import { StyleSheet, View, TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

export default function SaveButton({ onSave, isOffline, isSaving, pendingCount, onManualSync }) {
    return (
        <View style={styles.container}>
            {/* Botón de sincronización manual */}
            {pendingCount > 0 && (
                <TouchableOpacity 
                    style={styles.syncButton}
                    onPress={onManualSync}
                    disabled={isSaving}
                >
                    <FontAwesome5 
                        name="sync"
                        size={20}
                        color="white"
                    />
                    <Text style={styles.syncText}>
                        {isOffline ? 'Sincronizar' : `Pendientes: ${pendingCount}`}
                    </Text>
                </TouchableOpacity>
            )}
            
            {/* Botón principal de guardar */}
            <TouchableOpacity 
                style={[
                    styles.saveButton,
                    isOffline && styles.offlineButton,
                    isSaving && styles.disabledButton
                ]}
                onPress={onSave}
                disabled={isSaving}
            >
                {isSaving ? (
                    <ActivityIndicator color="white" size="small" />
                ) : (
                    <>
                        <Ionicons 
                            name={isOffline ? "cloud-offline" : "cloud-done"}
                            size={28}
                            color="white"
                        />
                        <Text style={styles.saveText}>
                            {isOffline ? "Guardar Offline" : "Guardar Reporte"}
                        </Text>
                    </>
                )}
            </TouchableOpacity>
            
            {/* Indicador de estado */}
            <View style={styles.statusInfo}>
                {isOffline && (
                    <Text style={styles.offlineInfo}>
                        Modo offline activado. Los reportes se guardarán localmente.
                    </Text>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 40,
        marginBottom: 60,
        paddingRight: 20,
        paddingLeft: 10
    },

    saveButton: {
        backgroundColor: "#4063a5c0",
        borderRadius: 20,
        alignItems: "center",
        flexDirection: "row",
        gap: 15,
        paddingHorizontal: 30,
        //borderColor: "#2c4e24",
        //borderWidth: 3,
        paddingVertical: 15,
        width: "100%",
        justifyContent: "center",
        boxShadow: "0px 2px 10px rgb(75, 72, 72)"
    },

    offlineButton: {
        backgroundColor: "#e74c3c"
    },

    disabledButton: {
        opacity: 0.7
    },

    saveText: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    },

    syncButton: {
        backgroundColor: "#3498db",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 15,
        marginBottom: 15,
        alignSelf: "flex-start"
    },

    syncText: {
        color: "white",
        fontSize: 14,
        fontWeight: "600"
    },

    statusInfo: {
        marginTop: 15,
        padding: 10,
        backgroundColor: "#f8f9fa",
        borderRadius: 10,
        width: "100%"
    },

    offlineInfo: {
        color: "#e74c3c",
        fontSize: 12,
        textAlign: "center",
        fontStyle: "italic"
    }
});