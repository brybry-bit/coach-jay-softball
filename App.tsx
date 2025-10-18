
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import CollegeEdge from './components/CollegeEdge';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-navy-blue text-slate-gray font-sans antialiased">
      <Header />
      <main className="container mx-auto px-6 md:px-12 lg:px-24">
        <Hero />
        <Services />
        <CollegeEdge />
        <About />
        <Schedule />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
