from typing import Optional
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.databases.connection import get_db
from app.services.pacientes_services import (
    obtener_pacientes,
    obtener_paciente_por_id,
    buscar_paciente_por_nombre
)

router = APIRouter(
    prefix="/pacientes",
    tags=["Pacientes"]
)

# -------------------------------------------------------
# Buscar pacientes por nombre
# -------------------------------------------------------
@router.get("/buscar/nombre")
def buscar_paciente(
    nombre: Optional[str] = None,
    db: Session = Depends(get_db)
):
    return buscar_paciente_por_nombre(db, nombre)


# -------------------------------------------------------
# Obtener paciente por ID
# -------------------------------------------------------
@router.get("/{id_paciente}")
def obtener_paciente(id_paciente: int, db: Session = Depends(get_db)):
    paciente = obtener_paciente_por_id(db, id_paciente)
    if not paciente:
        raise HTTPException(
            status_code=404,
            detail="Paciente no encontrado"
        )
    return paciente


# -------------------------------------------------------
# Obtener todos los pacientes
# -------------------------------------------------------
@router.get("/")
def listar_pacientes(db: Session = Depends(get_db)):
    return obtener_pacientes(db)