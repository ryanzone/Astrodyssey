"use client";

import Universe from "@/components/three/Universe";
import Planet from "@/components/three/Planet";
import Moon from "@/components/three/Moon";
import Data from "@/components/three/data/solarSystem";

export default function JupiterPage() {
  const jupiter = Data.find((p) => p.name === "Jupiter");

  if (!jupiter) return null;

  return (
    <div className="w-screen h-screen">
      <Universe>
        <Planet
          size={jupiter.size}
          texture="/textures/jupiter.jpg"
          tilt={jupiter.tilt}
        />

        {/* 🛰 Jupiter moons */}
        {jupiter.moons?.map((moon) => (
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
