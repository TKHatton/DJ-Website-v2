
import React from 'react';

interface HeroProps {
  onNavigate: (path: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      {/* Background Abstract Shapes */}
      <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] bg-honey/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-[-5%] w-[400px] h-[400px] bg-terracotta/5 rounded-full blur-3xl" style={{ animation: 'float 8s ease-in-out infinite' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-accent font-black leading-[0.9] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Smart shortcuts.<br />
            <span className="text-terracotta">Bold results.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-charcoal/80 max-w-2xl mb-10 leading-relaxed animate-in fade-in duration-1000 delay-300">
            Digital Jaywalking is a creative digital product studio that builds websites, apps, SaaS tools, and automations that actually make life easier. 
            Beautifully designed. Thoughtfully engineered. Built to support your genius.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in duration-1000 delay-500">
            <button 
              onClick={() => onNavigate('start')}
              className="bg-charcoal text-cream px-8 py-4 rounded-full font-semibold hover:bg-terracotta transition-all shadow-xl hover:shadow-terracotta/20"
            >
              Start a project
            </button>
            <button 
              onClick={() => onNavigate('work')}
              className="border border-charcoal/20 px-8 py-4 rounded-full font-semibold hover:bg-honey/10 transition-all"
            >
              See our work
            </button>
          </div>
        </div>
      </div>

      {/* Abstract Line Illustration */}
      <div className="absolute right-12 bottom-24 hidden lg:block opacity-20">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 350 C 150 350, 150 50, 350 50" stroke="#1A1A1A" strokeWidth="2" strokeDasharray="8 8" />
          <path d="M50 50 C 150 50, 150 350, 350 350" stroke="#E2725B" strokeWidth="2" strokeDasharray="8 8" />
          <circle cx="50" cy="350" r="6" fill="#1A1A1A" />
          <circle cx="350" cy="50" r="6" fill="#1A1A1A" />
          <circle cx="50" cy="50" r="6" fill="#E2725B" />
          <circle cx="350" cy="350" r="6" fill="#E2725B" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
