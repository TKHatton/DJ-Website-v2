import React from 'react';
import type { Story } from '../../lib/demo-config';
import { moralOptions } from '../../lib/demo-config';

function getStoryEmoji(id: string): string {
  switch (id) {
    case 'red-riding-hood': return '\u{1F534}';
    case 'three-pigs': return '\u{1F437}';
    case 'hansel-gretel': return '\u{1F36C}';
    default: return '\u{1F4D6}';
  }
}

interface StoryCustomizerProps {
  story: Story;
  destination: string;
  mission: string;
  moral: string;
  customMoral: string;
  onDestinationChange: (value: string) => void;
  onMissionChange: (value: string) => void;
  onMoralChange: (value: string) => void;
  onCustomMoralChange: (value: string) => void;
  onGenerate: () => void;
  onBack: () => void;
}

const StoryCustomizer: React.FC<StoryCustomizerProps> = ({
  story,
  destination,
  mission,
  moral,
  customMoral,
  onDestinationChange,
  onMissionChange,
  onMoralChange,
  onCustomMoralChange,
  onGenerate,
  onBack,
}) => (
  <div className="max-w-2xl mx-auto animate-reveal">
    <button
      onClick={onBack}
      className="text-sm text-charcoal/40 hover:text-charcoal/70 mb-8 flex items-center gap-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
    >
      <span>&larr;</span> Pick a different story
    </button>

    <div className={`p-6 rounded-[40px] border ${story.borderClass} ${story.bgClass} mb-8`}>
      <div className="flex items-center gap-3">
        <span className="text-2xl" aria-hidden="true">{getStoryEmoji(story.id)}</span>
        <div>
          <h4 className={`font-accent font-bold ${story.textClass}`}>
            {story.title}
          </h4>
          <p className="text-xs text-charcoal/50">
            {story.characters.join(', ')}
          </p>
        </div>
      </div>
    </div>

    <h3 className="font-accent font-bold text-2xl mb-2">Make it yours</h3>
    <p className="text-charcoal/50 text-sm mb-8">
      Customize the story or leave fields blank for the classic version.
    </p>

    <div className="space-y-8">
      {/* Destination */}
      <div>
        <label htmlFor="demo-destination" className="block text-sm font-semibold mb-2">
          Where should {story.protagonist} go?
        </label>
        <input
          type="text"
          id="demo-destination"
          value={destination}
          onChange={(e) => onDestinationChange(e.target.value)}
          placeholder={story.defaultDestination}
          className="w-full bg-white border border-charcoal/15 rounded-xl px-4 py-3 text-sm placeholder:text-charcoal/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
        />
        <div className="flex flex-wrap gap-2 mt-2">
          {story.destinationSuggestions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => onDestinationChange(s)}
              className="text-xs px-3 py-1 rounded-full border border-charcoal/10 text-charcoal/50 hover:border-terracotta/30 hover:text-terracotta transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Mission */}
      <div>
        <label htmlFor="demo-mission" className="block text-sm font-semibold mb-2">
          What is their mission?
        </label>
        <input
          type="text"
          id="demo-mission"
          value={mission}
          onChange={(e) => onMissionChange(e.target.value)}
          placeholder={story.defaultMission}
          className="w-full bg-white border border-charcoal/15 rounded-xl px-4 py-3 text-sm placeholder:text-charcoal/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
        />
        <div className="flex flex-wrap gap-2 mt-2">
          {story.missionSuggestions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => onMissionChange(s)}
              className="text-xs px-3 py-1 rounded-full border border-charcoal/10 text-charcoal/50 hover:border-terracotta/30 hover:text-terracotta transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Moral */}
      <div>
        <label htmlFor="demo-moral" className="block text-sm font-semibold mb-2">
          What moral should the story teach?
        </label>
        <select
          id="demo-moral"
          value={moral}
          onChange={(e) => onMoralChange(e.target.value)}
          className="w-full bg-white border border-charcoal/15 rounded-xl px-4 py-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
        >
          <option value="">Pick a moral (or write your own below)</option>
          {moralOptions.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
          <option value="custom">Write my own</option>
        </select>
        {moral === 'custom' && (
          <input
            type="text"
            aria-label="Custom moral lesson"
            value={customMoral}
            onChange={(e) => onCustomMoralChange(e.target.value)}
            placeholder="Type your own moral lesson..."
            className="w-full mt-2 bg-white border border-charcoal/15 rounded-xl px-4 py-3 text-sm placeholder:text-charcoal/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
          />
        )}
      </div>
    </div>

    <div className="mt-10 text-center">
      <button
        onClick={onGenerate}
        className="bg-charcoal text-cream px-10 py-4 rounded-full font-bold text-lg hover:bg-terracotta transition-all shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
      >
        Generate Story
      </button>
      <p className="text-xs text-charcoal/40 mt-3">
        6 agents will collaborate to create your unique tale
      </p>
    </div>
  </div>
);

export default StoryCustomizer;
