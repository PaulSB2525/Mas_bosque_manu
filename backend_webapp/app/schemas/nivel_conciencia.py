from pydantic import BaseModel

class NivelConcienciaCreate(BaseModel):
    ocular: int
    verbal: int
    motora: int