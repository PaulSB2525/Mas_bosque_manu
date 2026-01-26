# schemas/reportes.py
from pydantic import BaseModel
from datetime import datetime
from typing import Optional, List


class ReporteBase(BaseModel):
    id_Reporte: int
    fecha_hora: datetime
    traslado_aceptado: bool
    observaciones: Optional[str]

    paciente_id: int
    lugar_id: int
    nivel_conciencia_id: int
    signos_id: int

    model_config = {"from_attributes": True}


class ReporteAnatomicaResponse(BaseModel):
    anatomica_id: int

    model_config = {"from_attributes": True}


class ReporteLesionResponse(BaseModel):
    lesion_id: int

    model_config = {"from_attributes": True}


class ReporteInsumoResponse(BaseModel):
    insumo_id: int
    cantidad: int

    model_config = {"from_attributes": True}