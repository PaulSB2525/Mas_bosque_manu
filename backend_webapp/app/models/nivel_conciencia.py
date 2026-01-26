from sqlalchemy import Column, Integer, String, SmallInteger
from app.databases.connection import Base

class Nivel_conciencia(Base):
    __tablename__ = "nivel_conciencia"
    
    id_NivelConciencia = Column(Integer, primary_key=True, index=True, nullable = False)
    motora = Column(SmallInteger, index = True, nullable = False)
    verbal = Column(SmallInteger, index = True, nullable = False)
    ocular = Column(SmallInteger, index = True, nullable = False)
    total = Column(Integer, index = True, nullable = False)