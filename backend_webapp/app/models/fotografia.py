from sqlalchemy import Column, Integer, LargeBinary
from backend_webapp.app.databases.connection import Base

class Fotografia(Base):
    __tablename__ = "fotografia"
    
    id_Fotografia = Column(Integer, primary_key=True, index=True, nullable=False, autoincrement=True)
    reporte_id = Column(Integer, index=True, nullable=False)
    foto = Column(LargeBinary, nullable=False)