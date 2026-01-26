from sqlalchemy import Column, Integer, String
from app.databases.connection import Base

class Paciente(Base):
    __tablename__ = "paciente"

    id_Paciente = Column(Integer, primary_key=True, autoincrement=True)
    nombre = Column(String(100), nullable=False)
    edad = Column(Integer, nullable=False)
    genero = Column(Integer, nullable=False)