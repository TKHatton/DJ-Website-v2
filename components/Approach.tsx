
import React from 'react';

const steps = [
  {
    title: 'Listen',
    desc: 'We learn your vision, challenges, and goals. We ask real questions. We slow down at the beginning so everything moves faster later.',
    num: '01'
  },
  {
    title: 'Design',
    desc: 'We create layouts, flows, and visuals that feel like you. Beautiful on the outside. Thoughtful underneath.',
    num: '02'
  },
  {
    title: 'Build',
    desc: 'We make the system, site, or tool come to life. Clean code. Clear structure. Stable foundations.',
    num: '03'
  },
  {
    title: 'Support',
    desc: 'We walk with you after launch. Updates. Refinements. Guidance when you need it. Your success matters to us.',
    num: '04'
  }
];

const Approach: React.FC = () => {
  return (
    <section id="approach" className="py-24 px-6 md:px-12 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-accent font-black mb-6">Our Approach</h2>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">Simple. Understandable. Trust-building.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] border-t border-dashed border-charcoal/20 -z-0"></div>
          
          {steps.map((s, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-charcoal text-cream flex items-center justify-center font-accent font-bold text-xl mb-8 shadow-lg ring-8 ring-cream">
                {s.num}
              </div>
              <h3 className="text-2xl font-accent font-bold mb-4">{s.title}</h3>
              <p className="text-charcoal/70 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
