import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  
  const textures = {
    map: new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg'),
    bumpMap: new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg'),
    specularMap: new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_specular_2048.jpg'),
    cloudsMap: new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_clouds_1024.png'),
  };

  useFrame(() => {
    if (earthRef.current && cloudsRef.current) {
      earthRef.current.rotation.y += 0.005;
      cloudsRef.current.rotation.y += 0.006;
    }
  });

  return (
    <>
      {/* Atmosphere glow */}
      <mesh>
        <sphereGeometry args={[2.2, 64, 64]} />
        <meshBasicMaterial
          color="#4169e1"
          opacity={0.2}
          transparent
          side={THREE.BackSide}
        />
      </mesh>

      {/* Main Earth */}
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
    </>
  );
}

function Satellite() {
  const satelliteRef = useRef<THREE.Group>(null);
  const orbitRadius = 3;
  const orbitSpeed = 0.001;
  const initialAngle = Math.random() * Math.PI * 2;
  const angleRef = useRef(initialAngle);

  useFrame(() => {
    if (satelliteRef.current) {
      angleRef.current += orbitSpeed;
      satelliteRef.current.position.x = Math.cos(angleRef.current) * orbitRadius;
      satelliteRef.current.position.z = Math.sin(angleRef.current) * orbitRadius;
      satelliteRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={satelliteRef}>
      <mesh>
        <boxGeometry args={[0.2, 0.2, 0.2]} />
        <meshStandardMaterial 
          color="#00bcd4"
          emissive="#00bcd4"
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh position={[0.3, 0, 0]}>
        <boxGeometry args={[0.4, 0.02, 0.1]} />
        <meshStandardMaterial 
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  );
}

export default function SpaceBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
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
      {/* Enhanced lighting for better Earth visibility */}
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[5, 3, 5]} 
        intensity={1.5}
        color="#ffffff"
      />
      <pointLight 
        position={[-5, -2, 3]} 
        intensity={1}
        color="#ffffff"
      />

      <Stars
        radius={100}
        depth={50}
        count={8000}
        factor={5}
        saturation={1}
        fade
        speed={1}
      />
      <Earth />
      <Satellite />
      <Satellite />
      <Satellite />
    </Canvas>
  );
}