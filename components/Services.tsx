
import React from 'react';

const services = [
  {
    title: 'Websites',
    desc: 'Custom sites that look polished and feel effortless to use. Designed to build trust. Built to grow with you.',
    color: 'bg-terracotta/10',
    borderColor: 'border-terracotta/20',
    icon: (
      <svg className="w-8 h-8 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9c1.657 0 3 4.03 3 9s-1.343 9-3 9m0-18c-1.657 0-3 4.03-3 9s1.343 9 3 9m-9-9h18" />
      </svg>
    )
  },
  {
    title: 'SaaS and Web Apps',
    desc: 'Tools that turn your big ideas into working software. Clear, intuitive, and built around real people.',
    color: 'bg-honey/10',
    borderColor: 'border-honey/20',
    icon: (
      <svg className="w-8 h-8 text-honey" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: 'Automations',
    desc: 'Quiet systems that save time in the background. Your business runs smoother. You get your energy back.',
    color: 'bg-teal/10',
    borderColor: 'border-teal/20',
    icon: (
      <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    title: 'AI-powered Tools',
    desc: 'Practical AI that supports your workflow instead of overwhelming it. Smart. Stable. Helpful.',
    color: 'bg-plum/10',
    borderColor: 'border-plum/20',
    icon: (
      <svg className="w-8 h-8 text-plum" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-accent font-black mb-4">What we build</h2>
        <div className="w-20 h-1 bg-terracotta rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, idx) => (
          <div key={idx} className={`p-8 rounded-3xl border ${s.borderColor} ${s.color} card-overlap flex flex-col h-full`}>
            <div className="mb-6 p-3 bg-white w-fit rounded-2xl shadow-sm">
              {s.icon}
            </div>
            <h3 className="text-2xl font-accent font-bold mb-4">{s.title}</h3>
            <p className="text-charcoal/70 mb-8 flex-grow leading-relaxed">
              {s.desc}
            </p>
            <button className="text-sm font-semibold flex items-center gap-2 group">
              Learn more
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
