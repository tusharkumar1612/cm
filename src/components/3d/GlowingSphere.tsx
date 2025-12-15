"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

interface GlowingSphereProps {
  position?: [number, number, number];
  color?: string;
  size?: number;
}

export function GlowingSphere({
  position = [0, 0, 0],
  color = "#0ea5e9",
  size = 1,
}: GlowingSphereProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(color) },
    }),
    [color]
  );

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      uniforms.uTime.value = state.clock.elapsedTime;
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(
        1 + Math.sin(state.clock.elapsedTime * 2) * 0.1
      );
    }
  });

  return (
    <group position={position}>
      {/* Inner sphere */}
      <Sphere ref={meshRef} args={[size, 64, 64]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.9}
        />
      </Sphere>

      {/* Outer glow */}
      <Sphere ref={glowRef} args={[size * 1.2, 32, 32]}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Wireframe layer */}
      <Sphere args={[size * 1.1, 16, 16]}>
        <meshBasicMaterial
          color={color}
          wireframe
          transparent
          opacity={0.3}
        />
      </Sphere>
    </group>
  );
}


