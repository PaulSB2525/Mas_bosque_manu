from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

# -------- SUB-OBJETOS --------

class PacienteOut(BaseModel):
    nombre: str
    edad: int
    genero: str

class UnidadOut(BaseModel):
    numero: str
    operador: str

class SignosVitalesOut(BaseModel):
    temperatura: float
    fc: int
    fr: int
    spo2: int
    ta: str
    glu: Optional[int]

class NivelConcienciaOut(BaseModel):
    ocular: int
    verbal: int
    motora: int
    total: int

class InsumoOut(BaseModel):
    nombre: str
    cantidad: int

class FirmasOut(BaseModel):
    paciente: bool
    operador: bool
    testigo: bool

# -------- REPORTE FINAL --------

class ReporteResponse(BaseModel):
    id: int
    fechaHora: datetime

    paciente: PacienteOut
    lugar: str
    unidad: UnidadOut

    signosVitales: SignosVitalesOut
    nivelConciencia: NivelConcienciaOut

    pupilas: List[str]
    lesiones: List[str]
    regionesAfectadas: List[str]

    insumos: List[InsumoOut]

    alergias: List[str]
    medicamentos: List[str]
    patologias: List[str]

    trasladoAceptado: bool
    observaciones: Optional[str]
    recomendaciones: Optional[str]

    firmas: FirmasOut