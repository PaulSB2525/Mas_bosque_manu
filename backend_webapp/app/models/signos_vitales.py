from sqlalchemy import Column, Integer, String
from app.databases.connection import Base

class SignosVitales(Base):
    __tablename__ = "signos_vitales"

    id_Signos = Column(Integer, primary_key=True, autoincrement=True)
    Temp = Column(Integer, nullable=False)
    FC = Column(Integer, nullable=False)
    FR = Column(Integer, nullable=False)
    SpO2 = Column(Integer, nullable=False)
    T_A = Column(String(100), nullable=False)
    GLU = Column(Integer)