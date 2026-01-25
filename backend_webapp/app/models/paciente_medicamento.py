from sqlalchemy import Column, Integer, String
from app.databases.connection import Base

class PacienteMedicamento(Base):
    __tablename__ = "paciente_medicamento"
    
    paciente_id = Column(Integer, primary_key=True, index=True, nullable=False)
    medicamento_id = Column(Integer, primary_key=True, index=True, nullable=False)