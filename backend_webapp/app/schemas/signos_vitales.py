from pydantic import BaseModel
from typing import Optional

class SignosVitalesCreate(BaseModel):
    temperatura: float
    fc: int
    fr: int
    spo2: int
    ta: str
    glu: Optional[int] = None