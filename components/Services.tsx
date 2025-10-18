
import React from 'react';
import { TrainingType } from '../types';
import { HittingIcon, CatchingIcon, FieldingIcon } from './icons';

interface Service {
  type: TrainingType;
  icon: React.ReactNode;
  description: string;
}

const services: Service[] = [
  {
    type: TrainingType.Hitting,
    icon: <HittingIcon className="h-10 w-10 text-softball-yellow mb-4" />,
    description: "Refine your swing mechanics, timing, and plate approach with high-rep sessions against live college-level pitching."
  },
  {
    type: TrainingType.Catching,
    icon: <CatchingIcon className="h-10 w-10 text-softball-yellow mb-4" />,
    description: "Improve your framing, blocking, and game-calling skills by catching collegiate pitchers in a controlled, instructional setting."
  },
  {
    type: TrainingType.Fielding,
    icon: <FieldingIcon className="h-10 w-10 text-softball-yellow mb-4" />,
    description: "Develop gold-glove caliber fundamentals, footwork, and reaction time through D1-level infield and outfield drills."
  }
];

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  const scrollToSchedule = () => {
    document.querySelector('#schedule')?.scrollIntoView({ behavior: 'smooth' });
  };

  const getServiceDetails = (type: TrainingType) => {
    switch (type) {
      case TrainingType.Hitting:
        return {
          features: ['Live College Pitching', 'Swing Analysis', 'Plate Approach', 'High-Rep Sessions'],
          price: 'Starting at $150/session',
          popular: true
        };
      case TrainingType.Catching:
        return {
          features: ['College Pitcher Catching', 'Framing Techniques', 'Game Calling', 'Blocking Drills'],
          price: 'Starting at $175/session',
          popular: false
        };
      case TrainingType.Fielding:
        return {
          features: ['D1-Level Drills', 'Footwork Training', 'Reaction Time', 'Position-Specific'],
          price: 'Starting at $125/session',
          popular: false
        };
      default:
        return { features: [], price: '', popular: false };
    }
  };

  const details = getServiceDetails(service.type);

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-xl shadow-xl hover:-translate-y-2 hover:border-softball-yellow/50 transition-all duration-300 flex flex-col relative group">
      {details.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-softball-yellow text-navy-blue px-4 py-1 rounded-full text-sm font-bold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="flex items-center justify-between mb-4">
        {service.icon}
        <span className="text-softball-yellow font-mono text-sm">0{index + 1}</span>
      </div>
      
      <h3 className="text-2xl font-bold text-light-slate mb-3">{service.type}</h3>
      <p className="text-slate-gray mb-6 flex-grow">{service.description}</p>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-light-slate font-semibold mb-2">What's Included:</h4>
          <ul className="space-y-1">
            {details.features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm text-slate-gray">
                <span className="w-1.5 h-1.5 bg-softball-yellow rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="pt-4 border-t border-slate-700/50">
          <div className="text-softball-yellow font-bold text-lg mb-3">{details.price}</div>
          <button 
            onClick={scrollToSchedule}
            className="w-full px-6 py-3 bg-softball-yellow/10 border border-softball-yellow/30 text-softball-yellow rounded-lg font-semibold hover:bg-softball-yellow/20 transition-all duration-300 group-hover:border-softball-yellow/60"
          >
            Book This Service
          </button>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-softball-yellow/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-softball-yellow/10 rounded-full blur-2xl"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-light-slate mb-6">
            <span className="text-softball-yellow font-mono mr-2">01.</span> Elite Training Services
          </h2>
          <p className="text-xl text-slate-gray max-w-3xl mx-auto leading-relaxed">
            Choose from our specialized training programs, each designed to give you the competitive edge you need to excel at the next level.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={service.type} service={service} index={index} />
          ))}
        </div>
        
        {/* Unique Value Proposition */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-light-slate mb-6">
            What Makes Us Different?
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-softball-yellow/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-3xl">🏆</span>
              </div>
              <h4 className="text-xl font-bold text-light-slate">D1 Experience</h4>
              <p className="text-slate-gray">Currently developing players at the highest collegiate level</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-softball-yellow/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-3xl">⚾</span>
              </div>
              <h4 className="text-xl font-bold text-light-slate">Live College Pitching</h4>
              <p className="text-slate-gray">The only program where you face current college pitchers consistently</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-softball-yellow/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-3xl">🎯</span>
              </div>
              <h4 className="text-xl font-bold text-light-slate">Proven Results</h4>
              <p className="text-slate-gray">Athletes see measurable improvement in just a few sessions</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#schedule" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#schedule')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-softball-yellow text-navy-blue rounded-lg font-bold text-lg hover:bg-softball-yellow/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-softball-yellow/25"
            >
              🎯 Book Your Session Now
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 border-2 border-softball-yellow text-softball-yellow rounded-lg font-bold text-lg hover:bg-softball-yellow/10 transition-all duration-300 transform hover:scale-105"
            >
              💬 Ask Questions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
