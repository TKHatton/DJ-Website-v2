
import React, { useState } from 'react';

const featuredWorkshop = {
  title: 'Run Better Meetings with AI',
  status: 'Coming Soon',
  description: 'A hands-on workshop for professionals who want to transform how they plan, run, and follow up on meetings using AI tools.',
  details: [
    'Half-day workshop (4 hours)',
    'Small group format for personal attention',
    'Practical exercises you can apply immediately',
    'Templates and frameworks included'
  ]
};

const courses = [
  {
    title: 'Autonomous AI Agents: What Works, What Doesn\'t, and When to Use Them',
    format: '90-minute session',
    description: 'Cut through the hype. Learn what autonomous agents actually do, where they fall short, and when they are worth using.',
    accent: 'terracotta',
    color: 'bg-terracotta/10',
    borderColor: 'border-terracotta/20'
  },
  {
    title: 'AI for Your Business: Where to Start',
    format: 'Half-day workshop',
    description: 'A practical introduction for business owners who know AI matters but don\'t know where to begin.',
    accent: 'honey',
    color: 'bg-honey/10',
    borderColor: 'border-honey/20'
  },
  {
    title: 'Building Your First Agent System',
    format: '2-session course series',
    description: 'For technical founders and builders who want to understand multi-agent architecture from the ground up.',
    accent: 'teal',
    color: 'bg-teal/10',
    borderColor: 'border-teal/20'
  }
];

const whyLearnWithUs = [
  {
    title: 'We build these systems every day',
    description: 'This is not theory from a textbook. Every concept we teach comes from real projects, real challenges, and real results. We share what actually works.',
    accent: 'text-terracotta'
  },
  {
    title: 'Small groups, real exercises, honest answers',
    description: 'No massive webinars where you sit on mute. Our workshops are interactive, focused, and designed so you can ask the questions that matter to you.',
    accent: 'text-honey'
  },
  {
    title: 'You leave with something you can use immediately',
    description: 'Every session includes practical takeaways. Templates, frameworks, workflows, or tools you can put to work the same day.',
    accent: 'text-teal'
  }
];

const instructors = [
  {
    name: 'LT Kenney',
    role: 'Co-founder',
    description: 'Builds multi-agent AI systems and teaches others how to think about automation, workflows, and AI architecture. Focused on making complex technology accessible and useful.',
    accent: 'text-plum'
  },
  {
    name: 'Julian Kenney',
    role: 'Co-founder',
    description: 'Brings a strategic lens to technology and operations. Focused on helping businesses understand where AI fits into their growth and how to adopt it with confidence.',
    accent: 'text-teal'
  }
];

interface AcademyPageProps {
  onNavigate: (path: string) => void;
}

