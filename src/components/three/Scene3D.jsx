'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere({ scrollProgress }) {
  const meshRef = useRef();
  const lightRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Rotate the sphere
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2 + scrollProgress * 2;
      meshRef.current.rotation.y = time * 0.3 + scrollProgress * 1.5;

      // Scale based on scroll
      const scale = 1 + Math.sin(scrollProgress * Math.PI) * 0.3;
      meshRef.current.scale.set(scale, scale, scale);
    }

    // Animate light
    if (lightRef.current) {
      lightRef.current.intensity = 2 + Math.sin(time * 2) * 0.5;
    }
  });

  return (
    <group>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#00ff88"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          emissive="#00ff88"
          emissiveIntensity={0.5}
        />
      </Sphere>

      <pointLight ref={lightRef} position={[2, 2, 2]} color="#00ff88" intensity={2} />
      <pointLight position={[-2, -2, -2]} color="#66ffaa" intensity={1} />
      <ambientLight intensity={0.1} />
    </group>
  );
}

function ParticleField({ scrollProgress }) {
  const particlesRef = useRef();

  const particlesCount = 1000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.05 + scrollProgress * 0.5;
      particlesRef.current.rotation.x = time * 0.03 + scrollProgress * 0.3;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00ff88"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function Scene3D({ scrollProgress = 0 }) {
  return (
    <div className="fixed inset-0 z-background">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#0a0a0a']} />
        <fog attach="fog" args={['#0a0a0a', 5, 15]} />

        <AnimatedSphere scrollProgress={scrollProgress} />
        <ParticleField scrollProgress={scrollProgress} />

        {/* OrbitControls disabled on mobile for better performance */}
        {typeof window !== 'undefined' && window.innerWidth > 768 && (
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        )}
      </Canvas>
    </div>
  );
}
