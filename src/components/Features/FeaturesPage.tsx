import  { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaRocket, FaVrCardboard, FaBinoculars, FaSpaceShuttle, 
  FaGlobeAmericas, FaBrain, FaUserAstronaut, FaAtom,
  FaSun, FaSpaceShuttle as FaISS, FaCircle, FaCogs,
  FaUtensils, FaComments, FaFighterJet, FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SpaceBackground from './SpaceBackground';
import './FeaturesPage.css';

// Animation variants
const containerVariants = {
  hidden: { 
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const features = [
  {
    id: 'zero-gravity',
    title: 'Zero Gravity Chamber',
    description: "Experience the thrill of weightlessness in our state-of-the-art Zero Gravity Chamber! Simulating the sensation of floating in space, this attraction lets you feel what it's like to be an astronaut in microgravity. Whether you're flipping, spinning, or just floating, it's an unforgettable experience that mimics the challenges and excitement of life in space. Perfect for first-time space enthusiasts and thrill-seekers, this chamber offers a taste of what astronauts experience while orbiting Earth.",
    image: 'https://paracletexp.com/wp-content/uploads/2020/02/April16-06160-scaled.jpg',
    highlight: 'Perfect for first-time space enthusiasts!',
    icon: <FaRocket />,
    position: { top: '10%', left: '20%' }
  },
  {
    id: 'mars-rover',
    title: 'Mars Rover Experience',
    description: "Embark on an adventure to Mars with our Mars Rover Experience! Take control of a replica Mars rover and navigate through a simulated Martian landscape filled with craters, rocks, and dust storms. This hands-on experience lets you explore the challenges of exploring the Red Planet, just like NASA's rover missions. Learn about the technologies used to operate rovers on Mars and gain insights into the science behind planetary exploration. Feel like a real Mars explorer as you drive across this alien terrain!",
    image: 'https://mars.nasa.gov/internal_resources/586',
    highlight: 'Feel like a real Mars explorer!',
    icon: <FaSpaceShuttle />,
    position: { top: '15%', right: '25%' }
  },
  {
    id: 'space-station',
    title: 'Space Station Lab',
    description: "Experience life aboard a space station and become a part of the scientific community conducting groundbreaking experiments in microgravity! The Space Station Lab features a fully-equipped replica of a space station laboratory, complete with real astronaut training equipment. Engage in interactive experiments that simulate space science and technology, from biological research to material testing. This hands-on experience offers a unique opportunity to learn how astronauts conduct experiments that could shape the future of space exploration and innovation.",
    image: 'https://starlust.org/wp-content/uploads/2023/01/astronaut-alexander-gerst-scrubbing-the-ISS-interior.webp',
    highlight: 'Real astronaut training equipment!',
    icon: <FaISS />,
    position: { top: '30%', left: '30%' }
  },
  {
    id: 'lunar-base',
    title: 'Lunar Base',
    description: "Step into the future of lunar exploration with our Lunar Base simulation! Experience what life would be like living and working on the Moon in a habitat designed to mimic the challenges and innovations of lunar colonies. Explore the science behind sustainable living in space, from growing food to managing resources in a harsh, low-gravity environment. This immersive experience gives you a glimpse into humanity's next frontier of space exploration, showcasing how astronauts will live and thrive on the Moon.",
    image: 'https://th.bing.com/th/id/R.bcbcda160560a425204c09ed10671a48?rik=WN7FLlRMfcwxqg&riu=http%3a%2f%2f3dprint.com%2fwp-content%2fuploads%2f2015%2f12%2fmoonbase.jpg&ehk=aqaiynYdUqvYibWFWAoCKH%2bLHiqElZq%2b1t86GYw4NPk%3d&risl=&pid=ImgRaw&r=0',
    highlight: 'Most realistic lunar simulation on Earth!',
    icon: <FaGlobeAmericas />,
    position: { top: '25%', right: '35%' }
  },
  {
    id: 'space-walk',
    title: 'Space Walk Simulator',
    description: "Step into the shoes of an astronaut and experience the thrill of a spacewalk in our EVA (Extravehicular Activity) Simulation Facility! Using state-of-the-art technology, this simulator replicates the conditions of space, allowing you to float freely and perform tasks outside a spacecraft. Learn about the critical skills astronauts need to master for spacewalks, from tool handling to maneuvering in microgravity. This hands-on experience offers a unique, immersive opportunity to train like a real astronaut!",
    image: 'https://i.ytimg.com/vi/zyEgBuUJi6g/maxresdefault.jpg',
    highlight: 'Used by real astronauts!',
    icon: <FaUserAstronaut />,
    position: { top: '45%', left: '15%' }
  },
  {
    id: 'mission-control',
    title: 'Mission Control Center',
    description: "Take command of space missions in our authentic Mission Control Center replica! Modeled after actual NASA designs, this exhibit puts you in the heart of mission operations. Coordinate launches, monitor spacecraft, and solve real-time challenges as part of an interactive simulation. Learn about the teamwork, technology, and precision required to manage space exploration. Whether you're a space enthusiast or a budding engineer, this hands-on experience offers an exciting glimpse into the world of mission control.",
    image: 'https://www.kennedyspacecenter.com/-/media/DNC/KSCVC/Blog-Images/A-Guide-to-Acronyms-Used-at-Kennedy-Space-Center/ArtemisI_MissionControlCenter_900x600.ashx?h=600&w=900&la=en&hash=FBC4FEAB55DC3F01D01F5CB25E363D3D984D8C54',
    highlight: 'Based on actual NASA designs!',
    icon: <FaBrain />,
    position: { top: '40%', right: '20%' }
  },
  {
    id: 'astronomy-lab',
    title: 'Astronomy Laboratory',
    description: "Unlock the secrets of the universe in the Astronomy Laboratory! Equipped with professional-grade telescopes and advanced observation tools, this exhibit lets you study distant galaxies, nebulae, and star clusters like a true astronomer. Participate in guided stargazing sessions, learn to interpret celestial phenomena, and uncover the mysteries of the cosmos through interactive experiments. Perfect for aspiring astronomers and curious explorers, this lab offers a window into the wonders of deep space.",
    image: 'https://space-science.llnl.gov/sites/space_science/files/styles/orig/public/2022-09/x-ray-laboratory-astrophysics-07.jpg?itok=hez0px-p',
    highlight: 'State-of-the-art observation equipment!',
    icon: <FaBinoculars />,
    position: { top: '60%', left: '25%' }
  },
  {
    id: 'space-garden',
    title: 'Space Garden',
    description: "Discover the future of farming in space! The Space Garden showcases advanced hydroponic and aeroponic systems used to grow food in microgravity environments. Explore interactive displays and hands-on experiments to learn how astronauts cultivate fresh produce on spacecraft and space stations. This exhibit highlights the importance of sustainable agriculture for long-term space exploration and offers insights into innovative techniques that could transform food production on Earth.",
    image: 'https://thumbs.dreamstime.com/b/innovative-space-farming-fresh-produce-futuristic-greenhouse-orbiting-earth-345027582.jpg',
    highlight: 'Real space agriculture techniques!',
    icon: <FaAtom />,
    position: { top: '55%', right: '30%' }
  },
  {
    id: 'solar-observatory',
    title: 'Solar Observatory',
    description: "Experience the wonders of our nearest star up close! The Solar Observatory offers state-of-the-art telescopes and specialized filters to observe the Sun's dynamic surface, sunspots, and solar flares safely. Learn about solar physics through interactive displays and expert-led sessions. Perfect for curious minds of all ages, this exhibit brings the science of the Sun to life, showcasing its critical role in sustaining life on Earth and powering our solar system.",
    image: 'https://c02.purpledshub.com/uploads/sites/48/2021/10/GettyImages-1184627006-9105e81.jpg?w=1029&webp=1',
    highlight: 'Unique solar viewing experience!',
    icon: <FaSun />,
    position: { top: '75%', left: '20%' }
  },
  {
    id: 'space-museum',
    title: 'Space Museum',
    description: "Embark on a journey through the fascinating history of space exploration! The Space Museum features authentic artifacts, detailed models, and immersive exhibits showcasing humanity's quest to explore the cosmos. From the first satellite launches to moon landings and beyond, discover the milestones, technologies, and stories of astronauts and pioneers who made space exploration possible. Perfect for history buffs and space enthusiasts alike, this exhibit is a tribute to human ingenuity and our endless curiosity about the universe.",
    image: 'https://hk.space.museum/image/journal/article-32392897.jpeg',
    highlight: 'Authentic space artifacts!',
    icon: <FaCircle />,
    position: { top: '70%', right: '25%' }
  },
  {
    id: 'repair-bay',
    title: 'Spacecraft Repair Bay',
    description: "Step into the world of space engineering and discover how spacecraft are maintained and repaired! The Spacecraft Repair Bay offers hands-on simulations and interactive displays to showcase the challenges of conducting repairs in the harsh environment of space. Learn about the tools, techniques, and technologies used by astronauts and engineers to ensure the functionality of space missions. This exhibit is perfect for aspiring engineers and space enthusiasts looking to understand the complexities of keeping spacecraft operational in orbit.",
    image: 'https://i.cbc.ca/1.7053682.1702064978!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/astronauts-musgrave-and-hoffman-during-servicing-of-hst.jpg?im=Resize%3D780',
    highlight: 'Hands-on technical experience!',
    icon: <FaCogs />,
    position: { bottom: '20%', left: '30%' }
  },
  {
    id: 'space-kitchen',
    title: 'Space Kitchen',
    description: "Discover the art and science of preparing meals in zero gravity! The Space Kitchen lets you explore how astronauts cook, eat, and store food while in space. Engage with interactive exhibits to learn about the challenges of preserving nutrition and taste in microgravity environments. Try your hand at packaging space meals and even taste real astronaut food! This exhibit offers a fun and educational experience for all ages, blending culinary curiosity with the excitement of space exploration.",
    image: 'https://as1.ftcdn.net/v2/jpg/05/98/68/10/1000_F_598681009_nCeU3OFRGkNszu6YfbukMSA06loWEnTr.jpg',
    highlight: 'Taste real space food!',
    icon: <FaUtensils />,
    position: { bottom: '25%', right: '35%' }           
  },
  {
    id: 'communication-center',
    title: 'Space Communication Center',
    description: "Uncover the marvels of interstellar communication! The Space Communication Center showcases how messages are sent and received across the vastness of space. Explore cutting-edge technologies like satellite relays, radio waves, and deep-space networks. Participate in hands-on activities like real-time satellite tracking and decoding space signals. Learn about the challenges of overcoming time delays and interference in transmitting data across light-years. Perfect for tech enthusiasts and curious minds, this exhibit highlights the critical role of communication in space exploration.",
    image: 'https://thumbs.dreamstime.com/z/satellite-antennas-space-communications-center-created-generative-ai-satellite-antennas-space-communications-center-297137078.jpg',
    highlight: 'Real-time satellite tracking!',
    icon: <FaComments />,
    position: { bottom: '35%', left: '20%' }
  },
  {
    id: 'launch-simulator',
    title: 'Launch Simulator',
    description: "Feel the adrenaline rush of a rocket launch like never before! The Launch Simulator offers a fully immersive experience, taking you from countdown to liftoff with realistic vibrations, sounds, and visuals. Learn about the engineering behind rocket launches and the challenges faced by astronauts during ascent. This one-of-a-kind simulation brings the excitement of space exploration to life, making it a must-try for adventurers and space enthusiasts of all ages.",
    image: 'https://www.techpowerup.com/forums/attachments/moon_2-jpg.170827/',
    highlight: 'Most realistic launch experience!',
    icon: <FaFighterJet />,
    position: { bottom: '30%', right: '25%' }
  },
  {
    id: 'vr-space',
    title: 'VR Space Experience',
    description: "Embark on an unforgettable journey through the cosmos with our VR Space Experience! Using cutting-edge virtual reality technology, explore distant planets, navigate asteroid belts, and witness stunning views of galaxies far away—all from the comfort of Earth. Immerse yourself in a realistic, interactive space adventure that's perfect for all ages. Whether you're walking on the surface of Mars or orbiting a black hole, this exhibit brings the wonders of the universe to your fingertips.",
    image: 'https://images.stockcake.com/public/5/9/d/59dc2356-dd81-4c02-bc5f-743b6c48cf2d_large/cosmic-vr-experience-stockcake.jpg',
    highlight: 'Cutting-edge VR technology!',
    icon: <FaVrCardboard />,
    position: { bottom: '15%', left: '40%' }
  }
];

const FeaturesPage = () => {
  const [currentFact, setCurrentFact] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const spaceFacts = [
    "The footprints on the Moon will last for millions of years!",
    "A day on Venus is longer than its year!",
    "The Sun makes up 99.86% of our solar system's mass!",
    "A year on Mercury is just 88 Earth days long!",
    "There are more trees on Earth than stars in the Milky Way!",
    "The largest known star, UY Scuti, is 1,700 times larger than our Sun!"
  ];

  const testimonials = [
    {
      name: "Olivia Carter",
      role: "Astrophysics Student",
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JTIyQXN0cm9waHlzaWNzJTIwU3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D',
      comment: "Floating in zero gravity was a dream come true!"
    },
    {
      name: "Ryan Patel",
      role: "Thrill Seeker",
      image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHwlMjJBc3Ryb3BoeXNpY3MlMjBTdHVkZW50fGVufDB8fDB8fHww',
      comment: "Hands down the most realistic space simulation ever!"
    },
    {
      name: "Sophia Bennett",
      role: "STEM Educator",
      image: 'https://images.unsplash.com/photo-1527625243292-908353a57c96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fCUyMkFzdHJvcGh5c2ljcyUyMFN0dWRlbnR8ZW58MHx8MHx8fDA%3D',
      comment: "A perfect blend of learning and adventure!"
    }
  ];

  const nextFact = () => {
    setCurrentFact((prev) => (prev + 1) % spaceFacts.length);
  };

  const prevFact = () => {
    setCurrentFact((prev) => (prev - 1 + spaceFacts.length) % spaceFacts.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="features-page">
      <Suspense fallback={
        <motion.div
          className="loading-screen"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="loading-text">Preparing for Launch...</div>
        </motion.div>
      }>
        <SpaceBackground />
      </Suspense>
      {/* New Text Above the Solar System */}
      <div
        style={{
          position: "absolute",
          top: "83%",
          width: "100%",
          textAlign: "center",
          color: "white",
          fontSize: "46px",
          fontWeight: "bold",
          textShadow: "0 0 10px rgba(0, 247, 255, 0.8)",
          zIndex: 10,
        }}
      >
        Explore the map of the park
      </div>

      <motion.div
        className="content-wrapper"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.section 
          className="header-section"
          variants={itemVariants}
        >
          <div className="header-content">
            <h1 className="header-title">Discover Our Space Simulations</h1>
            <p className="header-subtitle">Immerse yourself in cutting-edge space exploration experiences</p>
          </div>
        </motion.section>

        {/* Interactive Map */}
        <motion.section
          className="park-map"
          variants={itemVariants}
        >
          <div className="map-container">
            <div className="map-grid" />
            <div className="map-objects" />
              
            
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                className="map-zone"
                
                style={feature.position}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ 
                  scale: 1.2, 
                  boxShadow: '0 0 30px rgba(0, 188, 212, 0.5)',
                  zIndex: 2
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveTab(features.indexOf(feature))}
              >
                {feature.icon}
                <div className="zone-tooltip">
                  <img src={feature.image} alt={feature.title} />
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <p className="highlight">{feature.highlight}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Simulations Tabs */}
        <motion.section 
          className="simulations-section"
          variants={itemVariants}
        >
          <div className="tabs-container">
            <div className="tabs-list">
              {features.map((feature, index) => (
                <motion.button
                  key={feature.id}
                  className={`tab-button ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {feature.title}
                </motion.button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                className="tab-content"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="simulation-details">
                  <div className="simulation-image">
                    <img src={features[activeTab].image} alt={features[activeTab].title} />
                  </div>
                  <div className="simulation-info">
                    <h3>{features[activeTab].title}</h3>
                    <p>{features[activeTab].description}</p>
                    <p className="highlight">{features[activeTab].highlight}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Space Facts */}
        <motion.section 
          className="space-facts"
          variants={itemVariants}
        >
          <h2>Space Facts & Trivia</h2>
          <div className="facts-carousel">
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentFact}
                className="fact-slide"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                {spaceFacts[currentFact]}
              </motion.div>
            </AnimatePresence>
            <div className="carousel-buttons">
              <motion.button 
                className="carousel-button" 
                onClick={prevFact}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronLeft />
              </motion.button>
              <motion.button 
                className="carousel-button" 
                onClick={nextFact}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronRight />
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section 
          className="testimonials-section"
          variants={itemVariants}
        >
          <h2>Visitor Testimonials</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(0, 188, 212, 0.3)'
                }}
              >
                <motion.img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="testimonial-avatar"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.p 
                  className="testimonial-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.3 }}
                >
                  {testimonial.comment}
                </motion.p>
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.4 }}
                >
                  {testimonial.name}
                </motion.h3>
                <motion.p 
                  className="testimonial-role"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.5 }}
                >
                  {testimonial.role}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="cta-section"
          variants={itemVariants}
        >
          <h2>Ready to Begin Your Space Adventure?</h2>
          <div className="cta-buttons">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/tickets" className="cta-button primary">
                Book Your Experience
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/tour" className="cta-button secondary">
                Take a Virtual Tour
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default FeaturesPage;