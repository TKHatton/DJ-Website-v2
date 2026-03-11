import React, { useState } from 'react';

interface BlogPageProps {
  onNavigate: (path: string) => void;
}

const blogPosts = [
  {
    title: 'What a Multi-Agent System Actually Looks Like in Practice',
    category: 'Architecture',
    categoryColor: 'bg-teal/10 text-teal',
    date: 'Coming Soon',
    preview:
      'Most people hear "multi-agent system" and picture science fiction. The reality is more practical, more useful, and honestly more interesting than that.',
  },
  {
    title: 'Your Custom GPT Is Not an Agent. Here Is the Difference.',
    category: 'Education',
    categoryColor: 'bg-honey/10 text-honey',
    date: 'Coming Soon',
    preview:
      'There is a growing confusion between chatbots, custom GPTs, and actual AI agents. They are not the same thing, and the distinction matters for your business.',
  },
  {
    title: 'Why We Do Not Use Open-Source Autonomous Agent Tools',
    category: 'Strategy',
    categoryColor: 'bg-plum/10 text-plum',
    date: 'Coming Soon',
    preview:
      'Open-source agent frameworks are exciting. They are also fragile, undocumented, and changing every week. Here is why we chose a different path.',
  },
];

const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <main className="pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-accent font-black mb-6 leading-tight">
            Against Traffic
          </h1>
          <p className="text-xl text-charcoal/70 max-w-2xl leading-relaxed">
            Thoughts on AI architecture, agent systems, and building technology
            that actually works. From the team at Digital Jaywalking.
          </p>
          <div className="w-20 h-1 bg-terracotta rounded-full mt-8" aria-hidden="true"></div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-honey/10 border border-honey/20 rounded-[40px] p-10 md:p-14 mb-16">
          <div className="max-w-2xl">
            <span className="text-honey font-semibold tracking-widest uppercase text-sm mb-3 block">
              Newsletter
            </span>
            <h2 className="text-3xl md:text-4xl font-accent font-bold mb-4">
              The Blind Spot
            </h2>
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
              The things about AI that nobody is talking about. Delivered to your
              inbox.
            </p>

            {subscribed ? (
              <div className="bg-white rounded-2xl p-6 border border-honey/20">
                <p className="text-lg font-semibold text-charcoal">
                  You are in. Watch your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-grow px-6 py-4 rounded-full border border-charcoal/10 bg-white text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-honey/50"
                />
                <button
                  type="submit"
                  className="bg-charcoal text-cream px-8 py-4 rounded-full font-semibold hover:bg-charcoal/90 transition-all shadow-lg hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Lead Magnet / Free Resource */}
        <div className="bg-terracotta/5 border border-terracotta/15 rounded-[40px] p-10 md:p-14 mb-20">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-2/3">
              <span className="text-terracotta font-semibold tracking-widest uppercase text-sm mb-3 block">
                Free Guide
              </span>
              <h2 className="text-2xl md:text-3xl font-accent font-bold mb-4">
                Is Your Business Ready for AI Agents?
              </h2>
              <p className="text-charcoal/70 leading-relaxed">
                A practical checklist to evaluate where multi-agent systems could
                save your business time, money, and headaches. No fluff. No sales
                pitch. Just honest questions to help you decide.
              </p>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <button
                disabled
                className="bg-terracotta/20 text-terracotta px-8 py-4 rounded-full font-semibold cursor-not-allowed opacity-70"
              >
                Coming Soon
              </button>
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-accent font-bold mb-4">
            Latest Posts
          </h2>
          <div className="w-16 h-1 bg-terracotta rounded-full mb-12" aria-hidden="true"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <div
                key={idx}
                className="bg-white border border-charcoal/5 rounded-3xl p-8 flex flex-col h-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${post.categoryColor}`}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-charcoal/40">{post.date}</span>
                </div>
                <h3 className="text-lg font-accent font-bold mb-3 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-charcoal/60 leading-relaxed mb-6 flex-grow">
                  {post.preview}
                </p>
                <button
                  disabled
                  className="text-sm font-semibold text-charcoal/40 cursor-not-allowed flex items-center gap-2"
                >
                  Read more
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center py-12 border-t border-charcoal/10">
          <p className="text-lg text-charcoal/60">
            Want to contribute or suggest a topic? Email us at{' '}
            <a
              href="mailto:info@digitaljaywalking.com"
              className="text-terracotta hover:underline font-semibold"
            >
              info@digitaljaywalking.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
