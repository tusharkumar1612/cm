"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, Float, Stars, Sparkles } from "@react-three/drei";
import { FloatingGeometry } from "./FloatingGeometry";
import { ParticleField } from "./ParticleField";
import { NeuralNetwork } from "./NeuralNetwork";
import { GlowingSphere } from "./GlowingSphere";

export function Scene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.2} />
          <directionalLight position={[10, 10, 5]} intensity={0.3} />
          <pointLight position={[-10, -10, -10]} color="#d946ef" intensity={0.8} />
          <pointLight position={[10, 10, 10]} color="#0ea5e9" intensity={0.8} />
          <pointLight position={[0, 0, 5]} color="#00fff5" intensity={0.3} />
          
          {/* Stars background */}
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          
          {/* Sparkles effect */}
          <Sparkles
            count={150}
            scale={20}
            size={2}
            speed={0.3}
            color="#00fff5"
          />
          
          {/* Neural Network in center */}
          <NeuralNetwork count={60} radius={6} />
          
          {/* Floating geometries */}
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <FloatingGeometry position={[-6, 3, -4]} geometry="octahedron" color="#0ea5e9" scale={0.8} />
          </Float>
          
          <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
            <FloatingGeometry position={[6, -2, -5]} geometry="torus" color="#d946ef" scale={0.7} />
          </Float>
          
          <Float speed={2.5} rotationIntensity={0.5} floatIntensity={2.5}>
            <FloatingGeometry position={[-5, -4, -3]} geometry="icosahedron" color="#00fff5" scale={0.6} />
          </Float>
          
          <Float speed={1.8} rotationIntensity={2} floatIntensity={1}>
            <FloatingGeometry position={[7, 4, -6]} geometry="dodecahedron" color="#ff0080" scale={0.7} />
          </Float>

          <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.8}>
            <FloatingGeometry position={[-7, 0, -5]} geometry="sphere" color="#00ff88" scale={0.5} />
          </Float>
          
          {/* Additional particle effects */}
          <ParticleField count={600} />
          
          {/* Subtle camera movement */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.3}
            maxPolarAngle={Math.PI / 2 + 0.3}
            minPolarAngle={Math.PI / 2 - 0.3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Separate scene for tech stack visualization
export function TechScene() {
  return (
    <div className="w-full h-[500px]">
      <Canvas
        camera={{ position: [0, 5, 10], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} color="#0ea5e9" intensity={0.8} />
          <pointLight position={[-10, -10, -10]} color="#d946ef" intensity={0.5} />
          
          <GlowingSphere position={[0, 0, 0]} color="#0ea5e9" size={1.5} />
          
          <ParticleField count={200} />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
