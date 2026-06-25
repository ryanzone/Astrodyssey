![image alt](https://github.com/ryanzone/Astrodyssey/blob/master/ss/astro.jpg)


Astrodyssey is an interactive space-themed web app built with **Next.js** + **React Three Fiber**. It displays NASA images (APOD) and provides a chatbot interface powered by a Python backend.


---

## Tech Stack

- **Frontend:** Next.js (Turbopack), React, TypeScript, TailwindCSS
- **3D:** three.js + react-three-fiber (+ drei)
- **Backend API (external):** Python service (see `backend/`)

---

## Prerequisites

- Node.js 18+
- The Python backend running and reachable via `NEXT_PUBLIC_BACKEND_URL`

---

## Setup

### 1) Environment variables
Create `.env.local` in the project root:

```env
# Base URL for the Python backend
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```

> Example: if your backend runs on `http://127.0.0.1:8000`, use that value.

### 2) Install dependencies

```bash
npm install
```

---

## Run (development)

1) Start the backend (from the `backend/` folder).
2) Start the frontend:

```bash
npm run dev
```

Then open:
- `http://localhost:3000` (or the port Next reports)

---

## API Endpoints Used

The frontend calls these backend routes (via `NEXT_PUBLIC_BACKEND_URL`):

- **APOD image/video (NASA):**
  - `GET /nasa/apod`
  - `GET /nasa/apod?date=YYYY-MM-DD`

- **Chatbot:**
  - `POST /ai/chat` with JSON body: `{ "message": "..." }`

If `GET /pictures` shows `Failed to fetch APOD`, it almost always means:
- `NEXT_PUBLIC_BACKEND_URL` is wrong, or
- `/nasa/apod` is not reachable from the browser/dev server.

---

## Project Structure (high level)

- `src/app/`
  - Route pages (Next.js App Router)
- `src/components/`
  - UI components + 3D scenes
- `src/core/`
  - Client-side API helpers (APOD + chat)

---

## Scripts

- `npm run dev` - start dev server
- `npm run build` - build for production
- `npm run start` - start production server
- `npm run lint` - run ESLint

---

## Notes

- Components that use the three.js rendering stack typically require client-side execution (`"use client"`).
- Keep `NEXT_PUBLIC_BACKEND_URL` public because it is used in browser requests.

---

## License

MIT (or your preferred license). 

