"use client";

import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

interface PlanetProps {
  size: number;
  texture: string;
  rotationSpeed?: number;
  tilt?: number; // degrees
}

export default function Planet({
  size,
  texture,
  rotationSpeed = 0.01,
  tilt = 0,
}: PlanetProps) {
  const planetRef = useRef<THREE.Mesh>(null);
  const tiltGroup = useRef<THREE.Group>(null);

  const map = useTexture(texture);

  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <group
      ref={tiltGroup}
      rotation={[0, 0, THREE.MathUtils.degToRad(tilt)]}
    >
      <mesh ref={planetRef}>
        <sphereGeometry args={[size, 64, 64]} />
        <meshStandardMaterial map={map} />
      </mesh>
    </group>
  );
}
