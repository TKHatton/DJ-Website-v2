
import React, { useState } from 'react';
import AgentDemo from '../components/AgentDemo';

const tiers = [
  {
    name: 'Agent Core',
    scope: 'One workflow. One team.',
    accent: 'terracotta',
    color: 'bg-terracotta/10',
    borderColor: 'border-terracotta/20',
    textColor: 'text-terracotta',
    badge: null as string | null,
    description: 'You have a specific bottleneck that eats your time. We automate it end-to-end with a focused agent system built around that one workflow.',
    includes: [
      'Discovery session to map your bottleneck',
      'Targeted system architecture',
      'Full build and deployment',
      'Full access to your running system via dashboards and commands',
      'Handoff walkthrough and documentation'
    ],
    goodFor: 'Solo founders and small teams with one workflow that needs to stop being manual.',
    price: 'Starting at $X,XXX'
  },
  {
    name: 'Agent System',
    scope: 'Multiple workflows. Connected.',
    accent: 'honey',
    color: 'bg-honey/10',
    borderColor: 'border-honey/20',
    textColor: 'text-honey',
    badge: 'Most Popular',
    description: 'Your workflows do not exist in isolation. Neither should your agents. We orchestrate multiple processes so they communicate, hand off tasks, and share context automatically.',
    includes: [
      'Deep discovery across multiple workflows',
      'Cross-functional agent orchestration',
      'Complex integrations with your existing tools',
      'Agents that communicate and coordinate autonomously',
      'System access, dashboards, and documentation'
    ],
    goodFor: 'Growing businesses with multi-step processes across teams that need to work together without manual handoffs.',
    price: 'Starting at $X,XXX'
  },
  {
    name: 'Agent Scale',
    scope: 'Full operational backbone.',
    accent: 'teal',
    color: 'bg-teal/10',
    borderColor: 'border-teal/20',
    textColor: 'text-teal',
    badge: null as string | null,
    description: 'Your entire business runs on a system, not on you remembering what to do next. We build the operational infrastructure that connects departments, automates decisions, and keeps everything moving.',
    includes: [
      'Comprehensive discovery across departments',
      'Full operational system architecture',
      'Cross-department workflows and data flow',
      'Monitoring, logging, and system health dashboards',
      'Ongoing architecture support during rollout'
    ],
    goodFor: 'Established businesses ready to replace scattered tools and manual processes with one intelligent, connected system.',
    price: 'Starting at $XX,XXX'
  }
];

const addOns = [
  {
    title: 'Team Training',
    description: 'We teach your team how to use the system we built for you. Hands-on sessions, documentation walkthroughs, and Q&A until everyone feels confident.',
    accent: 'text-honey'
  },
  {
    title: 'Ongoing Optimization',
    description: 'Monthly tuning, new capabilities, and system evolution. Your business changes. Your agent system should change with it.',
    accent: 'text-teal'
  }
];

const faqs = [
  {
    question: 'What does a multi-agent system actually do?',
    answer: 'It coordinates multiple AI agents, each responsible for a specific task. They communicate, share context, and hand off work to each other automatically. Think of it like a team of specialists that never sleeps and never drops the ball.'
  },
  {
    question: 'How long does a typical build take?',
    answer: 'Agent Core projects usually take 2 to 4 weeks. Agent System builds take 4 to 8 weeks. Agent Scale projects are scoped individually based on the complexity and number of departments involved.'
  },
  {
    question: 'What if I need changes after delivery?',
    answer: 'That is what the Ongoing Optimization retainer is for. We also include a handoff period with every build so you have time to test, ask questions, and request adjustments before the project closes.'
  }
];

interface StudioPageProps {
  onNavigate: (path: string) => void;
}

