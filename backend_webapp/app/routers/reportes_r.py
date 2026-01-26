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

@router.get("/")
def obtener_reportes(db: Session = Depends(get_db)):
    return db.query(Reporte).all()

@router.get("/{reporte_id}")
def obtener_reporte(reporte_id: int, db: Session = Depends(get_db)):
    reporte = (
        db.query(Reporte)
        .filter(Reporte.id_Reporte == reporte_id)
        .first()
    )
    if not reporte:
        raise HTTPException(404, "Reporte no encontrado")
    return reporte

@router.get("/{reporte_id}/anatomica")
def anatomica(reporte_id: int, db: Session = Depends(get_db)):
    return (
        db.query(ReporteAnatomica)
        .filter(ReporteAnatomica.reporte_id == reporte_id)
        .all()
    )

@router.get("/{reporte_id}/insumos")
def insumos(reporte_id: int, db: Session = Depends(get_db)):
    return (
        db.query(ReporteInsumo)
        .filter(ReporteInsumo.reporte_id == reporte_id)
        .all()
    )

@router.get("/{reporte_id}/lesiones")
def lesiones(reporte_id: int, db: Session = Depends(get_db)):
    return (
        db.query(ReporteLesion)
        .filter(ReporteLesion.reporte_id == reporte_id)
        .all()
    )

@router.get("/{reporte_id}/pupilas")
def pupilas(reporte_id: int, db: Session = Depends(get_db)):
    return (
        db.query(ReportePupilas)
        .filter(ReportePupilas.reporte_id == reporte_id)
        .all()
    )

@router.get("/{reporte_id}/pdf")
def descargar_pdf(reporte_id: int, db: Session = Depends(get_db)):
    reporte = (
        db.query(Reporte)
        .filter(Reporte.id_Reporte == reporte_id)
        .first()
    )
    if not reporte:
        raise HTTPException(404, "Reporte no encontrado")

    lesiones = db.query(ReporteLesion).filter_by(reporte_id=reporte_id).all()
    insumos = db.query(ReporteInsumo).filter_by(reporte_id=reporte_id).all()
    anatomicas = db.query(ReporteAnatomica).filter_by(reporte_id=reporte_id).all()

    pdf_path = generar_pdf_reporte(
        reporte=reporte,
        paciente=None,  # luego lo conectamos bien
        lesiones=lesiones,
        insumos=insumos,
        anatomicas=anatomicas
    )

    return FileResponse(
        pdf_path,
        media_type="application/pdf",
        filename=f"reporte_{reporte_id}.pdf"
    )