import { StyleSheet, TextInput, View, Text } from "react-native";
import { useState } from "react";

export default function NotesSection({ observaciones, recomendaciones, onUpdate }) {
    const [heightObservaciones, setObservacionesHeight] = useState(80);
    const [heightRecomendaciones, setRecomendacionesHeight] = useState(80);

    const handleObservacionesChange = (text) => {
        onUpdate({ observaciones: text });
    };

    const handleRecomendacionesChange = (text) => {
        onUpdate({ recomendaciones: text });
    };

    return (
        <View style={{ marginTop: 50, marginRight: 15, marginBottom: 20 }}>
            <Text style={styles.title}>Notas</Text>

            <View style={styles.wrapper}>
                <View style={styles.topLabel}>
                    <Text style={styles.label}>Observaciones</Text>
                </View>
                <TextInput placeholderTextColor="#888888"
                    multiline
                    textAlignVertical="top"
                    style={[styles.containers, { flex: 1 }]}
                    placeholder="Describa las observaciones ..."
                    value={observaciones}
                    onChangeText={handleObservacionesChange}
                    onContentSizeChange={(event) => {
                        setObservacionesHeight(event.nativeEvent.contentSize.height + 20);
                    }}
                />
            </View>

            <View style={[styles.wrapper, { height: 80 }]}>
                <View style={styles.topLabel}>
                    <Text style={styles.label}>Recomendaciones</Text>
                </View>
                <TextInput placeholderTextColor="#888888"
                    multiline
                    textAlignVertical="top"
                    style={[styles.containers, { flex: 1 }]}
                    placeholder="Describa las recomendaciones..."
                    value={recomendaciones}
                    onChangeText={handleRecomendacionesChange}
                    onContentSizeChange={(event) => {
                        setRecomendacionesHeight(event.nativeEvent.contentSize.height + 20);
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "600",
        color: "#2f3c42",
    },

    wrapper: {
        marginLeft: 5,
        marginBottom: 50,
        height: 80
    },

    containers: {
        padding: 15,
        backgroundColor: "white",
        borderRadius: 15,
        boxShadow: "0px 2px 10px rgb(167, 161, 161)",
        fontSize: 18,
        fontWeight: "500",
        color: "#2f3c42",
        minHeight: 100
    },

    label: {
        fontSize: 16,
        color: "#666",
        marginBottom: 8,
        fontWeight: "600",
        marginLeft: 5
    },

    topLabel: {
        backgroundColor: "white", 
        borderRadius: 10, 
        bottom: -20, 
        zIndex: 2, 
        width: 170, 
        left: 13, 
        paddingLeft: 5
    }
});