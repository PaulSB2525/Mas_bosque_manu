from sqlalchemy import Column, Integer, String
from app.databases.connection import Base

class Lesion(Base):
    __tablename__ = "lesion"
    
    id_lesion = Column(Integer, primary_key=True, index=True, nullable=False, autoincrement=True)
    nombre = Column(String(100), unique = True, index=True, nullable=False)