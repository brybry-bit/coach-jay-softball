
import React from 'react';

const Hero: React.FC = () => {
  const scrollToSchedule = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#schedule')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-blue via-navy-blue to-slate-900 opacity-90"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-softball-yellow/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-softball-yellow/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content */}
          <div>
            <div className="inline-flex items-center bg-softball-yellow/10 border border-softball-yellow/20 rounded-full px-4 py-2 mb-6">
              <span className="text-softball-yellow font-mono text-sm">🏆 D1 Director of Player Development</span>
            </div>
            
            <h1 className="text-softball-yellow font-mono text-lg md:text-xl mb-4">Hi, I'm Coach Jay.</h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-light-slate mb-4 leading-tight">
              The ONLY Training Where You Face<br />
              <span className="text-softball-yellow">College Pitchers</span>
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-gray mb-8">
              Elite Development for Serious Athletes
            </h3>
            
            {/* Key differentiators */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-softball-yellow rounded-full"></div>
                <span className="text-light-slate">Live College Pitching</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-softball-yellow rounded-full"></div>
                <span className="text-light-slate">D1-Level Training</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-softball-yellow rounded-full"></div>
                <span className="text-light-slate">Proven Results</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-softball-yellow rounded-full"></div>
                <span className="text-light-slate">Limited Spots</span>
              </div>
            </div>
            
            <p className="text-lg text-slate-gray mb-8 leading-relaxed">
              As the Director of Player Development at a Division 1 program, I bring championship-level training to dedicated middle and high school athletes. This is the only program where you'll consistently face current college pitchers in a controlled, instructional environment.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#schedule" 
                onClick={scrollToSchedule} 
                className="px-8 py-4 bg-softball-yellow text-navy-blue rounded-lg font-bold text-lg hover:bg-softball-yellow/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-softball-yellow/25 text-center"
              >
                🎯 Book Your Session
              </a>
              <a 
                href="#contact" 
                onClick={scrollToContact} 
                className="px-8 py-4 border-2 border-softball-yellow text-softball-yellow rounded-lg font-bold text-lg hover:bg-softball-yellow/10 transition-all duration-300 transform hover:scale-105 text-center"
              >
                💬 Get More Info
              </a>
            </div>
          </div>
          
          {/* Right side - Service highlights */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-softball-yellow/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-softball-yellow/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">⚾</span>
                </div>
                <h3 className="text-xl font-bold text-light-slate">Hitting Development</h3>
              </div>
              <p className="text-slate-gray mb-4">High-rep sessions against live college pitching to refine swing mechanics and plate approach.</p>
              <div className="text-softball-yellow font-mono text-sm">Most Popular</div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-softball-yellow/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-softball-yellow/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🥎</span>
                </div>
                <h3 className="text-xl font-bold text-light-slate">Catching Excellence</h3>
              </div>
              <p className="text-slate-gray mb-4">Catch collegiate pitchers to improve framing, blocking, and game-calling skills.</p>
              <div className="text-softball-yellow font-mono text-sm">Unique Opportunity</div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-softball-yellow/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-softball-yellow/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🏅</span>
                </div>
                <h3 className="text-xl font-bold text-light-slate">Fielding Mastery</h3>
              </div>
              <p className="text-slate-gray mb-4">D1-level infield and outfield drills for gold-glove caliber fundamentals.</p>
              <div className="text-softball-yellow font-mono text-sm">Elite Training</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
