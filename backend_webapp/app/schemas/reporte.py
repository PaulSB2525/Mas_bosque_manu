from pydantic import BaseModel
from typing import Optional

# ---------- REPORTE ----------
class ReporteBase(BaseModel):
    id_Paciente: int
    descripcion: Optional[str] = None

class ReporteCreate(ReporteBase):
    pass

class ReporteResponse(ReporteBase):
    id_Reporte: int

    model_config = {
        "from_attributes": True
    }


# ---------- REPORTE - ANATOMICA ----------
class ReporteAnatomicaBase(BaseModel):
    id_Reporte: int
    id_Anatomica: int

class ReporteAnatomicaCreate(ReporteAnatomicaBase):
    pass

class ReporteAnatomicaResponse(ReporteAnatomicaBase):
    id: int

    model_config = {
        "from_attributes": True
    }


# ---------- REPORTE - INSUMO ----------
class ReporteInsumoBase(BaseModel):
    id_Reporte: int
    id_Insumo: int
    cantidad: int

class ReporteInsumoCreate(ReporteInsumoBase):
    pass

class ReporteInsumoResponse(ReporteInsumoBase):
    id: int

    model_config = {
        "from_attributes": True
    }


# ---------- REPORTE - LESIÓN ----------
class ReporteLesionBase(BaseModel):
    id_Reporte: int
    id_Lesion: int

class ReporteLesionCreate(ReporteLesionBase):
    pass

class ReporteLesionResponse(ReporteLesionBase):
    id: int

    model_config = {
        "from_attributes": True
    }


# ---------- REPORTE - PUPILAS ----------
class ReportePupilasBase(BaseModel):
    id_Reporte: int
    id_Pupilas: int

class ReportePupilasCreate(ReportePupilasBase):
    pass

class ReportePupilasResponse(ReportePupilasBase):
    id: int

    model_config = {
        "from_attributes": True
    }