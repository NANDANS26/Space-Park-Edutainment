import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import FeaturesPage from './components/Features/FeaturesPage';
import Testimonials from './components/Testimonials/Testimonials';
import CustomerSupport from './components/CustomerSupport/CustomerSupport';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import VirtualTour from './components/VirtualTour/VirtualTour';
import SimulationPage from './components/VirtualTour/SimulationPage';
import Tickets from './components/Tickets/Tickets';
import Auth from './components/Auth/Auth';
import './App.css';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Check authentication status on app load
  useEffect(() => {
    const userData = localStorage.getItem('userData');
    const currentPath = window.location.pathname;
    
    if (!userData && currentPath !== '/auth') {
      navigate('/auth');
    }
  }, [navigate]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Protected Route wrapper component
  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const userData = localStorage.getItem('userData');
    if (!userData) {
      return <Navigate to="/auth" />;
    }
    return <>{children}</>;
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={
          <ProtectedRoute>
            <>
              <Hero />
              <Testimonials />
              <CustomerSupport />
            </>
          </ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="/about" element={
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        } />
        <Route path="/features" element={
          <ProtectedRoute>
            <FeaturesPage />
          </ProtectedRoute>
        } />
        <Route path="/tour" element={
          <ProtectedRoute>
            <VirtualTour />
          </ProtectedRoute>
        } />
        <Route path="/simulation/:id" element={
          <ProtectedRoute>
            <SimulationPage />
          </ProtectedRoute>
        } />
        <Route path="/tickets" element={
          <ProtectedRoute>
            <Tickets />
          </ProtectedRoute>
        } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;