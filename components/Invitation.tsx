import React from 'react';

interface InvitationProps {
  onNavigate: (path: string) => void;
}

const Invitation: React.FC<InvitationProps> = ({ onNavigate }) => {
  return (
    <section className="relative bg-charcoal rounded-[60px] mx-4 md:mx-8 my-12 overflow-hidden">
      {/* Gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-terracotta/20 to-plum/20 pointer-events-none"
      />

      <div className="relative z-10 py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="font-accent text-4xl md:text-5xl text-cream mb-6">
            Ready to build something intelligent?
          </h2>

          {/* Subtext */}
          <p className="text-cream/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            If you have workflows that could run smarter, we want to help
            architect the system that makes it happen.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => onNavigate('start')}
              className="bg-cream text-charcoal font-semibold px-8 py-3.5 rounded-full hover:bg-honey transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              Start a project
            </button>
            <a
              href="mailto:info@digitaljaywalking.com"
              className="border border-cream text-cream font-semibold px-8 py-3.5 rounded-full hover:bg-cream/10 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              Talk with us
            </a>
          </div>

          {/* Footer tags */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['Agent systems', 'Workflow automation', 'AI architecture'].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-cream/50 text-sm border border-cream/20 px-4 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
