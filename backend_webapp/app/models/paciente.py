from sqlalchemy import Column, Integer, String
from app.databases.connection import Base

class Paciente(Base):
    __tablename__ = "paciente"
    
    id_Paciente = Column(Integer, primary_key=True, index=True, nullable = False)
    nombre = Column(String(100), index = True, nullable = False)
    edad = Column(Integer, index = True, nullable = False)
    genero = Column(String, index = True, nullable = False)
