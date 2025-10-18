
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center text-slate-gray">
        <p className="font-mono text-sm">
          Designed & Built by a fan of the game.
        </p>
        <p className="text-xs mt-2">
          &copy; {new Date().getFullYear()} SB Player Development. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
