from sqlalchemy import Column, Integer, String, LargeBinary, DateTime, ForeignKey, Text, Boolean
from app.databases.connection import Base

class Reporte(Base):
    __tablename__ = "reporte"

    id_Reporte = Column(Integer, primary_key=True, autoincrement=True)
    fecha_hora = Column(DateTime, nullable=False)
    observaciones = Column(Text)
    recomendaciones = Column(Text)
    traslado_aceptado = Column(Boolean, nullable=False)
    numero_unidad = Column(String(100))
    nombre_operador = Column(String(100))
    firma_operador = Column(LargeBinary)
    firma_paciente = Column(LargeBinary, nullable=False)
    nombre_testigo = Column(String(100))
    firma_testigo = Column(LargeBinary)

    lugar_id = Column(Integer, ForeignKey("lugar.id_Lugar"), nullable=False)
    signos_id = Column(Integer, ForeignKey("signos_vitales.id_Signos"), nullable=False)
    nivel_conciencia_id = Column(Integer, ForeignKey("nivel_conciencia.id_NivelConciencia"), nullable=False)
    paciente_id = Column(Integer, ForeignKey("paciente.id_Paciente"), nullable=False)