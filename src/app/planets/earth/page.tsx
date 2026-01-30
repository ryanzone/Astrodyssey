"use client";

import { useRef } from "react";

import Universe from "@/components/three/Universe";
import Planet from "@/components/three/Planet";
import Moon from "@/components/three/Moon";
import PlanetFactsPanel from "@/components/planetFactPanel";

import Data from "@/components/three/data/solarSystem";

export default function EarthPage() {
  const earth = Data.find(p => p.name === "Earth");
  const moon = earth?.moons?.[0];

  const factsRef = useRef<HTMLDivElement>(null);

  if (!earth || !moon) return null;

  const scrollToFacts = () => {
    factsRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <main className="w-screen bg-black text-white">

      {/* ================= HERO PLANET ================= */}
      <section className="relative h-screen w-full overflow-hidden">

        <Universe>
          <Planet
            size={earth.size}
            texture="/textures/earth.jpg"
            tilt={earth.tilt}
          />
          <Moon moon={moon} texture="/textures/moon.jpg" />
        </Universe>

        {/* ↓ SCROLL BUTTON */}
        <button
          onClick={scrollToFacts}
          className="
            absolute bottom-8 left-1/2 -translate-x-1/2
            flex flex-col items-center gap-1
            text-white/80 hover:text-white
            transition
          "
        >
          <span className="text-xs tracking-widest">
            SCROLL
          </span>

          <div className="animate-bounce text-2xl">
            ↓
          </div>
        </button>
      </section>

      {/* ================= FACTS ================= */}
      <div ref={factsRef}>
        <PlanetFactsPanel planet="earth" />
      </div>

    </main>
  );
}
