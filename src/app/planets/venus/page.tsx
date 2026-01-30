"use client";

import { useRef } from "react";

import Universe from "@/components/three/Universe";
import Planet from "@/components/three/Planet";
import PlanetFactsPanel from "@/components/planetFactPanel";

import Data from "@/components/three/data/solarSystem";

export default function VenusPage() {
  const venus = Data.find((p) => p.name === "Venus");
  const factsRef = useRef<HTMLDivElement>(null);

  if (!venus) return null;

  const scrollToFacts = () => {
    factsRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="w-screen bg-black text-white">

      {/* ===== VENUS VIEW ===== */}
      <section className="relative h-screen overflow-hidden">
        <Universe>
          <Planet
            size={venus.size}
            texture="/textures/venus_atmos.jpg"
            tilt={venus.tilt}
          />
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
        <PlanetFactsPanel planet="venus" />
      </div>

    </main>
  );
}
