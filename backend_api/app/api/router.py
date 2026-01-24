from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.session import get_db

router = APIRouter()

@router.get("/health")
def health_check(db: Session = Depends(get_db)):
    """
    Endpoint para verificar:
    - FastAPI levanta
    - MySQL responde
    """
    result = db.execute("SELECT 1").fetchall()
    return {
        "api": "ok",
        "db": result
    }