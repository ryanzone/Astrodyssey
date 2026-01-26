"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Space from "./Space";
import Sun from "./Sun";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function HomeUniverse() {
  return (
    <Canvas camera={{ position: [0, 0, 18], fov: 50 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 0]} intensity={5} />

      <Space />
      <Sun />
      <EffectComposer>
      <Bloom
        intensity={1.6}
        luminanceThreshold={0}
        luminanceSmoothing={0.9}
      />
      </EffectComposer>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.08}
      />
    </Canvas>
  );
}
