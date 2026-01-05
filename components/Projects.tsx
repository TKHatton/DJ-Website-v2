
import React from 'react';

const projects = [
  {
    title: 'A website that finally matched the brand',
    subtitle: 'Redesign & Automation for a Growing Coach',
    desc: 'We redesigned the experience, organized the content, and added gentle automations to handle bookings and follow-ups. The result felt like relief.',
    color: 'bg-teal/5',
    image: 'https://picsum.photos/seed/coach/800/600'
  },
  {
    title: 'A small SaaS that turned into a revenue stream',
    subtitle: 'From Idea to Usable Tool',
    desc: 'We turned a client idea into a simple, usable tool that people loved. They now have a product that grows while they sleep.',
    color: 'bg-honey/5',
    image: 'https://picsum.photos/seed/saas/800/600'
  },
  {
    title: 'An automation that gave someone their time back',
    subtitle: 'Workflow Mapping & Dashboard Building',
    desc: 'Too many manual steps. Too many tabs. We mapped the workflow, automated the repetitive parts, and built a clear dashboard.',
    color: 'bg-plum/5',
    image: 'https://picsum.photos/seed/automation/800/600'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-accent font-black mb-4">Featured Projects</h2>
          <p className="text-charcoal/60 text-lg">Real solutions for real people. Not long, but real.</p>
        </div>
        <button className="bg-charcoal text-cream px-8 py-4 rounded-full font-semibold hover:bg-terracotta transition-all self-start md:self-auto">
          See more projects
        </button>
      </div>

      <div className="space-y-24">
        {projects.map((p, idx) => (
          <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 group`}>
            <div className="w-full md:w-1/2 relative">
              <div className={`absolute inset-0 ${p.color} rounded-[40px] translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6`}></div>
              <img 
                src={p.image} 
                alt={p.title} 
                className="w-full h-[400px] object-cover rounded-[40px] shadow-2xl transition-transform group-hover:-translate-y-2"
              />
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-terracotta font-semibold uppercase tracking-widest text-xs mb-3 block">{p.subtitle}</span>
              <h3 className="text-3xl md:text-4xl font-accent font-black mb-6 leading-tight">{p.title}</h3>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                {p.desc}
              </p>
              <div className="flex gap-4">
                <span className="px-4 py-1.5 rounded-full border border-charcoal/10 text-xs font-medium bg-white">Strategy</span>
                <span className="px-4 py-1.5 rounded-full border border-charcoal/10 text-xs font-medium bg-white">Design</span>
                <span className="px-4 py-1.5 rounded-full border border-charcoal/10 text-xs font-medium bg-white">Development</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
