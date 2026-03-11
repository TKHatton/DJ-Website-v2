import React from 'react';

const keyPoints = [
  'Thoughtful architecture before a single line of code is written',
  'Systems designed around how your business actually works',
  'Clean interfaces so your team never touches the complexity',
  'Transparent communication at every step of the build',
  'Support that continues long after the system goes live',
];

const WhyUs: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-charcoal text-cream overflow-hidden relative">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 p-24 opacity-10" aria-hidden="true">
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="250" stroke="white" strokeWidth="1" strokeDasharray="10 10" />
          <circle cx="300" cy="300" r="200" stroke="white" strokeWidth="1" />
          <circle cx="300" cy="300" r="140" stroke="white" strokeWidth="1" strokeDasharray="4 8" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-honey font-semibold tracking-widest uppercase text-sm mb-4 block">
              Our DNA
            </span>
            <h2 className="text-4xl md:text-6xl font-accent font-black mb-8 leading-tight">
              We help you cross the digital street differently.
            </h2>
            <p className="text-xl text-cream/70 mb-10 leading-relaxed max-w-xl">
              Digital Jaywalking was built for businesses that want powerful AI
              systems without the complexity and chaos that usually come with
              them. We believe great technology should feel calm.
            </p>

            <ul className="space-y-6">
              {keyPoints.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-terracotta flex-shrink-0" aria-hidden="true"></div>
                  <span className="text-lg text-cream/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Philosophy Box */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12 rounded-[40px]">
            <h3 className="text-3xl font-accent font-bold mb-6">The Philosophy</h3>
            <p className="text-lg text-cream/80 mb-8 italic">
              "We do not build cookie-cutter automations. Every agent system is
              architected for you."
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-terracotta/10 rounded-2xl">
                <h4 className="font-bold text-terracotta mb-2">Human First</h4>
                <p className="text-sm text-cream/60">
                  Technology serving people, not the other way around.
                </p>
              </div>
              <div className="p-6 bg-honey/10 rounded-2xl">
                <h4 className="font-bold text-honey mb-2">Smart Work</h4>
                <p className="text-sm text-cream/60">
                  Finding the shortest path to quality results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
