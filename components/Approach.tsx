
import React from 'react';

const steps = [
  { num: '01', title: 'Discover', desc: 'We learn your workflows, challenges, and goals. We ask real questions and listen carefully.' },
  { num: '02', title: 'Architect', desc: 'We design the agent system. You see the full blueprint before anything gets built.' },
  { num: '03', title: 'Build', desc: 'We bring the system to life. Clean code. Tested agents. Stable foundations.' },
  { num: '04', title: 'Support', desc: 'We walk with you after launch. Updates. Refinements. Guidance when you need it.' },
];

const Approach: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-charcoal/40">Our Process</span>
        <h2 className="text-4xl md:text-5xl font-accent font-black mt-3 mb-4">How we build</h2>
        <p className="text-lg text-charcoal/60 max-w-2xl mb-16">
          Simple. Transparent. No surprises. Every project follows the same thoughtful process.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="relative">
              <span className="text-6xl font-accent font-black text-charcoal/5" aria-hidden="true">{step.num}</span>
              <h3 className="text-xl font-bold mt-2 mb-3">{step.title}</h3>
              <p className="text-charcoal/60 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
