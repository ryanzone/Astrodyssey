"use client";

import { useRef } from "react";

import Universe from "@/components/three/Universe";
import Planet from "@/components/three/Planet";
import PlanetFactsPanel from "@/components/planetFactPanel";

import Data from "@/components/three/data/solarSystem";

export default function MercuryPage() {
  const mercury = Data.find(p => p.name === "Mercury");
  const factsRef = useRef<HTMLDivElement>(null);

  if (!mercury) return null;

  const scrollToFacts = () => {
    factsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-screen bg-black text-white">

      <section className="relative h-screen overflow-hidden">
        <Universe>
          <Planet
            size={mercury.size}
            texture="/textures/mercury.jpg"
            tilt={mercury.tilt}
          />
        </Universe>

        <button
          onClick={scrollToFacts}
          className="
            absolute bottom-8 left-1/2 -translate-x-1/2
            animate-bounce text-2xl text-white/80
          "
        >
          ↓
        </button>
      </section>

      <div ref={factsRef}>
        <PlanetFactsPanel planet="mercury" />
      </div>
    </div>
  );
}
