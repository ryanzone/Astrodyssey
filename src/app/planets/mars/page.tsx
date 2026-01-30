"use client";

import { useRef } from "react";

import Universe from "@/components/three/Universe";
import Planet from "@/components/three/Planet";
import Moon from "@/components/three/Moon";
import PlanetFactsPanel from "@/components/planetFactPanel";

import Data from "@/components/three/data/solarSystem";

export default function MarsPage() {
  const mars = Data.find(p => p.name === "Mars");
  const factsRef = useRef<HTMLDivElement>(null);

  if (!mars) return null;

  const scrollToFacts = () => {
    factsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-screen bg-black text-white">

      {/* ===== PLANET ===== */}
      <section className="relative h-screen overflow-hidden">
        <Universe>
          <Planet
            size={mars.size}
            texture="/textures/mars.jpg"
            tilt={mars.tilt}
          />

          {mars.moons?.map((moon) => (
            <Moon
              key={moon.name}
              moon={moon}
              texture={`/textures/${moon.name.toLowerCase()}.jpg`}
            />
          ))}
        </Universe>

        {/* ↓ BUTTON */}
        <button
          onClick={scrollToFacts}
          className="
            absolute bottom-8 left-1/2 -translate-x-1/2
            text-white/80 hover:text-white
            animate-bounce text-2xl
          "
        >
          ↓
        </button>
      </section>

      {/* ===== FACTS ===== */}
      <div ref={factsRef}>
        <PlanetFactsPanel planet="mars" />
      </div>

    </div>
  );
}
