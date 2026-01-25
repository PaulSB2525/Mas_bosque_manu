from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.databases.connection import get_db
from app.services.catalogos_services import (
    obtener_alergias,
    obtener_patologias,
    obtener_pupilas,
    obtener_nivel_conciencia,
    obtener_anatomica,
    obtener_lugares,
    obtener_signos_vitales
)

router = APIRouter(
    prefix="/catalogos",
    tags=["Catálogos"]
)

@router.get("/alergias")
def get_alergias(db: Session = Depends(get_db)):
    return obtener_alergias(db)

@router.get("/patologias")
def get_patologias(db: Session = Depends(get_db)):
    return obtener_patologias(db)

@router.get("/pupilas")
def get_pupilas(db: Session = Depends(get_db)):
    return obtener_pupilas(db)

@router.get("/nivel-conciencia")
def get_nivel_conciencia(db: Session = Depends(get_db)):
    return obtener_nivel_conciencia(db)

@router.get("/anatomica")
def get_anatomica(db: Session = Depends(get_db)):
    return obtener_anatomica(db)

@router.get("/lugares")
def get_lugares(db: Session = Depends(get_db)):
    return obtener_lugares(db)

@router.get("/signos-vitales")
def get_signos_vitales(db: Session = Depends(get_db)):
    return obtener_signos_vitales(db)