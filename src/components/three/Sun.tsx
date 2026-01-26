"use client";

import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useRef } from "react";

export default function Sun() {
  const sunRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  const sunMap = useTexture("/textures/sun.jpg");

  useFrame((_, delta) => {
    if (sunRef.current) {
      sunRef.current.rotation.y += delta * 0.03;
    }

    if (glowRef.current) {
      glowRef.current.rotation.y -= delta * 0.01;
    }
  });

  return (
    <group>
      {/* ☀️ ACTUAL SUN SURFACE */}
      <mesh ref={sunRef}>
        <sphereGeometry args={[4, 64, 64]} />

        {/* THIS is the key */}
        <meshBasicMaterial
          map={sunMap}
          color="#ffffff"
          toneMapped={false}
        />
      </mesh>

    </group>
  );
}
