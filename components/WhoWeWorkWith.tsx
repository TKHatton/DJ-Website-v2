import React from 'react';

interface WhoWeWorkWithProps {
  onNavigate: (path: string) => void;
}

const targets = [
  'Small business owners drowning in manual processes',
  'Founders who know AI matters but need guidance on where to start',
  'Growing teams that need systems to scale with them',
  'Operations managers looking to eliminate repetitive work',
  'Coaches and consultants ready to productize their expertise',
  'Non-technical leaders who still want something powerful',
];

const WhoWeWorkWith: React.FC<WhoWeWorkWithProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="bg-honey/10 rounded-[60px] p-12 md:p-24 flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-accent font-black mb-8 leading-tight">
            Who we build for
          </h2>
          <p className="text-xl text-charcoal/70 mb-10 leading-relaxed">
            You have a business that works. You want it to work smarter. We
            bring the architecture. You bring the vision.
          </p>
          <button
            onClick={() => onNavigate('start')}
            className="bg-charcoal text-cream px-10 py-5 rounded-full font-semibold hover:bg-terracotta transition-all shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
          >
            Start a project
          </button>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {targets.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-3xl shadow-sm border border-charcoal/5 flex items-start gap-4"
            >
              <div className="mt-1.5 w-2 h-2 rounded-full bg-terracotta flex-shrink-0" aria-hidden="true"></div>
              <span className="text-sm font-semibold text-charcoal/80 leading-snug">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
