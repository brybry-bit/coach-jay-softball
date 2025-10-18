
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <h2 className="text-3xl font-bold text-center text-light-slate mb-12">
        <span className="text-softball-yellow font-mono mr-2">03.</span> About Coach Jay
      </h2>
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3">
          <p className="text-lg text-slate-gray mb-4 leading-relaxed">
            Hello! I'm Coach Jay, and my passion is developing elite softball players. With years of experience at the highest collegiate level, I've had the privilege of coaching and mentoring some of the best athletes in the country.
          </p>
          <p className="text-lg text-slate-gray mb-4 leading-relaxed">
            Currently, I serve as the Director of Player Development for a Division 1 softball program. My role involves creating and implementing advanced training protocols that help our players maximize their potential and compete for championships.
          </p>
          <p className="text-lg text-slate-gray leading-relaxed">
            I started SB Player Development to bring that same level of expertise and intensity to the next generation of stars. My approach is simple: combine proven, high-level drills with unparalleled competitive experiences to forge athletes who are prepared to dominate at any level.
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="relative group w-full max-w-sm mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-softball-yellow to-yellow-300 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src="https://picsum.photos/seed/coachjay/500/500" 
              alt="Coach Jay" 
              className="relative rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
