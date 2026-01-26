# schemas/pacientes.py
from pydantic import BaseModel


class PacienteResponse(BaseModel):
    id_Paciente: int
    nombre: str
    edad: int
    genero: str

    model_config = {"from_attributes": True}