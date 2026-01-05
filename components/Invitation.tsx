
import React from 'react';

interface InvitationProps {
  onNavigate: (path: string) => void;
}

const Invitation: React.FC<InvitationProps> = ({ onNavigate }) => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto mb-12">
      <div className="relative bg-charcoal rounded-[60px] p-12 md:p-32 overflow-hidden text-center text-cream">
        {/* Decorative Gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-terracotta/20 via-transparent to-plum/20"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-accent font-black mb-8">
            Let's build something that works beautifully.
          </h2>
          <p className="text-xl text-cream/70 mb-12 leading-relaxed">
            If you have an idea you care about, we want to help bring it to life in a way that feels aligned, powerful, and sustainable.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={() => onNavigate('start')}
              className="bg-cream text-charcoal px-10 py-5 rounded-full font-bold hover:bg-honey transition-all text-lg"
            >
              Start a project
            </button>
            <a 
              href="mailto:info@digitaljaywalking.com"
              className="border border-cream/30 px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-all text-lg flex items-center justify-center"
            >
              Talk with us
            </a>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-cream/50 text-sm">
            <span>Explore possibilities.</span>
            <span>Ask a question.</span>
            <span>Start a project.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
