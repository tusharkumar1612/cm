"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

interface FloatingGeometryProps {
  position: [number, number, number];
  geometry: "octahedron" | "torus" | "icosahedron" | "dodecahedron" | "sphere";
  color: string;
  scale?: number;
}

export function FloatingGeometry({
  position,
  geometry,
  color,
  scale = 1,
}: FloatingGeometryProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  const renderGeometry = () => {
    switch (geometry) {
      case "octahedron":
        return <octahedronGeometry args={[1, 0]} />;
      case "torus":
        return <torusGeometry args={[0.8, 0.3, 16, 32]} />;
      case "icosahedron":
        return <icosahedronGeometry args={[0.8, 0]} />;
      case "dodecahedron":
        return <dodecahedronGeometry args={[0.8, 0]} />;
      case "sphere":
        return <sphereGeometry args={[0.8, 32, 32]} />;
      default:
        return <octahedronGeometry args={[1, 0]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {renderGeometry()}
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        emissive={color}
        emissiveIntensity={0.2}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

