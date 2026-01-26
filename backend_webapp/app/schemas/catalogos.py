# schemas/catalogos.py
from pydantic import BaseModel


class CatalogoResponse(BaseModel):
    id: int
    nombre: str

    model_config = {"from_attributes": True}