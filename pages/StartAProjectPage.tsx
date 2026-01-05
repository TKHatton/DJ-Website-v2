
import React, { useState } from 'react';

interface StartAProjectPageProps {
  onNavigate: (path: string) => void;
}

const StartAProjectPage: React.FC<StartAProjectPageProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="pt-48 pb-24 max-w-7xl mx-auto px-6 md:px-12 text-center h-[80vh] flex flex-col justify-center">
        <div className="bg-white p-12 md:p-24 rounded-[60px] shadow-2xl border border-charcoal/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-honey/10 rounded-full blur-3xl"></div>
          <h2 className="text-4xl md:text-6xl font-accent font-black mb-8">Talk soon.</h2>
          <p className="text-xl text-charcoal/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Thank you for sharing your vision with us. We have received your project details and will review them with care. You can expect to hear from us within a short window to schedule our first conversation.
          </p>
          <button 
            onClick={() => onNavigate('home')}
            className="bg-charcoal text-cream px-10 py-5 rounded-full font-bold hover:bg-terracotta transition-all text-lg"
          >
            Back to home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <header className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <h1 className="text-6xl md:text-8xl font-accent font-black mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Start a Project
        </h1>
        <div className="max-w-3xl space-y-6 text-xl md:text-2xl text-charcoal/70 leading-relaxed animate-in fade-in duration-1000 delay-200">
          <p>You have an idea worth building. We are here to help shape it into something beautiful, functional, and real.</p>
          <p className="text-lg">Take a few minutes to share a bit about what you are creating. We will review everything with care and follow up with next steps.</p>
        </div>
      </header>

      {/* Expectation Section */}
      <section className="py-24 bg-white/40 border-y border-charcoal/5 mb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-accent font-bold mb-4">What to expect</h2>
            <p className="text-charcoal/50">What happens after you submit.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: '01', text: 'We read through your project and make sure we understand your goals.' },
              { num: '02', text: 'We invite you to a short conversation to explore possibilities.' },
              { num: '03', text: 'We share recommendations, options, and a clear plan forward.' }
            ].map((s, i) => (
              <div key={i} className="flex gap-6 items-start">
                <span className="text-3xl font-accent font-black text-terracotta/40">{s.num}</span>
                <p className="text-lg text-charcoal/80 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap gap-8 text-charcoal/40 text-sm font-semibold uppercase tracking-widest">
            <span>No pressure.</span>
            <span>No confusing tech talk.</span>
            <span>Just clarity, alignment, and thoughtful guidance.</span>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-4xl font-accent font-black mb-6">Tell us about your project.</h2>
          <p className="text-charcoal/60 text-lg italic">
            You do not need perfect answers. Simple and honest is enough. We will figure out the details together.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-16">
          {/* Your information */}
          <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-charcoal/5 space-y-8">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-terracotta">Your information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-charcoal/60">Name</label>
                <input required type="text" className="w-full bg-cream rounded-2xl px-6 py-4 border-none focus:ring-2 focus:ring-honey/50 outline-none transition-all" placeholder="How should we address you?" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-charcoal/60">Email</label>
                <input required type="email" className="w-full bg-cream rounded-2xl px-6 py-4 border-none focus:ring-2 focus:ring-honey/50 outline-none transition-all" placeholder="Where can we reach you?" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-semibold text-charcoal/60">Organization or brand (optional)</label>
                <input type="text" className="w-full bg-cream rounded-2xl px-6 py-4 border-none focus:ring-2 focus:ring-honey/50 outline-none transition-all" placeholder="What are you building for?" />
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-charcoal/5 space-y-8">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-teal">What are you hoping to create</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Website', 'SaaS or Web App', 'Automation or Workflow System', 'AI Tool or Integration', 'Something else I am still shaping'].map((type, i) => (
                <label key={i} className="flex items-center gap-4 bg-cream p-4 rounded-2xl cursor-pointer hover:bg-teal/5 transition-colors group">
                  <input type="checkbox" className="w-5 h-5 rounded border-charcoal/10 text-teal focus:ring-teal" />
                  <span className="text-sm font-medium text-charcoal/80 group-hover:text-teal">{type}</span>
                </label>
              ))}
            </div>
            
            <div className="space-y-4 pt-4">
              <label className="text-sm font-semibold text-charcoal/60">Describe your idea in your own words</label>
              <textarea 
                required
                className="w-full bg-cream rounded-2xl px-6 py-4 border-none focus:ring-2 focus:ring-teal/30 outline-none transition-all min-h-[160px]" 
                placeholder="Share the vision, the problem, or the hope behind this project."
              ></textarea>
            </div>
          </div>

          {/* Logistics */}
          <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-charcoal/5 space-y-12">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-plum mb-8">Context and Timeline</h3>
              
              <div className="space-y-6">
                <p className="text-sm font-semibold text-charcoal/60">What feels hardest right now?</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'I feel overwhelmed and need clarity',
                    'I know what I want but do not know how to build it',
                    'I want a system that saves time',
                    'I want my brand to look more professional',
                    'I am building something bigger and need long-term support',
                    'Other'
                  ].map((opt, i) => (
                    <label key={i} className="flex items-center gap-4 bg-cream p-4 rounded-2xl cursor-pointer hover:bg-plum/5 transition-colors group">
                      <input type="radio" name="hardest" className="w-5 h-5 rounded-full border-charcoal/10 text-plum focus:ring-plum" />
                      <span className="text-sm font-medium text-charcoal/80 group-hover:text-plum">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-sm font-semibold text-charcoal/60">Ideal timeline</p>
                {['As soon as possible', 'Within 1 to 3 months', 'Within 3 to 6 months', 'I am flexible'].map((opt, i) => (
                  <label key={i} className="flex items-center gap-4 cursor-pointer group">
                    <input type="radio" name="timeline" className="w-4 h-4 text-charcoal focus:ring-charcoal" />
                    <span className="text-sm text-charcoal/70 group-hover:text-charcoal">{opt}</span>
                  </label>
                ))}
              </div>

              <div className="space-y-6">
                <p className="text-sm font-semibold text-charcoal/60">Investment comfort</p>
                <p className="text-xs text-charcoal/40 -mt-4">This is not a final quote. It only helps guide the conversation.</p>
                {[
                  'I am exploring possibilities right now',
                  'I have a modest budget and want to be thoughtful',
                  'I am ready to invest in something strong and sustainable',
                  'I am building a larger system over time'
                ].map((opt, i) => (
                  <label key={i} className="flex items-center gap-4 cursor-pointer group">
                    <input type="radio" name="budget" className="w-4 h-4 text-charcoal focus:ring-charcoal" />
                    <span className="text-sm text-charcoal/70 group-hover:text-charcoal">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <label className="text-sm font-semibold text-charcoal/60">Anything else you want us to know</label>
              <textarea 
                className="w-full bg-cream rounded-2xl px-6 py-4 border-none focus:ring-2 focus:ring-plum/30 outline-none transition-all min-h-[120px]" 
                placeholder="Feel free to share context, dreams, or even worries. Everything helps."
              ></textarea>
            </div>
          </div>

          {/* Submit */}
          <div className="pt-12 text-center space-y-8">
            <button 
              type="submit"
              className="bg-charcoal text-cream px-12 py-6 rounded-full font-black hover:bg-terracotta transition-all text-xl shadow-2xl hover:shadow-terracotta/20 inline-flex items-center gap-4"
            >
              Submit your project
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <p className="text-charcoal/40 text-sm">Have questions instead? <a href="mailto:info@digitaljaywalking.com" className="text-charcoal font-bold underline hover:text-terracotta">Contact us at info@digitaljaywalking.com</a></p>
          </div>
        </form>
      </section>

      {/* Reassurance Section */}
      <section className="mt-48 py-24 bg-charcoal text-cream rounded-[60px] mx-6 md:mx-12 overflow-hidden relative">
        <div className="absolute bottom-0 left-0 p-12 opacity-5 pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 400 400">
            <path d="M0 400 Q 200 0 400 400" stroke="white" fill="none" strokeWidth="1" strokeDasharray="5 10" />
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-accent font-bold mb-8">We treat every project with care.</h2>
          <div className="space-y-6 text-xl text-cream/70 leading-relaxed">
            <p>You are trusting us with something meaningful. We respect that deeply.</p>
            <p>We believe in transparent communication, realistic timelines, and designing tools that feel supportive instead of stressful. You will always know what is happening, why it matters, and how it benefits you.</p>
          </div>
        </div>
      </section>

      <section className="pt-48 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-accent font-black mb-8 italic">
          We are excited to learn about what you are building.
        </h2>
        <p className="text-lg text-charcoal/60 mb-12">
          Together, we will turn your idea into a digital experience that feels clear, calm, and powerful.
        </p>
      </section>
    </div>
  );
};

export default StartAProjectPage;
