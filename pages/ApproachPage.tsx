
import React from 'react';

const guides = [
  {
    title: '1. Start with understanding',
    desc: 'Before we recommend a tool, a design, or a strategy, we listen. We want to understand your goals, your audience, and the deeper reasons behind what you are building. We slow down at the beginning so everything can move faster later.',
    color: 'bg-terracotta/10',
    accent: 'text-terracotta'
  },
  {
    title: '2. Design intentionally',
    desc: 'Good design is not decoration. It is communication. We create layouts, user flows, and visuals that help people feel grounded, informed, and welcomed. Every decision is purposeful. Nothing feels accidental.',
    color: 'bg-honey/10',
    accent: 'text-honey'
  },
  {
    title: '3. Build with clarity',
    desc: 'We translate complex systems into clean, stable solutions. No tangled dashboards. No mystery steps. Everything is documented, organized, and structured in a way you can actually understand.',
    color: 'bg-teal/10',
    accent: 'text-teal'
  },
  {
    title: '4. Automate where it helps',
    desc: 'Automation should never feel like losing control. We only automate tasks that save time, reduce friction, and create peace of mind. The technology remains in service to your work and your humanity.',
    color: 'bg-plum/10',
    accent: 'text-plum'
  },
  {
    title: '5. Support after launch',
    desc: 'We do not disappear once something is built. We offer guidance, refinements, and continued partnership so your tools evolve with you. Your success matters long after the final delivery.',
    color: 'bg-charcoal/5',
    accent: 'text-charcoal'
  }
];

const steps = [
  { step: 'Step 1', title: 'Discovery', desc: 'We talk. We map the idea. We identify what will truly help. You get clarity. We get direction.' },
  { step: 'Step 2', title: 'Blueprint', desc: 'We sketch the experience. Wireframes, diagrams, or prototypes. You see how everything will work before anything is finalized.' },
  { step: 'Step 3', title: 'Build', desc: 'We bring it to life. Design, development, integration, and automation. Clean structure. Thoughtful systems.' },
  { step: 'Step 4', title: 'Review', desc: 'We test, refine, and polish. You try it. We adjust. Quality matters here.' },
  { step: 'Step 5', title: 'Launch', desc: 'We make it live and celebrate the moment with you. We guide you through using your new system or product confidently.' },
  { step: 'Step 6', title: 'Ongoing Care', desc: 'As your needs grow, we continue supporting you. Updates. Enhancements. Future ideas. This is partnership, not just production.' }
];

const values = [
  { title: 'Clarity over complexity', desc: 'If a solution feels confusing, we rethink it. Simplicity is a form of respect.' },
  { title: 'People first', desc: 'We build tools that reduce overwhelm and give people freedom back.' },
  { title: 'Creativity with purpose', desc: 'Every aesthetic choice has a reason. Beauty and function work together here.' },
  { title: 'Empowerment', desc: 'We explain, teach, and document so you feel confident instead of dependent.' },
  { title: 'Integrity', desc: 'We recommend what you actually need. Not what looks impressive but drains your budget.' }
];

interface ApproachPageProps {
  onNavigate: (path: string) => void;
}

const ApproachPage: React.FC<ApproachPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24">
      <header className="max-w-7xl mx-auto px-6 md:px-12 mb-24 text-center">
        <h1 className="text-6xl md:text-8xl font-accent font-black mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Our Approach
        </h1>
        <div className="max-w-3xl mx-auto space-y-6 text-xl md:text-2xl text-charcoal/70 leading-relaxed animate-in fade-in duration-1000 delay-200">
          <p>
            We build digital products the same way we approach relationships. With thoughtfulness. With honesty. With respect for your time, your vision, and your energy.
          </p>
          <p>
            Technology does not have to feel stressful. Our job is to make the process lighter, clearer, and truly collaborative.
          </p>
        </div>
      </header>

      {/* Guides Section */}
      <section className="py-24 bg-white/40 border-y border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-accent font-bold mb-4">What guides our work</h2>
            <div className="w-16 h-1 bg-terracotta rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((g, i) => (
              <div key={i} className={`p-10 rounded-[40px] ${g.color} flex flex-col h-full border border-charcoal/5 hover:shadow-lg transition-all`}>
                <h3 className={`text-2xl font-accent font-bold mb-6 ${g.accent}`}>{g.title}</h3>
                <p className="text-charcoal/80 leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-accent font-black mb-6">How a project flows</h2>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto italic">This is your clear roadmap. Simple. Transparent. No surprises.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 relative">
          {steps.map((s, i) => (
            <div key={i} className="relative group">
              <div className="mb-6 flex items-baseline gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-terracotta">{s.step}</span>
                <div className="h-[1px] flex-grow bg-charcoal/10"></div>
              </div>
              <h3 className="text-2xl font-accent font-bold mb-4 group-hover:text-terracotta transition-colors">{s.title}</h3>
              <p className="text-charcoal/70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-charcoal text-cream rounded-[60px] mx-6 md:mx-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 400 400">
            <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="2" strokeDasharray="10 20" fill="none" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-12 md:px-24">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-accent font-bold mb-4">Our values in action</h2>
            <p className="text-cream/50">The principles that hold our work together.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <div key={i} className="space-y-4">
                <h3 className="text-xl font-accent font-bold text-honey">{v.title}</h3>
                <p className="text-cream/70 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="pt-48 pb-12 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-accent font-black mb-8 italic text-charcoal">
            Calm. Strategic. Collaborative.
          </h2>
          <p className="text-xl text-charcoal/70 mb-12 leading-relaxed">
            If this approach aligns with how you want to build, we would love to partner with you. Let’s create something that feels grounded, efficient, and meaningful.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button onClick={() => onNavigate('start')} className="bg-charcoal text-cream px-10 py-5 rounded-full font-bold hover:bg-terracotta transition-all text-lg shadow-xl">
              Start a project
            </button>
            <a href="mailto:info@digitaljaywalking.com" className="border border-charcoal/20 text-charcoal px-10 py-5 rounded-full font-bold hover:bg-honey/10 transition-all text-lg flex items-center justify-center">
              Talk with us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApproachPage;
