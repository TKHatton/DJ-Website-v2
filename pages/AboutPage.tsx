import React from 'react';

const beliefs = [
  {
    title: 'Technology should have soul.',
    desc: 'Tools should feel supportive, not overwhelming. We design systems that people actually enjoy using.',
    color: 'bg-terracotta',
  },
  {
    title: 'Architecture matters more than hype.',
    desc: 'A well-designed system outperforms a trendy tool every time. We invest in structure that lasts.',
    color: 'bg-teal',
  },
  {
    title: 'Clarity over complexity.',
    desc: 'If we cannot explain it simply, we have not thought about it enough. Every system we build is understandable.',
    color: 'bg-honey',
  },
  {
    title: 'Your system, your business.',
    desc: "We build it, you own the results. No vendor lock-in to someone else's platform. No dependency traps.",
    color: 'bg-plum',
  },
  {
    title: 'Progress over perfection.',
    desc: 'Ship, learn, improve. Always in motion. The best systems evolve alongside the businesses they serve.',
    color: 'bg-terracotta',
  },
];

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24">
      {/* Page Header */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <h1 className="text-6xl md:text-8xl font-accent font-black mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          About
        </h1>
        <p className="text-xl md:text-2xl text-charcoal/70 max-w-3xl leading-relaxed animate-in fade-in duration-1000 delay-200">
          Digital Jaywalking was founded on a simple idea: technology should work for people, not the other way around.
        </p>
      </header>

      {/* Co-founders Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-accent font-bold mb-4">The people behind the work</h2>
          <div className="w-16 h-1 bg-terracotta rounded-full" aria-hidden="true"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Lenise */}
          <div className="bg-white p-10 md:p-12 rounded-[40px] border border-charcoal/5 hover:shadow-lg transition-all relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-plum/5 rounded-full blur-2xl transition-all group-hover:w-48 group-hover:h-48" aria-hidden="true"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-3 h-3 bg-plum rounded-full" aria-hidden="true"></div>
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-plum">Co-founder</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-accent font-bold mb-6">Lenise</h3>
              <div className="space-y-4 text-charcoal/70 leading-relaxed">
                <p>
                  Builder, teacher, and systems thinker. Lenise is passionate about multi-agent AI architecture and making complex systems feel simple.
                </p>
                <p>
                  She believes the best technology disappears into the background and just works. If a tool creates friction instead of removing it, something needs to change.
                </p>
                <p>
                  Currently deep into LangGraph, agent orchestration, and small language models. Always building. Always learning.
                </p>
              </div>
            </div>
          </div>

          {/* Julian */}
          <div className="bg-white p-10 md:p-12 rounded-[40px] border border-charcoal/5 hover:shadow-lg transition-all relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal/5 rounded-full blur-2xl transition-all group-hover:w-48 group-hover:h-48" aria-hidden="true"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-3 h-3 bg-teal rounded-full" aria-hidden="true"></div>
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-teal">Co-founder</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-accent font-bold mb-6">Julian</h3>
              <div className="space-y-4 text-charcoal/70 leading-relaxed">
                <p>
                  Co-founder and partner in building Digital Jaywalking from the ground up. Julian brings a grounded perspective and steady presence to every decision the company makes.
                </p>
                <p>
                  Together with Lenise, he is shaping a business that values integrity, thoughtful design, and real impact over noise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Digital Jaywalking */}
      <section className="py-24 bg-white/40 border-y border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-accent font-bold mb-8">Why Digital Jaywalking?</h2>
            <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed">
              <p>
                The name is intentional. Jaywalking means finding the shortest, smartest path instead of waiting for permission. Digital Jaywalking means finding those same shortcuts in technology. Not reckless. Not careless. Just smarter.
              </p>
              <p>
                We skip the unnecessary steps. We question bloated processes. We look for the direct route between where you are and where you need to be.
              </p>
            </div>
            <p className="mt-12 text-2xl md:text-3xl font-accent font-bold italic text-charcoal/80">
              "We cross the digital street differently."
            </p>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-accent font-bold mb-4">What We Believe</h2>
          <p className="text-charcoal/50 text-lg">The principles that shape everything we build.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beliefs.map((b, i) => (
            <div
              key={i}
              className="p-8 rounded-[32px] bg-white border border-charcoal/5 hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-3 h-3 ${b.color} rounded-full`} aria-hidden="true"></div>
                <h3 className="text-lg font-accent font-bold">{b.title}</h3>
              </div>
              <p className="text-charcoal/70 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-cream border border-charcoal/5 rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h3 className="text-xl font-accent font-bold mb-4">Digital Jaywalking, LLC</h3>
            <div className="space-y-1 text-charcoal/60">
              <p>Durham, NC</p>
              <a
                href="mailto:info@digitaljaywalking.com"
                className="hover:text-terracotta transition-colors"
              >
                info@digitaljaywalking.com
              </a>
            </div>
          </div>
          <div aria-hidden="true" className="hidden md:block w-[1px] h-16 bg-charcoal/10"></div>
          <div className="text-charcoal/50 text-sm max-w-sm leading-relaxed">
            We build multi-agent AI systems, custom web applications, and thoughtful automations for businesses that want technology with integrity.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <div className="bg-charcoal text-cream rounded-[60px] p-16 md:p-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-terracotta/10 rounded-full blur-3xl" aria-hidden="true"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-plum/10 rounded-full blur-3xl" aria-hidden="true"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-accent font-black mb-8">
              Want to build something together?
            </h2>
            <p className="text-xl text-cream/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              We love working with people who care about what they are building. If that sounds like you, let us start a conversation.
            </p>
            <button
              onClick={() => onNavigate('start')}
              className="bg-cream text-charcoal px-10 py-5 rounded-full font-bold hover:bg-honey transition-all text-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
