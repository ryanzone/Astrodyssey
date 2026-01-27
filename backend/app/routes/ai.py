from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from groq import Groq
import os

router = APIRouter(prefix="/ai")

GROQ_KEY = os.getenv("GROQ_API_KEY")

if not GROQ_KEY:
    raise RuntimeError("GROQ_API_KEY is missing")

client = Groq(api_key=GROQ_KEY)


class ChatRequest(BaseModel):
    message: str


@router.post("/chat")
def chat(req: ChatRequest):
    try:
        completion = client.chat.completions.create(
            model="llama-3.1-8b-instant",

            messages=[
                {
                    "role": "system",
                    "content": "You are SpaceGen AI, an expert in astronomy."
                },
                {
                    "role": "user",
                    "content": req.message
                }
            ],
            temperature=0.6,
        )

        return {
            "reply": completion.choices[0].message.content
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )
