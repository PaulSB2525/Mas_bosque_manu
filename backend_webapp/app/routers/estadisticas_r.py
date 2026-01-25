from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.databases.connection import get_db
from app.services.estadisticas_services import (
    total_pacientes,
    pacientes_por_genero,
    promedio_edad_pacientes,
    pacientes_por_rango_edad,
    top_patologias,
    top_alergias,
    total_reportes,
    reportes_por_periodo,
    reportes_traslado_aceptado_vs_rechazado,
    reportes_con_firmas_completas,
    reportes_sin_observaciones,
    reportes_por_gravedad,
    gravedad_promedio,
    lesiones_mas_frecuentes,
    regiones_anatomicas_mas_afectadas,
    insumos_mas_utilizados,
    medicamentos_mas_administrados,
    reportes_por_lugar
)

router = APIRouter(
    prefix="/estadisticas",
    tags=["Estadísticas"]
)

# PACIENTES
@router.get("/pacientes/total")
def pacientes_total(db: Session = Depends(get_db)):
    return {"total": total_pacientes(db)}

@router.get("/pacientes/genero")
def pacientes_genero(db: Session = Depends(get_db)):
    return pacientes_por_genero(db)

@router.get("/pacientes/edad/promedio")
def pacientes_edad_promedio(db: Session = Depends(get_db)):
    return {"promedio": promedio_edad_pacientes(db)}

@router.get("/pacientes/edad/rangos")
def pacientes_edad_rangos(db: Session = Depends(get_db)):
    return pacientes_por_rango_edad(db)

# PATOLOGÍAS / ALERGIAS
@router.get("/patologias/top")
def patologias_top(db: Session = Depends(get_db)):
    return top_patologias(db)

@router.get("/alergias/top")
def alergias_top(db: Session = Depends(get_db)):
    return top_alergias(db)

# REPORTES
@router.get("/reportes/total")
def reportes_total(db: Session = Depends(get_db)):
    return {"total": total_reportes(db)}

@router.get("/reportes/periodo")
def reportes_periodo(periodo: str = "month", db: Session = Depends(get_db)):
    return reportes_por_periodo(db, periodo)

@router.get("/reportes/traslados")
def reportes_traslados(db: Session = Depends(get_db)):
    return reportes_traslado_aceptado_vs_rechazado(db)

@router.get("/reportes/firmas")
def reportes_firmas(db: Session = Depends(get_db)):
    return {"total": reportes_con_firmas_completas(db)}

@router.get("/reportes/sin-observaciones")
def reportes_sin_obs(db: Session = Depends(get_db)):
    return {"total": reportes_sin_observaciones(db)}

# GRAVEDAD
@router.get("/gravedad/distribucion")
def gravedad_dist(db: Session = Depends(get_db)):
    return reportes_por_gravedad(db)

@router.get("/gravedad/promedio")
def gravedad_avg(db: Session = Depends(get_db)):
    return {"promedio": gravedad_promedio(db)}

# INSUMOS / MEDICAMENTOS
@router.get("/insumos/top")
def insumos_top(db: Session = Depends(get_db)):
    return insumos_mas_utilizados(db)

@router.get("/medicamentos/top")
def medicamentos_top(db: Session = Depends(get_db)):
    return medicamentos_mas_administrados(db)

# UBICACIÓN
@router.get("/lugares")
def reportes_lugar(db: Session = Depends(get_db)):
    return reportes_por_lugar(db)