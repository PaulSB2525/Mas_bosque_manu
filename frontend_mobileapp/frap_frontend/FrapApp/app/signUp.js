import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import API_URL from "../config";

const TOKEN_KEY = '@frapapp/auth_token';
const USER_KEY = '@frapapp/user_data';

export default function SignUp(){
    const [nombre, setNombre] = useState('');
    const [usuario, setUsuario] = useState('');
    const [correoEscolar, setCorreoEscolar] = useState('');
    const [correoInst, setCorreoInst] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [visiblePwd, setVisiblePwd] = useState(false);

    const sections = [
        {type: "Nombre Completo", setter: setNombre},  
        {type: "Correo Escolar", setter: setCorreoEscolar}, 
        {type: "Correo Institucional", setter: setCorreoInst},
        {type: "Usuario", setter: setUsuario},
        {type: "Contraseña", setter: setContrasena}
    ];

    async function signUpParamedic(){
        if (isLoading) return;
        
        setIsLoading(true);

        try{
            const response = await fetch(`${API_URL}/api/paramedicos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "nombre": nombre,
                    "correoInst": correoInst,
                    "correoEsc": correoEscolar,
                    "usuario": usuario,
                    "contrasena": contrasena,
                })
            });

            const responseData = await response.json();
            const responseMessage = responseData.message;

            console.log(responseData);

            if (responseData.success && (responseMessage === "Paramédico creado exitosamente")) {
                // Guardar token y datos del usuario

                // Error por el momento guardando credenciales
                /*
                await AsyncStorage.setItem(TOKEN_KEY, responseData.token);
                await AsyncStorage.setItem(USER_KEY, JSON.stringify({
                    usuario: usuario,
                    nombre: nombre,
                    id: responseData.id || ''
                }));
                */

                console.log("se pudo");
                // Navegar al home
                router.replace("/home");
            } else {
                const responseMap = {
                    "El usuario ya esta registrado": () => setErrorMessage("*Usuario ya registrado"),
                    "El correoInst ya esta registrado": () => setErrorMessage("*Correo Institucional ya registrado"),
                    "Datos ingresados son invalidos": () => setErrorMessage("*Datos Invalidos, revise los campos"),
                };

                const handler = responseMap[responseMessage];
                if (handler) {
                    handler();
                } else {
                    setErrorMessage("*Error al registrarse, revise los datos");
                }
            }

        }catch (error){
            console.error("Error en el SignUp: ", error);
            setErrorMessage("*Error de conexion. Verifica tu internet");
        } finally {
            setIsLoading(false);
        }
        
    };  

    function validForm(){
        if (!nombre.trim()) {
            setErrorMessage("*Nombre es requerido");
            return false;
        }
        
        if (!correoInst.trim() || !correoInst.includes('@')) {
            setErrorMessage("*Correo Institucional inválido");
            return false;
        }
        
        if (correoEscolar && !correoEscolar.includes('@')) {
            setErrorMessage("*Correo Escolar inválido");
            return false;
        }
        
        if (usuario.length < 4){
            setErrorMessage("*Usuario debe tener al menos 4 caracteres");
            return false;
        }
        
        if (usuario.length > 50) {
            setErrorMessage("*Usuario no puede tener más de 50 caracteres");
            return false;
        }
        
        if (contrasena.length < 8) {
            setErrorMessage("*Contraseña debe tener al menos 8 caracteres");
            return false;
        }

        if (!/\d/.test(contrasena)){
            setErrorMessage("*Contraseña debe contener al menos un numero");
            return false;
        }

        if (!/[A-Z]/.test(contrasena)){
            setErrorMessage("*Contraseña debe contener al menos una mayuscula");
            return false;
        }

        return true;
    }

    return (
        <KeyboardAwareScrollView 
            enableOnAndroid
            extraHeight={200}
            style={{flex: 1, backgroundColor: "white"}}
        >
        <SafeAreaView style={styles.screen}>
            <View style={styles.signUpContainer}>
                <FontAwesome 
                    name="user-circle"
                    size={100}
                    color={"#295486"}
                    style={{marginBottom: 30}}
                />

                {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}

                {sections.map((section, index) => {
                    return (
                        <View style={styles.inputContainer} key={index}>
                            <View style={{flexDirection: "row", gap: 2}}>
                                <Text style={{color: "red"}}>{section.type === "Correo Escolar" ? "" : "*"}</Text>
                                <Text style={styles.text}>{section.type}</Text>
                            </View>
                            <TextInput 
                                style={styles.input}
                                onChangeText={(newInput) => {
                                    section.setter(newInput);
                                    setErrorMessage('');
                                }}
                                value={
                                    section.type === "Nombre Completo" ? nombre :
                                    section.type === "Correo Escolar" ? correoEscolar :
                                    section.type === "Correo Institucional" ? correoInst :
                                    section.type === "Usuario" ? usuario : contrasena
                                }
                                secureTextEntry={section.type === "Contraseña" && !visiblePwd}
                                editable={!isLoading}
                            />
                            {section.type === "Contraseña" && (
                                <TouchableOpacity
                                    onPress={() => setVisiblePwd(!visiblePwd)}
                                    style={{position: "absolute", top: 38, right: 15}}
                                    >
                                    <AntDesign 
                                        name={visiblePwd ? "eye-invisible" : "eye"} 
                                        size={25} 
                                        color="gray"
                                    />
                                </TouchableOpacity>
                            )}
                            
                        </View>
                    ) 
                })}

                <TouchableOpacity 
                    style={[styles.sendButton, isLoading && styles.disabledButton]}
                    onPress={() => {
                        if (validForm()){
                            setErrorMessage("");
                            signUpParamedic();
                        }
                    }}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <Text style={{fontSize: 23, color: "white"}}>Registrando...</Text>
                    ) : (
                        <Text style={{fontSize: 23, color: "white"}}>Registrarme</Text>
                    )}
                </TouchableOpacity>

                <View style={{flexDirection: "row", marginTop: 20}}>
                    <Text>¿Ya tienes cuenta? </Text>
                    <Link href="/" style={{color: "rgb(118, 177, 70)"}}>Iniciar Sesion</Link>
                </View>
            </View>
        </SafeAreaView>
       </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 30,
        paddingTop: 20
    },

    signUpContainer: {
        borderRadius: 20,
        backgroundColor: "#6d6d6d1c",
        alignItems: "center",
        padding: 20,
        width: "100%",
        boxShadow: "0px 2px 5px rgb(61, 60, 60)",
        paddingTop: 30
    },

    input: {
        backgroundColor: "#f8f8f89c",
        borderRadius: 15,
        marginTop: 5,
        height: 42,
        paddingHorizontal: 20,
        fontSize: 15,
        borderColor: "rgba(0, 0, 0, 0.14)",
        borderWidth: 0.8, 
        paddingRight: 50
    },

    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000000b6"
    },

    inputContainer: {
        alignSelf: "flex-start",
        width: "100%",
        marginBottom: 15
    },

    sendButton: {
        borderRadius: 20,
        backgroundColor: "#295486d8",
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 10,
        boxShadow: "0px 2px 5px rgb(61, 60, 60)",
    },

    disabledButton: {
        opacity: 0.7,
        backgroundColor: "#6d6d6d"
    },

    error: {
        color: "red",
        fontSize: 12,
        marginBottom: 5,
        top: -20,
        textAlign: "center"
    },
});