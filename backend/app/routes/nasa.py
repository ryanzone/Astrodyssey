from fastapi import APIRouter
from app.services.nasa_service import get_apod

router = APIRouter(prefix="/nasa", tags=["NASA"])

@router.get("/apod")
def apod(date: str | None = None):
    return get_apod(date)
