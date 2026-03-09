# Documentación del Repositorio Mas_bosque_manu

Este repositorio contiene el código fuente para una aplicación FRAP (Formato de Registro de Atención Prehospitalaria) digital, diseñada para la organización sin fines de lucro "Más Bosque Manu". El sistema registra datos de accidentes, acciones de los socorristas y ubicaciones.

El proyecto está compuesto por múltiples componentes tanto para backend como frontend, utilizando diversas tecnologías.

## Estructura General

- **`backend_api/`**: Un servicio backend desarrollado en Python con FastAPI.
- **`backend_mobileapp/`**: Un servicio backend desarrollado en Node.js con Express, destinado a la aplicación móvil.
- **`backend_webapp/`**: Un servicio backend desarrollado en Python con FastAPI, destinado a la aplicación web de gestión.
- **`frap_backend/`**: Contiene esquemas y scripts de bases de datos SQL.
- **`frontend_mobileapp/`**: Contiene el código fuente de la aplicación móvil (frontend).

---

## 1. backend_api
Servicio desarrollado en Python usando **FastAPI**. Actúa como una API central u orquestador para otros servicios.

**Archivos Principales:**
- `main.py`: Punto de entrada de la aplicación FastAPI. Configura CORS y monta el enrutador principal (`app.api.router`). Expone un endpoint `/health`.
- `requirements.txt`: Dependencias del proyecto (fastapi, uvicorn, sqlalchemy, pymysql, python-dotenv, pydantic-settings).

---

## 2. backend_mobileapp
Servicio desarrollado en Node.js usando **Express**. Provee la API específicamente para la aplicación móvil.

**Archivos Principales:**
- `server.js`: Configura el servidor Express, middleware de seguridad (helmet, cors, rate-limit) y enrutadores.
- `package.json`: Dependencias (express, cors, bcrypt, jsonwebtoken, mysql2, zod, dotenv).
- Rutas expuestas bajo `/api/`:
  - `/admins`
  - `/pacientes`
  - `/paramedicos`
  - `/reportes`
  - `/authParamedicos`

---

## 3. backend_webapp
Servicio desarrollado en Python usando **FastAPI**. Provee la API para la aplicación web administrativa o de expedientes médicos.

**Archivos Principales:**
- `app/main.py`: Punto de entrada que configura CORS, conexión a la base de datos al inicio (`startup_event`), y monta diversos enrutadores.
- Rutas montadas:
  - `pacientes_r`
  - `reportes_r`
  - `usuarios_r`
  - `insumo_medicamentos_r`
  - `catalogos_r`
  - `media`
  - `estadisticas_r`

---

## 4. frap_backend
Contiene los scripts de definición de la base de datos relacional.

**Archivos Principales:**
- `Frap_Final.sql` / `frap.sql`: Scripts SQL para crear la estructura de la base de datos.

---

## 5. frontend_mobileapp
Contiene la aplicación móvil, construida muy probablemente con **React Native / Expo** (basado en la presencia de `app.json`, `tsconfig.json` y la estructura de carpetas).

**Directorio Principal:** `frap_frontend/FrapApp/`
- `app/`: Lógica principal de la aplicación.
- `assets/`: Recursos estáticos (imágenes, fuentes).
- `frap_sections/`: Componentes específicos de las secciones del formulario FRAP.
- `package.json`, `app.json`, `config.js`: Configuración del proyecto móvil.

---

## Tecnologías Utilizadas

- **Backend (Python):** FastAPI, SQLAlchemy, PyMySQL, Uvicorn, Pydantic.
- **Backend (Node.js):** Express, CORS, Bcrypt, JWT, MySQL2, Zod.
- **Frontend (Móvil):** React Native / Expo (presumiblemente), TypeScript/JavaScript.
- **Base de Datos:** MySQL / MariaDB (basado en los conectores `pymysql` y `mysql2`).
