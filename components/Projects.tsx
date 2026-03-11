import React from 'react';

const projects = [
  {
    title: 'Automated client onboarding across six platforms',
    subtitle: 'Agent System Build for a Service Business',
    description:
      'A growing service company was spending hours onboarding each new client. We built a 5-agent system that handles intake forms, creates accounts, sends welcome emails, schedules kickoff calls, and updates the CRM. What took a full afternoon now takes 30 seconds.',
    tags: ['Architecture', 'Automation', 'Integration'],
    accentBg: 'bg-teal/5',
    accentText: 'text-teal',
    accentBorder: 'border-teal/20',
    decorBg: 'bg-teal/10',
  },
  {
    title: 'An AI content pipeline that maintains brand voice',
    subtitle: 'Agent Infrastructure for a Marketing Team',
    description:
      'A marketing team needed consistent content across four channels. We built an 8-agent system that drafts, reviews, schedules, and publishes content while enforcing brand guidelines at every step. The team reviews and approves. The agents handle the rest.',
    tags: ['Architecture', 'Content', 'Quality Control'],
    accentBg: 'bg-honey/5',
    accentText: 'text-honey',
    accentBorder: 'border-honey/20',
    decorBg: 'bg-honey/10',
  },
  {
    title: 'Workflow intelligence for a consulting firm',
    subtitle: 'Agent Starter for Operations',
    description:
      'A consulting firm was losing track of project status, deadlines, and client communications. We built a 3-agent system that monitors project timelines, sends proactive updates, and flags at-risk deliverables before they become problems.',
    tags: ['Architecture', 'Monitoring', 'Alerts'],
    accentBg: 'bg-plum/5',
    accentText: 'text-plum',
    accentBorder: 'border-plum/20',
    decorBg: 'bg-plum/10',
  },
];

const Projects: React.FC = () => {
  return (
    <section className="bg-cream py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-accent text-4xl md:text-5xl text-charcoal mb-4">
            Featured Work
          </h2>
          <p className="text-charcoal/70 text-lg max-w-2xl mx-auto">
            Real systems. Real results. Here are some of the agent architectures
            we have designed and built.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="relative group">
              {/* Decorative offset box */}
              <div
                aria-hidden="true"
                className={`absolute inset-0 ${project.decorBg} rounded-[40px] translate-x-4 translate-y-4 transition-transform duration-500 ease-out group-hover:translate-x-6 group-hover:translate-y-6`}
              />

              {/* Main card */}
              <div
                className={`relative ${project.accentBg} border ${project.accentBorder} rounded-[40px] p-8 md:p-12 transition-transform duration-500 ease-out`}
              >
                {/* Subtitle */}
                <p
                  className={`${project.accentText} text-sm font-semibold uppercase tracking-widest mb-3`}
                >
                  {project.subtitle}
                </p>

                {/* Title */}
                <h3 className="font-accent text-2xl md:text-3xl text-charcoal mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-charcoal/70 text-base md:text-lg leading-relaxed max-w-3xl mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`${project.accentText} ${project.accentBg} border ${project.accentBorder} text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
