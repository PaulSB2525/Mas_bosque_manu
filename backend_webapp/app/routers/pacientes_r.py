from typing import Optional, List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.databases.connection import get_db
from app.schemas.pacientes import PacienteResponse
from app.services.pacientes_services import (
    obtener_pacientes,
    obtener_paciente_por_id,
    buscar_paciente_por_nombre
)

router = APIRouter(
    prefix="/pacientes",
    tags=["Pacientes"]
)

@router.get("/buscar/nombre", response_model=List[PacienteResponse])
def buscar_paciente(nombre: Optional[str] = None, db: Session = Depends(get_db)):
    return buscar_paciente_por_nombre(db, nombre)

@router.get("/{id_paciente}", response_model=PacienteResponse)
def obtener_paciente(id_paciente: int, db: Session = Depends(get_db)):
    paciente = obtener_paciente_por_id(db, id_paciente)
    if not paciente:
        raise HTTPException(404, "Paciente no encontrado")
    return paciente

@router.get("/", response_model=List[PacienteResponse])
def listar_pacientes(db: Session = Depends(get_db)):
    return obtener_pacientes(db)