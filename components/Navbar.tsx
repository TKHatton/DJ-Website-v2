
import React, { useState } from 'react';

interface NavbarProps {
  onNavigate: (path: string) => void;
  currentPath: string;
}

const navLinks = [
  { path: 'studio', label: 'Studio', color: 'terracotta' },
  { path: 'academy', label: 'Academy', color: 'honey' },
  { path: 'blog', label: 'Blog', color: 'teal' },
  { path: 'about', label: 'About', color: 'plum' },
  { path: 'faq', label: 'FAQ', color: 'teal' },
  { path: 'start', label: 'Get Started', color: 'terracotta' },
];

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPath }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (path: string) => {
    onNavigate(path);
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-6 md:px-12 pointer-events-none" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="pointer-events-auto bg-cream/80 backdrop-blur-md px-4 py-2 rounded-full border border-charcoal/5 shadow-sm">
          <button 
            onClick={() => handleNav('home')}
            aria-label="Go to home page"
            className="text-xl font-accent font-bold tracking-tight text-charcoal hover:opacity-80 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta rounded"
          >
            Digital Jaywalking
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden pointer-events-auto bg-cream/80 backdrop-blur-md p-3 rounded-full border border-charcoal/5 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            {mobileOpen ? (
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            ) : (
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            )}
          </svg>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6 pointer-events-auto bg-cream/80 backdrop-blur-md px-6 py-2 rounded-full border border-charcoal/5 shadow-sm">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNav(link.path)}
              className={`text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta rounded px-1 ${
                currentPath === link.path ? `text-${link.color}` : `hover:text-${link.color}`
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden mt-4 pointer-events-auto bg-cream/95 backdrop-blur-md rounded-2xl border border-charcoal/5 shadow-lg p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNav(link.path)}
              className={`text-left text-lg font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta rounded px-2 py-1 ${
                currentPath === link.path ? `text-${link.color}` : `hover:text-${link.color}`
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
