"use client";

import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export type MoonData = {
  name: string;
  size: number;
  distance: number;
  speed: number;
};

type MoonProps = {
  moon: MoonData;
  texture?: string;
};

export default function Moon({ moon, texture }: MoonProps) {
  const ref = useRef<THREE.Mesh>(null);
  const angle = useRef(Math.random() * Math.PI * 2);

  useFrame(() => {
    angle.current += moon.speed * 0.01;

    if (ref.current) {
      ref.current.position.x =
        Math.cos(angle.current) * moon.distance;

      ref.current.position.z =
        Math.sin(angle.current) * moon.distance;

      ref.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[moon.size, 32, 32]} />

      {texture ? (
        <meshStandardMaterial map={new THREE.TextureLoader().load(texture)} />
      ) : (
        <meshStandardMaterial color="#aaa" />
      )}
    </mesh>
  );
}
