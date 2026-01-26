"use client";

import Universe from "@/components/three/Universe";
import Planet from "@/components/three/Planet";
import Moon from "@/components/three/Moon";
import Data from "@/components/three/data/solarSystem";

export default function EarthPage() {
  const earth = Data.find((p) => p.name === "Earth");

  if (!earth || !earth.moons || earth.moons.length === 0) {
    return null;
  }

  const moon = earth.moons[0];

  return (
    <div className="w-screen h-screen">
      <Universe>
        <Planet
          size={earth.size}
          texture="/textures/earth.jpg"
          tilt={earth.tilt}
        />

        <Moon
          moon={moon}
          texture="/textures/moon.jpg"
        />
      </Universe>
    </div>
  );
}
