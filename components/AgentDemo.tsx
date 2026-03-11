import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  stories,
  agents,
  moralOptions,
  pickRandomObstacles,
  getUsesRemaining,
  recordUse,
  type Story,
} from '../lib/demo-config';
import StorySelector from './demo/StorySelector';
import StoryCustomizer from './demo/StoryCustomizer';
import AgentWorkspace from './demo/AgentWorkspace';
import StoryResult from './demo/StoryResult';
import DemoLimitReached from './demo/DemoLimitReached';
import DemoError from './demo/DemoError';

type DemoPhase =
  | 'select'
  | 'customize'
  | 'generating'
  | 'revealing'
  | 'complete'
  | 'limit-reached'
  | 'error';

interface AgentOutput {
  id: string;
  summary: string;
}

interface AgentDemoProps {
  onNavigate: (path: string) => void;
}

const MAX_USES = 3;

const AgentDemo: React.FC<AgentDemoProps> = ({ onNavigate }) => {
  const [phase, setPhase] = useState<DemoPhase>('select');
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [destination, setDestination] = useState('');
  const [mission, setMission] = useState('');
  const [moral, setMoral] = useState('');
  const [customMoral, setCustomMoral] = useState('');
  const [agentOutputs, setAgentOutputs] = useState<AgentOutput[]>([]);
  const [finalStory, setFinalStory] = useState('');
  const [revealIndex, setRevealIndex] = useState(-1);
  const [thinkingMessageIndex, setThinkingMessageIndex] = useState(0);
  const [usesRemaining, setUsesRemaining] = useState(MAX_USES);
  const [errorMessage, setErrorMessage] = useState('');

  const revealTimerRef = useRef<number | null>(null);
  const thinkingTimerRef = useRef<number | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const workspaceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setUsesRemaining(getUsesRemaining());
  }, []);

  // Rotate thinking messages while an agent is working
  useEffect(() => {
    if (phase === 'revealing' && revealIndex >= 0 && revealIndex < agents.length) {
      thinkingTimerRef.current = window.setInterval(() => {
        setThinkingMessageIndex((prev) => prev + 1);
      }, 2000);
      return () => {
        if (thinkingTimerRef.current) clearInterval(thinkingTimerRef.current);
      };
    }
  }, [phase, revealIndex]);

  const handleSelectStory = useCallback((story: Story) => {
    if (getUsesRemaining() <= 0) {
      setPhase('limit-reached');
      return;
    }
    setSelectedStory(story);
    setDestination('');
    setMission('');
    setMoral('');
    setCustomMoral('');
    setPhase('customize');
  }, []);

  const handleGenerate = useCallback(async () => {
    if (!selectedStory) return;
    if (getUsesRemaining() <= 0) {
      setPhase('limit-reached');
      return;
    }

    const finalDestination = destination || selectedStory.defaultDestination;
    const finalMission = mission || selectedStory.defaultMission;
    const finalMoral = moral === 'custom' ? customMoral : moral || moralOptions[0];
    const obstacles = pickRandomObstacles(2);

    setPhase('generating');
    setTimeout(() => {
      workspaceRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
    setAgentOutputs([]);
    setFinalStory('');
    setRevealIndex(-1);
    setErrorMessage('');

    try {
      const response = await fetch('/api/generate-story', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          storyId: selectedStory.id,
          storyTitle: selectedStory.title,
          protagonist: selectedStory.protagonist,
          characters: selectedStory.characters,
          setting: selectedStory.setting,
          destination: finalDestination,
          mission: finalMission,
          moral: finalMoral,
          obstacles,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Request failed with status ${response.status}`);
      }

      const data = await response.json();

      const remaining = recordUse();
      setUsesRemaining(remaining);

      const outputs: AgentOutput[] = [
        { id: 'world-builder', summary: data.worldBuilder },
        { id: 'pathfinder', summary: data.pathfinder },
        { id: 'strategist', summary: data.strategist },
        { id: 'chaos-engine', summary: data.chaosEngine },
        { id: 'moral-weaver', summary: data.moralWeaver },
      ];
      setAgentOutputs(outputs);
      setFinalStory(data.storyteller);

      setPhase('revealing');
      setRevealIndex(0);
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      );
      setPhase('error');
    }
  }, [selectedStory, destination, mission, moral, customMoral]);

  // Progressive reveal timer
  useEffect(() => {
    if (phase !== 'revealing') return;
    if (revealIndex < 0) return;

    if (revealIndex >= agents.length) {
      setPhase('complete');
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
      return;
    }

    const delay = revealIndex === agents.length - 1 ? 3000 : 2000;
    revealTimerRef.current = window.setTimeout(() => {
      setRevealIndex((prev) => prev + 1);
      setThinkingMessageIndex(0);
    }, delay);

    return () => {
      if (revealTimerRef.current) clearTimeout(revealTimerRef.current);
    };
  }, [phase, revealIndex]);

  const handleReset = useCallback(() => {
    setPhase('select');
    setSelectedStory(null);
    setAgentOutputs([]);
    setFinalStory('');
    setRevealIndex(-1);
    setErrorMessage('');
  }, []);

  const handleTryAnother = useCallback(() => {
    if (getUsesRemaining() <= 0) {
      setPhase('limit-reached');
      return;
    }
    setAgentOutputs([]);
    setFinalStory('');
    setRevealIndex(-1);
    setPhase('select');
  }, []);

  return (
    <section id="agent-demo" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-charcoal/40">
            Live Demo
          </span>
          <h2 className="text-4xl md:text-5xl font-accent font-black mt-3 mb-4">
            See multi-agent AI in action.
          </h2>
          <p className="text-lg text-charcoal/60 max-w-2xl leading-relaxed">
            Pick a story, customize the details, and watch 6 AI agents coordinate
            behind the scenes to build something together. This is a simplified
            visualization of how our agent systems work.
          </p>
          <div className="w-20 h-1 bg-terracotta rounded-full mt-6" aria-hidden="true" />
        </div>

        {/* Story selection / customization FIRST (user picks before seeing agents work) */}
        {phase === 'select' && (
          <StorySelector
            stories={stories}
            usesRemaining={usesRemaining}
            maxUses={MAX_USES}
            onSelect={handleSelectStory}
          />
        )}

        {phase === 'customize' && selectedStory && (
          <StoryCustomizer
            story={selectedStory}
            destination={destination}
            mission={mission}
            moral={moral}
            customMoral={customMoral}
            onDestinationChange={setDestination}
            onMissionChange={setMission}
            onMoralChange={setMoral}
            onCustomMoralChange={setCustomMoral}
            onGenerate={handleGenerate}
            onBack={() => setPhase('select')}
          />
        )}

        {/* Agent Workspace BELOW the story UI */}
        {(phase === 'select' || phase === 'customize' || phase === 'generating' || phase === 'revealing' || phase === 'complete') && (
          <div ref={workspaceRef}>
          <AgentWorkspace
            agents={agents}
            phase={phase}
            revealIndex={revealIndex}
            agentOutputs={agentOutputs}
            thinkingMessageIndex={thinkingMessageIndex}
          />
          </div>
        )}

        {phase === 'complete' && (
          <div ref={resultRef}>
            <StoryResult
              story={finalStory}
              agentCount={agents.length}
              usesRemaining={usesRemaining}
              onTryAnother={handleTryAnother}
              onNavigate={onNavigate}
            />
          </div>
        )}

        {phase === 'limit-reached' && (
          <DemoLimitReached onNavigate={onNavigate} />
        )}

        {phase === 'error' && (
          <DemoError message={errorMessage} onRetry={handleReset} />
        )}
      </div>
    </section>
  );
};

export default AgentDemo;
