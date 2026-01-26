from sqlalchemy import Column, Integer, ForeignKey
from app.databases.connection import Base

class PacientePatologia(Base):
    __tablename__ = "paciente_patologia"

    paciente_id = Column(Integer, ForeignKey("paciente.id_Paciente"), primary_key=True)
    patologia_id = Column(Integer, ForeignKey("patologia.id_Patologia"), primary_key=True)