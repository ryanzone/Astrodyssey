"use client";

import { useRef } from "react";

import Universe from "@/components/three/Universe";
import Planet from "@/components/three/Planet";
import Moon from "@/components/three/Moon";
import PlanetFactsPanel from "@/components/planetFactPanel";

import Data from "@/components/three/data/solarSystem";

export default function UranusPage() {
  const uranus = Data.find((p) => p.name === "Uranus");
  const factsRef = useRef<HTMLDivElement>(null);

  if (!uranus) return null;

  const scrollToFacts = () => {
    factsRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="w-screen bg-black text-white">

      {/* ===== URANUS VIEW ===== */}
      <section className="relative h-screen overflow-hidden">
        <Universe>
          <Planet
            size={uranus.size}
            texture="/textures/uranus.jpg"
            tilt={uranus.tilt}
          />

          {uranus.moons?.map((moon) => (
            <Moon
              key={moon.name}
              moon={moon}
              texture={`/textures/${moon.name.toLowerCase()}.jpg`}
            />
          ))}
        </Universe>

        {/* ↓ scroll button */}
        <button
          onClick={scrollToFacts}
          className="
            absolute bottom-8 left-1/2 -translate-x-1/2
            text-white/80 hover:text-white
            transition
            animate-bounce
            text-2xl
          "
        >
          ↓
        </button>
      </section>

      {/* ===== FACTS BELOW ===== */}
      <div ref={factsRef}>
        <PlanetFactsPanel planet="uranus" />
      </div>

    </main>
  );
}
