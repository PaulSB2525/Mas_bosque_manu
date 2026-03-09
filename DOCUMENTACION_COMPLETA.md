# Documentación Completa del Repositorio Mas_bosque_manu

A continuación, se presenta un desglose archivo por archivo de todo el repositorio. Esta estructura está diseñada para alimentar un modelo de lenguaje (como Gemini) para un análisis profundo.

El proyecto es un sistema para el Formato de Registro de Atención Prehospitalaria (FRAP) de Más Bosque Manu. Consta de tres backends (uno principal/orquestador en FastAPI, uno para móviles en Node.js y otro para la webapp en FastAPI), una base de datos centralizada (MySQL) y un frontend móvil desarrollado en React Native/Expo.

---

## 1. backend_api/ (Orquestador Central / FastAPI)
*Servicio en Python que funciona como punto de entrada o coordinador principal para los demás backends.*

*   **`main.py`**: Archivo principal de la aplicación FastAPI. Configura la aplicación, el middleware CORS (para permitir peticiones desde las aplicaciones cliente) y monta el enrutador principal en `/api`. Expone un endpoint `/health` para verificar que el servicio está vivo.
*   **`requirements.txt`**: Archivo de dependencias de Python. Lista paquetes clave como `fastapi`, `uvicorn` (servidor ASGI), `sqlalchemy` (ORM), `pymysql` (driver MySQL), `python-dotenv` y `pydantic-settings` para la configuración del entorno.
*   **`.env`**: Archivo de variables de entorno (no versionado, usualmente contiene credenciales de DB, claves secretas, puertos).
*   **`app/`**: (Directorio de la lógica principal, contiene `core/` y `api/` según se infiere en `main.py`).

---

## 2. backend_mobileapp/ (API para App Móvil / Node.js + Express)
*Backend dedicado a las operaciones exclusivas de la aplicación móvil (paramédicos que llenan el FRAP).*

*   **`server.js`**: Punto de entrada de Node.js. Configura el servidor Express, define una estricta política de CORS, aplica *rate limiting* para prevenir abusos, añade cabeceras de seguridad con Helmet, y maneja el parseo de JSON (hasta 10mb). Configura manejadores globales de errores y rutas para los distintos dominios.
*   **`package.json`**: Define las dependencias del proyecto de Node: `express`, `cors`, `helmet`, `express-rate-limit`, `dotenv`, y para la lógica de negocio y base de datos: `bcrypt` (hashing de contraseñas), `jsonwebtoken` (autenticación JWT), `mysql2` (driver de base de datos), y `zod` (validación de esquemas/datos).
*   **`routes/`**: Controladores de rutas HTTP.
    *   `admins.js`: Endpoints para la gestión administrativa desde el móvil (si aplica).
    *   `authParamedicos.js`: Endpoints específicos para la autenticación (login, registro de tokens) del personal paramédico.
    *   `pacientes.js`: Endpoints para operaciones CRUD de pacientes atendidos.
    *   `paramedicos.js`: Endpoints para la gestión del perfil o información de paramédicos.
    *   `reportes.js`: Endpoints para subir, listar o modificar los formularios FRAP completados.
*   **`config/`**: (Directorio) Probablemente contenga la conexión a la base de datos usando `mysql2`.
*   **`controllers/`**: (Directorio) Lógica de negocio separada de las rutas.
*   **`middleware/`**: (Directorio) Funciones intermedias, como `errores.js` para manejo de fallos centralizado o middlewares de autenticación JWT.
*   **`schemas/`**: (Directorio) Esquemas de validación usando la librería `zod`.
*   **`utils/`**: (Directorio) Funciones auxiliares.

---

## 3. backend_webapp/ (API para App Web Administrativa / FastAPI)
*Backend en Python enfocado en la interfaz administrativa donde se gestionan expedientes, reportes y estadísticas de forma global.*

