import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router"; 
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = '@frapapp/auth_token';
const USER_KEY = '@frapapp/user_data';

export default function HomeScreen(){
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadUserData();
    }, []);

    const loadUserData = async () => {
        try {
            const userJson = await AsyncStorage.getItem(USER_KEY);
            if (userJson) {
                setUserData(JSON.parse(userJson));
            }
        } catch (error) {
            console.error('Error al cargar datos del usuario:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = async () => {
        Alert.alert(
            "Cerrar sesión",
            "¿Estás seguro de que quieres salir?",
            [
                { text: "Cancelar", style: "cancel" },
                { 
                    text: "Cerrar sesión", 
                    style: "destructive",
                    onPress: async () => {
                        try {
                            await AsyncStorage.multiRemove([TOKEN_KEY, USER_KEY]);
                            router.replace("/");
                        } catch (error) {
                            console.error('Error al cerrar sesión:', error);
                            Alert.alert("Error", "No se pudo cerrar sesión");
                        }
                    }
                }
            ]
        );
    };

    return(
        <SafeAreaView style={{flex: 1, paddingTop: 20}}>
            {/* Header con usuario y logout */}
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <MaterialIcons 
                        name="local-hospital"
                        size={45}
                        color="#3b824f"
                    />
                    <Text style={styles.headerTitle}>FrapApp</Text>
                </View>
                
                {userData && (
                    <View style={styles.userSection}>
                        <View style={styles.userInfo}>
                            <Ionicons name="person-circle" size={24} color="#3b824f" />
                            <Text style={styles.userName}>{userData.usuario}</Text>
                        </View>
                        <TouchableOpacity 
                            style={styles.logoutButton}
                            onPress={handleLogout}
                        >
                            <Ionicons name="log-out-outline" size={24} color="#e74c3c" />
                        </TouchableOpacity>
                    </View>
                )}
            </View>

            <View style={{flex: 1, paddingVertical: 30, paddingHorizontal: 25}}>
                <View style={{borderRadius: 20, backgroundColor: "white", paddingTop: 15, paddingHorizontal: 15, justifyContent: "flex-start"}}>
                    <Text style={[styles.welcomeText, {fontWeight: "bold"}]}>
                        {userData ? `Bienvenido, ${userData.nombre || userData.usuario}` : 'Bienvenido'}
                    </Text>
                </View>
                

                {/*}
                <View style={{height: 100, borderRadius: 20, backgroundColor: "#488da183", justifyContent: "center", paddingHorizontal: 20, flexDirection: "row"}}>
                    <Text style={{fontSize: 25, fontWeight: "bold"}}>Ingresar Firma: </Text>
                    <TouchableOpacity>
                        <FontAwesome5 name="signature" size={20} />
                    </TouchableOpacity>
                </View>

                */} 

                <TouchableOpacity 
                    style={styles.newReport}
                    onPress={() => {
                        router.navigate("/frap");
                    }}
                >
                    <FontAwesome5 
                        name="notes-medical" 
                        size={80}
                        color="#3b824f"
                    />
                    <Text style={{marginTop: 20, fontSize: 25, color: "#37474f"}}>Nuevo Reporte</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        width: "100%", 
        height: 80, 
        backgroundColor: "#b2c29591", 
        alignItems: "center", 
        justifyContent: "center",
        flexDirection: "row", 
        paddingHorizontal: 20
    },

    headerLeft: {
        flexDirection: "row", 
        alignItems: "center", 
        gap: 10
    },

    headerTitle: {
        fontSize: 28, 
        fontWeight: "bold", 
        color: "#050f08"
    },

    userSection: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15
    },

    userInfo: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        backgroundColor: "rgba(255,255,255,0.7)",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15
    },

    userName: {
        fontSize: 14,
        fontWeight: "600",
        color: "#37474f"
    },

    logoutButton: {
        padding: 5
    },

    welcomeText: {
        fontSize: 30,
        color: "#37474f",
        marginBottom: 20
    },

    newReport: {
        alignSelf: "center", 
        marginTop: 50, 
        alignItems: "center", 
        justifyContent: "center", 
        boxShadow: "0px 2px 5px rgb(61, 60, 60)", 
        borderRadius: 20, 
        paddingVertical: 40, 
        paddingHorizontal: 30,
        backgroundColor: "white",
        width: "80%"
    },

    optionsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 50,
        paddingHorizontal: 20
    },

    optionButton: {
        alignItems: "center",
        padding: 20,
        backgroundColor: "white",
        borderRadius: 15,
        boxShadow: "0px 2px 5px rgba(61, 60, 60, 0.3)",
        width: "45%"
    },

    optionText: {
        marginTop: 10,
        fontSize: 16,
        color: "#37474f",
        textAlign: "center"
    }
});