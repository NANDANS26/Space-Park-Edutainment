import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { simulations } from './simulationsData';
import SpaceBackground from './SpaceBackground';
import './SimulationPage.css';

export default function SimulationPage() {
  const { id } = useParams<{ id: string }>();
  const simulation = simulations.find(sim => sim.id === id);
  const navigate = useNavigate();

  if (!simulation) {
    return (
      <div className="simulation-not-found">
        <h2>Simulation Not Found</h2>
        <Link to="/tour" className="back-button">Return to Virtual Tour</Link>
      </div>
    );
  }

  const handleBookNow = () => {
    // Navigate to tickets page with simulation info
    navigate('/tickets', { state: { selectedSimulation: simulation } });
  };

  return (
    <div className="simulation-page">
      <SpaceBackground />
      <div className="simulation-content-wrapper">
        <motion.div 
          className="simulation-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={simulation.image} alt={simulation.title} className="simulation-hero-image" />
          <div className="simulation-title-container">
            <h1>{simulation.title}</h1>
            <Link to="/tour" className="back-button">← Back to Tour</Link>
          </div>
        </motion.div>

        <div className="simulation-details">
          <motion.section 
            className="main-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2>About this Experience</h2>
            <p>{simulation.fullDescription}</p>
          </motion.section>

          <motion.section 
            className="features-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2>Key Features</h2>
            <ul>
              {simulation.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </motion.section>

          <div className="info-grid">
            <motion.section 
              className="requirements-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2>Requirements</h2>
              <ul>
                {simulation.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </motion.section>

            <motion.section 
              className="safety-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h2>Safety Measures</h2>
              <ul>
                {simulation.safetyMeasures.map((measure, index) => (
                  <li key={index}>{measure}</li>
                ))}
              </ul>
            </motion.section>
          </div>

          <motion.section 
            className="schedule-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2>Experience Schedule</h2>
            <div className="schedule-grid">
              <div className="schedule-item">
                <h3>Preparation</h3>
                <p>{simulation.schedule.preparation}</p>
              </div>
              <div className="schedule-item">
                <h3>Main Activity</h3>
                <p>{simulation.schedule.mainActivity}</p>
              </div>
              <div className="schedule-item">
                <h3>Debriefing</h3>
                <p>{simulation.schedule.debriefing}</p>
              </div>
            </div>
          </motion.section>

          <motion.div 
            className="booking-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="simulation-meta">
              <div className="meta-item">
                <span className="meta-label">Duration:</span>
                <span className="meta-value">{simulation.duration}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Capacity:</span>
                <span className="meta-value">{simulation.capacity}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Difficulty:</span>
                <span className="meta-value">{simulation.difficulty}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Age:</span>
                <span className="meta-value">{simulation.ageRestriction}</span>
              </div>
            </div>
            <button className="book-button" onClick={handleBookNow}>
              Book This Experience
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}