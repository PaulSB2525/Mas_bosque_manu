import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert
} from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';

export default function PicturesSection({ data, onUpdate }) {
    const [permisosCamara, setPermisosCamara] = useState(null);
    const [permisosGaleria, setPermisosGaleria] = useState(null);

    // Inicializar con datos existentes
    useEffect(() => {
        (async () => {
            const { status: camaraStatus } = await ImagePicker.requestCameraPermissionsAsync();
            setPermisosCamara(camaraStatus === 'granted');

            const { status: galeriaStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setPermisosGaleria(galeriaStatus === 'granted');
        })();
    }, []);

    const tomarFoto = async () => {
        if (permisosCamara !== true) {
            Alert.alert(
                "Permisos necesarios",
                "Se necesitan permisos de cámara para tomar fotos.",
                [{ text: "OK", onPress: () => ImagePicker.requestCameraPermissionsAsync() }]
            );
            return;
        }

        try {
            const resultado = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: false,
                quality: 0.7,
                base64: true,
                exif: false
            });

            if (!resultado.canceled && resultado.assets && resultado.assets.length > 0) {
                const nuevaFoto = {
                    uri: resultado.assets[0].uri,
                    base64: resultado.assets[0].base64,
                    id: Date.now().toString(),
                    fecha: new Date().toISOString(),
                };

                const nuevasFotos = [...data, `data:image/jpeg;base64,${nuevaFoto.base64}`];
                onUpdate(nuevasFotos);

                // Opcional: Guardar en galería del dispositivo
                try {
                    await MediaLibrary.saveToLibraryAsync(resultado.assets[0].uri);
                } catch (error) {
                    console.log("No se pudo guardar en galería:", error);
                }
            }
        } catch (error) {
            console.error("Error al tomar foto:", error);
            Alert.alert(
                "Error",
                "No se pudo tomar la foto. Por favor intenta de nuevo.",
                [{ text: "OK" }]
            );
        }
    };

    const seleccionarDeGaleria = async () => {
        if (permisosGaleria !== true) {
            Alert.alert(
                "Permisos necesarios",
                "Se necesitan permisos de galería para seleccionar fotos.",
                [{ text: "OK", onPress: () => ImagePicker.requestMediaLibraryPermissionsAsync() }]
            );
            return;
        }

        try {
            const resultado = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: false,
                quality: 0.7,
                base64: true,
                allowsMultipleSelection: true,
                selectionLimit: 5,
            });

            if (!resultado.canceled && resultado.assets) {
                const nuevasFotos = resultado.assets.map(asset => 
                    `data:image/jpeg;base64,${asset.base64}`
                );
                
                const todasFotos = [...data, ...nuevasFotos];
                onUpdate(todasFotos);
            }
        } catch (error) {
            console.error("Error al seleccionar foto:", error);
            Alert.alert(
                "Error",
                "No se pudo seleccionar la foto. Por favor intenta de nuevo.",
                [{ text: "OK" }]
            );
        }
    };

    const eliminarFoto = (index) => {
        Alert.alert(
            "Eliminar foto",
            "¿Estás seguro de que quieres eliminar esta foto?",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Eliminar",
                    style: "destructive",
                    onPress: () => {
                        const nuevasFotos = data.filter((_, i) => i !== index);
                        onUpdate(nuevasFotos);
                    }
                }
            ]
        );
    };

    const verFoto = (uri) => {
        Alert.alert(
            "Foto",
            "Vista previa de la foto. Para eliminarla mantén presionada.",
            [{ text: "OK" }]
        );
    };

    const limpiarTodas = () => {
        if (data.length === 0) return;
        
        Alert.alert(
            "Limpiar todas",
            `¿Eliminar todas las ${data.length} fotos?`,
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Eliminar todas",
                    style: "destructive",
                    onPress: () => onUpdate([])
                }
            ]
        );
    };

    return (
        <View style={{ marginRight: 15, marginTop: 30 }}>
            <Text style={styles.title}>Fotos de Lesiones</Text>

            <View style={styles.mainContainer}>
                <View style={styles.buttonsRow}>
                    <TouchableOpacity
                        style={[styles.buttons, styles.cameraButton]}
                        onPress={tomarFoto}
                    >
                        <FontAwesome
                            name="camera"
                            size={20}
                            color="white"
                        />
                        <Text style={styles.buttonText}>Cámara</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.buttons, styles.galleryButton]}
                        onPress={seleccionarDeGaleria}
                    >
                        <FontAwesome
                            name="photo"
                            size={20}
                            color="#165057"
                        />
                        <Text style={[styles.buttonText, styles.galleryButtonText]}>Galería</Text>
                    </TouchableOpacity>
                </View>

                {data.length > 0 ? (
                    <>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={styles.scrollContainer}
                        >
                            <View style={styles.picturesContainer}>
                                {data.map((foto, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={styles.fotoContainer}
                                        onPress={() => verFoto(foto)}
                                        onLongPress={() => eliminarFoto(index)}
                                    >
                                        <Image
                                            source={{ uri: foto.includes('base64') ? foto : { uri: foto } }}
                                            style={styles.foto}
                                        />
                                        <View style={styles.overlay}>
                                            <Text style={styles.fotoIndice}>{index + 1}</Text>
                                            <TouchableOpacity
                                                style={styles.botonEliminar}
                                                onPress={() => eliminarFoto(index)}
                                            >
                                                <FontAwesome5
                                                    name="trash"
                                                    size={12}
                                                    color="white"
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </ScrollView>

                        <View style={styles.contadorContainer}>
                            <Text style={styles.contadorTexto}>
                                {data.length} foto{data.length !== 1 ? 's' : ''}
                            </Text>
                            <TouchableOpacity
                                style={styles.botonLimpiar}
                                onPress={limpiarTodas}
                            >
                                <Text style={styles.botonLimpiarTexto}>Limpiar todas</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                ) : (
                    <View style={styles.emptyContainer}>
                        <FontAwesome5
                            name="images"
                            color="gray"
                            size={50}
                        />
                        <Text style={styles.emptyText}>No hay fotos capturadas</Text>
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "600",
        color: "#2f3c42",
        marginBottom: 13
    },

    mainContainer: {
        gap: 15,
        borderRadius: 20,
        backgroundColor: "white",
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },

    buttonsRow: {
        flexDirection: "row",
        gap: 15,
        marginBottom: 10
    },

    buttons: {
        borderRadius: 13,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 10,
        paddingVertical: 12,
        /*shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        */
    },

    cameraButton: {
        backgroundColor: "#98999b98",
        borderWidth: 1
    },

    galleryButton: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#165057"
    },

    buttonText: {
        fontSize: 16,
        fontWeight: "bold"
    },

    galleryButtonText: {
        color: "#165057"
    },

    emptyContainer: {
        gap: 10,
        justifyContent: "center",
        padding: 20,
        height: 150,
        alignItems: "center",
        borderRadius: 15,
        width: "100%",
        alignSelf: "center",
        backgroundColor: "#f8f9fa"
    },

    emptyText: {
        color: "gray",
        fontSize: 16
    },

    scrollContainer: {
        maxHeight: 160,
    },

    picturesContainer: {
        flexDirection: "row",
        gap: 10,
        paddingVertical: 5,
        height: 150,
        alignItems: "center",
    },

    fotoContainer: {
        position: 'relative',
        marginRight: 10,
    },

    foto: {
        width: 120,
        height: 120,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#165057',
    },

    overlay: {
        position: 'absolute',
        top: 5,
        right: 5,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },

    fotoIndice: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 10,
    },

    botonEliminar: {
        backgroundColor: 'rgba(255,0,0,0.7)',
        width: 24,
        height: 24,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },

    contadorContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: 5,
    },

    contadorTexto: {
        color: '#165057',
        fontSize: 14,
        fontWeight: '600',
    },

    botonLimpiar: {
        backgroundColor: '#ff6b6b',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
    },

    botonLimpiarTexto: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
});