import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaRocket, 
  FaCalendar, 
  FaCog
} from 'react-icons/fa'; // Removed unused icons
import SpaceBackground from '../About/SpaceBackground';
import './Profile.css';

interface UserData {
  name: string;
  email: string;
  dateOfBirth: string;
  country: string;
  preferences: {
    visitTime: string;
    notifications: string;
  };
}

const Profile = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [bookings, setBookings] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Load user data
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }

    // Load bookings
    const storedBookings = localStorage.getItem('spaceBookings');
    if (storedBookings) {
      setBookings(JSON.parse(storedBookings));
    }
  }, []);

  const handlePreferenceUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (userData) {
      localStorage.setItem('userData', JSON.stringify(userData));
      setIsEditing(false);
    }
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <SpaceBackground />
      <div className="profile-content">
        <motion.div 
          className="profile-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="profile-avatar-container">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww" alt={userData.name} className="profile-avatar" />
            <div className="avatar-ring" />
          </div>
          <h1 className="profile-name">{userData.name}</h1>
          <p className="profile-role">Space Explorer</p>

          <motion.div 
            className="profile-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-value">{bookings.length}</div>
              <div className="stat-label">Bookings</div>
            </motion.div>
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-value">8</div>
              <div className="stat-label">Simulations</div>
            </motion.div>
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-value">2,450</div>
              <div className="stat-label">Points</div>
            </motion.div>
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-value">12</div>
              <div className="stat-label">Achievements</div>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="profile-sections">
          <motion.div 
            className="section-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="section-title">
              <FaRocket /> Your Bookings
            </h2>
            <div className="bookings-list">
              {bookings.map((booking: any) => (
                <motion.div 
                  key={booking.id}
                  className="booking-card"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="booking-header">
                    <span className="booking-date">
                      <FaCalendar /> {new Date(booking.date).toLocaleDateString()}
                    </span>
                    <span className={`booking-status status-${booking.status.toLowerCase()}`}>
                      {booking.status}
                    </span>
                  </div>
                  {booking.offer && (
                    <div>Package: {booking.offer.title}</div>
                  )}
                  <div className="booking-details">
                    <div>Total Cost: ${booking.totalCost.toFixed(2)}</div>
                    <div className="booking-simulations">
                      {booking.simulations.map((sim: any) => (
                        <span key={sim.id} className="simulation-tag">{sim.title}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="section-card"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="section-title">
              <FaCog /> Profile Settings
            </h2>
            <div className="profile-info">
              <p><strong>Email:</strong> {userData.email}</p>
              <p><strong>Date of Birth:</strong> {userData.dateOfBirth}</p>
              <p><strong>Country:</strong> {userData.country}</p>
            </div>
            <div className="preferences-form">
              <h3>Preferences</h3>
              {isEditing ? (
                <form onSubmit={handlePreferenceUpdate}>
                  <div className="form-group">
                    <label>Preferred Visit Time</label>
                    <select
                      value={userData.preferences.visitTime}
                      onChange={(e) => setUserData({
                        ...userData,
                        preferences: { ...userData.preferences, visitTime: e.target.value }
                      })}
                    >
                      <option value="morning">Morning</option>
                      <option value="afternoon">Afternoon</option>
                      <option value="evening">Evening</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Notification Preferences</label>
                    <select
                      value={userData.preferences.notifications}
                      onChange={(e) => setUserData({
                        ...userData,
                        preferences: { ...userData.preferences, notifications: e.target.value }
                      })}
                    >
                      <option value="email">Email</option>
                      <option value="sms">SMS</option>
                      <option value="both">Both</option>
                    </select>
                  </div>
                  <button type="submit" className="save-button">Save Changes</button>
                </form>
              ) : (
                <div>
                  <p><strong>Preferred Visit Time:</strong> {userData.preferences.visitTime}</p>
                  <p><strong>Notifications:</strong> {userData.preferences.notifications}</p>
                  <button className="save-button" onClick={() => setIsEditing(true)}>
                    Edit Preferences
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
