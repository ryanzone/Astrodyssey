"use client";

import Universe from "@/components/three/Universe";
import Planet from "@/components/three/Planet";
import Moon from "@/components/three/Moon";
import Data from "@/components/three/data/solarSystem";

export default function MarsPage() {
  const mars = Data.find((p) => p.name === "Mars");

  if (!mars) return null;

  return (
    <div className="w-screen h-screen">
      <Universe>
        <Planet
          size={mars.size}
          texture="/textures/mars.jpg"
          tilt={mars.tilt}
        />

        {/* 🛰 Mars moons */}
        {mars.moons?.map((moon) => (
          <Moon
            key={moon.name}
            moon={moon}
            texture={`/textures/${moon.name.toLowerCase()}.jpg`}
          />
        ))}
      </Universe>
    </div>
  );
}
