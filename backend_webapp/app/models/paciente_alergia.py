from sqlalchemy import Column, Integer, ForeignKey
from app.databases.connection import Base

class PacienteAlergia(Base):
    __tablename__ = "paciente_alergia"

    paciente_id = Column(Integer, ForeignKey("paciente.id_Paciente"), primary_key=True)
    alergia_id = Column(Integer, ForeignKey("alergia.id_Alergia"), primary_key=True)