from sqlalchemy import Column, Integer, ForeignKey
from app.databases.connection import Base

class ReporteAnatomica(Base):
    __tablename__ = "reporte_anatomica"

    reporte_id = Column(Integer, ForeignKey("reporte.id_Reporte"), primary_key=True)
    anatomica_id = Column(Integer, ForeignKey("anatomica.id_Anatomica"), primary_key=True)