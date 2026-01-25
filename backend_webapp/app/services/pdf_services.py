from docx import Document
from docx.shared import Pt
import os
import uuid

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
TEMPLATE_PATH = os.path.join(BASE_DIR, "templates", "formato_frap.docx")
OUTPUT_DIR = os.path.join(BASE_DIR, "generated")

os.makedirs(OUTPUT_DIR, exist_ok=True)


def checkbox(value: bool) -> str:
    return "☑" if value else "☐"


def generar_pdf_reporte(
    reporte,
    paciente,
    lesiones,
    insumos,
    anatomicas
):
    doc = Document(TEMPLATE_PATH)

    def replace(key, value):
        for p in doc.paragraphs:
            if key in p.text:
                p.text = p.text.replace(key, str(value))

    # ============================
    # DATOS GENERALES
    # ============================
    replace("{{REPORTE_ID}}", reporte.id_reporte)
    replace("{{FECHA}}", reporte.fecha_hora.strftime("%d/%m/%Y"))
    replace("{{HORA}}", reporte.fecha_hora.strftime("%H:%M"))

    # ============================
    # PACIENTE
    # ============================
    replace("{{PACIENTE_NOMBRE}}", paciente.nombre)
    replace("{{EDAD}}", paciente.edad)
    replace("{{GENERO_M}}", checkbox(paciente.genero == "Masculino"))
    replace("{{GENERO_F}}", checkbox(paciente.genero == "Femenino"))

    # ============================
    # TRASLADO
    # ============================
    replace("{{TRASLADO_SI}}", checkbox(reporte.traslado_aceptado))
    replace("{{TRASLADO_NO}}", checkbox(not reporte.traslado_aceptado))

    # ============================
    # SIGNOS VITALES
    # ============================
    replace("{{TEMP}}", reporte.temperatura or "")
    replace("{{FC}}", reporte.frecuencia_cardiaca or "")
    replace("{{FR}}", reporte.frecuencia_respiratoria or "")
    replace("{{SPO2}}", reporte.spo2 or "")
    replace("{{TA}}", reporte.tension_arterial or "")
    replace("{{GLU}}", reporte.glucosa or "")

    # ============================
    # GLASGOW
    # ============================
    replace("{{G_OCULAR}}", reporte.glasgow_ocular or "")
    replace("{{G_VERBAL}}", reporte.glasgow_verbal or "")
    replace("{{G_MOTORA}}", reporte.glasgow_motora or "")
    replace("{{G_TOTAL}}", reporte.glasgow_total or "")

    # ============================
    # LESIONES
    # ============================
    lesiones_txt = ", ".join([l.tipo for l in lesiones])
    replace("{{LESIONES}}", lesiones_txt)

    # ============================
    # REGIONES ANATÓMICAS
    # ============================
    regiones_txt = ", ".join([a.region for a in anatomicas])
    replace("{{ANATOMIA}}", regiones_txt)

    # ============================
    # INSUMOS
    # ============================
    insumos_txt = ", ".join(
        [f"{i.nombre} ({i.cantidad})" for i in insumos]
    )
    replace("{{INSUMOS}}", insumos_txt)

    # ============================
    # OBSERVACIONES
    # ============================
    replace("{{OBSERVACIONES}}", reporte.observaciones or "")
    replace("{{RECOMENDACIONES}}", reporte.recomendaciones or "")

    # ============================
    # GUARDAR
    # ============================
    filename = f"reporte_{reporte.id_reporte}_{uuid.uuid4().hex}.docx"
    path = os.path.join(OUTPUT_DIR, filename)
    doc.save(path)

    return path