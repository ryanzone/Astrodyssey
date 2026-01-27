"use client";

import { useEffect, useState } from "react";
import { getApod } from "@/core/api";

type Apod = {
  title: string;
  explanation: string;
  url: string;
  hdurl?: string;
  media_type: "image" | "video";
  date: string;
};

export default function PicturesPage() {
  const [apod, setApod] = useState<Apod | null>(null);

  useEffect(() => {
    getApod().then(setApod);
  }, []);

  if (!apod)
    return (
      <div className="h-screen bg-black flex items-center justify-center text-white">
        Loading cosmic image...
      </div>
    );

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* background */}
      {apod.media_type === "image" ? (
        <img
          src={apod.hdurl || apod.url}
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-sm"
        />
      ) : (
        <iframe
          src={apod.url}
          className="absolute inset-0 w-full h-full"
        />
      )}

      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />

      {/* content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">

          <p className="text-sm text-purple-300 mb-2">
            {apod.date}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {apod.title}
          </h1>

          {apod.media_type === "image" && (
            <img
              src={apod.url}
              className="rounded-2xl mb-6 shadow-lg"
            />
          )}

          <p className="text-gray-200 leading-relaxed text-lg">
            {apod.explanation}
          </p>
        </div>
      </div>
    </div>
  );
}
