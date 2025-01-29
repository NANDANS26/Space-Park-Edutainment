import { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Html } from '@react-three/drei';

// Predefined fixed positions for the buildings around the fountain
const fixedPositions = [
  [-10, 0, -10],
  [10, 0, -10],
  [-15, 0, 5],
  [15, 0, 5],
  [-5, 0, 15],
  [5, 0, 15],
  [-20, 0, -5],
  [20, 0, -5],
  [-25, 0, 10],
  [25, 0, 10],
  [-30, 0, -15],
  [30, 0, -15],
  [-35, 0, 20],
  [35, 0, 20],
  [0, 0, 25],
];

// Simulation buildings data
const simulations = [
  { name: 'Tent Simulation', description: 'Experience camping in space.', color: '#FF6347', features: ['Stargazing', 'Cosmic isolation', 'Space campfire'] },
  { name: 'Mars Colony House', description: 'Stay in a Martian house.', color: '#FF4500', features: ['Martian habitat', 'Self-sustained living', 'Energy-efficient design'] },
  { name: 'Space Station Hub', description: 'Live in a space hub.', color: '#1E90FF', features: ['Central hub', 'Community living', 'Resource management'] },
  { name: 'Space Dome', description: 'Experience life under a space dome.', color: '#8A2BE2', features: ['Climate control', 'Natural lighting', 'Panoramic views'] },
  { name: 'Asteroid Outpost', description: 'Outpost on an asteroid.', color: '#32CD32', features: ['Minimalist living', 'Resource mining', 'Asteroid exploration'] },
  { name: 'Black Hole Research Center', description: 'Research black holes.', color: '#2F4F4F', features: ['Observatory', 'Scientific data', 'Safe simulations'] },
  { name: 'Alien Habitat', description: 'Explore alien habitats.', color: '#FFD700', features: ['Alien architecture', 'Cultural immersion', 'Advanced technology'] },
  { name: 'Deep Space Observatory', description: 'Observe deep space.', color: '#FF1493', features: ['High-powered telescopes', 'Space mapping', 'Astronomical discoveries'] },
  { name: 'Time Travel Lodge', description: 'Stay in a time travel lodge.', color: '#00FFFF', features: ['Temporal dynamics', 'Historic recreations', 'Future visions'] },
  { name: 'Galactic Federation Embassy', description: 'Embassy for intergalactic relations.', color: '#DC143C', features: ['Diplomatic negotiations', 'Cultural exchange', 'Peacekeeping'] },
  { name: 'Starship Hangar', description: 'Command a starship.', color: '#00008B', features: ['Maintenance bay', 'Crew quarters', 'Flight simulations'] },
  { name: 'Quantum Computing Tower', description: 'Quantum computing research.', color: '#800080', features: ['Advanced computing', 'Quantum algorithms', 'Cryptography'] },
  { name: 'Space Farming Dome', description: 'Sustainable farming in space.', color: '#00FF00', features: ['Hydroponics', 'Crop rotation', 'Sustainability'] },
  { name: 'Solar System Research Center', description: 'Research the solar system.', color: '#FFA500', features: ['Planetary models', 'Solar dynamics', 'Data analysis'] },
  { name: 'Comet Ride Pavilion', description: 'Ride a simulated comet.', color: '#8B0000', features: ['High-speed thrill', 'Comet dynamics', 'Interactive experience'] },
];

// Building Component
interface BuildingProps {
  name: string;
  description: string;
  color: string;
  position: [number, number, number];
  features: string[];
}

function Building({ name, description, color, position, features = [] }: BuildingProps) {
  const [hovered, setHovered] = useState(false);
  const buildingRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (buildingRef.current && hovered) {
      buildingRef.current.rotation.y = clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <group 
      ref={buildingRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh castShadow receiveShadow>
        <boxGeometry args={[5, 5, 5]} />
        <meshStandardMaterial 
          color={color}
          metalness={0.6}
          roughness={0.2}
        />
      </mesh>

      <mesh position={[0, 3, 0]} castShadow>
        <coneGeometry args={[4, 3, 4]} />
        <meshStandardMaterial 
          color={color}
          metalness={0.8}
          roughness={0.1}
        />
      </mesh>

      {hovered && (
        <Html position={[0, 6, 0]} center>
          <div style={{
            background: 'rgba(0, 0, 0, 0.9)',
            color: 'white',
            padding: '15px 20px',
            borderRadius: '10px',
            border: '2px solid #00bcd4',
            width: '250px',
            textAlign: 'center',
            backdropFilter: 'blur(5px)',
            boxShadow: '0 0 20px rgba(0, 188, 212, 0.3)',
          }}>
            <h3 style={{ color: '#00bcd4', margin: '0 0 10px 0' }}>{name}</h3>
            <p style={{ margin: '0 0 10px 0' }}>{description}</p>
            {features.length > 0 && (
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {features.map((feature, index) => (
                  <li key={index} style={{ margin: '5px 0', color: '#00bcd4' }}>• {feature}</li>
                ))}
              </ul>
            )}
          </div>
        </Html>
      )}
    </group>
  );
}

// Static Terrain (Grid) with Pitch Black Background and Sky Blue Grid Lines
function StaticTerrain() {
  const terrainGeometry = useMemo(() => new THREE.PlaneGeometry(100, 100, 50, 50), []);

  return (
    <mesh 
      rotation={[-Math.PI / 2, 0, 0]} 
      position={[0, -1, 0]}
      receiveShadow
    >
      <primitive object={terrainGeometry} attach="geometry" />
      <meshStandardMaterial 
        color="black" // Pitch black color for the grid background
        wireframe
        emissive="#87CEEB" // Sky blue color for grid lines
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

// New Water Fountain with Water Pumping from Top
function WaterFountain() {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 1000;

  const particlePositions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const radius = Math.random() * 2;
      const height = Math.random() * 6;
      positions[i * 3] = Math.cos(theta) * radius;
      positions[i * 3 + 1] = height;
      positions[i * 3 + 2] = Math.sin(theta) * radius;
    }
    return positions;
  }, []);

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array;
      const time = clock.getElapsedTime();

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3 + 1] -= 0.1;

        if (positions[i3 + 1] < 0) {
          const theta = Math.random() * Math.PI * 2;
          const radius = Math.random() * 0.5;
          positions[i3] = Math.cos(theta) * radius;
          positions[i3 + 1] = 6;
          positions[i3 + 2] = Math.sin(theta) * radius;
        }

        positions[i3] += Math.sin(time + i) * 0.01;
        positions[i3 + 2] += Math.cos(time + i) * 0.01;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <mesh receiveShadow>
        <cylinderGeometry args={[8, 10, 2, 32]} />
        <meshStandardMaterial color="#34495E" roughness={0.7} metalness={0.3} />
      </mesh>

      <mesh position={[0, 5, 0]}>
        <cylinderGeometry args={[1, 1.2, 4, 16]} />
        <meshStandardMaterial color="#34495E" metalness={0.6} roughness={0.2} />
      </mesh>

      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#0EA5E9"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

// Energy Rings
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

// Park Model Component
export default function ParkModel() {
  const parkRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (parkRef.current) {
      parkRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={parkRef} scale={[0.5, 0.5, 0.5]}>
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <StaticTerrain />
      <WaterFountain />
      <EnergyRings />

      {fixedPositions.map((position, index) => (
        <Building 
          key={index} 
          position={[position[0], position[1] + 3, position[2]]} // Ensure buildings are above the terrain plane
          name={simulations[index].name} 
          description={simulations[index].description} 
          color={simulations[index].color}
          features={simulations[index].features}
        />
      ))}
    </group>
  );
}
