import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from "react-native-safe-area-context";

const TOKEN_KEY = '@frapapp/auth_token';
const USER_KEY = '@frapapp/user_data';

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const segments = useSegments();

  // Verificar auth al montar
  useEffect(() => {
    checkAuthStatus();
  }, []);

  // Re-verificar auth cada vez que cambia la ruta activa.
  // Esto es clave para que el logout desde home.js funcione:
  // cuando home.js borra el token y navega a "/", segments cambia,
  // este efecto corre, checkAuthStatus encuentra el storage vacío,
  // setIsAuthenticated(false) dispara el efecto de abajo → redirige al login.
  useEffect(() => {
    if (!isLoading) checkAuthStatus();
  }, [segments]);

  // Redirigir según estado de autenticación
  useEffect(() => {
    if (isLoading) return;

    const inAuthScreen = segments[0] === 'signUp' || segments[0] === undefined;

    if (isAuthenticated && inAuthScreen) {
      // Tiene sesión pero está en login/signup → ir a home
      router.replace("/home");
    } else if (!isAuthenticated && !inAuthScreen) {
      // No tiene sesión pero intenta acceder a pantalla protegida → ir a login
      router.replace("/");
    }
  }, [isAuthenticated, isLoading, segments]);

  const checkAuthStatus = async () => {
    try {
      const token = await AsyncStorage.getItem(TOKEN_KEY);
      const userData = await AsyncStorage.getItem(USER_KEY);
      
      if (token && userData) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Error al verificar autenticación:', error);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  // No renderizar nada hasta saber el estado de auth (evita flash del login)
  if (isLoading) return null;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ title: 'Login' }} />
        <Stack.Screen name="home" options={{ title: 'Home' }} />
        <Stack.Screen name="frap" options={{ title: 'Frap' }} />
        <Stack.Screen name="signUp" options={{ title: 'Sign Up' }} />
      </Stack>
    </SafeAreaView>
  );
}