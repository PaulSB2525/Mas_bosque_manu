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

# ======================================================
# OBTENER TODOS LOS REPORTES
# ======================================================
@router.get("/")
def obtener_reportes(db: Session = Depends(get_db)):
    return db.query(Reporte).all()


# ======================================================
# OBTENER REPORTE POR ID
# ======================================================
@router.get("/{reporte_id}")
def obtener_reporte(reporte_id: int, db: Session = Depends(get_db)):
    reporte = (
        db.query(Reporte)
        .filter(Reporte.id_reporte == reporte_id)
        .first()
    )

    if not reporte:
        raise HTTPException(
            status_code=404,
            detail="Reporte no encontrado"
        )

    return reporte


# ======================================================
# OBTENER REGIONES ANATÓMICAS
# ======================================================
@router.get("/{reporte_id}/anatomica")
def obtener_anatomica(reporte_id: int, db: Session = Depends(get_db)):
    return (
        db.query(ReporteAnatomica)
        .filter(ReporteAnatomica.reporte_id == reporte_id)
        .all()
    )


# ======================================================
# OBTENER INSUMOS
# ======================================================
@router.get("/{reporte_id}/insumos")
def obtener_insumos(reporte_id: int, db: Session = Depends(get_db)):
    return (
        db.query(ReporteInsumo)
        .filter(ReporteInsumo.reporte_id == reporte_id)
        .all()
    )


# ======================================================
# OBTENER LESIONES
# ======================================================
@router.get("/{reporte_id}/lesiones")
def obtener_lesiones(reporte_id: int, db: Session = Depends(get_db)):
    return (
        db.query(ReporteLesion)
        .filter(ReporteLesion.reporte_id == reporte_id)
        .all()
    )


# ======================================================
# OBTENER PUPILAS
# ======================================================
@router.get("/{reporte_id}/pupilas")
def obtener_pupilas(reporte_id: int, db: Session = Depends(get_db)):
    return (
        db.query(ReportePupilas)
        .filter(ReportePupilas.reporte_id == reporte_id)
        .all()
    )


# ======================================================
# GENERAR Y DESCARGAR PDF
# ======================================================
@router.get("/{reporte_id}/pdf")
def descargar_pdf_reporte(
    reporte_id: int,
    db: Session = Depends(get_db)
):
    # 1️⃣ Obtener reporte
    reporte = (
        db.query(Reporte)
        .filter(Reporte.id_reporte == reporte_id)
        .first()
    )

    if not reporte:
        raise HTTPException(
            status_code=404,
            detail="Reporte no encontrado"
        )

    # 2️⃣ Relaciones
    paciente = reporte.paciente

    lesiones = (
        db.query(ReporteLesion)
        .filter(ReporteLesion.reporte_id == reporte_id)
        .all()
    )

    insumos = (
        db.query(ReporteInsumo)
        .filter(ReporteInsumo.reporte_id == reporte_id)
        .all()
    )

    anatomicas = (
        db.query(ReporteAnatomica)
        .filter(ReporteAnatomica.reporte_id == reporte_id)
        .all()
    )

    # 3️⃣ Generar PDF
    pdf_path = generar_pdf_reporte(
        reporte=reporte,
        paciente=paciente,
        lesiones=lesiones,
        insumos=insumos,
        anatomicas=anatomicas
    )

    # 4️⃣ Retornar archivo
    return FileResponse(
        pdf_path,
        media_type="application/pdf",
        filename=f"reporte_{reporte_id}.pdf"
    )