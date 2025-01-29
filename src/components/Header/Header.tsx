import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRocket, FaUser, FaBars } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Virtual Tour', path: '/tour' },
    { name: 'Tickets', path: '/tickets' },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-container">
          <motion.div whileHover={{ scale: 1.1 }}>
            <FaRocket className="logo-icon" />
          </motion.div>
          <span className="logo-text">Space Park</span>
        </Link>

        <button 
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars />
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <motion.div
              key={item.path}
              whileHover={{ scale: 1.1 }}
            >
              <Link 
                to={item.path}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link 
              to="/Profile"
              className="profile-link"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaUser />
              <span>Profile</span>
            </Link>
          </motion.div>
        </nav>
      </div>
    </header>
  );
}

export default Header;