from sqlalchemy.orm import Session
from app.models.reporte import Reporte
from app.models.reporte_anatomica import ReporteAnatomica
from app.models.reporte_insumo import ReporteInsumo
from app.models.reporte_lesion import ReporteLesion
from app.models.reporte_pupilas import ReportePupilas

def obtener_reportes(db: Session):
    return db.query(Reporte).all()

def obtener_reporte(db: Session, id_reporte: int):
    return db.query(Reporte).filter(Reporte.id_Reporte == id_reporte).first()

def obtener_reporte_completo(db: Session, id_reporte: int):
    reporte = obtener_reporte(db, id_reporte)
    if not reporte:
        return None

    return {
        "reporte": reporte,
        "anatomicas": db.query(ReporteAnatomica).filter(
            ReporteAnatomica.id_reporte == id_reporte).all(),
        "insumos": db.query(ReporteInsumo).filter(
            ReporteInsumo.id_reporte == id_reporte).all(),
        "lesiones": db.query(ReporteLesion).filter(
            ReporteLesion.id_reporte == id_reporte).all(),
        "pupilas": db.query(ReportePupilas).filter(
            ReportePupilas.id_reporte == id_reporte).all(),
    }