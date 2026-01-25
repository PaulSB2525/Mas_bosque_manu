from sqlalchemy import Column, Integer, String
from app.databases.connection import Base

class ReportePupilas(Base):
    __tablename__ = "reporte_pupilas"
    
    paciente_id = Column(Integer, primary_key=True, nullable=False)
    pupilas_id = Column(Integer, primary_key=True, nullable=False)