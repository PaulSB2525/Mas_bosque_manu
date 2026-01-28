from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.databases.connection import get_db

from app.models.reporte import Reporte
from app.models.paciente import Paciente
from app.models.lugar import Lugar
from app.models.signos_vitales import SignosVitales
from app.models.nivel_conciencia import Nivel_conciencia
from app.models.reporte_lesion import ReporteLesion
from app.models.reporte_anatomica import ReporteAnatomica
from app.models.reporte_insumo import ReporteInsumo
from app.models.reporte_pupilas import ReportePupilas
from app.models.insumo import Insumo
from app.models.lesion import Lesion
from app.models.anatomica import Anatomica
from app.models.pupilas import Pupilas

from app.schemas.reportes import (
    ReporteResponse,
    PacienteOut,
    UnidadOut,
    SignosVitalesOut,
    NivelConcienciaOut,
    InsumoOut,
    FirmasOut
)

router = APIRouter(
    prefix="/reportes",
    tags=["Reportes"]
)

GENERO_MAP = {
    1: "Masculino",
    2: "Femenino",
}

@router.get("/", response_model=list[ReporteResponse])
def obtener_reportes(db: Session = Depends(get_db)):
    reportes_db = db.query(Reporte).all()
    result = []

    for r in reportes_db:
        paciente_db = (
            db.query(Paciente)
            .filter(Paciente.id_Paciente == r.paciente_id)
            .first()
        )

        paciente = PacienteOut(
            nombre=paciente_db.nombre,
            edad=paciente_db.edad,
            genero=GENERO_MAP.get(paciente_db.genero, "Desconocido")
        )

        lugar_db = (
            db.query(Lugar)
            .filter(Lugar.id_Lugar == r.lugar_id)
            .first()
        )
        lugar = lugar_db.nombre if lugar_db else "Desconocido"

        unidad = UnidadOut(
            numero=r.numero_unidad,
            operador=r.nombre_operador
        )

        signos_db = (
            db.query(SignosVitales)
            .filter(SignosVitales.id_Signos == r.signos_id)
            .first()
        )

        signos = SignosVitalesOut(
            temperatura=signos_db.Temp,
            fc=signos_db.FC,
            fr=signos_db.FR,
            spo2=signos_db.SpO2,
            ta=signos_db.T_A,
            glu=signos_db.GLU
        )

        nivel_db = (
            db.query(Nivel_conciencia)
            .filter(
                Nivel_conciencia.id_Nivel_Conciencia
                == r.nivel_conciencia_id
            )
            .first()
        )

        nivel = NivelConcienciaOut(
            ocular=nivel_db.ocular,
            verbal=nivel_db.verbal,
            motora=nivel_db.motora,
            total=nivel_db.total
        )

        insumos_db = (
            db.query(ReporteInsumo, Insumo)
            .join(
                Insumo,
                Insumo.id_Insumo == ReporteInsumo.insumo_id
            )
            .filter(ReporteInsumo.reporte_id == r.id_Reporte)
            .all()
        )

        insumos = [
            InsumoOut(nombre=i.nombre, cantidad=i.cantidad)
            for ri, i in insumos_db
        ]

        lesiones_db = (
            db.query(ReporteLesion, Lesion)
            .join(
                Lesion,
                Lesion.id_Lesion == ReporteLesion.lesion_id
            )
            .filter(ReporteLesion.reporte_id == r.id_Reporte)
            .all()
        )

        lesiones = [l.nombre for rl, l in lesiones_db]

        anatomica_db = (
            db.query(ReporteAnatomica, Anatomica)
            .join(
                Anatomica,
                Anatomica.id_Anatomica
                == ReporteAnatomica.anatomica_id
            )
            .filter(ReporteAnatomica.reporte_id == r.id_Reporte)
            .all()
        )

        regiones = [a.nombre for ra, a in anatomica_db]

        pupilas_db = (
            db.query(ReportePupilas, Pupilas)
            .join(
                Pupilas,
                Pupilas.id_Pupilas == ReportePupilas.pupilas_id
            )
            .filter(ReportePupilas.reporte_id == r.id_Reporte)
            .all()
        )

        pupilas = [p.nombre for rp, p in pupilas_db]

        firmas = FirmasOut(
            paciente=bool(r.firma_paciente),
            operador=bool(r.firma_operador),
            testigo=bool(r.firma_testigo)
        )

        reporte_out = ReporteResponse(
            id=r.id_Reporte,
            fechaHora=r.fecha_hora,
            paciente=paciente,
            lugar=lugar,
            unidad=unidad,
            signosVitales=signos,
            nivelConciencia=nivel,
            pupilas=pupilas,
            lesiones=lesiones,
            regionesAfectadas=regiones,
            insumos=insumos,
            alergias=[],
            medicamentos=[],
            patologias=[],
            trasladoAceptado=r.traslado_aceptado,
            observaciones=r.observaciones,
            recomendaciones=r.recomendaciones,
            firmas=firmas
        )

        result.append(reporte_out)

    return result