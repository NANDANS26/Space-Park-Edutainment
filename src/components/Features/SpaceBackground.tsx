import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

function DataStreams() {
  const streamsRef = useRef<THREE.Group | null>(null);
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

  useFrame(() => {
    if (streamsRef.current) {
      streamsRef.current.children.forEach((stream, index) => {
        stream.position.y -= streams[index].speed;
        if (stream.position.y < -20) {
          stream.position.y = 20;
        }
      });
    }
  });

  return (
    <group ref={streamsRef}>
      {streams.map((data, i) => (
        <group
          key={i}
          position={data.startPosition as [number, number, number]}
        >
          <mesh>
            <boxGeometry args={[0.1, 0.5, 0.1]} />
            <meshBasicMaterial color={data.color} transparent opacity={0.6} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  
  const textures = useMemo(() => ({
    map: new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg'),
    bumpMap: new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg'),
    specularMap: new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_specular_2048.jpg'),
    cloudsMap: new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_clouds_1024.png'),
  }), []);

  useFrame(({ clock }) => {
    if (earthRef.current && cloudsRef.current) {
      earthRef.current.rotation.y = clock.getElapsedTime() * 0.1;
      cloudsRef.current.rotation.y = clock.getElapsedTime() * 0.12;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={[8, 0, 0]} scale={0.6}>
        {/* Atmosphere glow */}
        <mesh>
          <sphereGeometry args={[2.1, 64, 64]} />
          <meshBasicMaterial
            color="#4169e1"
            opacity={0.2}
            transparent
            side={THREE.BackSide}
          />
        </mesh>

        {/* Earth */}
        <mesh ref={earthRef}>
          <sphereGeometry args={[2, 64, 64]} />
          <meshPhongMaterial
            map={textures.map}
            bumpMap={textures.bumpMap}
            bumpScale={0.15}
            specularMap={textures.specularMap}
            specular={new THREE.Color('#909090')}
            shininess={10}
          />
        </mesh>

        {/* Clouds */}
        <mesh ref={cloudsRef}>
          <sphereGeometry args={[2.05, 64, 64]} />
          <meshPhongMaterial
            map={textures.cloudsMap}
            transparent
            opacity={0.4}
            depthWrite={false}
          />
        </mesh>
      </group>
    </Float>
  );
}

function Asteroids() {
  const asteroids = useMemo(() => {
    return Array.from({ length: 50 }, () => ({
      position: [
        Math.random() * 40 - 20,
        Math.random() * 40 - 20,
        Math.random() * 40 - 20
      ],
      rotation: Math.random() * Math.PI,
      scale: Math.random() * 0.3 + 0.1,
      speed: Math.random() * 0.02 + 0.01
    }));
  }, []);

  const asteroidsRef = useRef<THREE.Group[]>([]);

  return (
    <>
      {asteroids.map((data, i) => (
        <group
          key={i}
          ref={el => asteroidsRef.current[i] = el!}
          position={data.position as [number, number, number]}
          scale={[data.scale, data.scale, data.scale]}
        >
          <mesh>
            <dodecahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color="#666666"
              roughness={0.8}
              metalness={0.2}
            />
          </mesh>
        </group>
      ))}
    </>
  );
}

function ShootingStars() {
  const starsRef = useRef<THREE.Group[]>([]);
  const stars = useMemo(() => {
    return Array.from({ length: 20 }, () => ({
      position: [
        Math.random() * 100 - 50,
        Math.random() * 100 - 50,
        Math.random() * 100 - 50
      ],
      speed: Math.random() * 0.5 + 0.5
    }));
  }, []);

  useFrame(() => {
    starsRef.current.forEach((star, i) => {
      if (star) {
        star.position.x -= stars[i].speed;
        star.position.y -= stars[i].speed;
        
        if (star.position.x < -50) {
          star.position.x = 50;
          star.position.y = 50;
        }
      }
    });
  });

  return (
    <>
      {stars.map((data, i) => (
        <group
          key={i}
          ref={el => starsRef.current[i] = el!}
          position={data.position as [number, number, number]}
        >
          <mesh>
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
          <mesh>
            <cylinderGeometry args={[0, 0.1, 2, 8]} />
            <meshBasicMaterial
              color="#ffffff"
              transparent
              opacity={0.3}
            />
          </mesh>
        </group>
      ))}
    </>
  );
}

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
      <ambientLight intensity={0.3} />
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
      <Earth />
      <Asteroids />
      <ShootingStars />
      <DataStreams />
      <fog attach="fog" args={['#000235', 30, 90]} />
    </Canvas>
  );
}
