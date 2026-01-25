from pydantic import BaseModel

# ---------- ADMIN ----------
class AdminBase(BaseModel):
    nombre: str
    email: str

class AdminCreate(AdminBase):
    contrasena: str

class AdminResponse(AdminBase):
    id_Admin: int

    model_config = {
        "from_attributes": True
    }


# ---------- PARAMÉDICO ----------
class ParamedicoBase(BaseModel):
    nombre: str
    email: str

class ParamedicoCreate(ParamedicoBase):
    contrasena: str

class ParamedicoResponse(ParamedicoBase):
    id_Paramedico: int

    model_config = {
        "from_attributes": True
    }