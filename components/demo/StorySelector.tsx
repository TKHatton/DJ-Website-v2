import React from 'react';
import type { Story } from '../../lib/demo-config';

interface StorySelectorProps {
  stories: Story[];
  usesRemaining: number;
  maxUses: number;
  onSelect: (story: Story) => void;
}

function getStoryEmoji(id: string): string {
  switch (id) {
    case 'red-riding-hood': return '\u{1F534}';
    case 'three-pigs': return '\u{1F437}';
    case 'hansel-gretel': return '\u{1F36C}';
    default: return '\u{1F4D6}';
  }
}

const StorySelector: React.FC<StorySelectorProps> = ({
  stories,
  usesRemaining,
  maxUses,
  onSelect,
}) => (
  <div className="animate-reveal">
    <h3 className="font-accent font-bold text-2xl mb-8 text-center">
      Choose your story
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {stories.map((story) => (
        <button
          key={story.id}
          onClick={() => onSelect(story)}
          className={`text-left p-8 rounded-[40px] border ${story.borderClass} ${story.bgClass} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta`}
        >
          <div className="text-4xl mb-4 group-hover:animate-float" aria-hidden="true">
            {getStoryEmoji(story.id)}
          </div>
          <h4 className={`font-accent font-bold text-xl mb-2 ${story.textClass}`}>
            {story.title}
          </h4>
          <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
            {story.tagline}
          </p>
          <div className="flex flex-wrap gap-2">
            {story.characters.slice(0, 3).map((c) => (
              <span
                key={c}
                className="text-xs px-2 py-1 rounded-full border border-charcoal/10 text-charcoal/50"
              >
                {c}
              </span>
            ))}
          </div>
        </button>
      ))}
    </div>
    {usesRemaining < maxUses && (
      <p className="text-center text-charcoal/40 text-sm mt-8">
        {usesRemaining} of {maxUses} demos remaining this session
      </p>
    )}
  </div>
);

export default StorySelector;
