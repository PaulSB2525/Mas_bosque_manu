from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.databases.connection import get_db
from app.models.paramedico import Paramedico

router = APIRouter(
    prefix="/paramedicos",
    tags=["Paramédicos"]
)

@router.get("/")
def obtener_paramedicos(db: Session = Depends(get_db)):
    return db.query(Paramedico).all()

@router.get("/{id_paramedico}")
def obtener_paramedico(id_paramedico: int, db: Session = Depends(get_db)):
    p = (
        db.query(Paramedico)
        .filter(Paramedico.id_paramedico == id_paramedico)
        .first()
    )
    if not p:
        raise HTTPException(404, "Paramédico no encontrado")
    return p