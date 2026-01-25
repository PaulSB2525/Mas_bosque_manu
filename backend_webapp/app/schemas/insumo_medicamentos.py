from pydantic import BaseModel

# ---------- INSUMO ----------
class InsumoBase(BaseModel):
    nombre: str

class InsumoCreate(InsumoBase):
    pass

class InsumoResponse(InsumoBase):
    id_Insumo: int

    model_config = {
        "from_attributes": True
    }


# ---------- MEDICAMENTO ----------
class MedicamentoBase(BaseModel):
    nombre: str

class MedicamentoCreate(MedicamentoBase):
    pass

class MedicamentoResponse(MedicamentoBase):
    id_Medicamento: int

    model_config = {
        "from_attributes": True
    }