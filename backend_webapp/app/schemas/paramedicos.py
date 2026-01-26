# schemas/paramedicos.py
from pydantic import BaseModel


class ParamedicoResponse(BaseModel):
    id_paramedico: int
    nombre: str
    usuario: str
    correoInst: str
    correoEsc: str

    model_config = {"from_attributes": True}