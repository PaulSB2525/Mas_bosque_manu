from sqlalchemy.orm import Session
from app.models.alergia import Alergia
from app.models.paciente_patologia import PacientePatologia
from app.models.pupilas import Pupilas
from app.models.nivel_conciencia import Nivel_conciencia
from app.models.anatomica import Anatomica
from app.models.lugar import Lugar
from app.models.signos_vitales import SignosVitales


def obtener_alergias(db: Session):
    return db.query(Alergia).all()


def obtener_patologias(db: Session):
    return db.query(PacientePatologia).all()


def obtener_pupilas(db: Session):
    return db.query(Pupilas).all()


def obtener_nivel_conciencia(db: Session):
    return db.query(Nivel_conciencia).all()


def obtener_anatomica(db: Session):
    return db.query(Anatomica).all()


def obtener_lugares(db: Session):
    return db.query(Lugar).all()


def obtener_signos_vitales(db: Session):
    return db.query(SignosVitales).all()