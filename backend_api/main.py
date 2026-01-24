from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.api.router import api_router

app = FastAPI(
    title="Mas Bosque Manu API",
    version="1.0.0",
    description="Backend central para WebApp y App móvil"
)

# CORS (para webapp y móvil)
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Rutas principales
app.include_router(api_router, prefix="/api")

# 🔎 Endpoint CLAVE para saber que conectaste bien
@app.get("/health", tags=["Health"])
def health_check():
    return {
        "status": "ok",
        "service": "backend_api",
        "environment": settings.ENVIRONMENT,
        "version": app.version
    }