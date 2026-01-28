import json
import os
import sys
from datetime import datetime

# -------------------------------------------------
# 🔧 Fix para que Python encuentre el paquete "app"
# -------------------------------------------------
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(BASE_DIR)

# -------------------------------------------------
# 🔧 Ruta absoluta al archivo reports.json
# -------------------------------------------------
JSON_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "reports.json")

from sqlalchemy.orm import Session
from app.databases.connection import SessionLocal

from app.models.paciente import Paciente
from app.models.lugar import Lugar
from app.models.signos_vitales import SignosVitales
from app.models.nivel_conciencia import Nivel_conciencia
from app.models.reporte import Reporte
from app.models.pupilas import Pupilas
from app.models.reporte_pupilas import ReportePupilas
from app.models.lesion import Lesion
from app.models.reporte_lesion import ReporteLesion
from app.models.anatomica import Anatomica
from app.models.reporte_anatomica import ReporteAnatomica
from app.models.insumo import Insumo
from app.models.reporte_insumo import ReporteInsumo

# -------------------------------------------------
# Mapeo temporal para género
# -------------------------------------------------
GENERO_MAP = {
    "Masculino": 1,
    "Femenino": 2
}

# -------------------------------------------------
# Utilidades
# -------------------------------------------------
def get_or_create(db: Session, model, **kwargs):
    instance = db.query(model).filter_by(**kwargs).first()
    if instance:
        return instance
    instance = model(**kwargs)
    db.add(instance)
    db.commit()
    db.refresh(instance)
    return instance


def bool_to_blob(value: bool) -> bytes:
    return b"firmado" if value else b"no_firmado"


# -------------------------------------------------
# Migración principal
# -------------------------------------------------
def migrar():
    db = SessionLocal()

    with open(JSON_PATH, "r", encoding="utf-8") as f:
        reports = json.load(f)

    for r in reports:
        # -------------------------
        # Paciente
        # -------------------------
        paciente = get_or_create(
            db,
            Paciente,
            nombre=r["paciente"]["nombre"],
            edad=r["paciente"]["edad"],
            genero=GENERO_MAP.get(r["paciente"]["genero"], 0)
        )

        # -------------------------
        # Lugar
        # -------------------------
        lugar = get_or_create(db, Lugar, nombre=r["lugar"])

        # -------------------------
        # Signos vitales
        # -------------------------
        sv = SignosVitales(
            Temp=r["signosVitales"]["temperatura"] or 0,
            FC=r["signosVitales"]["fc"] or 0,
            FR=r["signosVitales"]["fr"] or 0,
            SpO2=r["signosVitales"]["spo2"] or 0,
            GLU=r["signosVitales"]["glu"] or 0,
            T_A=r["signosVitales"]["ta"] or "0/0"
        )
        db.add(sv)
        db.commit()
        db.refresh(sv)

        # -------------------------
        # Nivel de conciencia
        # -------------------------
        nc = Nivel_conciencia(
            ocular=r["nivelConciencia"]["ocular"],
            verbal=r["nivelConciencia"]["verbal"],
            motora=r["nivelConciencia"]["motora"],
            total=r["nivelConciencia"]["total"]
        )
        db.add(nc)
        db.commit()
        db.refresh(nc)

        # -------------------------
        # Reporte
        # -------------------------
        reporte = Reporte(
            fecha_hora=datetime.fromisoformat(r["fechaHora"]),
            traslado_aceptado=r["trasladoAceptado"],
            observaciones=r["observaciones"],
            recomendaciones=r["recomendaciones"],
            numero_unidad=r["unidad"]["numero"],
            nombre_operador=r["unidad"]["operador"],

            firma_paciente=bool_to_blob(r["firmas"]["paciente"]),
            firma_operador=bool_to_blob(r["firmas"]["operador"]),
            firma_testigo=bool_to_blob(r["firmas"]["testigo"]),

            lugar_id=lugar.id_Lugar,
            signos_id=sv.id_Signos,
            nivel_conciencia_id=nc.id_Nivel_Conciencia,
            paciente_id=paciente.id_Paciente
        )
        db.add(reporte)
        db.commit()
        db.refresh(reporte)

        # -------------------------
        # Pupilas
        # -------------------------
        for p in r.get("pupilas", []):
            pupila = get_or_create(db, Pupilas, nombre=p)
            db.add(ReportePupilas(
                reporte_id=reporte.id_Reporte,
                pupilas_id=pupila.id_Pupilas
            ))

        # -------------------------
        # Lesiones
        # -------------------------
        for l in r.get("lesiones", []):
            lesion = get_or_create(db, Lesion, nombre=l)
            db.add(ReporteLesion(
                reporte_id=reporte.id_Reporte,
                lesion_id=lesion.id_Lesion
            ))

        # -------------------------
        # Regiones anatómicas
        # -------------------------
        for a in r.get("regionesAfectadas", []):
            anatomica = get_or_create(db, Anatomica, nombre=a)
            db.add(ReporteAnatomica(
                reporte_id=reporte.id_Reporte,
                anatomica_id=anatomica.id_Anatomica
            ))

        # -------------------------
        # Insumos
        # -------------------------
        for i in r.get("insumos", []):
            insumo = get_or_create(
                db,
                Insumo,
                nombre=i["nombre"],
                cantidad=i["cantidad"]
            )
            db.add(ReporteInsumo(
                reporte_id=reporte.id_Reporte,
                insumo_id=insumo.id_Insumo
            ))

        db.commit()

    db.close()
    print("✅ Migración completada con éxito")


if __name__ == "__main__":
    migrar()