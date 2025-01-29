import { useState } from 'react';
import { 
  Html,
  Float
} from '@react-three/drei';

interface Location {
  id: string;
  name: string;
  position: [number, number, number];
  description: string;
}

interface LocationMarkerProps {
  position: [number, number, number];
  name: string;
  description: string;
  isHovered: boolean;
  onClick: () => void;
  onPointerOver: () => void;
  onPointerOut: () => void;
}

const locations: Location[] = [
  {
    id: 'zero-gravity',
    name: 'Zero Gravity Chamber',
    position: [2, 0, 2],
    description: 'Experience weightlessness in our state-of-the-art chamber'
  },
  {
    id: 'mars-colony',
    name: 'Mars Colony',
    position: [-2, 0, -2],
    description: 'Explore life on the Red Planet'
  },
  {
    id: 'space-station',
    name: 'Space Station',
    position: [2, 0, -2],
    description: 'Train like real astronauts'
  },
  {
    id: 'rocket-launch',
    name: 'Rocket Launch Pad',
    position: [-2, 0, 2],
    description: 'Experience the thrill of space launch'
  }
];

function LocationMarker({ position, name, description, isHovered, onClick, onPointerOver, onPointerOut }: LocationMarkerProps) {
  return (
    <group position={position} onClick={onClick} onPointerOver={onPointerOver} onPointerOut={onPointerOut}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial color="#00bcd4" />
        </mesh>
        {isHovered && (
          <Html center>
            <div style={{
              background: 'rgba(0, 0, 0, 0.8)',
              padding: '1rem',
              borderRadius: '0.5rem',
              border: '1px solid #00bcd4',
              color: 'white',
              width: '200px',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#00bcd4', marginBottom: '0.5rem' }}>{name}</h3>
              <p style={{ fontSize: '0.9rem' }}>{description}</p>
            </div>
          </Html>
        )}
      </Float>
    </group>
  );
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial 
        color="#000235"
        roughness={0.8}
        metalness={0.2}
      />
    </mesh>
  );
}

function GridHelper() {
  return (
    <gridHelper 
      args={[20, 20, '#00bcd4', '#00bcd4']} 
      position={[0, -0.49, 0]}
    />
  );
}

export default function InteractiveMap() {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  return (
    <group>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      <Ground />
      <GridHelper />

      {locations.map((location) => (
        <LocationMarker
          key={location.id}
          {...location}
          isHovered={hoveredLocation === location.id}
          onClick={() => console.log(`Clicked ${location.name}`)}
          onPointerOver={() => setHoveredLocation(location.id)}
          onPointerOut={() => setHoveredLocation(null)}
        />
      ))}
    </group>
  );
}