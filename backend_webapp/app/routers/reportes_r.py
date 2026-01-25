from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import FileResponse
from sqlalchemy.orm import Session

from app.databases.connection import get_db
from app.models.reporte import Reporte
from app.models.reporte_anatomica import ReporteAnatomica
from app.models.reporte_insumo import ReporteInsumo
from app.models.reporte_lesion import ReporteLesion
from app.models.reporte_pupilas import ReportePupilas
from app.services.pdf_services import generar_pdf_reporte

router = APIRouter(
    prefix="/reportes",
    tags=["Reportes"]
)

@router.get("")
def obtener_reportes(db: Session = Depends(get_db)):
    return db.query(Reporte).all()

@router.get("/{reporte_id}")
def obtener_reporte(reporte_id: int, db: Session = Depends(get_db)):
    reporte = db.query(Reporte).filter(Reporte.id_reporte == reporte_id).first()
    if not reporte:
        raise HTTPException(404, "Reporte no encontrado")
    return reporte

@router.get("/{reporte_id}/anatomica")
def anatomica(reporte_id: int, db: Session = Depends(get_db)):
    return db.query(ReporteAnatomica).filter_by(reporte_id=reporte_id).all()

@router.get("/{reporte_id}/insumos")
def insumos(reporte_id: int, db: Session = Depends(get_db)):
    return db.query(ReporteInsumo).filter_by(reporte_id=reporte_id).all()

@router.get("/{reporte_id}/lesiones")
def lesiones(reporte_id: int, db: Session = Depends(get_db)):
    return db.query(ReporteLesion).filter_by(reporte_id=reporte_id).all()

@router.get("/{reporte_id}/pupilas")
def pupilas(reporte_id: int, db: Session = Depends(get_db)):
    return db.query(ReportePupilas).filter_by(reporte_id=reporte_id).all()

@router.get("/{reporte_id}/pdf")
def descargar_pdf(reporte_id: int, db: Session = Depends(get_db)):
    reporte = db.query(Reporte).filter_by(id_reporte=reporte_id).first()
    if not reporte:
        raise HTTPException(404, "Reporte no encontrado")

    pdf_path = generar_pdf_reporte(
        reporte=reporte,
        paciente=reporte.paciente,
        lesiones=reporte.lesiones,
        insumos=reporte.insumos,
        anatomicas=reporte.anatomicas
    )

    return FileResponse(
        pdf_path,
        media_type="application/pdf",
        filename=f"reporte_{reporte_id}.pdf"
    )