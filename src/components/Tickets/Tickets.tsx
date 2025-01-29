import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { FaRocket, FaStar, FaUsers, FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
import SpaceBackground from '../About/SpaceBackground';
import { simulations, Simulation } from '../VirtualTour/simulationsData'; // Add types for simulations
import './Tickets.css';

interface Offer {
  id: string;
  title: string;
  price: number;
  icon: JSX.Element;
  features: string[];
  color: string;
  featured?: boolean;
}

const offers: Offer[] = [
  {
    id: 'basic',
    title: 'Explorer Pass',
    price: 49.99,
    icon: <FaRocket />,
    features: [
      'Access to 1 simulation',
      'Basic equipment',
      'Standard support',
      'Digital certificate'
    ],
    color: '#00bcd4'
  },
  {
    id: 'premium',
    title: 'Astronaut Package',
    price: 129.99,
    icon: <FaStar />,
    features: [
      'Access to 3 simulations',
      'Premium equipment',
      'Priority support',
      'Physical + Digital certificate',
      'Exclusive merchandise'
    ],
    color: '#9c27b0',
    featured: true
  },
  {
    id: 'family',
    title: 'Family Adventure',
    price: 199.99,
    icon: <FaUsers />,
    features: [
      'Access for 4 people',
      'All simulations included',
      'Premium equipment',
      'Family photo package',
      'Meal vouchers',
      'Priority booking'
    ],
    color: '#ffd700'
  },
  {
    id: 'educational',
    title: 'Educational Tour',
    price: 299.99,
    icon: <FaGraduationCap />,
    features: [
      'Group access (up to 10)',
      'Guided experience',
      'Educational materials',
      'Workshop session',
      'Certificate for all',
      'Lunch included'
    ],
    color: '#4caf50'
  }
];

const Tickets = () => {
  const location = useLocation();
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);
  const [showBooking, setShowBooking] = useState(false);
  const [selectedSimulations, setSelectedSimulations] = useState<Simulation[]>([]); // Typing the state as an array of Simulation
  const [visitDate, setVisitDate] = useState('');
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    if (location.state?.selectedSimulation) {
      setSelectedSimulations([location.state.selectedSimulation]);
      setShowBooking(true);
    }
  }, [location]);

  const handleOfferSelect = (offer: Offer) => {
    setSelectedOffer(offer);
    setShowBooking(true);
    setTotalCost(offer.price);
  };

  const handleSimulationToggle = (simulation: Simulation) => {
    const isSelected = selectedSimulations.find(sim => sim.id === simulation.id);
    let updatedSimulations;

    if (isSelected) {
      updatedSimulations = selectedSimulations.filter(sim => sim.id !== simulation.id);
    } else {
      if (selectedOffer && selectedSimulations.length >= getMaxSimulations()) {
        alert(`You can only select ${getMaxSimulations()} simulations with this package`);
        return;
      }
      updatedSimulations = [...selectedSimulations, simulation];
    }

    setSelectedSimulations(updatedSimulations);
    calculateTotalCost(updatedSimulations);
  };

  const getMaxSimulations = () => {
    if (!selectedOffer) return Infinity;
    switch (selectedOffer.id) {
      case 'basic': return 1;
      case 'premium': return 3;
      default: return Infinity;
    }
  };

  const calculateTotalCost = (sims: Simulation[]) => {
    const baseCost = selectedOffer ? selectedOffer.price : sims.length * 49.99;
    setTotalCost(baseCost);
  };

  const handleBooking = () => {
    if (!visitDate || selectedSimulations.length === 0) {
      alert('Please select a date and at least one simulation');
      return;
    }

    const booking = {
      id: Date.now(),
      date: visitDate,
      offer: selectedOffer,
      simulations: selectedSimulations,
      totalCost,
      status: 'Confirmed'
    };

    const existingBookings = JSON.parse(localStorage.getItem('spaceBookings') || '[]');
    localStorage.setItem('spaceBookings', JSON.stringify([...existingBookings, booking]));

    alert('Booking confirmed! Check your profile for details.');
    setSelectedSimulations([]);
    setVisitDate('');
    setShowBooking(false);
    setSelectedOffer(null);
  };

  return (
    <div className="tickets-page">
      <SpaceBackground />

      <div className="tickets-content">
        <motion.div
          className="tickets-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Choose Your Space Adventure</h1>
          <p>Select from our carefully crafted packages and begin your journey to the stars!</p>
        </motion.div>

        {!showBooking && (
          <motion.section
            className="offers-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="offers-grid">
              {offers.map((offer, index) => (
                <motion.div
                  key={offer.id}
                  className={`offer-card ${offer.featured ? 'featured' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleOfferSelect(offer)}
                >
                  {offer.featured && <div className="featured-badge">Most Popular</div>}
                  <div className="offer-icon" style={{ color: offer.color }}>{offer.icon}</div>
                  <h3 className="offer-title">{offer.title}</h3>
                  <div className="offer-price">
                    <span>$</span>{offer.price}
                  </div>
                  <ul className="offer-features">
                    {offer.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <button className="select-button">Select Package</button>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {showBooking && (
          <motion.section
            className="booking-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2>Complete Your Booking</h2>
            <div className="booking-form">
              <div className="form-group">
                <label>Select Date</label>
                <div className="date-selection">
                  <FaCalendarAlt />
                  <input
                    type="date"
                    value={visitDate}
                    onChange={(e) => setVisitDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Choose Your Simulations</label>
                <div className="simulations-grid">
                  {simulations.map((simulation) => (
                    <motion.div
                      key={simulation.id}
                      className={`simulation-option ${
                        selectedSimulations.find(sim => sim.id === simulation.id) ? 'selected' : ''
                      }`}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => handleSimulationToggle(simulation)}
                    >
                      <img src={simulation.image} alt={simulation.title} />
                      <div className="simulation-info">
                        <h4>{simulation.title}</h4>
                        <p>{simulation.duration}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="booking-summary">
                <h3>Booking Summary</h3>
                <div className="summary-row">
                  <span>Package:</span>
                  <span>{selectedOffer ? selectedOffer.title : 'Custom Selection'}</span>
                </div>
                <div className="summary-row">
                  <span>Selected Simulations:</span>
                  <span>{selectedSimulations.length}</span>
                </div>
                <div className="summary-row">
                  <span>Total Cost:</span>
                  <span>${totalCost.toFixed(2)}</span>
                </div>
                <button
                  className="confirm-button"
                  onClick={handleBooking}
                  disabled={!visitDate || selectedSimulations.length === 0}
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default Tickets;
