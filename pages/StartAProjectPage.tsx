import React, { useState } from 'react';

interface StartAProjectPageProps {
  onNavigate: (path: string) => void;
}

interface FormData {
  name: string;
  email: string;
  organization: string;
  interests: string[];
  description: string;
  teamSize: string;
  timeline: string;
  investment: string;
  anythingElse: string;
}

const interestOptions = [
  'Client onboarding or intake processes',
  'Internal operations and workflows',
  'Content creation or publishing',
  'Communication and follow-ups',
  'Data management and reporting',
  'Something else I am still figuring out',
];

const teamSizeOptions = [
  'Just me',
  'A small team (2-10 people)',
  'A department or larger group',
  'My entire organization',
];

const timelineOptions = [
  'As soon as possible',
  'Within 1 to 3 months',
  'Within 3 to 6 months',
  'I am flexible',
];

const investmentOptions = [
  'I am exploring possibilities right now',
  'I have a modest budget and want to be thoughtful',
  'I am ready to invest in something that scales',
  'I am building a larger system over time',
];

const StartAProjectPage: React.FC<StartAProjectPageProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    organization: '',
    interests: [],
    description: '',
    teamSize: '',
    timeline: '',
    investment: '',
    anythingElse: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(option)
        ? prev.interests.filter((i) => i !== option)
        : [...prev.interests, option],
    }));
  };

  const handleRadioChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <section className="bg-cream min-h-screen py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-teal/5 border border-teal/20 rounded-[40px] p-12 md:p-16">
            <h1 className="font-accent text-4xl md:text-5xl text-charcoal mb-6">
              Talk soon.
            </h1>
            <p className="text-charcoal/70 text-lg leading-relaxed mb-10">
              Thank you for sharing your vision with us. We have received your
              project details and will review them with care. Expect to hear
              from us within a few days.
            </p>
            <button
              onClick={() => onNavigate('home')}
              className="bg-charcoal text-cream font-semibold px-8 py-3.5 rounded-full hover:bg-terracotta transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              Back to home
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-cream min-h-screen">
      <div className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-accent text-4xl md:text-5xl text-charcoal mb-4">
            Start a Project
          </h1>
          <p className="text-charcoal/70 text-lg leading-relaxed max-w-2xl mx-auto">
            You have workflows that could run smarter. Tell us about them. We
            will review everything with care and follow up with next steps.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="font-accent text-2xl text-charcoal mb-8 text-center">
            What to expect
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              'We review your project details and make sure we understand your goals.',
              'We invite you to a short conversation to explore possibilities.',
              'We share recommendations, a system architecture concept, and a clear plan forward.',
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div
                  aria-hidden="true"
                  className="w-10 h-10 bg-terracotta/10 text-terracotta font-semibold rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  {index + 1}
                </div>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-charcoal/50 text-sm mt-8 italic">
            No pressure. No confusing tech talk. Just clarity and thoughtful
            guidance.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-16">
          <div>
            <h3 className="font-accent text-xl text-charcoal mb-6 pb-2 border-b border-charcoal/10">
              Your Information
            </h3>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-charcoal text-sm font-semibold mb-2"
                >
                  Name <span className="text-terracotta">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-charcoal/15 rounded-2xl px-5 py-3.5 text-charcoal placeholder:text-charcoal/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-charcoal text-sm font-semibold mb-2"
                >
                  Email <span className="text-terracotta">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-charcoal/15 rounded-2xl px-5 py-3.5 text-charcoal placeholder:text-charcoal/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="organization"
                  className="block text-charcoal text-sm font-semibold mb-2"
                >
                  Organization or brand{" "}
                  <span className="text-charcoal/40 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-charcoal/15 rounded-2xl px-5 py-3.5 text-charcoal placeholder:text-charcoal/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta transition-colors"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-accent text-xl text-charcoal mb-6 pb-2 border-b border-charcoal/10">
              What are you looking to improve?
            </h3>

            <fieldset className="mb-8">
              <legend className="text-charcoal text-sm font-semibold mb-4">
                Select all that apply
              </legend>
              <div className="space-y-3">
                {interestOptions.map((option) => (
                  <label
                    key={option}
                    className="flex items-start gap-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(option)}
                      onChange={() => handleCheckboxChange(option)}
                      className="mt-1 w-5 h-5 rounded border-charcoal/20 text-terracotta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta accent-terracotta"
                    />
                    <span className="text-charcoal/70 group-hover:text-charcoal transition-colors">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label
                htmlFor="description"
                className="block text-charcoal text-sm font-semibold mb-2"
              >
                Describe what you are hoping to accomplish{" "}
                <span className="text-terracotta">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={5}
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Tell us about the workflows, bottlenecks, or ideas you want to explore."
                className="w-full bg-white border border-charcoal/15 rounded-2xl px-5 py-3.5 text-charcoal placeholder:text-charcoal/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta transition-colors resize-y"
              />
            </div>
          </div>

          <div>
            <h3 className="font-accent text-xl text-charcoal mb-6 pb-2 border-b border-charcoal/10">
              Context and Timeline
            </h3>
            <div className="space-y-10">
              <fieldset>
                <legend className="text-charcoal text-sm font-semibold mb-4">
                  How many people would use this system?
                </legend>
                <div className="space-y-3">
                  {teamSizeOptions.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="teamSize"
                        value={option}
                        checked={formData.teamSize === option}
                        onChange={() => handleRadioChange('teamSize', option)}
                        className="w-5 h-5 border-charcoal/20 text-terracotta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta accent-terracotta"
                      />
                      <span className="text-charcoal/70 group-hover:text-charcoal transition-colors">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-charcoal text-sm font-semibold mb-4">
                  Ideal timeline
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {timelineOptions.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="timeline"
                        value={option}
                        checked={formData.timeline === option}
                        onChange={() => handleRadioChange('timeline', option)}
                        className="w-5 h-5 border-charcoal/20 text-terracotta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta accent-terracotta"
                      />
                      <span className="text-charcoal/70 group-hover:text-charcoal transition-colors">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-charcoal text-sm font-semibold mb-4">
                  Investment comfort
                </legend>
                <div className="space-y-3">
                  {investmentOptions.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="investment"
                        value={option}
                        checked={formData.investment === option}
                        onChange={() => handleRadioChange('investment', option)}
                        className="w-5 h-5 border-charcoal/20 text-terracotta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta accent-terracotta"
                      />
                      <span className="text-charcoal/70 group-hover:text-charcoal transition-colors">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <label
                  htmlFor="anythingElse"
                  className="block text-charcoal text-sm font-semibold mb-2"
                >
                  Anything else you want us to know?
                </label>
                <textarea
                  id="anythingElse"
                  name="anythingElse"
                  rows={4}
                  value={formData.anythingElse}
                  onChange={handleInputChange}
                  placeholder="Feel free to share context, goals, or even concerns. Everything helps us understand your needs."
                  className="w-full bg-white border border-charcoal/15 rounded-2xl px-5 py-3.5 text-charcoal placeholder:text-charcoal/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta transition-colors resize-y"
                />
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <button
              type="submit"
              className="bg-charcoal text-cream font-semibold px-10 py-4 rounded-full hover:bg-terracotta transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              Submit your project
            </button>
            <p className="text-charcoal/50 text-sm">
              Have questions instead? Reach out at{" "}
              <a
                href="mailto:info@digitaljaywalking.com"
                className="text-terracotta hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
              >
                info@digitaljaywalking.com
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="bg-charcoal py-20 px-6 md:px-12 lg:px-20 mt-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-accent text-2xl md:text-3xl text-cream mb-4">
            We treat every project with care.
          </h2>
          <p className="text-cream/70 text-lg leading-relaxed">
            You are trusting us with something meaningful. We respect that
            deeply. We believe in transparent communication, realistic
            timelines, and building systems that genuinely help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StartAProjectPage;
