from sqlalchemy import Column, Integer, String
from app.databases.connection import Base

class PacienteAlergia(Base):
    __tablename__ = "paciente_alergia"
    
    paciente_id = Column(Integer, primary_key=True, index=True, nullable=False)
    alergia_id = Column(Integer, primary_key=True, index=True, nullable=False)