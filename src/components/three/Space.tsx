"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export default function Space() {
  const ref = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const count = 9000;

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const starColors = [
      new THREE.Color("#ffffff"), // white
      new THREE.Color("#ffd27d"), // yellow
      new THREE.Color("#9bbcff"), // blue
      new THREE.Color("#ff9b9b"), // red
    ];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // position
      positions[i3 + 0] = (Math.random() - 0.5) * 2000;
      positions[i3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i3 + 2] = (Math.random() - 0.5) * 2000;

      // color
      const c =
        starColors[Math.floor(Math.random() * starColors.length)];

      colors[i3 + 0] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;
    }

    return { positions, colors };
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02; // slow galaxy drift
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        size={1.2}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}
