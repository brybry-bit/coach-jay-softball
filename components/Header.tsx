
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#college-edge', label: 'The Edge' },
    { href: '#about', label: 'Coach Jay' },
    { href: '#schedule', label: 'Schedule' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy-blue/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center h-20">
        <a href="#" onClick={(e) => scrollTo(e, '#home')} className="text-xl font-black text-softball-yellow tracking-wider">
          SBPlayerDev
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a key={link.href} href={link.href} onClick={(e) => scrollTo(e, link.href)} className="text-light-slate hover:text-softball-yellow transition-colors duration-300">
              <span className="text-softball-yellow mr-1">0{index + 1}.</span> {link.label}
            </a>
          ))}
          <a 
            href="#schedule" 
            onClick={(e) => scrollTo(e, '#schedule')} 
            className="ml-4 px-6 py-2 bg-softball-yellow text-navy-blue rounded-lg font-bold hover:bg-softball-yellow/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-softball-yellow/25"
          >
            Book Now
          </a>
        </nav>
        <button className="md:hidden text-softball-yellow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
