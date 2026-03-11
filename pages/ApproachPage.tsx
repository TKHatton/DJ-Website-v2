import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We sit down with you and map your workflows. Where does time get wasted? What processes break down? What would your business look like if the repetitive work just handled itself?',
    quote: 'We ask real questions. We listen. We take notes.',
    color: 'text-terracotta',
    bg: 'bg-terracotta/10',
    border: 'border-terracotta/20',
  },
  {
    num: '02',
    title: 'Architecture',
    desc: 'We design the agent system. How many agents, what each one does, how they communicate, what tools they connect to. You see the full blueprint before anything gets built.',
    quote: 'You approve the architecture. No surprises.',
    color: 'text-honey',
    bg: 'bg-honey/10',
    border: 'border-honey/20',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'We build each agent, wire the orchestration, integrate with your existing tools, and test everything. Clean code. Clear structure. Stable foundations.',
    quote: 'Every agent is tested individually and as part of the system.',
    color: 'text-teal',
    bg: 'bg-teal/10',
    border: 'border-teal/20',
  },
  {
    num: '04',
    title: 'Deploy',
    desc: 'We launch the system into your environment. You get access through clean interfaces, slash commands, or dashboards. We walk you through everything.',
    quote: 'You start using it on day one.',
    color: 'text-plum',
    bg: 'bg-plum/10',
    border: 'border-plum/20',
  },
  {
    num: '05',
    title: 'Support',
    desc: 'We do not disappear after launch. Every build includes a support window for questions, adjustments, and refinements. For ongoing needs, our optimization retainer keeps your system evolving with your business.',
    quote: 'Your success matters long after the final delivery.',
    color: 'text-terracotta',
    bg: 'bg-terracotta/10',
    border: 'border-terracotta/20',
  },
];

const differentiators = [
  'We build custom systems, not cookie-cutter automations. Every agent is designed for your specific workflows.',
  'You never touch the code. You interact with the system through clean interfaces. The complexity stays behind the scenes.',
  'We design for how your business actually works, not how a template thinks it should work.',
  'Your data stays yours. Your system stays private. Security is built in from the start.',
];

const values = [
  { title: 'Clarity over complexity', desc: 'If a solution feels confusing, we rethink it. Simplicity is a form of respect.' },
  { title: 'People first', desc: 'We build tools that reduce overwhelm and give people freedom back.' },
  { title: 'Architecture before code', desc: 'Every system starts with a blueprint. We design before we build.' },
  { title: 'Empowerment through access, not dependency', desc: 'We explain, teach, and document so you feel confident instead of dependent.' },
  { title: 'Integrity in recommendations', desc: 'We recommend what you actually need. Not what looks impressive but drains your budget.' },
];

interface ApproachPageProps {
  onNavigate: (path: string) => void;
}

const ApproachPage: React.FC<ApproachPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24">
      {/* Page Header */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 mb-24 text-center">
        <h1 className="text-6xl md:text-8xl font-accent font-black mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          How We Build
        </h1>
        <div className="max-w-3xl mx-auto space-y-6 text-xl md:text-2xl text-charcoal/70 leading-relaxed animate-in fade-in duration-1000 delay-200">
          <p>
            Every agent system starts with understanding your business. We listen first, design second, and build third. The technology comes last. The strategy comes first.
          </p>
        </div>
      </header>

      {/* Process Steps */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-accent font-bold mb-4">Our process</h2>
          <div className="w-16 h-1 bg-terracotta rounded-full" aria-hidden="true"></div>
        </div>

        <div className="space-y-12">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`p-8 md:p-12 rounded-[40px] border ${s.border} ${s.bg} hover:shadow-lg transition-all relative overflow-hidden group`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-2">
                  <span className={`text-6xl md:text-7xl font-accent font-black ${s.color} opacity-30`}>{s.num}</span>
                </div>
                <div className="lg:col-span-10 space-y-4">
                  <div className="flex items-center gap-4">
                    <h3 className={`text-2xl md:text-3xl font-accent font-bold ${s.color}`}>{s.title}</h3>
                  </div>
                  <p className="text-charcoal/70 leading-relaxed text-lg max-w-3xl">
                    {s.desc}
                  </p>
                  <p className="text-sm font-semibold text-charcoal/50 italic mt-4">
                    "{s.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 bg-white/40 border-y border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-accent font-bold mb-4">What makes our approach different</h2>
            <div className="w-16 h-1 bg-teal rounded-full" aria-hidden="true"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((d, i) => (
              <div key={i} className="flex gap-6 items-start p-8 bg-white rounded-[32px] border border-charcoal/5 hover:shadow-lg transition-all">
                <div className="w-3 h-3 mt-2 bg-teal rounded-full shrink-0" aria-hidden="true"></div>
                <p className="text-charcoal/70 leading-relaxed text-lg">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-charcoal text-cream rounded-[60px] mx-6 md:mx-12 overflow-hidden relative my-24">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none" aria-hidden="true">
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

      {/* Closing CTA */}
      <section className="pt-24 pb-12 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-accent font-black mb-8">
            Ready to see what an agent system could do for your business?
          </h2>
          <p className="text-xl text-charcoal/70 mb-12 leading-relaxed">
            Every project starts with a conversation. Tell us about your workflows, and we will show you what is possible.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={() => onNavigate('start')}
              className="bg-charcoal text-cream px-10 py-5 rounded-full font-bold hover:bg-terracotta transition-all text-lg shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              Start a project
            </button>
            <a
              href="mailto:info@digitaljaywalking.com"
              className="border border-charcoal/20 text-charcoal px-10 py-5 rounded-full font-bold hover:bg-honey/10 transition-all text-lg flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              Talk with us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApproachPage;
