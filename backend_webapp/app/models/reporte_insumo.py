from sqlalchemy import Column, Integer, String
from app.databases.connection import Base

class ReporteInsumo(Base):
    __tablename__ = "reporte_insumo"
    
    reporte_id = Column(Integer, primary_key=True, nullable=False)
    insumo_id = Column(Integer, primary_key=True, nullable=False)