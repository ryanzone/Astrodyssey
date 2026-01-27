import os
from groq import Groq

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

def chat_with_ai(message: str):
    completion = client.chat.completions.create(
        model="llama3-70b-8192",
        messages=[
            {
                "role": "system",
                "content": "You are SpaceGen AI, an expert in astronomy."
            },
            {
                "role": "user",
                "content": message
            }
        ],
        temperature=0.6
    )

    return {
        "reply": completion.choices[0].message.content
    }
