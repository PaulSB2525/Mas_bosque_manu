from fastapi import APIRouter, Depends, HTTPException, Response
from sqlalchemy.orm import Session

from app.databases.connection import get_db
from app.models.reporte import Reporte

router = APIRouter(
    prefix="/media",
    tags=["Media"]
)

@router.get("/reportes/{reporte_id}/firma-operador")
def get_firma_operador(reporte_id: int, db: Session = Depends(get_db)):
    reporte = (
        db.query(Reporte)
        .filter(Reporte.id_reporte == reporte_id)
        .first()
    )

    if not reporte or not reporte.firma_operador:
        raise HTTPException(status_code=404, detail="Firma del operador no encontrada")

    return Response(
        content=reporte.firma_operador,
        media_type="image/png"
    )
    
@router.get("/reportes/{reporte_id}/firma-paciente")
def get_firma_paciente(
    reporte_id: int,
    db: Session = Depends(get_db)
):
    reporte = (
        db.query(Reporte)
        .filter(Reporte.id_reporte == reporte_id)
        .first()
    )

    if not reporte or not reporte.firma_paciente:
        raise HTTPException(status_code=404, detail="Firma del paciente no encontrada")

    return Response(
        content=reporte.firma_paciente,
        media_type="image/png"
    )

@router.get("/reportes/{reporte_id}/firma-testigo")
def get_firma_testigo(
    reporte_id: int,
    db: Session = Depends(get_db)
):
    reporte = (
        db.query(Reporte)
        .filter(Reporte.id_reporte == reporte_id)
        .first()
    )

    if not reporte or not reporte.firma_testigo:
        raise HTTPException(status_code=404, detail="Firma del testigo no encontrada")

    return Response(
        content=reporte.firma_testigo,
        media_type="image/png"
    )