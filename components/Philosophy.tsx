import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-7xl font-accent font-black mb-12 italic">
          Technology should have soul.
        </h2>
        <div className="space-y-8 text-xl md:text-2xl text-charcoal/80 leading-relaxed font-light">
          <p>
            AI systems can be powerful, supportive, and deeply human. We design
            with intention. We automate with care. We build with respect for
            your business and your story.
          </p>
          <p className="font-semibold text-charcoal">
            Architecture matters more than hype. A well-designed system
            outperforms a trendy tool every time.
          </p>
        </div>

        {/* Decorative divider */}
        <div className="mt-20 flex justify-center items-center gap-4" aria-hidden="true">
          <div className="w-12 h-[1px] bg-charcoal/20"></div>
          <div className="w-2 h-2 rounded-full border border-charcoal/40"></div>
          <div className="w-12 h-[1px] bg-charcoal/20"></div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
