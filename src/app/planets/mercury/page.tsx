"use client";

import Universe from "@/components/three/Universe";
import Planet from "@/components/three/Planet";
import Data from "@/components/three/data/solarSystem";

export default function MercuryPage() {
  const mercury = Data.find(
    (p) => p.name === "Mercury"
  );

  if (!mercury) return null;

  return (
    <div className="w-screen h-screen">
      <Universe>
        <Planet
          size={mercury.size}
          texture="/textures/mercury.jpg"
            tilt={mercury.tilt}
        />
        
      </Universe>
    </div>
  );
}
