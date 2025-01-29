export interface Simulation {
  id: string;
  title: string;
  description: string;
  image: string;
  fullDescription: string;
  features: string[];
  requirements: string[];
  duration: string;
  capacity: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  ageRestriction: string;
  safetyMeasures: string[];
  included: string[];
  schedule: {
    preparation: string;
    mainActivity: string;
    debriefing: string;
  };
}

export const simulations: Simulation[] = [
  {
  id: 'zero-gravity-simulator',
  title: 'Zero Gravity Simulator',
  description: 'Experience weightlessness like an astronaut in our cutting-edge simulation chamber.',
  image: 'https://paracletexp.com/wp-content/uploads/2020/02/April16-06160-scaled.jpg',
  fullDescription: 'Step into the Zero Gravity Simulator and feel the sensation of floating in space. Our advanced technology recreates a weightless environment, giving participants the thrill of an astronaut’s life. Engage in exciting activities like floating tasks and microgravity experiments to understand the challenges of zero gravity.',
  features: [
    'State-of-the-art weightlessness simulation',
    'Interactive floating activities',
    'Microgravity experiment stations',
    'Realistic astronaut experience',
    'Educational insights into zero gravity'
  ],
  requirements: [
    'Basic physical fitness',
    'No motion sickness',
    'Completion of safety instructions'
  ],
  duration: '3 hours',
  capacity: '6 participants per session',
  difficulty: 'Intermediate',
  ageRestriction: '12+',
  safetyMeasures: [
    'Trained supervisors for guidance',
    'Soft landing zones for safety',
    'Emergency stop mechanisms',
    'Medical assistance on standby'
  ],
  included: [
    'Zero-gravity training suit',
    'Experiment materials',
    'Safety gear',
    'Commemorative photo and certificate'
  ],
  schedule: {
    preparation: '30 minutes of safety briefing and suit fitting',
    mainActivity: '2 hours of zero gravity simulation and experiments',
    debriefing: '30 minutes of discussion and feedback'
  }
},
  {
    id: 'mars-colony',
    title: 'Mars Colony House',
    description: 'Experience life on Mars in our meticulously designed Martian habitat.',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80',
    fullDescription: 'Step into the future of human space colonization in our Mars Colony House. Experience the daily challenges and triumphs of living on the Red Planet in our scientifically accurate habitat. Learn about sustainable living, resource management, and the technologies that will make Mars colonization possible.',
    features: [
      'Martian atmosphere simulation',
      'Hydroponic gardens',
      'Solar power systems',
      'Water recycling facility',
      'Mars dust storm simulation'
    ],
    requirements: [
      'Good health condition',
      'Basic scientific knowledge',
      'Team cooperation skills'
    ],
    duration: '8 hours',
    capacity: '6 persons per colony',
    difficulty: 'Intermediate',
    ageRestriction: '14+',
    safetyMeasures: [
      'Advanced life support systems',
      'Real-time environmental monitoring',
      'Emergency evacuation protocols',
      'Medical bay access'
    ],
    included: [
      'Mars suit simulation',
      'Resource management training',
      'Scientific equipment usage',
      'Meal preparation experience'
    ],
    schedule: {
      preparation: '2 hours of technical briefing and equipment familiarization',
      mainActivity: '5 hours of colony operation simulation',
      debriefing: '1 hour performance review and feedback'
    }
  },
  {
    id: 'space-station',
    title: 'Space Station Hub',
    description: 'Live and work in a replica of an international space station module.',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80',
    fullDescription: 'Experience authentic space station living in our full-scale replica of an international space station module. Learn about the daily routines of astronauts, conduct scientific experiments, and understand the complexities of living in orbit around Earth.',
    features: [
      'Microgravity simulation',
      'Scientific research labs',
      'Exercise equipment',
      'Communication center',
      'Earth observation deck'
    ],
    requirements: [
      'Physical fitness test completion',
      'Basic scientific understanding',
      'No motion sickness'
    ],
    duration: '12 hours',
    capacity: '8 persons',
    difficulty: 'Advanced',
    ageRestriction: '16+',
    safetyMeasures: [
      'Zero-gravity safety training',
      'Emergency procedures protocol',
      '24/7 ground control communication',
      'Health monitoring systems'
    ],
    included: [
      'Space station uniform',
      'Scientific experiment materials',
      'Space food experience',
      'Mission patch'
    ],
    schedule: {
      preparation: '3 hours of training and orientation',
      mainActivity: '8 hours of station operations',
      debriefing: '1 hour mission review'
    }
  },
  {
    id: 'space-dome',
    title: 'Space Dome',
    description: 'Experience life under a protective dome with stunning views of space.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    fullDescription: 'Our Space Dome provides a unique experience of living under a transparent protective shield while enjoying panoramic views of space. Learn about the engineering challenges of creating sustainable habitats and experience the psychological aspects of living in an enclosed environment.',
    features: [
      'Panoramic space views',
      'Climate control systems',
      'Artificial ecosystem',
      'Day/night cycle simulation',
      'Agricultural zone'
    ],
    requirements: [
      'Environmental awareness',
      'Basic gardening knowledge',
      'Teamwork abilities'
    ],
    duration: '10 hours',
    capacity: '12 persons',
    difficulty: 'Intermediate',
    ageRestriction: '10+',
    safetyMeasures: [
      'Air quality monitoring',
      'Pressure regulation systems',
      'Emergency shelter access',
      'First aid stations'
    ],
    included: [
      'Dome maintenance training',
      'Plant cultivation experience',
      'Resource management workshop',
      'Sustainability certificate'
    ],
    schedule: {
      preparation: '2 hours of environmental briefing',
      mainActivity: '7 hours of dome living experience',
      debriefing: '1 hour sustainability discussion'
    }
  },
  {
    id: 'asteroid-outpost',
    title: 'Asteroid Outpost',
    description: 'Explore life on an asteroid mining facility with unique gravity conditions.',
    image: 'https://plus.unsplash.com/premium_photo-1679526019831-fb068ad10272?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXN0ZXJvaWQlMjBPdXRwb3N0fGVufDB8fDB8fHww',
    fullDescription: 'Visit our Asteroid Outpost to experience the challenges and excitement of mining operations in space. Learn about resource extraction, low-gravity navigation, and the future of space mining while operating advanced equipment in a realistic asteroid environment.',
    features: [
      'Low-gravity environment',
      'Mining equipment simulation',
      'Resource processing facility',
      'Navigation challenges',
      'Geological analysis'
    ],
    requirements: [
      'Good balance and coordination',
      'Basic equipment operation skills',
      'Safety protocol compliance'
    ],
    duration: '6 hours',
    capacity: '6 persons',
    difficulty: 'Advanced',
    ageRestriction: '16+',
    safetyMeasures: [
      'Tether systems',
      'Emergency oxygen supply',
      'Radiation protection',
      'Rescue protocols'
    ],
    included: [
      'Mining equipment training',
      'Geological sampling kit',
      'Safety harness system',
      'Resource analysis tools'
    ],
    schedule: {
      preparation: '1.5 hours of safety and equipment training',
      mainActivity: '4 hours of mining operations',
      debriefing: '30 minutes of results analysis'
    }
  },
  {
    id: 'black-hole-research',
    title: 'Black Hole Research Center',
    description: 'Study the mysteries of black holes in our advanced research facility.',
    image: 'https://images.unsplash.com/photo-1640984756059-7303641db7cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBob2xlfGVufDB8fDB8fHww',
    fullDescription: 'Dive into the fascinating world of black hole physics at our Research Center. Use advanced visualization technology to study black hole behavior, conduct theoretical experiments, and understand the fundamental nature of space-time.',
    features: [
      '4D visualization chamber',
      'Gravity simulation lab',
      'Data analysis center',
      'Theoretical physics workshop',
      'Time dilation demonstration'
    ],
    requirements: [
      'Basic physics knowledge',
      'Mathematical aptitude',
      'Abstract thinking ability'
    ],
    duration: '4 hours',
    capacity: '10 persons',
    difficulty: 'Advanced',
    ageRestriction: '14+',
    safetyMeasures: [
      'Mental health monitoring',
      'Reality anchoring systems',
      'Cognitive load management',
      'Emergency protocol training'
    ],
    included: [
      'Research equipment access',
      'Data analysis software',
      'Scientific documentation',
      'Theory workshop materials'
    ],
    schedule: {
      preparation: '1 hour of theoretical introduction',
      mainActivity: '2.5 hours of research activities',
      debriefing: '30 minutes of findings discussion'
    }
  },
  {
    id: 'alien-habitat',
    title: 'Alien Habitat',
    description: 'Explore theoretical extraterrestrial environments and life forms.',
    image: 'https://images.unsplash.com/photo-1636800255332-f3d73a41b764?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGFsaWVufGVufDB8fDB8fHww',
    fullDescription: 'Step into our scientifically designed alien habitat simulations based on current exoplanet research. Experience different gravitational conditions, atmospheric compositions, and potential forms of alien life while learning about astrobiology and planetary science.',
    features: [
      'Exotic environment simulations',
      'Alien life form models',
      'Alternative biochemistry lab',
      'Exoplanet conditions',
      'Xenobiology studies'
    ],
    requirements: [
      'Open-mindedness',
      'Basic biology knowledge',
      'Curiosity about alien life'
    ],
    duration: '5 hours',
    capacity: '8 persons',
    difficulty: 'Intermediate',
    ageRestriction: '12+',
    safetyMeasures: [
      'Environmental isolation',
      'Biosafety protocols',
      'Contamination prevention',
      'Emergency decontamination'
    ],
    included: [
      'Protective equipment',
      'Research tools',
      'Sample collection kit',
      'Digital documentation'
    ],
    schedule: {
      preparation: '1 hour of xenobiology briefing',
      mainActivity: '3.5 hours of habitat exploration',
      debriefing: '30 minutes of findings discussion'
    }
  },
  {
    id: 'deep-space-observatory',
    title: 'Deep Space Observatory',
    description: 'Use advanced telescopes to explore the furthest reaches of the universe.',
    image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80',
    fullDescription: 'Access our state-of-the-art observatory equipped with advanced telescopes and imaging systems. Search for distant galaxies, observe stellar phenomena, and contribute to real astronomical research while learning about the vastness of space.',
    features: [
      'Advanced telescope array',
      'Digital imaging systems',
      'Data processing center',
      'Star mapping technology',
      'Real-time space weather monitoring'
    ],
    requirements: [
      'Basic astronomy knowledge',
      'Computer literacy',
      'Patience and attention to detail'
    ],
    duration: '6 hours',
    capacity: '6 persons',
    difficulty: 'Intermediate',
    ageRestriction: '14+',
    safetyMeasures: [
      'Eye protection protocols',
      'Equipment safety training',
      'Data backup systems',
      'Weather monitoring'
    ],
    included: [
      'Telescope operation training',
      'Image processing software',
      'Research log access',
      'Digital star charts'
    ],
    schedule: {
      preparation: '1 hour of equipment training',
      mainActivity: '4 hours of observation',
      debriefing: '1 hour of data analysis'
    }
  },
  {
    id: 'time-travel-lodge',
    title: 'Time Travel Lodge',
    description: 'Experience theoretical time travel concepts through advanced simulations.',
    image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&q=80',
    fullDescription: 'Explore the fascinating concepts of time travel through our cutting-edge simulation technology. Experience time dilation, paradox scenarios, and future/past simulations while learning about the physics of time and space-time continuum.',
    features: [
      'Time dilation chamber',
      'Paradox simulation room',
      'Historical recreation center',
      'Future projection dome',
      'Quantum mechanics lab'
    ],
    requirements: [
      'Strong mental focus',
      'Basic physics understanding',
      'Psychological stability'
    ],
    duration: '4 hours',
    capacity: '4 persons',
    difficulty: 'Advanced',
    ageRestriction: '16+',
    safetyMeasures: [
      'Mental health screening',
      'Reality anchoring protocols',
      'Psychological monitoring',
      'Emergency stabilization'
    ],
    included: [
      'Temporal theory guide',
      'Simulation access pass',
      'Time paradox handbook',
      'Certificate of completion'
    ],
    schedule: {
      preparation: '1 hour of theoretical briefing',
      mainActivity: '2.5 hours of time simulations',
      debriefing: '30 minutes of experience processing'
    }
  },
  {
    id: 'galactic-federation',
    title: 'Galactic Federation Embassy',
    description: 'Participate in simulated diplomatic missions and intergalactic relations.',
    image: 'https://images.unsplash.com/photo-1559533077-1d5c3059873d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQzfHxnYWxhY3RpYyUyMGZlZGVyYXRpb258ZW58MHx8MHx8fDA%3D',
    fullDescription: 'Step into the role of a galactic diplomat at our Federation Embassy simulation. Engage in interstellar negotiations, learn about theoretical alien cultures, and practice diplomatic protocols while experiencing the complexities of intergalactic relations.',
    features: [
      'Diplomatic chambers',
      'Cultural exchange center',
      'Universal translator simulation',
      'Alien protocol training',
      'Peace treaty simulation'
    ],
    requirements: [
      'Good communication skills',
      'Cultural sensitivity',
      'Problem-solving ability'
    ],
    duration: '5 hours',
    capacity: '12 persons',
    difficulty: 'Intermediate',
    ageRestriction: '14+',
    safetyMeasures: [
      'Cultural sensitivity training',
      'Diplomatic protocol briefing',
      'Communication safety',
      'Conflict resolution support'
    ],
    included: [
      'Diplomatic handbook',
      'Cultural guide',
      'Translation device',
      'Federation badge'
    ],
    schedule: {
      preparation: '1 hour of diplomatic training',
      mainActivity: '3.5 hours of diplomatic missions',
      debriefing: '30 minutes of mission review'
    }
  },
  {
    id: 'starship-hangar',
    title: 'Starship Hangar',
    description: 'Command and maintain advanced spacecraft in our realistic hangar facility.',
    image: 'https://images.unsplash.com/photo-1670529593378-d820787b41b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RhcnNoaXAlMjBoYW5nYXJ8ZW58MHx8MHx8fDA%3D',
    fullDescription: 'Experience the thrill of spacecraft operations in our advanced Starship Hangar. Learn about starship maintenance, flight operations, and emergency procedures while working with realistic spacecraft simulations and advanced technical systems.',
    features: [
      'Flight simulator deck',
      'Maintenance bay',
      'Engine room simulation',
      'Navigation center',
      'Emergency response training'
    ],
    requirements: [
      'Technical aptitude',
      'Quick decision making',
      'Team coordination skills'
    ],
    duration: '8 hours',
    capacity: '10 persons',
    difficulty: 'Advanced',
    ageRestriction: '16+',
    safetyMeasures: [
      'Equipment safety protocols',
      'Emergency procedure training',
      'Fire suppression systems',
      'Medical response team'
    ],
    included: [
      'Flight manual',
      'Technical toolkit',
      'Safety equipment',
      'Mission briefing pack'
    ],
    schedule: {
      preparation: '2 hours of technical training',
      mainActivity: '5 hours of hangar operations',
      debriefing: '1 hour of performance review'
    }
  },
  {
    id: 'quantum-computing',
    title: 'Quantum Computing Tower',
    description: 'Explore the future of computing with quantum simulation technology.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80',
    fullDescription: 'Dive into the world of quantum computing at our advanced research facility. Work with quantum simulation software, understand quantum algorithms, and explore the potential of quantum technology while learning about the future of computation.',
    features: [
      'Quantum simulator',
      'Algorithm design lab',
      'Quantum encryption center',
      'Entanglement demonstration',
      'Quantum programming suite'
    ],
    requirements: [
      'Basic programming knowledge',
      'Mathematical background',
      'Logical thinking skills'
    ],
    duration: '6 hours',
    capacity: '8 persons',
    difficulty: 'Advanced',
    ageRestriction: '16+',
    safetyMeasures: [
      'Data security protocols',
      'Equipment safety guidelines',
      'Mental health monitoring',
      'Emergency procedures'
    ],
    included: [
      'Quantum computing guide',
      'Programming access',
      'Research materials',
      'Digital certificate'
    ],
    schedule: {
      preparation: '1.5 hours of quantum theory introduction',
      mainActivity: '4 hours of practical work',
      debriefing: '30 minutes of results discussion'
    }
  },
  {
    id: 'space-farming',
    title: 'Space Farming Dome',
    description: 'Learn about sustainable agriculture in space environments.',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80',
    fullDescription: 'Experience the challenges and innovations of growing food in space at our Space Farming Dome. Learn about hydroponics, aeroponics, and sustainable agriculture while working with actual plants in simulated space conditions.',
    features: [
      'Hydroponic systems',
      'Vertical farming units',
      'Climate control chamber',
      'Plant monitoring lab',
      'Resource recycling center'
    ],
    requirements: [
      'Basic gardening interest',
      'Environmental awareness',
      'Patience and dedication'
    ],
    duration: '5 hours',
    capacity: '10 persons',
    difficulty: 'Beginner',
    ageRestriction: '10+',
    safetyMeasures: [
      'Environmental controls',
      'Plant safety protocols',
      'Chemical handling training',
      'Emergency procedures'
    ],
    included: [
      'Farming handbook',
      'Plant care kit',
      'Seeds package',
      'Growth monitoring tools'
    ],
    schedule: {
      preparation: '1 hour of agricultural briefing',
      mainActivity: '3.5 hours of farming activities',
      debriefing: '30 minutes of growth planning'
    }
  },
  {
    id: 'solar-system-research',
    title: 'Solar System Research Center',
    description: 'Study planetary science and solar phenomena in our research facility.',
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&q=80',
    fullDescription: 'Engage in cutting-edge solar system research at our dedicated facility. Study planetary formation, solar activity, and astronomical phenomena while working with advanced visualization tools and scientific instruments.',
    features: [
      'Planetary visualization dome',
      'Solar activity monitor',
      'Geological analysis lab',
      'Atmospheric study chamber',
      'Orbital mechanics simulator'
    ],
    requirements: [
      'Scientific curiosity',
      'Basic astronomy knowledge',
      'Data analysis skills'
    ],
    duration: '6 hours',
    capacity: '8 persons',
    difficulty: 'Intermediate',
    ageRestriction: '14+',
    safetyMeasures: [
      'Equipment safety training',
      'Data handling protocols',
      'Emergency procedures',
      'Eye protection requirements'
    ],
    included: [
      'Research materials',
      'Data analysis tools',
      'Scientific calculator',
      'Digital documentation'
    ],
    schedule: {
      preparation: '1 hour of scientific briefing',
      mainActivity: '4.5 hours of research activities',
      debriefing: '30 minutes of findings review'
    }
  },
  {
    id: 'comet-ride',
    title: 'Comet Ride Pavilion',
    description: "Experience the thrill of riding along a comet's trajectory.",
    image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80',
    fullDescription: 'Take an exciting virtual journey aboard a comet at our Comet Ride Pavilion. Experience the speed, trajectory, and environmental conditions of cometary travel while learning about these fascinating celestial objects.',
    features: [
      'Motion simulation pod',
      'Virtual reality system',
      'Comet visualization',
      'Interactive trajectory planning',
      'Space environment effects'
    ],
    requirements: [
      'Good physical condition',
      'No motion sickness',
      'Adventure spirit'
    ],
    duration: '3 hours',
    capacity: '6 persons',
    difficulty: 'Intermediate',
    ageRestriction: '12+',
    safetyMeasures: [
      'Motion sickness prevention',
      'Safety harness system',
      'Medical monitoring',
      'Emergency stop protocols'
    ],
    included: [
      'VR equipment',
      'Safety gear',
      'Comet guide book',
      'Ride certificate'
    ],
    schedule: {
      preparation: '30 minutes of safety briefing',
      mainActivity: '2 hours of comet experience',
      debriefing: '30 minutes of experience sharing'
    }
  }
];