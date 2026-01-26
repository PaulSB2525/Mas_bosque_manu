from sqlalchemy import Column, Integer, SmallInteger
from app.databases.connection import Base

class Nivel_conciencia(Base):
    __tablename__ = "nivel_conciencia"
    
    id_Nivel_Conciencia = Column(
        "id_NivelConciencia",
        Integer,
        primary_key=True,
        autoincrement=True
    )
    motora = Column(SmallInteger, nullable=False)
    verbal = Column(SmallInteger, nullable=False)
    ocular = Column(SmallInteger, nullable=False)
    total = Column(Integer, nullable=False)