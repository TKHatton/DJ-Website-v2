
import React from 'react';

interface HeroProps {
  onNavigate: (path: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="min-h-[80vh] flex items-center px-6 md:px-12 pt-32 pb-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-accent font-black leading-[0.95] tracking-tight">
            We build the AI systems
            <br />
            <span className="text-terracotta">that run your operations.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-charcoal/70 mt-8 max-w-2xl leading-relaxed">
            Multi-agent architecture designed around your workflows. From a single automated process to a full operational backbone. You get access to the system. We handle everything under the hood.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button 
              onClick={() => onNavigate('start')}
              className="bg-charcoal text-cream px-8 py-4 rounded-full font-medium hover:bg-charcoal/90 transition-all shadow-lg hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              Get Started
            </button>
            <button 
              onClick={() => onNavigate('studio')}
              className="border-2 border-charcoal/20 px-8 py-4 rounded-full font-medium hover:border-charcoal/40 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              See what we build
            </button>
          </div>
        </div>
        
        <div className="mt-12 flex flex-wrap gap-3">
          {['Agent Architecture', 'Workflow Automation', 'Operational Systems', 'Custom Integrations'].map((tag) => (
            <span key={tag} className="text-xs font-medium uppercase tracking-widest text-charcoal/40 bg-charcoal/5 px-4 py-2 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
