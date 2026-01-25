from typing import List, Optional
from sqlalchemy.orm import Session
from app.models.paciente import Paciente
from sqlalchemy import func

def _get_or_none(db: Session, id_paciente: int) -> Optional[Paciente]:
    """Devuelve el paciente por id o None si no existe."""
    return db.query(Paciente).filter(Paciente.id_Paciente == id_paciente).first()

def obtener_pacientes(db: Session) -> List[Paciente]:
    """Devuelve todos los pacientes."""
    return db.query(Paciente).all()


def obtener_paciente_por_id(db: Session, id_paciente: int) -> Optional[Paciente]:
    """Devuelve un paciente por su id o None."""
    return _get_or_none(db, id_paciente)


def buscar_paciente_por_nombre(db: Session, nombre: Optional[str]) -> List[Paciente]:
    """
    Busca pacientes por nombre. Si `nombre` es None o vacío, devuelve lista vacía.
    Usa ilike para búsqueda case-insensitive.
    """
    if not nombre:
        return []

    # si ilike falla en sqlite, podemos usar lower+like:
    # return db.query(Paciente).filter(func.lower(Paciente.nombre).like(f"%{nombre.lower()}%")).all()
    return db.query(Paciente).filter(Paciente.nombre.ilike(f"%{nombre}%")).all()