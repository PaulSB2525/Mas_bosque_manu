from sqlalchemy import Column, Integer, String
from app.databases.connection import Base

class ReportePupilas(Base):
    __tablename__ = "reporte_pupilas"

    reporte_id = Column(Integer, primary_key=True)
    pupilas_id = Column(Integer, primary_key=True)