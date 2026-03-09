# Guía de Despliegue para iOS (Xcode y TestFlight/App Store)

Esta guía detalla los pasos exactos para compilar, firmar y enviar la aplicación FRAP de Más Bosque Manu a la App Store o TestFlight utilizando una Mac y Xcode.

## 1. Requisitos Previos

- **Hardware:** Computadora Mac (Intel o Apple Silicon M1/M2/M3).
- **Software:** Xcode instalado desde la Mac App Store.
- **Cuenta de Desarrollador:** Cuenta activa en el [Apple Developer Program](https://developer.apple.com/programs/).
- **Entorno Node.js:** Node.js y npm/yarn/bun instalados.

## 2. Preparar el Proyecto (Prebuild)

En la raíz del proyecto móvil (`frontend_mobileapp/frap_frontend/FrapApp`), debes generar el código nativo de iOS (carpeta `/ios`).

1. Instalar las dependencias si aún no lo has hecho:
   ```bash
   npm install
   ```
2. Ejecutar el prebuild de Expo para generar la carpeta `/ios` y aplicar todas las configuraciones del `app.json`:
   ```bash
   npx expo prebuild -p ios
   ```
   *Nota: Si te pregunta por el package name de Android, puedes ingresarlo (ej. `com.masbosquemanu.frapapp`) o simplemente ignorarlo si solo vas a compilar iOS.*

## 3. Instalación de CocoaPods (Especialmente para Apple Silicon)

Las dependencias nativas en iOS se manejan con CocoaPods.

1. Navegar a la carpeta iOS:
   ```bash
   cd ios
   ```
2. Instalar los Pods. Si usas una Mac con procesador M1/M2/M3, **es muy importante usar ffi o ejecutar a través de Rosetta** si encuentras errores. El comando recomendado es:
   ```bash
   arch -x86_64 pod install
   ```
   *Si tienes Ruby/CocoaPods configurado nativamente, un simple `pod install` puede bastar. Si no tienes CocoaPods, instálalo con `sudo gem install cocoapods`.*

## 4. Abrir y Configurar en Xcode

1. Abre el archivo *Workspace* generado por CocoaPods (¡NO el `.xcodeproj`!).
   ```bash
   open FrapApp.xcworkspace
   ```
2. En Xcode, ve al panel izquierdo y selecciona el proyecto `FrapApp`.
3. Selecciona el target principal (`FrapApp`) bajo "TARGETS".
4. Ve a la pestaña **Signing & Capabilities**.
   - Marca la casilla **"Automatically manage signing"**.
   - En **"Team"**, selecciona tu equipo de desarrollo de Apple (inicia sesión en Xcode > Preferences > Accounts si no lo has hecho).
   - El *Bundle Identifier* debe ser `com.masbosquemanu.frapapp` (o el que configuraste en `app.json`).

## 5. Compilar (Archive) y Subir

1. En la barra superior de Xcode, cambia el dispositivo destino de un simulador a **"Any iOS Device (arm64)"**.
2. En el menú superior de tu Mac, ve a **Product > Archive**.
3. Xcode comenzará a compilar la aplicación. Esto puede tomar varios minutos.
4. Una vez terminado, se abrirá la ventana "Organizer" de Xcode con tu archivo creado.
5. Haz clic en el botón **"Distribute App"** en el panel derecho.
6. Selecciona **"App Store Connect"** y presiona Next.
7. Sigue las instrucciones en pantalla y haz clic en **Upload**.

¡Listo! En unos minutos, la compilación aparecerá en App Store Connect bajo la sección de TestFlight, donde podrás enviarla a tus testers o mandarla a revisión para la App Store.

---

## 6. Solución de Problemas Comunes (Troubleshooting)

### Error: Flipper Build Failed
Si obtienes un error relacionado con Flipper al compilar o hacer `pod install`:
1. Flipper no es estrictamente necesario para producción en las últimas versiones de React Native.
2. Puedes deshabilitarlo editando el archivo `ios/Podfile`. Busca las líneas relacionadas con `:flipper_configuration` y coméntalas (poniendo un `#` al inicio) o elimínalas.
3. Vuelve a ejecutar `pod install` en la carpeta `ios`.

### Error de Duplicidad de Recursos (Duplicate output file)
Si obtienes un error en la fase de "Copy Bundle Resources":
1. Ve a "Build Phases" en Xcode.
2. Expande "Copy Bundle Resources".
3. Busca si hay fuentes, imágenes o archivos duplicados (especialmente si arrastraste algo manualmente). Elimina la referencia duplicada.
4. Haz *Product > Clean Build Folder* (Shift + Cmd + K) e intenta archivar de nuevo.

### Los iconos o el Splash Screen no se ven bien en Xcode
Si las resoluciones no coinciden, asegúrate de que el archivo referenciado en `app.json` (`./assets/images/icon.png`) sea exactamente de 1024x1024 píxeles. Expo se encarga de generar todos los tamaños requeridos durante el `npx expo prebuild`.
