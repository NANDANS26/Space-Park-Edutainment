import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import ParkModel from './ParkModel';
import InteractiveMap from './InteractiveMap';
import SimulationPreviews from './SimulationPreviews';
import SpaceBackground from './SpaceBackground';
import './VirtualTour.css';

function Loader() {
  return (
    <Html center>
      <div className="loader">
        <div className="progress">Loading...</div>
        <div className="loading-text">Preparing your virtual experience</div>
      </div>
    </Html>
  );
}

function SpaceEnvironment() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <ParkModel />
    </>
  );
}

function InteractiveMapSection() {
  return (
    <section className="interactive-map-section">
      <Canvas 
        camera={{ position: [20, 15, 20], fov: 60 }}
        shadows
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls 
            enableZoom={true}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={0}
            maxDistance={50}
            minDistance={10}
          />
          <SpaceEnvironment />
          <InteractiveMap />
        </Suspense>
      </Canvas>
      <div className="map-overlay">
        <h2>Explore Our Park</h2>
        <p>Click on any attraction to learn more</p>
      </div>
    </section>
  );
}

export default function VirtualTour() {
  return (
    <div className="virtual-tour">
      <Suspense fallback={
        <motion.div className="loader">
          <div className="progress">Loading...</div>
          <div className="loading-text">Preparing your virtual experience</div>
        </motion.div>
      }>
        <SpaceBackground />
      </Suspense>
      <section className="introduction-section">
        <div className="intro-content">
          <h2>Welcome to the Future</h2>
          <p>
            Step into our virtual space park and explore incredible attractions
            before your visit. This immersive experience gives you a taste of
            what awaits in our real-world park.
          </p>
        </div>
      </section>
      <InteractiveMapSection />
      <SimulationPreviews />
    </div>
  );
}