
import React from 'react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <button 
            onClick={() => onNavigate('home')} 
            className="text-2xl font-accent font-black tracking-tight hover:opacity-80 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta rounded"
            aria-label="Go to home page"
          >
            Digital Jaywalking
          </button>
          <p className="text-sm text-charcoal/50 mt-2">&copy; {new Date().getFullYear()} Digital Jaywalking, LLC. All rights reserved.</p>
        </div>
        
        <div className="flex gap-12">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-charcoal/40">Sitemap</span>
            <button onClick={() => onNavigate('studio')} className="text-left hover:text-terracotta transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta rounded underline-offset-4 hover:underline">Studio</button>
            <button onClick={() => onNavigate('academy')} className="text-left hover:text-terracotta transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta rounded underline-offset-4 hover:underline">Academy</button>
            <button onClick={() => onNavigate('blog')} className="text-left hover:text-terracotta transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta rounded underline-offset-4 hover:underline">Blog</button>
            <button onClick={() => onNavigate('approach')} className="text-left hover:text-terracotta transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta rounded underline-offset-4 hover:underline">How We Build</button>
            <button onClick={() => onNavigate('about')} className="text-left hover:text-terracotta transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta rounded underline-offset-4 hover:underline">About</button>
            <button onClick={() => onNavigate('start')} className="text-left hover:text-terracotta transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta rounded underline-offset-4 hover:underline">Start a Project</button>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-charcoal/40">Connect</span>
            <a href="mailto:info@digitaljaywalking.com" className="hover:text-terracotta transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta rounded underline-offset-4 hover:underline">Email</a>
            <a href="https://linkedin.com/company/digital-jaywalking" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta rounded underline-offset-4 hover:underline">LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 text-center">
        <p className="text-sm text-charcoal/50">
          Built with heart and intention. No em dashes were harmed in the making of this website.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
