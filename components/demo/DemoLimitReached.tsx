import React from 'react';

interface DemoLimitReachedProps {
  onNavigate: (path: string) => void;
}

const DemoLimitReached: React.FC<DemoLimitReachedProps> = ({ onNavigate }) => (
  <div className="max-w-xl mx-auto text-center animate-reveal">
    <div className="bg-white rounded-[40px] border border-charcoal/5 p-12">
      <h3 className="font-accent font-bold text-2xl mb-4">
        You have explored all 3 demos for this session
      </h3>
      <p className="text-charcoal/60 mb-8 leading-relaxed">
        Want to see what multi-agent AI could do for your actual business
        workflows? Let us show you.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={() => onNavigate('start')}
          className="bg-charcoal text-cream px-8 py-3 rounded-full font-semibold hover:bg-terracotta transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
        >
          Start a project
        </button>
        <a
          href="mailto:info@digitaljaywalking.com"
          className="border border-charcoal/20 text-charcoal px-8 py-3 rounded-full font-semibold hover:bg-charcoal/5 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
        >
          Email us
        </a>
      </div>
    </div>
  </div>
);

export default DemoLimitReached;
