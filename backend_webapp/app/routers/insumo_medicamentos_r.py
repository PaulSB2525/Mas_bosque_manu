from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.databases.connection import get_db

from app.models.insumo import Insumo
from app.models.medicamento import Medicamento

# =====================================================
#                   MEDICAMENTOS
# =====================================================

medicamentos_router = APIRouter(
    prefix="/medicamentos",
    tags=["Medicamentos"]
)

@medicamentos_router.get("/")
def obtener_medicamentos(db: Session = Depends(get_db)):
    return db.query(Medicamento).all()

@medicamentos_router.get("/{id_medicamento}")
def obtener_medicamento(id_medicamento: int, db: Session = Depends(get_db)):
    med = (
        db.query(Medicamento)
        .filter(Medicamento.id_Medicamento == id_medicamento)
        .first()
    )
    if not med:
        raise HTTPException(status_code=404, detail="Medicamento no encontrado")
    return med


# =====================================================
#                       INSUMOS
# =====================================================

insumos_router = APIRouter(
    prefix="/insumos",
    tags=["Insumos"]
)

@insumos_router.get("/")
def obtener_insumos(db: Session = Depends(get_db)):
    return db.query(Insumo).all()

@insumos_router.get("/{id_insumo}")
def obtener_insumo(id_insumo: int, db: Session = Depends(get_db)):
    ins = (
        db.query(Insumo)
        .filter(Insumo.id_Insumo == id_insumo)
        .first()
    )
    if not ins:
        raise HTTPException(status_code=404, detail="Insumo no encontrado")
    return ins