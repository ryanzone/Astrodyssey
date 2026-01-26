"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Space from "./Space";

export default function Universe({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Canvas camera={{ position: [0, 3, 10], fov: 60 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 5, 5]} intensity={2} />

      <Space />

      {children}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.05}
        rotateSpeed={0.4}
      />
    </Canvas>
  );
}