const StudioPage: React.FC<StudioPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-32 pb-24">
      {/* Page Header */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 mb-24 text-center">
        <h1 className="text-6xl md:text-8xl font-accent font-black mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          The Studio
        </h1>
        <div className="max-w-3xl mx-auto space-y-6 text-xl md:text-2xl text-charcoal/70 leading-relaxed animate-in fade-in duration-1000 delay-200">
          <p>
            We build multi-agent AI systems that run your operations, coordinate your workflows, and give you back the hours you spend on repetitive work.
          </p>
          <p className="text-lg text-charcoal/50">
            Every system is custom. Every agent has a purpose. Nothing is generic.
          </p>
        </div>
      </header>

      {/* Service Tiers */}
      <section className="py-24 bg-white/40 border-y border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-accent font-bold mb-4">What we build</h2>
            <div className="w-16 h-1 bg-terracotta rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tiers.map((tier, i) => (
              <div
                key={i}
                className={`relative p-10 rounded-[40px] ${tier.color} border ${tier.borderColor} flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                {tier.badge && (
                  <div className="absolute -top-4 left-10">
                    <span className="bg-honey text-charcoal text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-md">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <span className={`text-xs font-bold uppercase tracking-widest ${tier.textColor}`}>
                    {tier.scope}
                  </span>
                </div>

                <h3 className="text-2xl font-accent font-bold mb-4">{tier.name}</h3>
                <p className="text-charcoal/70 mb-8 leading-relaxed">{tier.description}</p>

                <div className="space-y-3 mb-8 flex-grow">
                  <p className="text-xs font-bold uppercase tracking-widest text-charcoal/40">Includes</p>
                  {tier.includes.map((item, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <svg className={`w-5 h-5 ${tier.textColor} mt-0.5 shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-charcoal/70">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-charcoal/40 mb-2">Good for</p>
                  <p className="text-sm text-charcoal/60 italic leading-relaxed">{tier.goodFor}</p>
                </div>

                <div className="mt-auto pt-6 border-t border-charcoal/10">
                  <p className="text-lg font-accent font-bold">{tier.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Blueprint */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-plum/10 border border-plum/20 rounded-[40px] p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-plum/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-plum mb-4 block">Architecture Only</span>
              <h2 className="text-3xl md:text-4xl font-accent font-bold mb-6">Agent Blueprint</h2>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                Not ready for a full build? Start with the plan. We run a discovery session, map your workflows, and deliver a detailed system design document that shows exactly how your agent system should work.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                The blueprint includes 2 follow-up check-in calls as you move forward. From there, you have two clear paths: build it yourself using the architecture we designed, or hire us to build it for you.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white/60 rounded-3xl p-8 space-y-4">
                <h4 className="font-accent font-bold text-lg">What you get</h4>
                <div className="space-y-3">
                  {[
                    'Discovery session with your team',
                    'Detailed system architecture document',
                    'Agent definitions and workflow maps',
                    'Integration recommendations',
                    '2 follow-up check-in calls'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-plum mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-charcoal/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-sm text-plum font-semibold italic text-center">
                Perfect for technical teams who want the roadmap before committing to a build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-24 bg-white/40 border-y border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-accent font-bold mb-4">Add-ons</h2>
            <p className="text-charcoal/50 text-lg">Available with any tier.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addOns.map((addon, i) => (
              <div key={i} className="bg-white rounded-[40px] p-10 border border-charcoal/5 hover:shadow-lg transition-all">
                <h3 className={`text-xl font-accent font-bold mb-4 ${addon.accent}`}>{addon.title}</h3>
                <p className="text-charcoal/70 leading-relaxed">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-charcoal text-cream rounded-[60px] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-honey/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-accent font-bold mb-8">A note on pricing</h2>
            <p className="text-lg text-cream/70 leading-relaxed">
              Pricing scales based on project complexity and company size. A solo coaching business is not the same investment as a company with 300 employees. We work with small to medium businesses and price fairly for every stage.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 max-w-4xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-accent font-bold mb-4">Common questions</h2>
          <div className="w-16 h-1 bg-terracotta rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl border border-charcoal/5 overflow-hidden transition-all hover:shadow-md"
            >
              <button
                onClick={() => toggleFaq(i)}
                className="w-full flex items-center justify-between p-8 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta rounded-3xl"
                aria-expanded={openFaq === i}
              >
                <h3 className="text-lg font-accent font-bold pr-8">{faq.question}</h3>
                <svg
                  className={`w-6 h-6 text-charcoal/40 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-8 pb-8">
                  <p className="text-charcoal/70 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Live Demo */}
      <AgentDemo onNavigate={onNavigate} />

      {/* CTA */}
      <section className="relative py-32 bg-charcoal overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-terracotta/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-honey/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-6xl font-accent font-black mb-8 text-cream">
            Ready to build something?
          </h2>
          <p className="text-xl text-cream/60 mb-12 leading-relaxed">
            Tell us what is slowing you down. We will show you what an agent system can do about it.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={() => onNavigate('start')}
              className="bg-terracotta text-cream px-10 py-5 rounded-full font-bold hover:bg-terracotta/80 transition-all text-lg shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-honey"
            >
              Get Started
            </button>
            <a
              href="mailto:info@digitaljaywalking.com"
              className="border border-cream/20 text-cream px-10 py-5 rounded-full font-bold hover:bg-cream/10 transition-all text-lg flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-honey"
            >
              Ask us a question
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudioPage;
