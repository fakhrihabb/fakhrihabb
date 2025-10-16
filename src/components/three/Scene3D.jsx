'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere({ scrollProgress }) {
  const meshRef = useRef();
  const lightRef = useRef();
  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Position the group based on scroll
    if (groupRef.current) {
      // Create a more dynamic path for the blob to follow
      const x = Math.sin(scrollProgress * Math.PI * 2) * 3;
      const y = Math.cos(scrollProgress * Math.PI * 1.5) * 2 - 1;
      const z = Math.sin(scrollProgress * Math.PI) * 4 - 2;
      
      groupRef.current.position.set(x, y, z);
      
      // Add some rotation to the entire group
      groupRef.current.rotation.x = scrollProgress * Math.PI * 0.5;
      groupRef.current.rotation.y = scrollProgress * Math.PI * 0.3;
    }

    // Rotate the sphere with more complex motion
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2 + scrollProgress * 2;
      meshRef.current.rotation.y = time * 0.3 + scrollProgress * 1.5;
      meshRef.current.rotation.z = Math.sin(scrollProgress * Math.PI * 2) * 0.5;

      // Dynamic scaling based on scroll position
      const scale = 1 + Math.sin(scrollProgress * Math.PI) * 0.5 +
                    Math.cos(scrollProgress * Math.PI * 2) * 0.2;
      const scaleX = scale + Math.sin(scrollProgress * Math.PI * 3) * 0.1;
      const scaleY = scale + Math.cos(scrollProgress * Math.PI * 3) * 0.1;
      const scaleZ = scale;
      meshRef.current.scale.set(scaleX, scaleY, scaleZ);
      
      // Morph the sphere by adjusting its distortion
      if (meshRef.current.material) {
        meshRef.current.material.distort = 0.3 + Math.sin(scrollProgress * Math.PI * 2) * 0.4;
        meshRef.current.material.speed = 1 + scrollProgress * 3;
      }
    }

    // Animate lights based on scroll
    if (lightRef.current) {
      lightRef.current.intensity = 2 + Math.sin(time * 2) * 0.5 + scrollProgress * 2;
      lightRef.current.position.x = 2 + Math.sin(scrollProgress * Math.PI * 2) * 3;
      lightRef.current.position.y = 2 + Math.cos(scrollProgress * Math.PI * 2) * 2;
    }
  });

  return (
    <group ref={groupRef}>
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
  const materialRef = useRef();

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
      // More dynamic rotation based on scroll
      particlesRef.current.rotation.y = time * 0.05 + scrollProgress * 0.5;
      particlesRef.current.rotation.x = time * 0.03 + scrollProgress * 0.3;
      particlesRef.current.rotation.z = Math.sin(scrollProgress * Math.PI) * 0.2;
      
      // Move particles based on scroll
      particlesRef.current.position.x = Math.sin(scrollProgress * Math.PI * 2) * 2;
      particlesRef.current.position.y = Math.cos(scrollProgress * Math.PI * 1.5) * 1;
    }
    
    // Change particle opacity and size based on scroll
    if (materialRef.current) {
      materialRef.current.opacity = 0.3 + Math.sin(scrollProgress * Math.PI) * 0.3;
      materialRef.current.size = 0.05 + Math.sin(scrollProgress * Math.PI * 2) * 0.03;
      
      // Change color based on scroll
      const hue = 0.3 + scrollProgress * 0.1; // Green to cyan-ish
      materialRef.current.color.setHSL(hue, 1.0, 0.5);
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
        ref={materialRef}
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
    // Create a subtle camera movement based on scroll
    const x = Math.sin(scrollProgress * Math.PI * 2) * 0.5;
    const y = Math.cos(scrollProgress * Math.PI * 1.5) * 0.3;
    const z = 5 + Math.sin(scrollProgress * Math.PI) * 2;
    
    camera.position.lerp(
      new THREE.Vector3(x, y, z),
      0.05
    );
    
    // Make camera look at a moving point
    const lookAtX = Math.sin(scrollProgress * Math.PI) * 1;
    const lookAtY = Math.cos(scrollProgress * Math.PI * 0.5) * 0.5;
    const lookAtPoint = new THREE.Vector3(lookAtX, lookAtY, 0);
    camera.lookAt(lookAtPoint);
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
        dpr={[1, 2]}
      >
        <color attach="background" args={['#0a0a0a']} />
        <fog attach="fog" args={['#0a0a0a', 5, 15]} />

        <AnimatedSphere scrollProgress={scrollProgress} />
        <ParticleField scrollProgress={scrollProgress} />
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
