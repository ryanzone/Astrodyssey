"use client";

import Universe from "@/components/three/Universe";
import Planet from "@/components/three/Planet";
import Data from "@/components/three/data/solarSystem";

export default function VenusPage() {
  const venus = Data.find(
    (p) => p.name === "Venus"
  );

  if (!venus) return null;
  return (
    <div className="w-screen h-screen">
      <Universe>
        <Planet
          size={venus.size}
          texture="/textures/venus_atmos.jpg"
            tilt={venus.tilt}
        />
      </Universe>
    </div>
  );
}
