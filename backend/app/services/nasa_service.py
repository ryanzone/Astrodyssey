import os
import requests

NASA_URL = "https://api.nasa.gov/planetary/apod"

def get_apod(date: str | None = None):
    params = {
        "api_key": os.getenv("NASA_API_KEY")
    }

    if date:
        params["date"] = date

    response = requests.get(NASA_URL, params=params, timeout=10)
    return response.json()
