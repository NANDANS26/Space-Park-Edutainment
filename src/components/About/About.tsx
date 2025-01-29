import { motion } from 'framer-motion';
import { FaRocket, FaGraduationCap, FaGlobeAmericas } from 'react-icons/fa';
import SpaceBackground from './SpaceBackground';
import './About.css';

const About = () => {
  const teamMembers = [
    {
  name: 'Dr. Olivia Martinez',
  role: 'Founder & CEO',
  avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  bio: 'Pioneering astrophysicist dedicated to democratizing space education.'
},
{
  name: 'James Patel',
  role: 'Chief Technology Officer',
  avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  bio: 'Expert in virtual reality with two decades of experience in immersive simulations.'
},
{
  name: 'Sophia Lee',
  role: 'Education Director',
  avatar: 'https://images.unsplash.com/photo-1551989745-347c28b620e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
  bio: 'Passionate space science educator committed to inspiring future explorers.'
}

  ];

  const timeline = [
    {
      year: '2020',
      title: 'The Vision Takes Flight',
      description: 'Space Adventure Park concept is born from a dream to revolutionize space education.'
    },
    {
      year: '2021',
      title: 'Breaking Ground',
      description: 'Construction begins on our state-of-the-art facility.'
    },
    {
      year: '2022',
      title: 'Partnerships Formed',
      description: 'Strategic alliances formed with leading space agencies and educational institutions.'
    },
    {
      year: '2023',
      title: 'Grand Opening',
      description: 'Space Adventure Park opens its doors to aspiring space explorers.'
    }
  ];

  const visionItems = [
    {
      icon: <FaRocket />,
      title: 'Accessible Space Education',
      description: 'Making space science engaging and accessible to everyone.'
    },
    {
      icon: <FaGraduationCap />,
      title: 'STEM Innovation',
      description: 'Fostering innovation through hands-on learning experiences.'
    },
    {
      icon: <FaGlobeAmericas />,
      title: 'Global Impact',
      description: 'Inspiring the next generation of space explorers worldwide.'
    }
  ];

  return (
    <div className="about-container">
      <SpaceBackground />
      <motion.section 
        className="header-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="header-content">
          <motion.h1 
            className="header-title"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Our Mission to Inspire a New Generation of Space Explorers
          </motion.h1>
          <motion.p 
            className="header-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Learn about our vision, the journey behind Space Adventure Park, and the team driving the mission.
          </motion.p>
        </div>
      </motion.section>

      <motion.section 
        className="mission-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            "Our mission is to combine the thrill of exploration with the joy of learning, 
            inspiring the next generation to dream big, explore the unknown, and create a 
            better future through STEM."
          </p>
        </div>
      </motion.section>

      <section className="vision-section">
        <h2>Our Vision</h2>
        <div className="vision-timeline">
          {visionItems.map((item, index) => (
            <motion.div 
              key={index}
              className="vision-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="vision-icon">{item.icon}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="timeline-section">
        <h2>Our Journey</h2>
        <div className="timeline">
          {timeline.map((item, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="timeline-content">
                <div className="year">{item.year}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              className="team-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="card-inner">
                <div className="card-front">
                  <img src={member.avatar} alt={member.name} />
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                </div>
                <div className="card-back">
                  <p>{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section 
        className="cta-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Ready to Explore the Universe with Us?</h2>
        <div className="cta-buttons">
          <motion.button 
            className="cta-button primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Features
          </motion.button>
          <motion.button 
            className="cta-button secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Our Mission
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default About;