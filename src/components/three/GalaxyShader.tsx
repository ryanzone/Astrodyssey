"use client";

import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function GalaxyShader() {
  const points = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const count = 25000;

    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const innerColor = new THREE.Color("#ffffff");
    const outerColor = new THREE.Color("#7b6cff");

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      const radius = Math.random() * 120;
      const spin = radius * 0.45;
      const angle = Math.random() * Math.PI * 2;

      // spiral arms
      pos[i3] = Math.cos(angle + spin) * radius;
      pos[i3 + 1] = (Math.random() - 0.5) * 1.2; // thin disk
      pos[i3 + 2] = Math.sin(angle + spin) * radius;

      const mixed = innerColor.clone().lerp(
        outerColor,
        radius / 120
      );

      col[i3] = mixed.r;
      col[i3 + 1] = mixed.g;
      col[i3 + 2] = mixed.b;
    }

    return { positions: pos, colors: col };
  }, []);

  useFrame(() => {
    if (points.current) {
      points.current.rotation.y += 0.00012;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.45}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.95}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
