from sqlalchemy import Column, Integer, String
from backend_webapp.app.databases.connection import Base

class SignosVitales(Base):
    __tablename__ = "signos_vitales"
    
    id_Signos = Column(Integer, primary_key=True, nullable = False, index=True, autoincrement=True)
    Temp = Column(Integer, nullable = False, index=True)
    FC = Column(Integer, nullable = False, index=True)
    FR = Column(Integer, nullable = False, index=True)
    Sp02 = Column(Integer, nullable = False, index=True)
    TA = Column("T/A", String(20), nullable = False, index=True)
    GLU = Column(Integer, nullable = True, index=True)