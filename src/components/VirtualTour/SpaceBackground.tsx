import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

// Planet Component
function Planet({ position, size, color, emissive }: any) {
  const planetRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (planetRef.current) {
      planetRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group position={position}>
      <mesh ref={planetRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.5}
        />
      </mesh>
      <mesh ref={atmosphereRef}>
        <sphereGeometry args={[size * 1.2, 32, 32]} />
        <meshStandardMaterial
          color={emissive}
          transparent
          opacity={0.3}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

// Asteroids Component
function Asteroids() {
  const asteroidsRef = useRef<THREE.Group>(null);
  const asteroids = useMemo(() => {
    return Array.from({ length: 30 }, () => ({
      position: [
        Math.random() * 60 - 30,
        Math.random() * 60 - 30,
        Math.random() * 60 - 30
      ],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ],
      scale: Math.random() * 0.5 + 0.2,
      speed: Math.random() * 0.02 + 0.01,
      color: new THREE.Color().setHSL(Math.random(), 0.8, 0.5)
    }));
  }, []);

  useFrame(({ clock }) => {
    if (asteroidsRef.current) {
      asteroidsRef.current.children.forEach((asteroid, i) => {
        asteroid.rotation.x += asteroids[i].speed;
        asteroid.rotation.y += asteroids[i].speed * 0.5;
        asteroid.position.y = asteroids[i].position[1] + Math.sin(clock.getElapsedTime() * asteroids[i].speed + i) * 2;
      });
    }
  });

  return (
    <group ref={asteroidsRef}>
      {asteroids.map((asteroid, i) => (
        <Float key={i} speed={1.5} rotationIntensity={2} floatIntensity={2}>
          <mesh
            position={asteroid.position as [number, number, number]}
            rotation={asteroid.rotation as [number, number, number]}
            scale={[asteroid.scale, asteroid.scale, asteroid.scale]}
          >
            <dodecahedronGeometry args={[1, 1]} />
            <meshStandardMaterial
              color={asteroid.color}
              metalness={0.7}
              roughness={0.3}
              emissive={asteroid.color}
              emissiveIntensity={0.2}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

// Planets Component
function Planets() {
  const planets = [
    { position: [15, 0, -10], size: 3, color: '#ff6b6b', emissive: '#ff8585' },   // Red planet
    { position: [-12, 5, -15], size: 2, color: '#4ecdc4', emissive: '#6be5de' },  // Turquoise planet
    { position: [8, -8, -12], size: 2.5, color: '#a06cd5', emissive: '#b794dd' }, // Purple planet
    { position: [-15, -4, -8], size: 1.8, color: '#ffd93d', emissive: '#ffe584' } // Yellow planet
  ];

  return (
    <>
      {planets.map((planet, index) => (
        <Planet key={index} {...planet} />
      ))}
    </>
  );
}

// Energy Rings Component
function EnergyRings() {
  const ringsRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (ringsRef.current) {
      ringsRef.current.rotation.z = clock.getElapsedTime() * 0.2;
      ringsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group ref={ringsRef}>
      {[10, 15, 20].map((radius, i) => (
        <mesh key={i} rotation-x={Math.PI * 0.5}>
          <torusGeometry args={[radius, 0.2, 16, 100]} />
          <meshStandardMaterial
            color="#00bcd4"
            emissive="#00bcd4"
            emissiveIntensity={0.5}
            transparent
            opacity={0.3}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

// Data Streams Component
function DataStreams() {
  const streamsRef = useRef<THREE.Group>(null);
  const streams = useMemo(() => {
    return Array.from({ length: 50 }, () => ({
      startPosition: [
        Math.random() * 40 - 20,
        20,
        Math.random() * 40 - 20
      ],
      speed: Math.random() * 0.2 + 0.1,
      color: new THREE.Color().setHSL(Math.random(), 0.8, 0.5)
    }));
  }, []);

  useFrame(({  }) => {
    if (streamsRef.current) {
      streamsRef.current.children.forEach((stream, i) => {
        stream.position.y -= streams[i].speed;
        if (stream.position.y < -20) {
          stream.position.y = 20;
        }
      });
    }
  });

  return (
    <group ref={streamsRef}>
      {streams.map((stream, i) => (
        <mesh
          key={i}
          position={stream.startPosition as [number, number, number]}
        >
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial
            color={stream.color}
            emissive={stream.color}
            emissiveIntensity={1}
          />
        </mesh>
      ))}
    </group>
  );
}

// Main SpaceBackground Component
export default function SpaceBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 20], fov: 60 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        background: 'radial-gradient(circle at center, #000235 0%, #000000 100%)',
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Stars
        radius={300}
        depth={60}
        count={10000}
        factor={7}
        saturation={0}
        fade
        speed={1}
      />
      <Planets />
      <Asteroids />
      <EnergyRings />
      <DataStreams />
      <fog attach="fog" args={['#000235', 30, 90]} />
    </Canvas>
  );
}
