const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL!;

export const TEST = "working";

export async function getApod(date?: string) {
  const url = date
    ? `${BASE_URL}/nasa/apod?date=${date}`
    : `${BASE_URL}/nasa/apod`;

  console.log("Fetching from:", url);
  console.log("BASE_URL env:", process.env.NEXT_PUBLIC_BACKEND_URL);

  try {
    const res = await fetch(url);
    console.log("Response status:", res.status);
    
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }
    return res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

export async function sendChat(message: string) {
  const res = await fetch(`${BASE_URL}/ai/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  if (!res.ok) {
    throw new Error("AI request failed");
  }

  return res.json();
}

