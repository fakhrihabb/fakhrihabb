'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere({ scrollProgress }) {
  const meshRef = useRef();
  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Simplified position based on scroll
    if (groupRef.current) {
      // Simple, smooth movement
      const x = Math.sin(scrollProgress * Math.PI) * 2;
      const y = Math.cos(scrollProgress * Math.PI) * 1 - 0.5;
      
      groupRef.current.position.set(x, y, 0);
      
      // Simple rotation
      groupRef.current.rotation.y = scrollProgress * Math.PI * 0.5;
    }

    // Simplified sphere rotation
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;

      // Simple uniform scaling
      const scale = 1 + Math.sin(scrollProgress * Math.PI) * 0.3;
      meshRef.current.scale.setScalar(scale);
      
      // Reduce material updates for performance
      if (meshRef.current.material && Math.random() < 0.05) { // Only update occasionally
        meshRef.current.material.distort = 0.3 + Math.sin(scrollProgress * Math.PI) * 0.2;
      }
    }
  });

  return (
    <group ref={groupRef}>
      <Sphere ref={meshRef} args={[1, 64, 128]} scale={2}>
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

      <pointLight position={[2, 2, 2]} color="#00ff88" intensity={2} />
      <pointLight position={[-2, -2, -2]} color="#66ffaa" intensity={1} />
      <ambientLight intensity={0.1} />
    </group>
  );
}

function ParticleField() {
  const particlesRef = useRef();

  const particlesCount = 500; // Reduced count for better performance
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
      // Simple rotation only, no scroll-based movement
      particlesRef.current.rotation.y = time * 0.02;
      particlesRef.current.rotation.x = time * 0.01;
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

function CameraMovement({ scrollProgress }) {
  const { camera } = useThree();

  useFrame(() => {
    // Simple, subtle camera movement based on scroll
    const x = Math.sin(scrollProgress * Math.PI) * 0.3;
    const y = Math.cos(scrollProgress * Math.PI) * 0.2;
    
    // Direct position setting for better performance
    camera.position.x = x;
    camera.position.y = y;
    
    // Simple look at
    camera.lookAt(0, 0, 0);
  });

  return null;
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
        dpr={[1, 1]} // Fixed DPR for better performance
      >
        <color attach="background" args={['#0a0a0a']} />
        <fog attach="fog" args={['#0a0a0a', 5, 15]} />

        <AnimatedSphere scrollProgress={scrollProgress} />
        <ParticleField />
        <CameraMovement scrollProgress={scrollProgress} />

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
