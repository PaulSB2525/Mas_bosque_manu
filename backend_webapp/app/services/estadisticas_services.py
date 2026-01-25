from sqlalchemy.orm import Session
from sqlalchemy import func, case

from app.models.reporte import Reporte
from app.models.paciente import Paciente
from app.models.nivel_conciencia import Nivel_conciencia
from app.models.lugar import Lugar

from app.models.paciente_patologia import PacientePatologia
from app.models.paciente_alergia import PacienteAlergia
from app.models.alergia import Alergia

from app.models.reporte_lesion import ReporteLesion
from app.models.lesion import Lesion

from app.models.reporte_anatomica import ReporteAnatomica
from app.models.anatomica import Anatomica

from app.models.reporte_insumo import ReporteInsumo
from app.models.insumo import Insumo

from app.models.paciente_medicamento import PacienteMedicamento
from app.models.medicamento import Medicamento


# =========================
# 🧑‍⚕️ PACIENTES
# =========================

def total_pacientes(db: Session):
    return db.query(func.count(Paciente.id_Paciente)).scalar()


def pacientes_por_genero(db: Session):
    return (
        db.query(
            Paciente.genero,
            func.count(Paciente.id_Paciente)
        )
        .group_by(Paciente.genero)
        .all()
    )


def promedio_edad_pacientes(db: Session):
    return db.query(func.avg(Paciente.edad)).scalar()


def pacientes_por_rango_edad(db: Session):
    return (
        db.query(
            case(
                (Paciente.edad < 18, "Menor de 18"),
                (Paciente.edad.between(18, 35), "18-35"),
                (Paciente.edad.between(36, 60), "36-60"),
                else_="Mayor de 60"
            ).label("rango_edad"),
            func.count(Paciente.id_Paciente)
        )
        .group_by("rango_edad")
        .all()
    )


# =========================
# 🦠 PATOLOGÍAS Y ALERGIAS
# =========================

def top_patologias(db: Session):
    """
    Retorna patologia_id y cuántas veces aparece
    """
    return (
        db.query(
            PacientePatologia.patologia_id,
            func.count(PacientePatologia.patologia_id)
        )
        .group_by(PacientePatologia.patologia_id)
        .order_by(func.count(PacientePatologia.patologia_id).desc())
        .all()
    )


def top_alergias(db: Session):
    return (
        db.query(
            Alergia.nombre,
            func.count(PacienteAlergia.alergia_id)
        )
        .join(Alergia, Alergia.id_Alergia == PacienteAlergia.alergia_id)
        .group_by(Alergia.nombre)
        .order_by(func.count(PacienteAlergia.alergia_id).desc())
        .all()
    )


# =========================
# 📄 REPORTES
# =========================

def total_reportes(db: Session):
    return db.query(func.count(Reporte.id_reporte)).scalar()


def reportes_por_periodo(db: Session, periodo="month"):
    return (
        db.query(
            func.date_trunc(periodo, Reporte.fecha_hora).label("periodo"),
            func.count(Reporte.id_reporte)
        )
        .group_by("periodo")
        .order_by("periodo")
        .all()
    )


def reportes_traslado_aceptado_vs_rechazado(db: Session):
    return (
        db.query(
            Reporte.translado_aceptado,
            func.count(Reporte.id_reporte)
        )
        .group_by(Reporte.translado_aceptado)
        .all()
    )


def reportes_con_firmas_completas(db: Session):
    return (
        db.query(func.count(Reporte.id_reporte))
        .filter(
            Reporte.firma_operador.isnot(None),
            Reporte.firma_paciente.isnot(None)
        )
        .scalar()
    )


def reportes_sin_observaciones(db: Session):
    return (
        db.query(func.count(Reporte.id_reporte))
        .filter(
            (Reporte.observaciones == "") | (Reporte.observaciones.is_(None))
        )
        .scalar()
    )


# =========================
# 🧠 GRAVEDAD (GCS)
# =========================

def reportes_por_gravedad(db: Session):
    return (
        db.query(
            Nivel_conciencia.total,
            func.count(Reporte.id_reporte)
        )
        .join(
            Reporte,
            Reporte.nivel_conciencia_id == Nivel_conciencia.id_Nivel_Conciencia
        )
        .group_by(Nivel_conciencia.total)
        .all()
    )


def gravedad_promedio(db: Session):
    return (
        db.query(func.avg(Nivel_conciencia.total))
        .join(
            Reporte,
            Reporte.nivel_conciencia_id == Nivel_conciencia.id_Nivel_Conciencia
        )
        .scalar()
    )


# =========================
# 🩸 LESIONES Y ANATOMÍA
# =========================

def lesiones_mas_frecuentes(db: Session):
    return (
        db.query(
            Lesion.nombre,
            func.count(ReporteLesion.lesion_id)
        )
        .join(ReporteLesion, ReporteLesion.lesion_id == Lesion.id_lesion)
        .group_by(Lesion.nombre)
        .order_by(func.count(ReporteLesion.lesion_id).desc())
        .all()
    )


def regiones_anatomicas_mas_afectadas(db: Session):
    return (
        db.query(
            Anatomica.nombre,
            func.count(ReporteAnatomica.anatomica_id)
        )
        .join(ReporteAnatomica, ReporteAnatomica.anatomica_id == Anatomica.id_Anatomica)
        .group_by(Anatomica.nombre)
        .order_by(func.count(ReporteAnatomica.anatomica_id).desc())
        .all()
    )


# =========================
# 💊 INSUMOS Y MEDICAMENTOS
# =========================

def insumos_mas_utilizados(db: Session):
    return (
        db.query(
            Insumo.nombre,
            func.count(ReporteInsumo.insumo_id)
        )
        .join(ReporteInsumo, ReporteInsumo.insumo_id == Insumo.id_Insumo)
        .group_by(Insumo.nombre)
        .order_by(func.count(ReporteInsumo.insumo_id).desc())
        .all()
    )


def medicamentos_mas_administrados(db: Session):
    return (
        db.query(
            Medicamento.nombre,
            func.count(PacienteMedicamento.medicamento_id)
        )
        .join(
            PacienteMedicamento,
            PacienteMedicamento.medicamento_id == Medicamento.id_Medicamento
        )
        .group_by(Medicamento.nombre)
        .order_by(func.count(PacienteMedicamento.medicamento_id).desc())
        .all()
    )


# =========================
# 📍 UBICACIÓN
# =========================

def reportes_por_lugar(db: Session):
    return (
        db.query(
            Lugar.nombre,
            func.count(Reporte.id_reporte)
        )
        .join(Reporte, Reporte.lugar_id == Lugar.id_Lugar)
        .group_by(Lugar.nombre)
        .order_by(func.count(Reporte.id_reporte).desc())
        .all()
    )