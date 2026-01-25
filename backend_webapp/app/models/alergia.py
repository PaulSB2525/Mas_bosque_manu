from sqlalchemy import Column, Integer, String
from backend_webapp.app.databases.connection import Base

class Alergia(Base):
    __tablename__ = "alergia"
    
    id_Alergia = Column(Integer, primary_key=True, index=True, nullable=False, autoincrement=True)
    nombre = Column(String(100), unique=True, index=True, nullable=False)