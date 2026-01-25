from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers.pacientes_r import router as paciente_router
from app.routers.reportes_r import router as reportes_router
from app.routers.usuarios_r import router as usuarios_router
from app.routers.insumo_medicamentos_r import router as insumos_router
from app.routers.catalogos_r import router as catalogos_router
from app.routers.media import router as media_router
from app.routers.estadisticas_r import router as estadisticas_router

# 👇 NUEVO
from app.databases.connection import test_connection

app = FastAPI(
    title="API de Expedientes Médicos",
    version="1.0.0"
)

# 👇 Verifica conexión a BD al iniciar el server
@app.on_event("startup")
def startup_event():
    test_connection()

origins = [
    "http://localhost:5173",
    "http://localhost:8000",
    "http:localhost:3000",
    "https://inspections-jones-initial-circles.trycloudflare.com",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],   # GET, POST, PUT, DELETE...
    allow_headers=["*"],
)
# Routers
app.include_router(paciente_router)
app.include_router(reportes_router)
app.include_router(usuarios_router)
app.include_router(insumos_router)
app.include_router(catalogos_router)
app.include_router(media_router)
app.include_router(estadisticas_router)

@app.get("/")
def root():
    return {"message": "API funcionando correctamente!!!"}