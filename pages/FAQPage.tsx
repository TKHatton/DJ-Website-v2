import React, { useState } from 'react';

const faqs = [
  {
    category: 'About Our Services',
    questions: [
      {
        q: 'What does Digital Jaywalking actually build?',
        a: 'We build multi-agent AI systems. These are custom-built networks of AI agents that automate your business workflows, coordinate tasks across teams, and handle processes that currently require manual effort. Every system is designed specifically for your business.'
      },
      {
        q: 'What is a multi-agent system?',
        a: 'A multi-agent system is a group of AI agents, each responsible for a specific task, that work together as a coordinated team. They communicate, share context, and hand off work to each other automatically. Think of it like a team of specialists that never sleeps and never drops the ball.'
      },
      {
        q: 'What is the difference between Agent Core, Agent System, and Agent Scale?',
        a: 'Agent Core automates one specific workflow for one team. Agent System connects multiple workflows so they coordinate automatically across your business. Agent Scale is a full operational backbone that replaces manual processes across departments with one intelligent, connected system.'
      },
      {
        q: 'What is an Agent Blueprint?',
        a: 'An Agent Blueprint is an architecture-only engagement. We run a discovery session, map your workflows, and deliver a detailed system design document. It includes 2 follow-up check-in calls. From there you can build it yourself or hire us to build it.'
      },
    ]
  },
  {
    category: 'Working With Us',
    questions: [
      {
        q: 'How long does a typical project take?',
        a: 'Agent Core projects usually take 2 to 4 weeks. Agent System builds take 4 to 8 weeks. Agent Scale projects are scoped individually based on complexity and number of departments involved.'
      },
      {
        q: 'How much does it cost?',
        a: 'Pricing scales based on project complexity and company size. A solo coaching business is not the same investment as a company with 300 employees. We work with small to medium businesses and price fairly for every stage. Contact us for a conversation about your specific needs.'
      },
      {
        q: 'What if I need changes after the system is delivered?',
        a: 'Every build includes a handoff period where you can test, ask questions, and request adjustments. For ongoing needs, our Ongoing Optimization retainer keeps your system evolving with your business.'
      },
      {
        q: 'What tools and platforms do you integrate with?',
        a: 'We integrate with the tools your business already uses. CRMs, project management platforms, communication tools, databases, APIs, and more. During discovery, we map your existing tech stack and design integrations around it.'
      },
    ]
  },
  {
    category: 'Academy',
    questions: [
      {
        q: 'What kind of workshops and courses do you offer?',
        a: 'We offer practical, hands-on workshops and course series focused on AI topics that matter to businesses and professionals. Topics include AI-powered meetings, autonomous agents, and building your first agent system. All taught by people who build these systems every day.'
      },
      {
        q: 'Do I need technical experience to attend a workshop?',
        a: 'Most of our workshops are designed for professionals and business owners, not developers. We teach concepts clearly and focus on practical takeaways you can use immediately. Course series that go deeper into technical topics will note that in the description.'
      },
    ]
  },
  {
    category: 'General',
    questions: [
      {
        q: 'Where is Digital Jaywalking based?',
        a: 'We are based in Durham, NC. We work with clients remotely and are open to businesses anywhere.'
      },
      {
        q: 'How do I get started?',
        a: 'Fill out the form on our Get Started page or email us at info@digitaljaywalking.com. We will review your details and follow up within a few days to schedule a conversation.'
      },
    ]
  }
];

interface FAQPageProps {
  onNavigate: (path: string) => void;
}

const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFaq = (key: string) => {
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div className="pt-32 pb-24">
      {/* Page Header */}
      <header className="max-w-4xl mx-auto px-6 md:px-12 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-accent font-black mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          FAQ
        </h1>
        <p className="text-xl text-charcoal/70 max-w-2xl mx-auto leading-relaxed animate-in fade-in duration-1000 delay-200">
          Answers to the questions we hear most. If yours is not here, reach out and ask.
        </p>
      </header>

      {/* FAQ Sections */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-16">
        {faqs.map((section, sectionIdx) => (
          <section key={sectionIdx}>
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-accent font-bold mb-3">{section.category}</h2>
              <div className="w-12 h-1 bg-terracotta rounded-full" aria-hidden="true"></div>
            </div>

            <div className="space-y-3">
              {section.questions.map((faq, qIdx) => {
                const key = `${sectionIdx}-${qIdx}`;
                const isOpen = openIndex === key;
                return (
                  <div
                    key={key}
                    className="bg-white rounded-2xl border border-charcoal/5 overflow-hidden transition-all hover:shadow-md"
                  >
                    <button
                      onClick={() => toggleFaq(key)}
                      className="w-full flex items-center justify-between p-6 md:p-8 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta rounded-2xl"
                      aria-expanded={isOpen}
                    >
                      <h3 className="text-base md:text-lg font-accent font-bold pr-6">{faq.q}</h3>
                      <svg
                        className={`w-5 h-5 text-charcoal/40 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8">
                        <p className="text-charcoal/70 leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 mt-20">
        <div className="bg-charcoal text-cream rounded-[40px] p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-terracotta/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-accent font-bold mb-6">
              Still have questions?
            </h2>
            <p className="text-cream/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              We are happy to talk. No sales pitch. Just honest answers about what we do and how it might help your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => onNavigate('start')}
                className="bg-cream text-charcoal px-8 py-4 rounded-full font-bold hover:bg-honey transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
              >
                Get Started
              </button>
              <a
                href="mailto:info@digitaljaywalking.com"
                className="border border-cream/30 text-cream px-8 py-4 rounded-full font-bold hover:bg-cream/10 transition-all flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
              >
                Email us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;