from sqlalchemy import Column, Integer, ForeignKey
from app.databases.connection import Base

class ReporteInsumo(Base):
    __tablename__ = "reporte_insumo"

    reporte_id = Column(Integer, ForeignKey("reporte.id_Reporte"), primary_key=True)
    insumo_id = Column(Integer, ForeignKey("insumo.id_Insumo"), primary_key=True)