"use client";

import Universe from "@/components/three/Universe";
import Planet from "@/components/three/Planet";
import Data from "@/components/three/data/solarSystem";
import Moon from "@/components/three/Moon";
export default function NeptunePage() {
  const neptune = Data.find(
    (p) => p.name === "Neptune"
  );

  if (!neptune) return null;

  return (
    <div className="w-screen h-screen">
      <Universe>
        <Planet
          size={neptune.size}
          texture="/textures/neptune.jpg"
            tilt={neptune.tilt}
        />
        {neptune.moons?.map((moon) => (
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
