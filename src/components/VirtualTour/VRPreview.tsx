import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { FaVrCardboard } from 'react-icons/fa';

export default function VRPreview() {
  return (
    <section className="vr-preview">
      <div className="vr-content">
        <motion.div
          className="vr-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2>Virtual Reality Experience</h2>
          <p>
            Get a sneak peek into our fully immersive space travel experience 
            before you visit.
          </p>
          <button className="vr-button">
            <FaVrCardboard />
            See Full VR Experience
          </button>
        </motion.div>

        <div className="vr-preview-window">
          <Canvas>
            <OrbitControls autoRotate />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Stars 
              radius={100} 
              depth={50} 
              count={5000} 
              factor={4} 
              saturation={0}
              fade
            />
            {/* Add your VR preview scene here */}
          </Canvas>
        </div>
      </div>
    </section>
  );
}