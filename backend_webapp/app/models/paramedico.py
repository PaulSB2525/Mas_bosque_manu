from sqlalchemy import Column, Integer, String, LargeBinary
from app.databases.connection import Base

class Paramedico(Base):
    __tablename__ = "paramedico"

    id_paramedico = Column(Integer, primary_key=True, autoincrement=True)
    nombre = Column(String(100), nullable=False)
    correoInst = Column(String(100), unique=True, nullable=False)
    correoEsc = Column(String(100), nullable=False)
    usuario = Column(String(100), unique=True, nullable=False)
    contraseña = Column(String(100), nullable=False)
    firma_paramedico = Column(LargeBinary, nullable=False)