*   **`app/main.py`**: Configuración de FastAPI para la webapp. Monta los enrutadores de los distintos módulos, define CORS (permitiendo orígenes específicos como localhost y dominios de pruebas), y tiene un evento `startup_event` que verifica la conexión a la base de datos al encender el servidor.
*   **`app/databases/`**: Contiene `connection.py` y posiblemente modelos SQLAlchemy o configuración de PyMySQL.
*   **`app/models/`**: Clases que representan las tablas en la base de datos (SQLAlchemy).
*   **`app/routers/`**: Define las rutas (endpoints) separados por dominio:
    *   `catalogos_r.py`: Gestión de catálogos estáticos (ej. tipos de sangre, tipos de accidentes).
    *   `estadisticas_r.py`: Generación de datos agregados y gráficas para el panel de administración.
    *   `insumo_medicamentos_r.py`: Gestión del inventario de insumos utilizados en los servicios.
    *   `media.py`: Manejo de archivos multimedia (fotos de accidentes, firmas, etc.).
    *   `pacientes_r.py`: Endpoints para consulta profunda y gestión de pacientes.
    *   `reportes_r.py`: Endpoints para buscar, filtrar y analizar los reportes FRAP enviados.
    *   `usuarios_r.py`: Gestión de usuarios administrativos.
*   **`app/schemas/`**: Esquemas Pydantic para validar entradas y salidas de la API.
*   **`app/services/`**: Lógica de negocio que se interpone entre los routers y los modelos/base de datos.
*   **`app/templates/`**: (Directorio) Plantillas, posiblemente para generar correos, PDFs o vistas HTML estáticas.
*   **`scripts/`**: (Directorio) Scripts utilitarios (migraciones, tareas programadas).

---

## 4. frap_backend/ (Base de Datos)
*Contiene la definición del esquema y datos iniciales de la base de datos central.*

*   **`Frap_Final.sql`** y **`frap.sql`**: Scripts en lenguaje SQL puro. Contienen sentencias `CREATE TABLE`, relaciones de llaves foráneas (`FOREIGN KEY`), y posiblemente sentencias `INSERT` para poblar la base de datos con información base (catálogos). Definen toda la estructura de datos que comparten los tres backends.

---

## 5. frontend_mobileapp/ (App Móvil / React Native + Expo)
*La aplicación cliente (frontend) que usarán los paramédicos en campo.*

*   **`frap_frontend/FrapApp/`**: Raíz del proyecto móvil.
    *   **`app.json`**: Archivo de configuración central de Expo. Define el nombre de la app ("FrapApp"), íconos, versión, color de la pantalla de carga (splash screen), y configuraciones específicas tanto para Android como para la versión web. También habilita el nuevo motor arquitectónico de React Native y *Typed Routes* (Expo Router).
    *   **`package.json`**: Dependencias del frontend. Muestra las librerías de interfaz de usuario, navegación (Expo Router) y utilidades instaladas.
    *   **`tsconfig.json`**: Configuración de TypeScript.
    *   **`app/`**: Directorio principal de pantallas (utilizando Expo Router para navegación basada en archivos).
        *   `_layout.tsx`: Define el *wrapper* o diseño común de las pantallas de la app.
        *   `index.js`: Pantalla de inicio de la aplicación o validación de autenticación.
        *   `signUp.js`: Pantalla de registro.
        *   `home.js`: Pantalla principal una vez que el usuario ha iniciado sesión.
        *   `frap.js`: Contenedor principal del formulario FRAP, que probablemente engloba múltiples secciones.
    *   **`frap_sections/`**: Componentes individuales que conforman el formulario FRAP. Cada archivo representa una pestaña o sección del reporte paramédico:
        *   `AnatomicId.js`: Identificación anatómica (posiblemente un gráfico del cuerpo para marcar lesiones).
        *   `ESCGW.js`: Probablemente se refiera a la Escala de Coma de Glasgow (Evaluación neurológica).
        *   `General.js`: Datos generales del servicio (hora, lugar, unidad).
        *   `Injury.js`: Tipos de lesiones.
        *   `Notes.js`: Notas adicionales y observaciones.
        *   `Patient.js`: Información personal y demográfica del paciente.
        *   `Pictures.js`: Interfaz para capturar y adjuntar fotografías al reporte.
        *   `Pupils.js`: Evaluación de las pupilas (tamaño, reactividad).
        *   `SaveButton.js`: Componente del botón para enviar o guardar el reporte.
        *   `Signature.js`: Interfaz tipo "canvas" para que el paciente o paramédico firme el reporte.
        *   `Supplies.js`: Registro de insumos y medicamentos consumidos durante la atención.
        *   `Transportation.js`: Detalles sobre el traslado (hospital de destino, condiciones).
        *   `Vitals.js`: Signos vitales (presión arterial, frecuencia cardíaca, etc.).
        *   `Witness.js`: Información de testigos o respondientes iniciales.
    *   **`assets/`**: Imágenes, íconos y otros recursos multimedia estáticos (ej. logotipos, splash screen).
