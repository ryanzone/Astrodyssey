"use client";

import HomeUniverse from "@/components/three/HomeUniverse";
import { useRef } from "react";
import Link from "next/link";

export default function Home() {
  const titleRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    titleRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* ================= SUN HERO ================= */}
      <section className="h-screen w-screen relative">

        <HomeUniverse />

        {/* scroll button */}
        <div className="absolute bottom-12 w-full flex justify-center z-10">
          <button
            onClick={scrollToContent}
            className="
              px-8 py-3
              rounded-full
              border border-white/30
              text-white
              tracking-widest
              backdrop-blur-xl
              bg-white/10
              hover:bg-white/20
              transition
            "
          >
            EXPLORE ↓
          </button>
        </div>
      </section>

      {/* ================= TITLE ================= */}
      <section
        ref={titleRef}
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage: "url('/textures/milkyway.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-bold tracking-widest mb-8">
            AstroOdyssey
          </h1>

          <p className="text-gray-300 text-xl leading-relaxed">
            A real-time 3D journey through planets, moons,
            rings and galaxies.
          </p>
        </div>
      </section>

      {/* ================= PLANETS ================= */}
      <section className="py-40 px-10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />

        <h2 className="text-5xl text-center mb-20 relative z-10 tracking-widest">
          EXPLORE
        </h2>

        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            { name: "Mercury", path: "/planets/mercury" },
            { name: "Venus", path: "/planets/venus" },
            { name: "Earth", path: "/planets/earth" },
            { name: "Mars", path: "/planets/mars" },
            { name: "Jupiter", path: "/planets/jupiter" },
            { name: "Saturn", path: "/planets/saturn" },
            { name: "Uranus", path: "/planets/uranus" },
            { name: "Neptune", path: "/planets/neptune" },
          ].map((planet) => (
            <Link
              key={planet.name}
              href={planet.path}
              className="
                group
                relative
                rounded-2xl
                border border-white/15
                bg-white/5
                backdrop-blur-xl
                p-10
                text-center
                transition
                hover:scale-110
                hover:border-blue-500
              "
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-blue-500/10" />

              <p className="relative z-10 text-xl tracking-widest">
                {planet.name.toUpperCase()}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
