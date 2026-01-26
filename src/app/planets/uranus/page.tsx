"use client";

import Universe from "@/components/three/Universe";
import Planet from "@/components/three/Planet";
import Data from "@/components/three/data/solarSystem";
import Moon from "@/components/three/Moon";
export default function UranusPage() {
  const uranus = Data.find(
    (p) => p.name === "Uranus"
  );

  if (!uranus) return null;
  return (
    <div className="w-screen h-screen">
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
    </div>
  );
}
