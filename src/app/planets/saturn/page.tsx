"use client";

import * as THREE from "three";
import Universe from "@/components/three/Universe";
import Planet from "@/components/three/Planet";
import Data from "@/components/three/data/solarSystem";
import Moon from "@/components/three/Moon";
function SaturnRings({ size }: { size: number }) {
  const SATURN_TILT = THREE.MathUtils.degToRad(26.73);

  const rings = [
    { i: 1.12, o: 1.22, c: "#7a736a", a: 0.08 },
    { i: 1.22, o: 1.45, c: "#9b9389", a: 0.25 },
    { i: 1.45, o: 1.95, c: "#e6ded3", a: 0.85 },
    { i: 1.95, o: 2.02, c: "#000000", a: 0 },
    { i: 2.02, o: 2.45, c: "#d6cec3", a: 0.65 },
    { i: 2.47, o: 2.50, c: "#f1eadf", a: 0.35 },
    { i: 2.8, o: 3.1, c: "#bfb7aa", a: 0.08 },
    { i: 3.2, o: 6.5, c: "#cfd8ff", a: 0.02 },
  ];

  return (
    <group rotation={[0, 0, SATURN_TILT]}>
      {/* ring plane */}
      <group rotation={[Math.PI / 2, 0, 0]}>
        {rings.map((r, i) => (
          <mesh key={i}>
            <ringGeometry
              args={[size * r.i, size * r.o, 512]}
            />
            <meshStandardMaterial
              color={r.c}
              transparent
              opacity={r.a}
              roughness={1}
              metalness={0}
              depthWrite={false}
              side={THREE.DoubleSide}
            />
          </mesh>
        ))}

        {/* thickness illusion */}
        <mesh scale={[1, 1, 0.02]}>
          <ringGeometry
            args={[size * 1.12, size * 6.5, 256]}
          />
          <meshBasicMaterial
            transparent
            opacity={0.03}
            depthWrite={false}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </group>
  );
}




export default function SaturnPage() {
  const saturn = Data.find(
    (p) => p.name === "Saturn"
  );

  if (!saturn) return null;

  return (
    <div className="w-screen h-screen">
      <Universe>
        {/* 🪐 planet */}
        <Planet
          size={saturn.size}
          texture="/textures/saturn.jpg"
            tilt={saturn.tilt}
        />

        {/* 🪐 rings */}
        <SaturnRings size={saturn.size} />

        {saturn.moons?.map((moon) => (
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