const AcademyPage: React.FC<AcademyPageProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className="pt-32 pb-24">
      {/* Page Header */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 mb-24 text-center">
        <h1 className="text-6xl md:text-8xl font-accent font-black mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          The Academy
        </h1>
        <div className="max-w-3xl mx-auto space-y-6 text-xl md:text-2xl text-charcoal/70 leading-relaxed animate-in fade-in duration-1000 delay-200">
          <p>
            Learn AI from people who build with it every day. Practical workshops, honest teaching, and skills you can use immediately.
          </p>
        </div>
      </header>

      {/* Featured Workshop */}
      <section className="py-24 bg-white/40 border-y border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-charcoal text-cream rounded-[60px] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-terracotta/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-honey/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-cream/50">Featured Workshop</span>
                  <span className="bg-terracotta text-cream text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {featuredWorkshop.status}
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-accent font-black mb-6">{featuredWorkshop.title}</h2>
                <p className="text-lg text-cream/70 leading-relaxed">
                  {featuredWorkshop.description}
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-white/10 rounded-3xl p-8 space-y-4">
                  <h4 className="font-accent font-bold text-lg text-honey">Workshop details</h4>
                  <div className="space-y-3">
                    {featuredWorkshop.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-honey mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-cream/70">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  className="w-full bg-cream text-charcoal px-8 py-4 rounded-full font-bold hover:bg-honey transition-all text-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
                >
                  Get notified when registration opens
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Courses */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-accent font-bold mb-4">Upcoming courses</h2>
          <div className="w-16 h-1 bg-terracotta rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <div
              key={i}
              className={`p-10 rounded-[40px] ${course.color} border ${course.borderColor} flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="mb-4">
                <span className={`text-xs font-bold uppercase tracking-widest text-${course.accent}`}>
                  {course.format}
                </span>
              </div>
              <h3 className="text-xl font-accent font-bold mb-4 leading-tight">{course.title}</h3>
              <p className="text-charcoal/70 leading-relaxed flex-grow">{course.description}</p>
              <div className="mt-8 pt-6 border-t border-charcoal/10">
                <span className="text-sm font-semibold text-charcoal/40 uppercase tracking-widest">Details coming soon</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Schedule Framework */}
      <section className="py-24 bg-white/40 border-y border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-accent font-bold mb-4">How the schedule works</h2>
            <div className="w-16 h-1 bg-honey rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-3xl font-accent font-black text-terracotta/40">01</span>
                <div className="h-[1px] flex-grow bg-charcoal/10"></div>
              </div>
              <h3 className="text-xl font-accent font-bold">Monthly workshops</h3>
              <p className="text-charcoal/70 leading-relaxed">Day or weekend sessions with rotating topics. Focused, practical, and designed to fit into a busy schedule.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-3xl font-accent font-black text-honey/40">02</span>
                <div className="h-[1px] flex-grow bg-charcoal/10"></div>
              </div>
              <h3 className="text-xl font-accent font-bold">Course series every other month</h3>
              <p className="text-charcoal/70 leading-relaxed">Structured multi-session learning for deeper topics. Starts the second week of the month.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-3xl font-accent font-black text-teal/40">03</span>
                <div className="h-[1px] flex-grow bg-charcoal/10"></div>
              </div>
              <h3 className="text-xl font-accent font-bold">Community-driven topics</h3>
              <p className="text-charcoal/70 leading-relaxed">New topics added regularly based on what our community wants to learn. You help shape what we teach next.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn With Us */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-accent font-bold mb-4">Why learn with us</h2>
          <div className="w-16 h-1 bg-teal rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {whyLearnWithUs.map((point, i) => (
            <div key={i} className="space-y-4">
              <h3 className={`text-xl font-accent font-bold ${point.accent}`}>{point.title}</h3>
              <p className="text-charcoal/70 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Instructors */}
      <section className="py-24 bg-charcoal text-cream rounded-[60px] mx-6 md:mx-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 400 400" aria-hidden="true">
            <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="2" strokeDasharray="10 20" fill="none" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-12 md:px-24">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-accent font-bold mb-4">Your instructors</h2>
            <p className="text-cream/50">The people behind the teaching.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {instructors.map((instructor, i) => (
              <div key={i} className="space-y-4">
                <div>
                  <h3 className={`text-2xl font-accent font-bold ${instructor.accent}`}>{instructor.name}</h3>
                  <p className="text-cream/50 text-sm font-semibold uppercase tracking-widest mt-1">{instructor.role}</p>
                </div>
                <p className="text-cream/70 leading-relaxed">{instructor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="pt-48 pb-12 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-accent font-black mb-6">
            Want to be notified about upcoming workshops?
          </h2>
          <p className="text-lg text-charcoal/70 mb-12 leading-relaxed">
            Drop your email and we will let you know when new workshops, courses, and learning opportunities open up. No spam. Just the good stuff.
          </p>

          {subscribed ? (
            <div className="bg-teal/10 border border-teal/20 rounded-[40px] p-12">
              <h3 className="text-2xl font-accent font-bold text-teal mb-4">You are on the list.</h3>
              <p className="text-charcoal/70">We will reach out when something new is coming. Thank you for your interest.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-grow bg-white rounded-full px-8 py-4 border border-charcoal/10 focus:ring-2 focus:ring-honey/50 outline-none transition-all text-lg"
              />
              <button
                type="submit"
                className="bg-charcoal text-cream px-8 py-4 rounded-full font-bold hover:bg-terracotta transition-all text-lg whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
              >
                Notify me
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default AcademyPage;
