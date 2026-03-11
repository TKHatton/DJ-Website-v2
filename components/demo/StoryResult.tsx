import React from 'react';

interface StoryResultProps {
  story: string;
  agentCount: number;
  usesRemaining: number;
  onTryAnother: () => void;
  onNavigate: (path: string) => void;
}

const StoryResult: React.FC<StoryResultProps> = ({
  story,
  agentCount,
  usesRemaining,
  onTryAnother,
  onNavigate,
}) => (
  <div className="animate-reveal mt-8">
    <div className="bg-white rounded-[40px] border border-charcoal/5 p-8 md:p-12 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-2 bg-terracotta rounded-full" aria-hidden="true" />
        <h3 className="font-accent font-bold text-xl">Your Story</h3>
      </div>
      <div className="prose prose-lg max-w-none">
        {story.split('\n\n').map((paragraph, i) => (
          <p
            key={i}
            className="text-charcoal/80 leading-relaxed mb-4 last:mb-0"
            style={{
              animationDelay: `${i * 100}ms`,
              animation: 'reveal-text 0.5s ease-out forwards',
              opacity: 0,
            }}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>

    <div className="mt-8 bg-charcoal/5 rounded-[40px] p-8 text-center">
      <p className="text-charcoal/60 text-sm mb-2">
        This demo used {agentCount} AI agents working together to
        create your unique story.
      </p>
      <p className="font-accent font-bold text-lg mb-6">
        Imagine what a system like this could do for your business workflows.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        {usesRemaining > 0 ? (
          <button
            onClick={onTryAnother}
            className="border border-charcoal/20 text-charcoal px-8 py-3 rounded-full font-semibold hover:bg-charcoal hover:text-cream transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
          >
            Try another story ({usesRemaining} remaining)
          </button>
        ) : (
          <span className="text-charcoal/40 text-sm py-3">
            All demos used for this session
          </span>
        )}
        <button
          onClick={() => onNavigate('start')}
          className="bg-charcoal text-cream px-8 py-3 rounded-full font-semibold hover:bg-terracotta transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
        >
          Start a project
        </button>
      </div>
    </div>
  </div>
);

export default StoryResult;
