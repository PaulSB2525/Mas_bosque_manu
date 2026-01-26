# schemas/insumos.py
from pydantic import BaseModel


class InsumoResponse(BaseModel):
    id_Insumo: int
    nombre: str
    cantidad: int

    model_config = {"from_attributes": True}


class MedicamentoResponse(BaseModel):
    id_Medicamento: int
    nombre: str

    model_config = {"from_attributes": True}