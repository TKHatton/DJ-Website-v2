
import React from 'react';

const projects = [
  {
    title: 'A website that finally felt like home',
    summary: 'A thoughtful leader had outgrown their old website. The content was scattered. The brand no longer matched their voice. They wanted something calm, clear, and professional.',
    need: 'A site that built trust and gently guided visitors to work with them.',
    build: 'A warm, modern website with intuitive navigation and integrated scheduling. We created structured content sections, clear calls to action, and a layout that feels grounded.',
    help: 'Their site now represents their expertise and heart. Visitors understand what they do faster. More people inquire. Conversations start with confidence.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200',
    color: 'bg-teal/5',
    accent: 'text-teal'
  },
  {
    title: 'Turning an idea into working software',
    summary: 'A client had a brilliant concept. They wanted a simple SaaS tool people could log into and actually use. No noise. No complicated features.',
    need: 'A product that turned their idea into something real.',
    build: 'A lightweight web application with clean dashboards and guided workflows. Everything focused on clarity and ease.',
    help: 'They launched a product they are proud of. People sign up. Feedback is positive. The tool grows with them instead of stressing them.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    color: 'bg-honey/5',
    accent: 'text-honey'
  },
  {
    title: 'Automating what was stealing hours',
    summary: 'A business owner was spending too much time doing repetitive tasks. Copying data into spreadsheets. Chasing emails. Moving information manually.',
    need: 'Relief. A system that worked even when they were busy doing real work.',
    build: 'A series of calm, invisible automations connected across their tools. Everything now flows in the background.',
    help: 'They regained time, clarity, and energy. Fewer mistakes. More space to focus on meaningful work.',
    image: 'https://images.unsplash.com/photo-1518433278981-16758d60c9b0?auto=format&fit=crop&q=80&w=1200',
    color: 'bg-terracotta/5',
    accent: 'text-terracotta'
  },
  {
    title: 'A digital experience for a community',
    summary: 'A community group needed a central place to organize information. Members felt lost and overwhelmed with scattered links and messages.',
    need: 'One place. Clear information. Easy access.',
    build: 'A structured web hub with resources, sign-ups, and announcements. Friendly design. Gentle language. Supportive navigation.',
    help: 'Members feel guided and included. Leaders spend less time repeating instructions. Everything feels more connected.',
    image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140e2b8?auto=format&fit=crop&q=80&w=1200',
    color: 'bg-plum/5',
    accent: 'text-plum'
  }
];

interface OurWorkPageProps {
  onNavigate: (path: string) => void;
}

const OurWorkPage: React.FC<OurWorkPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24">
      <header className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <h1 className="text-6xl md:text-8xl font-accent font-black mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Our Work
        </h1>
        <p className="text-xl md:text-2xl text-charcoal/70 max-w-3xl leading-relaxed animate-in fade-in duration-1000 delay-200">
          Technology should feel like support. Here are some of the digital experiences we have designed and built to make work simpler, smoother, and more meaningful.
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">
        {projects.map((p, idx) => (
          <div key={idx} className="group animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Project Visual */}
              <div className="lg:col-span-7 relative">
                <div className={`absolute inset-0 ${p.color} rounded-[40px] translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6`}></div>
                <div className="overflow-hidden rounded-[40px] shadow-2xl border border-charcoal/5">
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Project Content */}
              <div className="lg:col-span-5 space-y-8">
                <h2 className="text-4xl md:text-5xl font-accent font-black leading-tight">
                  {p.title}
                </h2>
                
                <p className="text-lg text-charcoal/80 leading-relaxed italic">
                  {p.summary}
                </p>

                <div className="space-y-6 pt-4">
                  <div>
                    <h4 className={`text-xs uppercase tracking-widest font-bold ${p.accent} mb-2`}>What they needed</h4>
                    <p className="text-charcoal/70">{p.need}</p>
                  </div>
                  <div>
                    <h4 className={`text-xs uppercase tracking-widest font-bold ${p.accent} mb-2`}>What we built</h4>
                    <p className="text-charcoal/70">{p.build}</p>
                  </div>
                  <div>
                    <h4 className={`text-xs uppercase tracking-widest font-bold ${p.accent} mb-2`}>How it helped</h4>
                    <p className="text-charcoal/70">{p.help}</p>
                  </div>
                </div>

                <div className="pt-8">
                  <button className="text-sm font-bold flex items-center gap-2 group/btn">
                    View project
                    <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Subtle Divider */}
            {idx < projects.length - 1 && (
              <div className="mt-32 w-full h-[1px] bg-gradient-to-r from-transparent via-charcoal/10 to-transparent"></div>
            )}
          </div>
        ))}
      </section>

      <section className="mt-48 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <div className="bg-charcoal text-cream rounded-[60px] p-16 md:p-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-terracotta/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-accent font-black mb-8">We build with care.</h2>
            <p className="text-xl text-cream/70 mb-12 max-w-2xl mx-auto">
              Every project starts with listening. We learn what matters and design from there. If you have something in mind, we would love to explore it with you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button onClick={() => onNavigate('start')} className="bg-cream text-charcoal px-10 py-5 rounded-full font-bold hover:bg-honey transition-all text-lg">
                Start a project
              </button>
              <a href="mailto:info@digitaljaywalking.com" className="border border-cream/30 px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-all text-lg flex items-center justify-center">
                Tell us about your idea
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWorkPage;
