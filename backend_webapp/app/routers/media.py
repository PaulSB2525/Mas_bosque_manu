from fastapi import APIRouter, Depends, HTTPException, Response
from sqlalchemy.orm import Session

from app.databases.connection import get_db
from app.models.reporte import Reporte

router = APIRouter(
    prefix="/media",
    tags=["Media"]
)

def obtener_firma(reporte_id: int, campo: str, db: Session):
    reporte = db.query(Reporte).filter(Reporte.id_reporte == reporte_id).first()
    firma = getattr(reporte, campo, None) if reporte else None
    if not firma:
        raise HTTPException(404, "Firma no encontrada")
    return Response(content=firma, media_type="image/png")

@router.get("/reportes/{reporte_id}/firma-operador")
def firma_operador(reporte_id: int, db: Session = Depends(get_db)):
    return obtener_firma(reporte_id, "firma_operador", db)

@router.get("/reportes/{reporte_id}/firma-paciente")
def firma_paciente(reporte_id: int, db: Session = Depends(get_db)):
    return obtener_firma(reporte_id, "firma_paciente", db)

@router.get("/reportes/{reporte_id}/firma-testigo")
def firma_testigo(reporte_id: int, db: Session = Depends(get_db)):
    return obtener_firma(reporte_id, "firma_testigo", db)