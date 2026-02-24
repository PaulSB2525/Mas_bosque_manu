import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = '@frapapp/auth_token';
const USER_KEY = '@frapapp/user_data';

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const token = await AsyncStorage.getItem(TOKEN_KEY);
      const userData = await AsyncStorage.getItem(USER_KEY);
      
      if (token && userData) {
        setIsAuthenticated(true);
        // Redirigir a home si está autenticado y en login
        if (router.canGoBack()) {
          router.replace("/home");
        }
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

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: 'Login' }} />
      <Stack.Screen name="home" options={{ title: 'Home' }} />
      <Stack.Screen name="frap" options={{ title: 'Frap' }} />
      <Stack.Screen name="signUp" options={{ title: 'Sign Up' }} />
    </Stack>
  );
}