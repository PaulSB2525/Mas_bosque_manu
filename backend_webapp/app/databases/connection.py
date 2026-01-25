import os
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker, declarative_base
from dotenv import load_dotenv

# Cargar variables del archivo .env
load_dotenv()

DB_HOST = os.getenv("DB_HOST", "localhost")
DB_PORT = os.getenv("DB_PORT", "3306")
DB_USER = os.getenv("DB_USER")
DB_PASS = os.getenv("DB_PASS")
DB_NAME = os.getenv("DB_NAME")

if not all([DB_USER, DB_PASS, DB_NAME]):
    raise RuntimeError("❌ Variables de entorno de la BD incompletas")

# Connection string
DATABASE_URL = (
    f"mysql+pymysql://{DB_USER}:{DB_PASS}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
)

# Engine
engine = create_engine(
    DATABASE_URL,
    echo=True,
    pool_pre_ping=True  # 👈 evita conexiones muertas
)

# Session
SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

# Base ORM
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# 🔎 Test de conexión inmediato (opcional pero MUY útil)
def test_connection():
    try:
        with engine.connect() as conn:
            conn.execute(text("SELECT 1"))
        print("✅ Conexión a MySQL exitosa")
    except Exception as e:
        print("❌ Error conectando a MySQL:", e)