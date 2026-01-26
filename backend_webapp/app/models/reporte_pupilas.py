from sqlalchemy import Column, Integer, ForeignKey
from app.databases.connection import Base

class ReportePupilas(Base):
    __tablename__ = "reporte_pupilas"

    reporte_id = Column(Integer, ForeignKey("reporte.id_Reporte"), primary_key=True)
    pupilas_id = Column(Integer, ForeignKey("pupilas.id_Pupilas"), primary_key=True)