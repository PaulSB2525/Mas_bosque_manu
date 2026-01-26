from pydantic import BaseModel

class PacienteCreate(BaseModel):
    nombre: str
    edad: int
    genero: int  # 1=Masculino, 2=Femenino, etc.

class PacienteUpdate(BaseModel):
    nombre: str | None = None
    edad: int | None = None
    genero: int | None = None