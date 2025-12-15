"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import * as THREE from "three";

const techStack = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#339933" },
  { name: "Python", color: "#3776AB" },
  { name: "AWS", color: "#FF9900" },
  { name: "Docker", color: "#2496ED" },
  { name: "K8s", color: "#326CE5" },
];

interface TechOrbitProps {
  radius?: number;
}

export function TechOrbit({ radius = 5 }: TechOrbitProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  const icons = useMemo(() => {
    return techStack.map((tech, i) => {
      const angle = (i / techStack.length) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      return { ...tech, position: [x, 0, z] as [number, number, number], angle };
    });
  }, [radius]);

  return (
    <group ref={groupRef}>
      {/* Orbit ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[radius - 0.02, radius + 0.02, 128]} />
        <meshBasicMaterial
          color="#0ea5e9"
          transparent
          opacity={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Tech icons */}
      {icons.map((tech) => (
        <Float
          key={tech.name}
          speed={2}
          rotationIntensity={0}
          floatIntensity={0.5}
        >
          <group position={tech.position}>
            {/* Icon background */}
            <mesh>
              <boxGeometry args={[0.8, 0.8, 0.1]} />
              <meshStandardMaterial
                color="#1e293b"
                emissive={tech.color}
                emissiveIntensity={0.1}
                roughness={0.5}
                metalness={0.5}
              />
            </mesh>
            
            {/* Glow effect */}
            <mesh>
              <boxGeometry args={[1, 1, 0.05]} />
              <meshBasicMaterial
                color={tech.color}
                transparent
                opacity={0.15}
              />
            </mesh>

            {/* Text label */}
            <Text
              position={[0, -0.7, 0]}
              fontSize={0.15}
              color={tech.color}
              anchorX="center"
              anchorY="top"
            >
              {tech.name}
            </Text>
          </group>
        </Float>
      ))}

      {/* Center core */}
      <mesh>
        <icosahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial
          color="#0ea5e9"
          emissive="#0ea5e9"
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.9}
        />
      </mesh>
      
      <mesh>
        <icosahedronGeometry args={[1, 0]} />
        <meshBasicMaterial
          color="#0ea5e9"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
}


