import { motion } from 'framer-motion';
import { 
  FaRocket, 
  FaSpaceShuttle, 
  FaMeteor, 
  FaSatellite 
} from 'react-icons/fa';

const highlights = [
  {
    icon: <FaRocket />,
    title: 'Rocket Launch',
    description: 'Experience the thrill of space launch',
    tutorial: 'Watch tutorial'
  },
  {
    icon: <FaSpaceShuttle />,
    title: 'Space Station',
    description: 'Live like an astronaut',
    tutorial: 'Take a tour'
  },
  {
    icon: <FaMeteor />,
    title: 'Mars Colony',
    description: 'Explore the Red Planet',
    tutorial: 'Learn more'
  },
  {
    icon: <FaSatellite />,
    title: 'Satellite Control',
    description: 'Operate space technology',
    tutorial: 'Start training'
  }
];

export default function TourHighlights() {
  return (
    <section className="tour-highlights">
      <h2>Your Personal Guide to the Park</h2>
      <div className="highlights-grid">
        {highlights.map((highlight, index) => (
          <motion.div
            key={index}
            className="highlight-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="highlight-icon">{highlight.icon}</div>
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
            <button className="tutorial-button">{highlight.tutorial}</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}