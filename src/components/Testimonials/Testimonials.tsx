import { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});

  const testimonials = [
    {
      name: "Sarah Wick",
      role: "Space Enthusiast",
      comment: "The zero-gravity experience was absolutely mind-blowing! Felt like a real astronaut!",
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBhdmF0YXJzfGVufDB8fDB8fHww'
    },
    {
      name: "Mike Johnson",
      role: "Adventure Seeker",
      comment: "The Mars colony simulation was incredibly realistic. Best experience of my life!",
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBhdmF0YXJzfGVufDB8fDB8fHww'
    },
    {
      name: "Suzy Parker",
      role: "Science Teacher",
      comment: "Brought my students here - they haven't stopped talking about it since!",
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBhdmF0YXJzfGVufDB8fDB8fHww'
    }
  ];
  
  // Define the correct answers type
  const correctAnswers: { [key: number]: string } = {
    1: '8 minutes',
    2: 'Jupiter',
    3: 'Mars',
    4: 'The Sun',
    5: 'Sputnik 1',
  };

  // Function to handle answer selection
  const handleAnswerClick = (questionId: number, selectedAnswer: string) => {
    setSelectedAnswers(prevState => ({
      ...prevState,
      [questionId]: selectedAnswer,
    }));
    
  };

  const triviaQuestions = [
    {
      id: 1,
      question: 'How long does it take light from the sun to reach Earth?',
      options: ['8 minutes', '10 minutes', '5 minutes'],
    },
    {
      id: 2,
      question: 'What is the largest planet in our Solar System?',
      options: ['Earth', 'Jupiter', 'Saturn'],
    },
    {
      id: 3,
      question: 'Which planet is known as the "Red Planet"?',
      options: ['Venus', 'Mars', 'Mercury'],
    },
    {
      id: 4,
      question: 'What is the closest star to Earth?',
      options: ['Proxima Centauri', 'Alpha Centauri A', 'The Sun'],
    },
    {
      id: 5,
      question: 'What is the name of the first man-made satellite to orbit Earth?',
      options: ['Apollo 11', 'Sputnik 1', 'Voyager 1'],
    },
  ];

  return (
    <div className="space-park">
      {/* Main Section */}
      <header className="main-banner">
        {/* Add your banner content */}
      </header>

      {/* Features Highlights Section */}
      <section className="features-highlights">
        <h2 className="section-title">What Awaits You at Space Park?</h2>
        <div className="features-grid">
          {[
            {
              title: "Zero-Gravity Simulator",
              icon: 'https://paracletexp.com/wp-content/uploads/2020/02/April16-06160-scaled.jpg',
              description: "Experience the thrill of weightlessness in our state-of-the-art simulator."
            },
            {
              title: "Space VR Adventures",
              icon: 'https://images.stockcake.com/public/5/9/d/59dc2356-dd81-4c02-bc5f-743b6c48cf2d_large/cosmic-vr-experience-stockcake.jpg',
              description: "Explore the universe through advanced VR technology."
            },
            {
              title: "Astronomical Observatories",
              icon: 'https://media.istockphoto.com/id/1166629174/photo/observatory-under-milky-way-galaxy.jpg?s=1024x1024&w=is&k=20&c=-BkmtiMkywHtEDPJRMjUkqMA-s4v6yRe7Hwwxfj15cA=',
              description: "Marvel at the wonders of the cosmos through powerful telescopes."
            }
          ].map((feature, index) => (
            <div key={index} className="feature-card">
              <img src={feature.icon} alt={feature.title} className="feature-icon" />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cosmic Phenomena Gallery */}
      <section className="cosmic-gallery">
        <h2 className="section-title">Witness the Wonders of the Cosmos</h2>
        <div className="gallery-grid">
          {[
            {
              title: "Supernova Explosion",
              snippet: 'https://images.newscientist.com/wp-content/uploads/2018/03/26151541/gettyimages-584484540.jpg?width=837',
              description: "Experience the awe of a star’s explosive finale."
            },
            {
              title: "Nebula Formation",
              snippet: 'https://images.unsplash.com/photo-1504333638930-c8787321eee0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              description: "Marvel at the birthplaces of stars, where cosmic dust and gas create stunning celestial landscapes."
            },
            {
              title: "Black Hole Simulation",
              snippet: 'https://images.moneycontrol.com/static-mcnews/2022/06/pjimage-2022-06-18T160329.738.jpg?impolicy=website&width=770&height=431',
              description: "Dive into the mysteries of the universe’s most enigmatic phenomena."
            },
            {
              title: "Aurora Borealis",
              snippet: 'https://media.istockphoto.com/id/1935609059/photo/aurora-borealis-over-the-sea-snowy-mountains-at-starry-winter-night-northern-lights-in.jpg?s=1024x1024&w=is&k=20&c=ZUEUjqFUI2F1VbGa_SdGE2BpKIevTihtBGlcDz2yhEY=',
              description: "Admire the breathtaking dance of lights in the sky."
            }
          ].map((phenomenon, index) => (
            <div key={index} className="cosmic-card">
              <img src={phenomenon.snippet} alt={phenomenon.title} className="cosmic-image" />
              <h3>{phenomenon.title}</h3>
              <p>{phenomenon.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Astronaut Greeting or Mascot */}
      <section className="astronaut-greeting">
        <div className="astronaut-3d">
          <img src={'https://media.istockphoto.com/id/1152464442/photo/i-offer-you-the-stars.jpg?s=1024x1024&w=is&k=20&c=EVzNT2X4IZ2rpivjYYWkmPaZz1D81wheVzfLskGPovo='} alt="Astronaut Mascot" />
        </div>
        <div className="greeting-text">
          <h2>Meet Our Space Mascot!</h2>
          <p>Welcome to Space Park! Let me guide you through your cosmic adventure.</p>
          <button className="cta-button">Meet the Crew</button>
        </div>
      </section>

      {/* Space Trivia */}
      <section className="space-trivia">
        <h2 className="section-title">Test Your Cosmic Knowledge</h2>
        {triviaQuestions.map((question) => (
          <div key={question.id} className="trivia-question">
            <p>{question.question}</p>
            <div className="trivia-options">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  className="trivia-button"
                  onClick={() => handleAnswerClick(question.id, option)}
                >
                  {option}
                </button>
              ))}
            </div>
            {selectedAnswers[question.id] && (
              <p className="feedback">{selectedAnswers[question.id] === correctAnswers[question.id] ? 'Correct!' : 'Oops! Try again.'}</p>
            )}
          </div>
        ))}
      </section>

      {/* Space Park Events & Announcements */}
      <section className="space-events">
        <h2 className="section-title">What’s Happening at Space Park?</h2>
        <ul className="events-list">
          <li>
            <h3>Space-themed Hackathons</h3>
            <p>Unleash your creativity in space-themed coding competitions.</p>
          </li>
          <li>
            <h3>Telescope Nights</h3>
            <p>Explore the night sky and learn about celestial wonders.</p>
          </li>
          <li>
            <h3>Educational Sessions</h3>
            <p>Join experts for fascinating discussions about space science.</p>
          </li>
        </ul>
      </section>

      {/* Visitor Testimonials */}
      <section className="testimonials">
        <h2>What Our Visitors Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img src={testimonial.avatar} alt={testimonial.name} className="avatar" />
              <p className="comment">{testimonial.comment}</p>
              <h3 className="name">{testimonial.name}</h3>
              <p className="role">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;