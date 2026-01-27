const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL!;

export async function getApod(date?: string) {
  const url = date
    ? `${BASE_URL}/nasa/apod?date=${date}`
    : `${BASE_URL}/nasa/apod`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch APOD");
  }

  return res.json();
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
