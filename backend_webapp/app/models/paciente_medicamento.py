from sqlalchemy import Column, Integer, ForeignKey
from app.databases.connection import Base

class PacienteMedicamento(Base):
    __tablename__ = "paciente_medicamento"

    paciente_id = Column(Integer, ForeignKey("paciente.id_Paciente"), primary_key=True)
    medicamento_id = Column(Integer, ForeignKey("medicamento.id_Medicamento"), primary_key=True)