import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { simulations } from './simulationsData';

export default function SimulationPreviews() {
  const [activeSimulation, setActiveSimulation] = useState(0);

  return (
    <section className="simulations-section">
      <h2>Experience the Thrill of Our Simulations</h2>
      <div className="simulations-container">
        {simulations.map((simulation, index) => (
          <motion.div
            key={simulation.id}
            className={`simulation-card ${index === activeSimulation ? 'active' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setActiveSimulation(index)}
          >
            <div className="simulation-image">
              <img src={simulation.image} alt={simulation.title} />
            </div>
            <div className="simulation-content">
              <h3>{simulation.title}</h3>
              <p>{simulation.description}</p>
              <Link to={`/simulation/${simulation.id}`} className="try-button">
                Try it Yourself
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}