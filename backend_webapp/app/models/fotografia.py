from sqlalchemy import Column, Integer, String, LargeBinary, ForeignKey
from app.databases.connection import Base

class Fotografia(Base):
    __tablename__ = "fotografia"

    id_Fotografia = Column(Integer, primary_key=True, autoincrement=True)
    reporte_id = Column(Integer, ForeignKey("reporte.id_Reporte"), nullable=False)
    foto = Column(LargeBinary, nullable=False)