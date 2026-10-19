# Astrodyssey — Interactive Space Exploration

Explore the universe through an interactive, space-themed web application built with **Next.js, React Three Fiber, and TypeScript**. Astrodyssey combines immersive 3D visualizations, NASA's Astronomy Picture of the Day (APOD), and an AI-powered chatbot backed by a Python API.

![Astrodyssey Preview](ss/astro.jpg)

## Features

- **Interactive 3D Experiences:** Space-themed visualizations powered by Three.js and React Three Fiber.
- **NASA Astronomy Picture of the Day:** Retrieve NASA's featured astronomy image or video, including date-specific APOD content.
- **AI-Powered Chatbot:** Interact with a chatbot connected to a Python backend.
- **Responsive Interface:** A modern web experience built with Next.js and Tailwind CSS.
- **Modular Architecture:** Separate frontend components, client-side API helpers, and backend services.

## Tech Stack

| Component | Technologies |
|---|---|
| Frontend | Next.js, React, TypeScript |
| Styling | Tailwind CSS |
| 3D Rendering | Three.js, React Three Fiber, Drei |
| Astronomy Data | NASA APOD API via the Python backend |
| Backend | Python API service |
| Deployment | Vercel (frontend) |

## Getting Started

### Prerequisites

Make sure you have the following installed or configured:

- Node.js 18 or later
- npm
- The Python backend running and accessible from the frontend
- Any API credentials required by the backend

### 1. Clone the Repository

```bash
git clone https://github.com/ryanzone/Astrodyssey.git
cd Astrodyssey
```

### 2. Configure Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```

Replace the URL with the address where your Python backend is running.

For example, if your backend listens on port `8000`:

```env
NEXT_PUBLIC_BACKEND_URL=http://127.0.0.1:8000
```

**Note:** Variables prefixed with `NEXT_PUBLIC_` are exposed to browser-side code. Do not store private API keys or secrets in them.

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Backend

Open a terminal in the `backend/` directory and start the Python service using the command appropriate for your backend implementation.

Ensure the service is accessible at the URL configured in `.env.local`.

### 5. Start the Frontend

From the project root, run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. If Next.js selects a different port, use the URL shown in the terminal.

## API Endpoints

The frontend communicates with the Python backend using `NEXT_PUBLIC_BACKEND_URL`.

### NASA Astronomy Picture of the Day

| Method | Endpoint | Purpose |
|---|---|---|
| `GET` | `/nasa/apod` | Retrieve the astronomy picture of the day |
| `GET` | `/nasa/apod?date=YYYY-MM-DD` | Retrieve APOD content for a specified date |

### AI Chatbot

| Method | Endpoint | Purpose |
|---|---|---|
| `POST` | `/ai/chat` | Send a message to the AI chatbot |

Example request body:

```json
{
  "message": "Explain how black holes form."
}
```

These routes are served by the Python backend, not directly by the Next.js frontend.

## Troubleshooting

### APOD returns `Failed to fetch APOD`

Check the following:

1. Confirm that the Python backend is running.
2. Verify that `NEXT_PUBLIC_BACKEND_URL` points to the correct backend address.
3. Check that the backend exposes the `/nasa/apod` endpoint.
4. Inspect the browser's developer console and Network tab for failed requests.
5. Restart the Next.js development server after changing `.env.local`.

### Chatbot requests fail

- Verify that the backend is reachable.
- Confirm that `/ai/chat` accepts `POST` requests with a JSON body.
- Check backend logs for API errors or missing credentials.
- Ensure the deployed frontend points to a publicly accessible backend rather than `localhost`.

## Project Structure

```text
Astrodyssey/
├── backend/             # Python backend service
├── src/
│   ├── app/             # Next.js App Router pages
│   ├── components/      # UI components and 3D scenes
│   └── core/            # Client-side API helpers
├── ss/
│   └── astro.jpg        # README preview image
├── .env.local           # Local environment configuration
├── package.json
└── README.md
```

*This is a high-level overview; the exact files may vary with the current implementation.*

## Available Scripts

Run these commands from the project root:

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## Deployment

The frontend is deployed on Vercel.

**Live application:** [astrodyssey.vercel.app](https://astrodyssey.vercel.app/)

When deploying the frontend, configure `NEXT_PUBLIC_BACKEND_URL` in the Vercel project environment variables to point to your deployed Python backend. Ensure the backend allows requests from your frontend's origin if cross-origin requests are used.

## License

Add the license that applies to this project. If you intend to distribute it under the MIT License, include an MIT `LICENSE` file in the repository.
