# schemas/estadisticas.py
from pydantic import BaseModel
from typing import Dict, List


class TotalResponse(BaseModel):
    total: int


class PromedioResponse(BaseModel):
    promedio: float


class DistribucionResponse(BaseModel):
    etiqueta: str
    valor: int