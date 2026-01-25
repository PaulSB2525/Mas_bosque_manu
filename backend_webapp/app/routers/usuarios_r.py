from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.databases.connection import get_db
from app.models.paramedico import Paramedico

router = APIRouter(prefix="/paramedicos", tags=["Paramédicos"])

# ============================================================
#                        PARAMÉDICOS
# ============================================================

@router.get("/")
def obtener_paramedicos(db: Session = Depends(get_db)):
    return db.query(Paramedico).all()


@router.get("/{id_paramedico}")
def obtener_paramedico(id_paramedico: int, db: Session = Depends(get_db)):
    p = db.query(Paramedico).filter(Paramedico.id_paramedico == id_paramedico).first()
    if not p:
        raise HTTPException(404, "Paramédico no encontrado")
    return p


@router.post("/")
def crear_paramedico(data: dict, db: Session = Depends(get_db)):
    try:
        p = Paramedico(**data)
    except Exception as e:
        raise HTTPException(400, f"Faltan campos o valores inválidos: {e}")

    db.add(p)
    db.commit()
    db.refresh(p)
    return p


@router.put("/{id_paramedico}")
def actualizar_paramedico(id_paramedico: int, data: dict, db: Session = Depends(get_db)):
    p = db.query(Paramedico).filter(Paramedico.id_paramedico == id_paramedico).first()
    if not p:
        raise HTTPException(404, "Paramédico no encontrado")

    for k, v in data.items():
        setattr(p, k, v)

    db.commit()
    db.refresh(p)
    return p


@router.delete("/{id_paramedico}")
def eliminar_paramedico(id_paramedico: int, db: Session = Depends(get_db)):
    p = db.query(Paramedico).filter(Paramedico.id_paramedico == id_paramedico).first()
    if not p:
        raise HTTPException(404, "Paramédico no encontrado")

    db.delete(p)
    db.commit()
    return {"mensaje": "Paramédico eliminado"}