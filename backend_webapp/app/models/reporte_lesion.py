from sqlalchemy import Column, Integer, ForeignKey
from app.databases.connection import Base

class ReporteLesion(Base):
    __tablename__ = "reporte_lesion"

    reporte_id = Column(Integer, ForeignKey("reporte.id_Reporte"), primary_key=True)
    lesion_id = Column(Integer, ForeignKey("lesion.id_Lesion"), primary_key=True)