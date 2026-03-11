import React from 'react';

interface ServicesProps {
  onLearnMore: (serviceId: string) => void;
}

const tiers = [
  {
    id: 'starter',
    title: 'Agent Starter',
    agents: '1-3 Agents',
    desc: 'One workflow. One problem. One system that solves it.',
    accentBorder: 'border-t-terracotta',
    accentText: 'text-terracotta',
    accentBg: 'bg-terracotta/10',
    badge: null,
  },
  {
    id: 'system',
    title: 'Agent System',
    agents: '4-10 Agents',
    desc: 'Multiple workflows working together. Agents that communicate and hand off tasks automatically.',
    accentBorder: 'border-t-honey',
    accentText: 'text-honey',
    accentBg: 'bg-honey/10',
    badge: 'Most Popular',
  },
  {
    id: 'infrastructure',
    title: 'Agent Infrastructure',
    agents: '10+ Agents',
    desc: 'A full operational system across your business. Every department connected.',
    accentBorder: 'border-t-teal',
    accentText: 'text-teal',
    accentBg: 'bg-teal/10',
    badge: null,
  },
];

const Services: React.FC<ServicesProps> = ({ onLearnMore }) => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-accent font-black mb-4">What we build</h2>
        <p className="text-xl text-charcoal/70 max-w-2xl leading-relaxed">
          Multi-agent AI systems designed around your business. Three levels of
          complexity. One standard of quality.
        </p>
        <div className="w-20 h-1 bg-terracotta rounded-full mt-6" aria-hidden="true"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`relative bg-white border border-charcoal/5 ${tier.accentBorder} border-t-4 rounded-3xl p-8 flex flex-col h-full shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
          >
            {tier.badge && (
              <span className="absolute -top-3 right-6 bg-honey text-charcoal text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-sm">
                {tier.badge}
              </span>
            )}

            <span
              className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full w-fit mb-4 ${tier.accentBg} ${tier.accentText}`}
            >
              {tier.agents}
            </span>

            <h3 className="text-2xl font-accent font-bold mb-4">{tier.title}</h3>

            <p className="text-charcoal/70 mb-8 flex-grow leading-relaxed">
              {tier.desc}
            </p>

            <button
              onClick={() => onLearnMore(tier.id)}
              className="text-sm font-semibold flex items-center gap-2 group text-charcoal/80 hover:text-charcoal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta rounded"
            >
              Learn more
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
