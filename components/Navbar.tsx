
import React from 'react';

interface NavbarProps {
  onNavigate: (path: string) => void;
  currentPath: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPath }) => {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-6 md:px-12 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="pointer-events-auto bg-cream/80 backdrop-blur-md px-4 py-2 rounded-full border border-charcoal/5 shadow-sm">
          <button 
            onClick={() => onNavigate('home')} 
            className="text-xl font-accent font-bold tracking-tight text-charcoal hover:opacity-80 transition-opacity"
          >
            Digital Jaywalking
          </button>
        </div>
        <div className="hidden md:flex gap-6 pointer-events-auto bg-cream/80 backdrop-blur-md px-6 py-2 rounded-full border border-charcoal/5 shadow-sm">
          <button 
            onClick={() => onNavigate('work')} 
            className={`text-sm font-medium transition-colors ${currentPath === 'work' ? 'text-terracotta' : 'hover:text-terracotta'}`}
          >
            Our Work
          </button>
          <button 
            onClick={() => onNavigate('approach')} 
            className={`text-sm font-medium transition-colors ${currentPath === 'approach' ? 'text-teal' : 'hover:text-teal'}`}
          >
            Approach
          </button>
          <button 
            onClick={() => onNavigate('start')} 
            className={`text-sm font-medium transition-colors ${currentPath === 'start' ? 'text-plum' : 'hover:text-plum'}`}
          >
            Start a Project
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
