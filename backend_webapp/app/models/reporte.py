from sqlalchemy import Column, Integer, String, LargeBinary, DateTime, ForeignKey, Text, Boolean
from backend_webapp.app.databases.connection import Base

class Reporte(Base):
    __tablename__ = "reporte"
    
    id_reporte = Column(Integer, primary_key=True, autoincrement=True)
    fecha_hora = Column(DateTime, nullable=False)
    observaciones = Column(Text, nullable=True)
    recomendaciones = Column(Text, nullable=True)
    translado_aceptado = Column(Boolean, nullable=False)
    numero_unidad = Column(String(100), nullable=True)
    nombre_operador = Column(String(100), nullable=True)
    firma_operador = Column(LargeBinary, nullable=True)
    firma_paciente = Column(LargeBinary, nullable=False)
    nombre_testigo = Column(String(100), nullable=True)
    firma_testigo = Column(LargeBinary, nullable=True)
    lugar_id = Column(Integer, ForeignKey("lugar.id_Lugar"), nullable=False)
    signos_id = Column(Integer, ForeignKey("signos_vitales.id_Signos"), nullable=False)
    nivel_conciencia_id = Column(Integer, ForeignKey("nivel_conciencia.id_Nivel_Conciencia"), nullable=False)