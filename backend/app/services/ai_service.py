import os
from groq import Groq
from flask import Flask, request, jsonify  # or FastAPI if you're using that

app = Flask(__name__)

from dotenv import load_dotenv
load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

def chat_with_ai(message: str):
    try:
        completion = client.chat.completions.create(
            model="qwen/qwen3.8-27b",
            messages=[
                {
                    "role": "system",
                    "content": "You are SpaceGen AI, an expert in astronomy. Keep responses brief and concise (2-3 sentences max)."
                },
                {
                    "role": "user",
                    "content": message
                }
            ],
            temperature=0.6,
            max_tokens=150  # Limit response to ~150 tokens
        )
        return {
            "reply": completion.choices[0].message.content
        }
    except Exception as e:
        print(f"Groq API error: {e}")
        return {"reply": "Sorry, I couldn't process that. Try again."}

@app.route('/ai/chat', methods=['POST'])
def handle_chat():
    try:
        data = request.json
        message = data.get('message')
        
        if not message:
            return jsonify({"error": "No message provided"}), 400
        
        result = chat_with_ai(message)
        return jsonify(result)
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": "Internal server error"}), 500