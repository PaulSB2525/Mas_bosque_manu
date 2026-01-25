from sqlalchemy import Column, Integer, String
from backend_webapp.app.databases.connection import Base

class Pupilas(Base):
    __tablename__ = "pupilas"
    
    id_Pupilas = Column(Integer, primary_key=True, index=True, nullable=False, autoincrement=True)  
    nombre = Column(String(100), index=True, nullable=False) 