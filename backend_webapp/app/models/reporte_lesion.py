from sqlalchemy import Column, Integer
from app.databases.connection import Base

class ReporteLesion(Base):
    __tablename__ = "reporte_lesion"
    
    reporte_id = Column(Integer, primary_key=True, nullable=False)
    lesion_id = Column(Integer, primary_key=True, nullable=False)