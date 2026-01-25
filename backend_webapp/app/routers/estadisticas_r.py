from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.databases.connection import get_db
from app.services.estadisticas_services import (
    # Pacientes
    total_pacientes,
    pacientes_por_genero,
    promedio_edad_pacientes,
    pacientes_por_rango_edad,

    # Patologías y alergias
    top_patologias,
    top_alergias,

    # Reportes
    total_reportes,
    reportes_por_periodo,
    reportes_traslado_aceptado_vs_rechazado,
    reportes_con_firmas_completas,
    reportes_sin_observaciones,

    # Gravedad
    reportes_por_gravedad,
    gravedad_promedio,

    # Lesiones y anatomía
    lesiones_mas_frecuentes,
    regiones_anatomicas_mas_afectadas,

    # Insumos y medicamentos
    insumos_mas_utilizados,
    medicamentos_mas_administrados,

    # Ubicación
    reportes_por_lugar
)

router = APIRouter(
    prefix="/estadisticas",
    tags=["Estadísticas"]
)

# =========================
# 🧑‍⚕️ PACIENTES
# =========================

@router.get("/pacientes/total")
def get_total_pacientes(db: Session = Depends(get_db)):
    return {"total": total_pacientes(db)}


@router.get("/pacientes/genero")
def get_pacientes_por_genero(db: Session = Depends(get_db)):
    return pacientes_por_genero(db)


@router.get("/pacientes/edad/promedio")
def get_promedio_edad(db: Session = Depends(get_db)):
    return {"promedio": promedio_edad_pacientes(db)}


@router.get("/pacientes/edad/rangos")
def get_pacientes_por_rango(db: Session = Depends(get_db)):
    return pacientes_por_rango_edad(db)


# =========================
# 🦠 PATOLOGÍAS Y ALERGIAS
# =========================

@router.get("/patologias/top")
def get_top_patologias(db: Session = Depends(get_db)):
    return top_patologias(db)


@router.get("/alergias/top")
def get_top_alergias(db: Session = Depends(get_db)):
    return top_alergias(db)


# =========================
# 📄 REPORTES
# =========================

@router.get("/reportes/total")
def get_total_reportes(db: Session = Depends(get_db)):
    return {"total": total_reportes(db)}


@router.get("/reportes/periodo")
def get_reportes_por_periodo(
    periodo: str = "month",
    db: Session = Depends(get_db)
):
    """
    periodo: day | week | month | year
    """
    return reportes_por_periodo(db, periodo)


@router.get("/reportes/traslados")
def get_reportes_traslados(db: Session = Depends(get_db)):
    return reportes_traslado_aceptado_vs_rechazado(db)


@router.get("/reportes/firmas")
def get_reportes_firmas(db: Session = Depends(get_db)):
    return {"con_firma_completa": reportes_con_firmas_completas(db)}


@router.get("/reportes/sin-observaciones")
def get_reportes_sin_observaciones(db: Session = Depends(get_db)):
    return {"total": reportes_sin_observaciones(db)}


# =========================
# 🧠 GRAVEDAD
# =========================

@router.get("/gravedad/distribucion")
def get_gravedad_distribucion(db: Session = Depends(get_db)):
    return reportes_por_gravedad(db)


@router.get("/gravedad/promedio")
def get_gravedad_promedio(db: Session = Depends(get_db)):
    return {"promedio": gravedad_promedio(db)}


# =========================
# 🩸 LESIONES Y ANATOMÍA
# =========================

@router.get("/lesiones/top")
def get_lesiones_top(db: Session = Depends(get_db)):
    return lesiones_mas_frecuentes(db)


@router.get("/anatomia/top")
def get_anatomia_top(db: Session = Depends(get_db)):
    return regiones_anatomicas_mas_afectadas(db)


# =========================
# 💊 INSUMOS Y MEDICAMENTOS
# =========================

@router.get("/insumos/top")
def get_insumos_top(db: Session = Depends(get_db)):
    return insumos_mas_utilizados(db)


@router.get("/medicamentos/top")
def get_medicamentos_top(db: Session = Depends(get_db)):
    return medicamentos_mas_administrados(db)


# =========================
# 📍 UBICACIÓN
# =========================

@router.get("/lugares")
def get_reportes_por_lugar(db: Session = Depends(get_db)):
    return reportes_por_lugar(db)