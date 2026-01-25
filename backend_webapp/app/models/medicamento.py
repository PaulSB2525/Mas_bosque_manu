from sqlalchemy import Column, Integer, String
from backend_webapp.app.databases.connection import Base

class Medicamento(Base):
    __tablename__ = "medicamento"
    
    id_Medicamento = Column(Integer, primary_key=True, index=True, nullable=False, autoincrement=True)
    nombre = Column(String(100), nullable=False)