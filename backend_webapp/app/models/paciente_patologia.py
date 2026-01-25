from sqlalchemy import Column, Integer, String
from app.databases.connection import Base

class PacientePatologia(Base):
    __tablename__ = "paciente_patologia"
    
    paciente_id = Column(Integer, primary_key=True, index=True, nullable=False)
    patologia_id = Column(Integer, primary_key=True, index=True, nullable=False)