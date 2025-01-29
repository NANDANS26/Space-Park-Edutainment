import { Suspense, useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  useTexture,
  Trail,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

// Orbital Ring Component
const OrbitalRing = ({ radius }: { radius: number }) => (
  <mesh rotation={[Math.PI / 2, 0, 0]}>
    <ringGeometry args={[radius - 0.1, radius + 0.1, 128]} />
    <meshBasicMaterial
      color="#ffffff"
      transparent
      opacity={0.3}
      side={THREE.DoubleSide}
    />
  </mesh>
);

// Planet Component
const Planet = ({
  texturePath,
  size,
  distance,
  speed,
  rotationSpeed,
  ringTexturePath,
  hasAtmosphere = false,
  emissive = false,
}: {
  texturePath: string;
  size: number;
  distance: number;
  speed: number;
  rotationSpeed: number;
  ringTexturePath?: string;
  hasAtmosphere?: boolean;
  emissive?: boolean;
}) => {
  const ref = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  const planetTexture = useTexture(texturePath) as THREE.Texture;
  const ringMap = ringTexturePath ? (useTexture(ringTexturePath) as THREE.Texture) : null;

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (orbitRef.current) {
      orbitRef.current.position.x = Math.cos(elapsedTime * speed * 3) * distance;
      orbitRef.current.position.z = Math.sin(elapsedTime * speed * 3) * distance;
    }

    if (ref.current) ref.current.rotation.y += rotationSpeed;
    if (glowRef.current) glowRef.current.rotation.y += rotationSpeed * 0.5;
  });

  return (
    <group>
      <OrbitalRing radius={distance} />
      <group ref={orbitRef}>
        <mesh ref={ref}>
          <sphereGeometry args={[size, 128, 128]} />
          <meshStandardMaterial
            map={planetTexture}
            metalness={0.5}
            roughness={0.5}
            emissive={emissive ? new THREE.Color("#ff4400") : new THREE.Color(0)}
            emissiveIntensity={emissive ? 3 : 0}
          />
          {hasAtmosphere && (
            <mesh ref={glowRef}>
              <sphereGeometry args={[size * 1.3, 128, 128]} />
              <meshPhongMaterial
                color={emissive ? "#ff8844" : "#aaaaff"}
                transparent
                opacity={0.2}
                side={THREE.BackSide}
                blending={THREE.AdditiveBlending}
              />
            </mesh>
          )}
          {ringMap && (
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <ringGeometry args={[size * 1.5, size * 2.5, 128]} />
              <meshStandardMaterial
                map={ringMap}
                transparent
                opacity={0.8}
                side={THREE.DoubleSide}
                blending={THREE.AdditiveBlending}
              />
            </mesh>
          )}
        </mesh>
      </group>
    </group>
  );
};

// Shooting Star Component
const ShootingStar = () => {
  const ref = useRef<THREE.Group>(null);
  const initialPosition = useMemo(
    () => ({
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
      z: Math.random() * 100 - 50,
    }),
    []
  );

  useFrame(() => {
    if (ref.current) {
      ref.current.position.x -= 1;
      ref.current.position.y -= 0.5;
      if (ref.current.position.x < -50) {
        ref.current.position.set(initialPosition.x, initialPosition.y, initialPosition.z);
      }
    }
  });

  return (
    <group ref={ref} position={[initialPosition.x, initialPosition.y, initialPosition.z]}>
      <Trail width={0.5} length={8} color={new THREE.Color(1, 1, 1)}>
        <mesh>
          <sphereGeometry args={[0.2, 8, 8]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </Trail>
    </group>
  );
};

// Space Background Component
const SpaceBackground = () => {
  const spaceTexture = useTexture("/textures/space_hdri.jpg") as THREE.Texture;
  return (
    <mesh>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial map={spaceTexture} side={THREE.BackSide} />
    </mesh>
  );
};

// Main Solar System Component
const SolarSystem = () => {
  const [showWelcome] = useState(true);

  const planets = [
    { 
        "texturePath": "/textures/2k_sun.jpg", 
        "size": 7.5, 
        "distance": 0, 
        "speed": 0, 
        "rotationSpeed": 0.002, 
        "hasAtmosphere": true, 
        "emissive": true 
    },
    { 
        "texturePath": "/textures/2k_mercury.jpg", 
        "size": 1, 
        "distance": 20, 
        "speed": 0.04, 
        "rotationSpeed": 0.01 
    },
    { 
        "texturePath": "/textures/2k_venus_surface.jpg", 
        "size": 1.35, 
        "distance": 30, 
        "speed": 0.015, 
        "rotationSpeed": 0.008, 
        "hasAtmosphere": true 
    },
    { 
        "texturePath": "/textures/2k_earth_daymap.jpg", 
        "size": 1.5, 
        "distance": 45, 
        "speed": 0.01, 
        "rotationSpeed": 0.01, 
        "hasAtmosphere": true 
    },
    { 
        "texturePath": "/textures/2k_mars.jpg", 
        "size": 0.9, 
        "distance": 55.5, 
        "speed": 0.008, 
        "rotationSpeed": 0.009, 
        "hasAtmosphere": true 
    },
    { 
        "texturePath": "/textures/2k_jupiter.jpg", 
        "size": 3.75, 
        "distance": 70.5, 
        "speed": 0.002, 
        "rotationSpeed": 0.004, 
        "hasAtmosphere": true 
    },
    { 
        "texturePath": "/textures/2k_saturn.jpg", 
        "size": 3.3, 
        "distance": 85.5, 
        "speed": 0.0009, 
        "rotationSpeed": 0.003, 
        "hasAtmosphere": true, 
        "ringTexturePath": "/textures/saturn_ring.png" 
    },
    { 
        "texturePath": "/textures/2k_uranus.jpg", 
        "size": 1.5, 
        "distance": 100, 
        "speed": 0.0007, 
        "rotationSpeed": 0.002, 
        "hasAtmosphere": true 
    },
    { 
        "texturePath": "/textures/2k_neptune.jpg", 
        "size": 1.45, 
        "distance": 115, 
        "speed": 0.0005, 
        "rotationSpeed": 0.001, 
        "hasAtmosphere": true 
    }
];

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      {/* New Text Above the Solar System */}
      <div
        style={{
          position: "absolute",
          top: "100%",
          width: "100%",
          textAlign: "center",
          color: "white",
          fontSize: "33px",
          fontWeight: "bold",
          textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
          zIndex: 10,
        }}
      >
        Wait and see how our solar system looks like!!
      </div>
      
      {showWelcome && (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="welcome-screen">
          
        </motion.div>
      )}
      {/* Main Section */}
      <header className="main-banner">
        <h1>Welcome to Space Park: A Universe of Discovery Awaits!</h1>
        <p>Embark on an incredible journey through our interactive Solar System. Unravel cosmic mysteries, experience cutting-edge simulations, and spark your curiosity about the stars.</p>
      </header>

      <Canvas camera={{ position: [0, 100, 200], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[0, 0, 0]} intensity={3} color="#ffffff" />
        <Stars radius={500} depth={150} count={5000} factor={6} fade />
        <Suspense fallback={null}>
          <Environment background><SpaceBackground /></Environment>
          {planets.map((planet, i) => (<Planet key={i} {...planet} />))}
          {[...Array(15)].map((_, i) => (<ShootingStar key={i} />))}
        </Suspense>
        <OrbitControls maxDistance={250} minDistance={50} />
        <EffectComposer><Bloom intensity={1.5} luminanceThreshold={0.1} luminanceSmoothing={0.9} height={300} /></EffectComposer>
      </Canvas>
    </div>
  );
};

export default SolarSystem;
