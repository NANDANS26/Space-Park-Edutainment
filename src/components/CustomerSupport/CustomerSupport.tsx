import './CustomerSupport.css';

const CustomerSupport = () => {
  return (
    <section className="customer-support">
      <div className="support-content">
        <h2 className="support-title">Customer Support</h2>
        <p className="support-description">We're here to help make your space adventure amazing!</p>
        
        <div className="support-options">
          <div className="support-option">
            <h3>24/7 Helpline</h3>
            <p>Our support team is available round the clock to assist you with any queries.</p>
            <button className="contact-button">Call Now</button>
          </div>
          
          <div className="support-option">
            <h3>Live Chat</h3>
            <p>Get instant answers to your questions through our live chat support.</p>
            <button className="contact-button">Start Chat</button>
          </div>
          
          <div className="support-option">
            <h3>Email Support</h3>
            <p>Send us your queries and we'll respond within 24 hours.</p>
            <button className="contact-button">Email Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSupport;