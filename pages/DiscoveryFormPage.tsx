import React, { useState } from 'react';

interface DiscoveryFormPageProps {
  onNavigate: (path: string) => void;
}

interface DiscoveryFormData {
  // Contact
  name: string;
  email: string;
  company: string;
  role: string;

  // The Problem
  workflowDescription: string;
  painPoints: string;
  frequency: string;
  currentFailures: string;

  // Tools & Data
  currentTools: string[];
  otherTools: string;
  dataLocation: string;
  existingIntegrations: string;

  // Human Judgment
  humanDecisions: string;
  neverAutomate: string;

  // Success
  successLooksLike: string;
  currentTimeSpent: string;
  targetMetrics: string;

  // Constraints
  compliance: string;
  approvalProcess: string;
  previousAttempts: string;
  concerns: string;

  // Timeline
  deadline: string;
  priority: string;

  // Additional
  anythingElse: string;
  videoUrl: string;

  // Honeypot (spam prevention - should remain empty)
  website: string;
}

const toolOptions = [
  'Google Workspace (Docs, Sheets, Gmail)',
  'Microsoft 365 (Outlook, Excel, Teams)',
  'Slack',
  'Notion',
  'Airtable',
  'HubSpot',
  'Salesforce',
  'QuickBooks or accounting software',
  'Project management (Asana, Monday, etc.)',
  'Custom internal tools',
];

const frequencyOptions = [
  'Multiple times per day',
  'Daily',
  'A few times per week',
  'Weekly',
  'Monthly or less',
];

const timeSpentOptions = [
  'Less than 1 hour per week',
  '1 to 5 hours per week',
  '5 to 10 hours per week',
  '10 to 20 hours per week',
  'More than 20 hours per week',
];

const deadlineOptions = [
  'As soon as possible',
  'Within 1 month',
  'Within 3 months',
  'Within 6 months',
  'No specific deadline',
];

const DiscoveryFormPage: React.FC<DiscoveryFormPageProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [currentSection, setCurrentSection] = useState(0);

  const [formData, setFormData] = useState<DiscoveryFormData>({
    name: '',
    email: '',
    company: '',
    role: '',
    workflowDescription: '',
    painPoints: '',
    frequency: '',
    currentFailures: '',
    currentTools: [],
    otherTools: '',
    dataLocation: '',
    existingIntegrations: '',
    humanDecisions: '',
    neverAutomate: '',
    successLooksLike: '',
    currentTimeSpent: '',
    targetMetrics: '',
    compliance: '',
    approvalProcess: '',
    previousAttempts: '',
    concerns: '',
    deadline: '',
    priority: '',
    anythingElse: '',
    videoUrl: '',
    website: '', // Honeypot - should stay empty
  });

  const sections = [
    { id: 'contact', title: 'About You', icon: '01' },
    { id: 'problem', title: 'The Process', icon: '02' },
    { id: 'tools', title: 'Your Tools', icon: '03' },
    { id: 'judgment', title: 'Human vs. Automated', icon: '04' },
    { id: 'success', title: 'What Success Looks Like', icon: '05' },
    { id: 'constraints', title: 'Context', icon: '06' },
    { id: 'timeline', title: 'Timeline & Priority', icon: '07' },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleToolsChange = (tool: string) => {
    setFormData((prev) => ({
      ...prev,
      currentTools: prev.currentTools.includes(tool)
        ? prev.currentTools.filter((t) => t !== tool)
        : [...prev.currentTools, tool],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    // Honeypot check - if filled, silently "succeed" (it's a bot)
    if (formData.website) {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Fake delay
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    try {
      // Don't send honeypot field to server
      const { website, ...submitData } = formData;

      const response = await fetch('/api/submit-discovery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Something went wrong');
      }

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : 'Failed to submit. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (submitted) {
    return (
      <section className="bg-cream min-h-screen py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-teal/5 to-plum/5 border border-teal/20 rounded-[40px] p-12 md:p-16">
            <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-accent text-4xl md:text-5xl text-charcoal mb-6">
              Got it, {formData.name.split(' ')[0]}.
            </h1>
            <p className="text-charcoal/70 text-lg leading-relaxed mb-4">
              Your Build Brief has been received. This gives us a clear picture of what you are working with and what you want to achieve.
            </p>
            <p className="text-charcoal/70 text-lg leading-relaxed mb-10">
              We will review everything before our call so we can skip the basics and jump straight into solutions.
            </p>
            <button
              onClick={() => onNavigate('home')}
              className="bg-charcoal text-cream font-semibold px-8 py-3.5 rounded-full hover:bg-terracotta transition-colors duration-300"
            >
              Back to home
            </button>
          </div>
        </div>
      </section>
    );
  }

  const inputClasses = "w-full bg-white border border-charcoal/15 rounded-2xl px-5 py-3.5 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta transition-all";
  const labelClasses = "block text-charcoal text-sm font-semibold mb-2";
  const textareaClasses = `${inputClasses} resize-y min-h-[120px]`;
  const selectClasses = `${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%231A1A1A" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>')] bg-no-repeat bg-[length:20px] bg-[right_16px_center]`;

  return (
    <section className="bg-cream min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-charcoal to-charcoal/95 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-terracotta font-semibold text-sm tracking-wider uppercase mb-4">
            Build Brief
          </p>
          <h1 className="font-accent text-4xl md:text-5xl text-cream mb-4">
            Describe What You Want to Build
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            This helps us understand your project before we talk. No technical knowledge needed.
            Just describe what you are dealing with and what you wish was different.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-cream/50 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Takes about 10 minutes
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              No account needed
            </span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="sticky top-0 bg-cream/95 backdrop-blur-sm border-b border-charcoal/10 py-4 px-6 z-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-charcoal/60">Section {currentSection + 1} of {sections.length}</span>
            <span className="text-sm font-semibold text-charcoal">{sections[currentSection].title}</span>
          </div>
          <div className="h-1.5 bg-charcoal/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-terracotta to-honey rounded-full transition-all duration-500"
              style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="py-12 px-6 md:px-12 lg:px-20">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto" aria-label="Build Brief form">

          {/* Honeypot field - hidden from users, catches bots */}
          <div className="absolute opacity-0 pointer-events-none" aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
            <label htmlFor="website">Website (leave blank)</label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Section 0: Contact */}
          {currentSection === 0 && (
            <div className="space-y-8 animate-reveal">
              <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-charcoal/5">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-terracotta/10 rounded-2xl flex items-center justify-center">
                    <span className="text-terracotta font-bold">01</span>
                  </div>
                  <div>
                    <h2 className="font-accent text-2xl text-charcoal">Your Information</h2>
                    <p className="text-charcoal/60 text-sm">So we know who we are talking to</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={labelClasses}>
                      Name <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClasses}>
                      Email <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className={labelClasses}>
                      Company or Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder="Where you work"
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className={labelClasses}>
                      Your Role
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder="What you do there"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section 1: The Process */}
          {currentSection === 1 && (
            <div className="space-y-8 animate-reveal">
              <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-charcoal/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-teal/10 rounded-2xl flex items-center justify-center">
                    <span className="text-teal font-bold">02</span>
                  </div>
                  <div>
                    <h2 className="font-accent text-2xl text-charcoal">The Process You Want to Fix</h2>
                    <p className="text-charcoal/60 text-sm">Describe it like you are explaining it to a friend</p>
                  </div>
                </div>

                {/* Helpful context box */}
                <div className="bg-teal/5 border border-teal/10 rounded-2xl p-5 mb-8">
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    <strong className="text-charcoal">Tip:</strong> Don't worry about using the "right" words.
                    Just tell us what happens today, step by step. We will figure out the technical parts together.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="workflowDescription" className={labelClasses}>
                      Walk us through the process <span className="text-terracotta">*</span>
                    </label>
                    <p className="text-charcoal/50 text-sm mb-3">Start from the beginning: What kicks it off? What happens next? Where does it end up?</p>
                    <textarea
                      id="workflowDescription"
                      name="workflowDescription"
                      required
                      value={formData.workflowDescription}
                      onChange={handleInputChange}
                      className={textareaClasses}
                      placeholder="Example: When someone fills out our contact form, I get an email. Then I have to manually copy their info into our spreadsheet, send them a welcome email, and remember to follow up in a few days..."
                    />
                  </div>

                  <div>
                    <label htmlFor="painPoints" className={labelClasses}>
                      What is frustrating about it?
                    </label>
                    <p className="text-charcoal/50 text-sm mb-3">Where does it slow down? What gets forgotten? What makes you think "there has to be a better way"?</p>
                    <textarea
                      id="painPoints"
                      name="painPoints"
                      value={formData.painPoints}
                      onChange={handleInputChange}
                      className={textareaClasses}
                      placeholder="Things fall through the cracks, it takes too long, I keep making the same mistakes, my team is confused about who does what..."
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="frequency" className={labelClasses}>
                        How often does this happen?
                      </label>
                      <p className="text-charcoal/50 text-sm mb-3">Helps us understand the scale</p>
                      <select
                        id="frequency"
                        name="frequency"
                        value={formData.frequency}
                        onChange={handleInputChange}
                        className={selectClasses}
                      >
                        <option value="">Select frequency</option>
                        {frequencyOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="currentFailures" className={labelClasses}>
                        What breaks when it goes wrong?
                      </label>
                      <input
                        type="text"
                        id="currentFailures"
                        name="currentFailures"
                        value={formData.currentFailures}
                        onChange={handleInputChange}
                        className={inputClasses}
                        placeholder="Missed deadlines, lost leads, manual cleanup..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section 2: Tools & Data */}
          {currentSection === 2 && (
            <div className="space-y-8 animate-reveal">
              <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-charcoal/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-honey/20 rounded-2xl flex items-center justify-center">
                    <span className="text-honey font-bold">03</span>
                  </div>
                  <div>
                    <h2 className="font-accent text-2xl text-charcoal">What You Already Use</h2>
                    <p className="text-charcoal/60 text-sm">So we know what we are working with</p>
                  </div>
                </div>

                <div className="bg-honey/10 border border-honey/20 rounded-2xl p-5 mb-8">
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    <strong className="text-charcoal">Why we ask:</strong> Knowing your current tools helps us design something that connects to what you already have, not something that requires you to start over.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className={labelClasses}>
                      Check any tools you use regularly
                    </label>
                    <p className="text-charcoal/50 text-sm mb-3">Select all that apply. It is okay if none of these fit.</p>
                    <div className="grid sm:grid-cols-2 gap-3 mt-3">
                      {toolOptions.map((tool) => (
                        <label
                          key={tool}
                          className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            formData.currentTools.includes(tool)
                              ? 'border-terracotta bg-terracotta/5'
                              : 'border-charcoal/10 hover:border-charcoal/20'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.currentTools.includes(tool)}
                            onChange={() => handleToolsChange(tool)}
                            className="w-5 h-5 rounded border-charcoal/20 text-terracotta accent-terracotta"
                          />
                          <span className="text-charcoal/80 text-sm">{tool}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="otherTools" className={labelClasses}>
                      Other tools not listed above
                    </label>
                    <input
                      type="text"
                      id="otherTools"
                      name="otherTools"
                      value={formData.otherTools}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder="Any other software, apps, or systems you use"
                    />
                  </div>

                  <div>
                    <label htmlFor="dataLocation" className={labelClasses}>
                      Where does your data live?
                    </label>
                    <textarea
                      id="dataLocation"
                      name="dataLocation"
                      value={formData.dataLocation}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder="Is it centralized or scattered? Spreadsheets, databases, multiple apps?"
                    />
                  </div>

                  <div>
                    <label htmlFor="existingIntegrations" className={labelClasses}>
                      Do you have any existing integrations or automations?
                    </label>
                    <input
                      type="text"
                      id="existingIntegrations"
                      name="existingIntegrations"
                      value={formData.existingIntegrations}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder="Zapier, Make, custom scripts, API connections..."
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section 3: Human Judgment */}
          {currentSection === 3 && (
            <div className="space-y-8 animate-reveal">
              <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-charcoal/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-plum/10 rounded-2xl flex items-center justify-center">
                    <span className="text-plum font-bold">04</span>
                  </div>
                  <div>
                    <h2 className="font-accent text-2xl text-charcoal">What Should Stay Human</h2>
                    <p className="text-charcoal/60 text-sm">Automation works best when humans stay in control of what matters</p>
                  </div>
                </div>

                <div className="bg-plum/5 rounded-2xl p-6 mb-8 border border-plum/10">
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    <strong className="text-charcoal">This is important:</strong> Good automation handles the repetitive stuff so you can focus on decisions that actually need your brain. We want to know where you need to stay in the loop.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="humanDecisions" className={labelClasses}>
                      Where do you need to make a call or give approval?
                    </label>
                    <p className="text-charcoal/50 text-sm mb-3">Approvals, quality checks, customer responses, anything you want to see before it happens</p>
                    <textarea
                      id="humanDecisions"
                      name="humanDecisions"
                      value={formData.humanDecisions}
                      onChange={handleInputChange}
                      className={textareaClasses}
                      placeholder="Example: I need to approve any email that goes to a client. I want to review proposals before they get sent. Edge cases should come to me..."
                    />
                  </div>

                  <div>
                    <label htmlFor="neverAutomate" className={labelClasses}>
                      Is there anything you would never want automated?
                    </label>
                    <p className="text-charcoal/50 text-sm mb-3">Some things are better left to humans. What are yours?</p>
                    <textarea
                      id="neverAutomate"
                      name="neverAutomate"
                      value={formData.neverAutomate}
                      onChange={handleInputChange}
                      className={textareaClasses}
                      placeholder="Example: Final pricing decisions, hiring, anything involving sensitive client data..."
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section 4: Success */}
          {currentSection === 4 && (
            <div className="space-y-8 animate-reveal">
              <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-charcoal/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-teal/10 rounded-2xl flex items-center justify-center">
                    <span className="text-teal font-bold">05</span>
                  </div>
                  <div>
                    <h2 className="font-accent text-2xl text-charcoal">What Does Success Look Like?</h2>
                    <p className="text-charcoal/60 text-sm">Help us understand your vision</p>
                  </div>
                </div>

                <div className="bg-teal/5 border border-teal/10 rounded-2xl p-5 mb-8">
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    <strong className="text-charcoal">Paint the picture:</strong> Imagine it is three months from now and this is working exactly how you want. What is different about your day?
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="successLooksLike" className={labelClasses}>
                      Describe your ideal outcome <span className="text-terracotta">*</span>
                    </label>
                    <p className="text-charcoal/50 text-sm mb-3">Be specific. "It just works" is a feeling, not a goal. What exactly is happening?</p>
                    <textarea
                      id="successLooksLike"
                      name="successLooksLike"
                      required
                      value={formData.successLooksLike}
                      onChange={handleInputChange}
                      className={textareaClasses}
                      placeholder="Example: Leads get into our CRM within minutes instead of hours. I do not have to remind anyone to follow up. I can see at a glance which deals are moving and which are stuck..."
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="currentTimeSpent" className={labelClasses}>
                        How much time does this take you now?
                      </label>
                      <p className="text-charcoal/50 text-sm mb-3">Your best estimate is fine</p>
                      <select
                        id="currentTimeSpent"
                        name="currentTimeSpent"
                        value={formData.currentTimeSpent}
                        onChange={handleInputChange}
                        className={selectClasses}
                      >
                        <option value="">Select time spent</option>
                        {timeSpentOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="targetMetrics" className={labelClasses}>
                        Any numbers you are tracking?
                      </label>
                      <p className="text-charcoal/50 text-sm mb-3">Optional, but helpful</p>
                      <input
                        type="text"
                        id="targetMetrics"
                        name="targetMetrics"
                        value={formData.targetMetrics}
                        onChange={handleInputChange}
                        className={inputClasses}
                        placeholder="Response time, conversion rate, deals closed..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section 5: Constraints */}
          {currentSection === 5 && (
            <div className="space-y-8 animate-reveal">
              <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-charcoal/5">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-terracotta/10 rounded-2xl flex items-center justify-center">
                    <span className="text-terracotta font-bold">06</span>
                  </div>
                  <div>
                    <h2 className="font-accent text-2xl text-charcoal">Constraints & Context</h2>
                    <p className="text-charcoal/60 text-sm">Anything we should know about</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="compliance" className={labelClasses}>
                      Are there any compliance or security requirements?
                    </label>
                    <input
                      type="text"
                      id="compliance"
                      name="compliance"
                      value={formData.compliance}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder="HIPAA, SOC2, data residency, industry regulations..."
                    />
                  </div>

                  <div>
                    <label htmlFor="approvalProcess" className={labelClasses}>
                      Who needs to approve new tools or systems?
                    </label>
                    <input
                      type="text"
                      id="approvalProcess"
                      name="approvalProcess"
                      value={formData.approvalProcess}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder="Just you, your team lead, IT department, legal..."
                    />
                  </div>

                  <div>
                    <label htmlFor="previousAttempts" className={labelClasses}>
                      Have you tried to solve this before? What happened?
                    </label>
                    <textarea
                      id="previousAttempts"
                      name="previousAttempts"
                      value={formData.previousAttempts}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder="Other tools, consultants, internal projects..."
                    />
                  </div>

                  <div>
                    <label htmlFor="concerns" className={labelClasses}>
                      Any concerns or hesitations about automation?
                    </label>
                    <textarea
                      id="concerns"
                      name="concerns"
                      value={formData.concerns}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder="Team adoption, reliability, cost, complexity..."
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section 6: Timeline */}
          {currentSection === 6 && (
            <div className="space-y-8 animate-reveal">
              <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-charcoal/5">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-honey/20 rounded-2xl flex items-center justify-center">
                    <span className="text-honey font-bold">07</span>
                  </div>
                  <div>
                    <h2 className="font-accent text-2xl text-charcoal">Timeline & Priority</h2>
                    <p className="text-charcoal/60 text-sm">When and what matters most</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="deadline" className={labelClasses}>
                      When do you need this working by?
                    </label>
                    <select
                      id="deadline"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleInputChange}
                      className={selectClasses}
                    >
                      <option value="">Select timeline</option>
                      {deadlineOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="priority" className={labelClasses}>
                      If we could only solve one piece of this, what matters most?
                    </label>
                    <textarea
                      id="priority"
                      name="priority"
                      value={formData.priority}
                      onChange={handleInputChange}
                      className={textareaClasses}
                      placeholder="What is the single biggest pain point or the most valuable thing to fix first?"
                    />
                  </div>

                  <div>
                    <label htmlFor="anythingElse" className={labelClasses}>
                      Anything else you want us to know?
                    </label>
                    <textarea
                      id="anythingElse"
                      name="anythingElse"
                      value={formData.anythingElse}
                      onChange={handleInputChange}
                      className={textareaClasses}
                      placeholder="Context, goals, concerns, questions... anything that helps us understand your situation better."
                    />
                  </div>

                  {/* Video walkthrough option */}
                  <div className="bg-plum/5 border border-plum/10 rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-plum/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-plum" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <label htmlFor="videoUrl" className={labelClasses}>
                          Want to show us instead of type it?
                        </label>
                        <p className="text-charcoal/50 text-sm mb-3">
                          Record a quick Loom, screen recording, or video walkthrough and paste the link here.
                          Sometimes it is easier to show than explain.
                        </p>
                        <input
                          type="url"
                          id="videoUrl"
                          name="videoUrl"
                          value={formData.videoUrl}
                          onChange={handleInputChange}
                          className={inputClasses}
                          placeholder="https://www.loom.com/share/... or any video link"
                          aria-describedby="videoUrl-hint"
                        />
                        <p id="videoUrl-hint" className="text-charcoal/40 text-xs mt-2">
                          Optional. We will watch it before our call.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Final note */}
              <div className="bg-gradient-to-br from-teal/5 to-plum/5 rounded-[32px] p-8 border border-teal/10">
                <p className="text-charcoal/70 text-center leading-relaxed">
                  Thank you for taking the time to share this. Your answers help us come to our call prepared with real ideas instead of generic questions.
                </p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10 pt-8 border-t border-charcoal/10">
            <button
              type="button"
              onClick={prevSection}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                currentSection === 0
                  ? 'text-charcoal/30 cursor-not-allowed'
                  : 'text-charcoal hover:bg-charcoal/5'
              }`}
              disabled={currentSection === 0}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>

            {submitError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-xl text-sm">
                {submitError}
              </div>
            )}

            {currentSection < sections.length - 1 ? (
              <button
                type="button"
                onClick={nextSection}
                className="flex items-center gap-2 bg-charcoal text-cream px-6 py-3 rounded-full font-semibold hover:bg-terracotta transition-colors"
              >
                Next
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 bg-terracotta text-cream px-8 py-3 rounded-full font-semibold hover:bg-terracotta/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </>
                )}
              </button>
            )}
          </div>

          {/* Section dots */}
          <div className="flex justify-center gap-2 mt-8">
            {sections.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSection(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentSection
                    ? 'bg-terracotta w-8'
                    : index < currentSection
                    ? 'bg-teal'
                    : 'bg-charcoal/20'
                }`}
                aria-label={`Go to section ${index + 1}`}
              />
            ))}
          </div>
        </form>
      </div>
    </section>
  );
};

export default DiscoveryFormPage;
