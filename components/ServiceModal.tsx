
import React, { useEffect } from 'react';

interface ServiceContent {
  title: string;
  subtitle: string;
  intro: string;
  focusTitle: string;
  focusItems: string[];
  includeTitle: string;
  includeItems: string[];
  result: string;
  accentColor: string;
}

const serviceData: Record<string, ServiceContent> = {
  websites: {
    title: "Websites",
    subtitle: "A website that feels like home.",
    intro: "Your website should build trust, guide people clearly, and reflect who you truly are. We design calm, modern sites that help visitors understand what you do and how to work with you.",
    focusTitle: "What we focus on",
    focusItems: ["simple navigation", "clean layouts", "clear calls to action", "consistent visual identity"],
    includeTitle: "What this can include",
    includeItems: ["service pages", "landing pages", "booking and forms", "email and CRM integrations"],
    result: "A website that feels grounded, looks professional, and invites people in.",
    accentColor: "text-terracotta"
  },
  saas: {
    title: "SaaS and Web Apps",
    subtitle: "Turn your idea into a working product.",
    intro: "If you have a tool, concept, or system in your head, we help turn it into real software people can actually use. We prioritize clarity, stability, and thoughtful user experience.",
    focusTitle: "What we build",
    focusItems: ["dashboards", "user accounts and authentication", "data-driven features", "simple onboarding flows"],
    includeTitle: "Who this is for",
    includeItems: ["founders", "coaches wanting productized tools", "businesses creating internal tools"],
    result: "Software that feels intuitive instead of overwhelming.",
    accentColor: "text-honey"
  },
  automations: {
    title: "Automations",
    subtitle: "Quiet systems that run in the background.",
    intro: "Manual tasks drain energy and time. We design automations that move information for you, keep things updated, and remove repetitive work.",
    focusTitle: "What we automate",
    focusItems: ["email workflows", "form-to-database syncing", "reminders and notifications", "data transfers between tools"],
    includeTitle: "Why it matters",
    includeItems: ["Less busy work", "Fewer mistakes", "More space for real work and rest"],
    result: "A smoother business that works while you focus on what matters.",
    accentColor: "text-teal"
  },
  ai: {
    title: "AI-Powered Tools",
    subtitle: "AI that supports, not overwhelms.",
    intro: "We build and integrate AI tools that genuinely help, without replacing your voice or removing control.",
    focusTitle: "What we create",
    focusItems: ["AI assistants for specific workflows", "content helpers", "summarizers and analyzers", "AI-driven automations"],
    includeTitle: "Our philosophy",
    includeItems: ["AI should feel like support", "Not noise", "Not pressure", "Not confusion"],
    result: "You work smarter, with clarity and confidence.",
    accentColor: "text-plum"
  }
};

interface ServiceModalProps {
  serviceId: string;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ serviceId, onClose, onNavigate }) => {
  const content = serviceData[serviceId];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!content) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-cream w-full max-w-3xl rounded-[40px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-charcoal/40 hover:text-charcoal transition-colors p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 md:p-16 overflow-y-auto max-h-[85vh] scrollbar-hide">
          <header className="mb-12">
            <span className={`text-xs font-bold uppercase tracking-widest ${content.accentColor} mb-4 block`}>
              {content.title}
            </span>
            <h2 className="text-4xl md:text-5xl font-accent font-black mb-6 leading-tight">
              {content.subtitle}
            </h2>
            <p className="text-xl text-charcoal/70 leading-relaxed">
              {content.intro}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className={`w-1.5 h-1.5 rounded-full ${content.accentColor.replace('text-', 'bg-')}`}></div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-charcoal/40">{content.focusTitle}</h4>
              </div>
              <ul className="space-y-4">
                {content.focusItems.map((item, i) => (
                  <li key={i} className="text-charcoal/80 flex items-start gap-2">
                    <span className={`${content.accentColor} font-bold`}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className={`w-1.5 h-1.5 rounded-full ${content.accentColor.replace('text-', 'bg-')}`}></div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-charcoal/40">{content.includeTitle}</h4>
              </div>
              <ul className="space-y-4">
                {content.includeItems.map((item, i) => (
                  <li key={i} className="text-charcoal/80 flex items-start gap-2">
                    <span className={`${content.accentColor} font-bold`}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-charcoal/5 rounded-3xl p-8 mb-12">
            <h4 className="text-sm font-bold uppercase tracking-widest text-charcoal/30 mb-4">Result</h4>
            <p className="text-xl font-accent italic text-charcoal/90">
              {content.result}
            </p>
          </div>

          <button 
            onClick={() => {
              onClose();
              onNavigate('start');
            }}
            className="group flex items-center gap-4 text-lg font-black text-charcoal hover:text-terracotta transition-colors"
          >
            <span className="text-2xl">👉</span>
            <span className="underline underline-offset-8 decoration-2 decoration-charcoal/10 group-hover:decoration-terracotta/30">Start a project</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
