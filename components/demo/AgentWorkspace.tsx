import React from 'react';
import type { Agent } from '../../lib/demo-config';
import PixelSprite from './PixelSprite';

export type AgentStatus = 'idle' | 'working' | 'complete';

interface AgentOutput {
  id: string;
  summary: string;
}

interface AgentWorkspaceProps {
  agents: Agent[];
  phase: 'select' | 'customize' | 'generating' | 'revealing' | 'complete';
  revealIndex: number;
  agentOutputs: AgentOutput[];
  thinkingMessageIndex: number;
}

const TypingDots: React.FC = () => (
  <span className="inline-flex gap-1 ml-2" aria-hidden="true">
    <span className="typing-dot w-1.5 h-1.5 bg-current rounded-full inline-block" />
    <span className="typing-dot w-1.5 h-1.5 bg-current rounded-full inline-block" />
    <span className="typing-dot w-1.5 h-1.5 bg-current rounded-full inline-block" />
  </span>
);

function getAgentStatus(
  phase: AgentWorkspaceProps['phase'],
  agentIndex: number,
  revealIndex: number,
): AgentStatus {
  if (phase === 'select' || phase === 'customize' || phase === 'generating') return 'idle';
  if (phase === 'revealing' || phase === 'complete') {
    if (agentIndex < revealIndex) return 'complete';
    if (agentIndex === revealIndex && phase === 'revealing') return 'working';
    return 'idle';
  }
  return 'idle';
}

/* SVG Connection Lines between agents */
const ConnectionLines: React.FC<{
  agents: Agent[];
  revealIndex: number;
  phase: string;
}> = ({ agents, revealIndex, phase }) => {
  const isActive = phase === 'generating' || phase === 'revealing' || phase === 'complete';
  if (!isActive) return null;

  // Connection pairs: each agent connects to the next in processing order
  // Grid layout: 3 cols x 2 rows
  // Row 1: [0, 1, 2]  Row 2: [3, 4, 5]
  // Flow: 0->1->2 (top row), then 2->3 (diagonal), then 3->4->5 (bottom row)
  const connections = [
    { from: 0, to: 1, path: 'M 16.67 25 L 50 25' },       // World Builder -> Pathfinder
    { from: 1, to: 2, path: 'M 50 25 L 83.33 25' },        // Pathfinder -> Strategist
    { from: 2, to: 3, path: 'M 83.33 25 C 83.33 50, 16.67 50, 16.67 75' }, // Strategist -> Chaos Engine (curve)
    { from: 3, to: 4, path: 'M 16.67 75 L 50 75' },        // Chaos Engine -> Moral Weaver
    { from: 4, to: 5, path: 'M 50 75 L 83.33 75' },        // Moral Weaver -> Storyteller
  ];

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ zIndex: 1 }}
    >
      {connections.map((conn, i) => {
        const isFlowing = revealIndex > conn.from && revealIndex <= conn.to + 1;
        const isComplete = revealIndex > conn.to;
        const fromAgent = agents[conn.from];
        const toAgent = agents[conn.to];
        const lineColor = isFlowing ? toAgent.color : isComplete ? fromAgent.color : 'rgba(255,255,255,0.04)';

        return (
          <g key={i}>
            {/* Background line */}
            <path
              d={conn.path}
              fill="none"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="0.3"
              strokeDasharray={isComplete || isFlowing ? 'none' : '1 1'}
            />
            {/* Active/complete overlay line */}
            {(isFlowing || isComplete) && (
              <path
                d={conn.path}
                fill="none"
                stroke={lineColor}
                strokeWidth={isFlowing ? '0.5' : '0.3'}
                strokeOpacity={isFlowing ? 0.6 : 0.2}
                strokeDasharray={isFlowing ? '2 2' : 'none'}
                className={isFlowing ? 'animate-dash-flow' : ''}
              />
            )}
          </g>
        );
      })}
    </svg>
  );
};

const AgentWorkspace: React.FC<AgentWorkspaceProps> = ({
  agents,
  phase,
  revealIndex,
  agentOutputs,
  thinkingMessageIndex,
}) => {
  const isActive = phase === 'generating' || phase === 'revealing' || phase === 'complete';

  return (
    <div className="relative bg-charcoal rounded-[60px] p-6 md:p-10 lg:p-12 mb-8 overflow-hidden mx-4 md:mx-0">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-terracotta/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-plum/3 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <div>
            <p className="text-cream/25 text-[10px] font-bold uppercase tracking-[0.25em] mb-1" aria-hidden="true">
              Agent Command Center
            </p>
            <h3 className="text-cream font-accent font-bold text-lg md:text-xl">
              Agent Workspace
            </h3>
            <p className="text-cream/40 text-xs mt-0.5" aria-live="polite">
              {phase === 'select' || phase === 'customize'
                ? '6 agents standing by'
                : phase === 'generating'
                ? 'Initializing agents...'
                : phase === 'revealing'
                ? `Agent ${Math.min(revealIndex + 1, agents.length)} of ${agents.length} active`
                : 'All agents complete'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            {phase === 'generating' && (
              <div className="w-5 h-5 border-2 border-terracotta border-t-transparent rounded-full animate-spin" aria-hidden="true" />
            )}
            {phase === 'complete' && (
              <span className="text-xs text-teal font-semibold bg-teal/10 px-3 py-1.5 rounded-full">
                All Complete
              </span>
            )}
            {phase === 'revealing' && (
              <span className="text-xs text-terracotta font-semibold bg-terracotta/10 px-3 py-1.5 rounded-full animate-pulse">
                Processing
              </span>
            )}
          </div>
        </div>

        {/* Agent Grid with SVG overlay */}
        <div className="relative">
          <ConnectionLines agents={agents} revealIndex={revealIndex} phase={phase} />

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
            {agents.map((agent, index) => {
              const status = getAgentStatus(phase, index, revealIndex);
              const output = agentOutputs.find((o) => o.id === agent.id)?.summary;
              const thinkingMsg = agent.thinkingMessages[thinkingMessageIndex % agent.thinkingMessages.length];
              const justActivated = status === 'working' && revealIndex === index;

              return (
                <div
                  key={agent.id}
                  className={`rounded-2xl md:rounded-3xl p-4 md:p-5 transition-all duration-500 relative overflow-hidden ${
                    justActivated ? 'animate-workstation-activate' : ''
                  } ${
                    status === 'working'
                      ? 'bg-white/[0.08]'
                      : status === 'complete'
                      ? 'bg-white/[0.05]'
                      : 'bg-white/[0.02]'
                  }`}
                  style={{
                    border: status === 'working'
                      ? `2px solid ${agent.color}90`
                      : status === 'complete'
                      ? `1px solid ${agent.color}25`
                      : '1px solid rgba(255,255,255,0.04)',
                    boxShadow: status === 'working'
                      ? `0 8px 32px ${agent.color}25, inset 0 1px 0 ${agent.color}15`
                      : 'none',
                    ['--ring-color' as string]: agent.color + '40',
                  }}
                >
                  {/* Active glow overlay */}
                  {status === 'working' && (
                    <div
                      className="absolute inset-0 pointer-events-none rounded-2xl md:rounded-3xl animate-ring-pulse"
                      style={{ ['--ring-color' as string]: agent.color + '30' }}
                      aria-hidden="true"
                    />
                  )}

                  {/* Monitor screen */}
                  <div
                    className={`rounded-xl px-3 py-2.5 mb-4 min-h-[44px] md:min-h-[52px] flex items-center relative overflow-hidden transition-all duration-500 ${
                      status === 'working' ? 'animate-monitor-on' : ''
                    }`}
                    style={{
                      backgroundColor: status === 'working'
                        ? agent.color + '18'
                        : status === 'complete'
                        ? agent.color + '0C'
                        : 'rgba(255,255,255,0.02)',
                      border: status === 'working'
                        ? `1px solid ${agent.color}20`
                        : '1px solid rgba(255,255,255,0.03)',
                    }}
                  >
                    {/* Scanline effect on active monitor */}
                    {status === 'working' && (
                      <div
                        className="absolute inset-0 pointer-events-none animate-scanline"
                        style={{
                          background: `linear-gradient(transparent 0%, ${agent.color}08 50%, transparent 100%)`,
                          height: '30%',
                        }}
                        aria-hidden="true"
                      />
                    )}

                    {status === 'working' && thinkingMsg && (
                      <p className="text-[10px] md:text-xs italic truncate relative z-10" style={{ color: agent.color }}>
                        {thinkingMsg}
                        <TypingDots />
                      </p>
                    )}
                    {status === 'complete' && (
                      <div className="flex items-center gap-2 relative z-10">
                        <span
                          className="w-4 h-4 rounded-full flex items-center justify-center text-white text-[9px]"
                          style={{ backgroundColor: agent.color }}
                          aria-hidden="true"
                        >
                          &#10003;
                        </span>
                        <span className="text-[10px] md:text-xs" style={{ color: agent.color + 'B0' }}>
                          Complete
                        </span>
                      </div>
                    )}
                    {status === 'idle' && (
                      <div className="flex items-center gap-1.5" aria-hidden="true">
                        <span className="w-1.5 h-1.5 rounded-full bg-cream/10" />
                        <span className="text-[10px] text-cream/15 animate-monitor-cursor">_</span>
                      </div>
                    )}
                  </div>

                  {/* Sprite centered */}
                  <div className="flex justify-center mb-3">
                    <PixelSprite
                      pixels={agent.pixels}
                      color={status === 'idle' && !isActive ? agent.color + '30' : agent.color}
                      pixelSize={10}
                      active={status === 'working'}
                      complete={status === 'complete'}
                      className="hidden md:inline-grid"
                    />
                    <PixelSprite
                      pixels={agent.pixels}
                      color={status === 'idle' && !isActive ? agent.color + '30' : agent.color}
                      pixelSize={7}
                      active={status === 'working'}
                      complete={status === 'complete'}
                      className="md:hidden inline-grid"
                    />
                  </div>

                  {/* Desk surface glow */}
                  <div
                    className="h-[3px] rounded-full transition-all duration-700 mb-3"
                    style={{
                      backgroundColor: status === 'working'
                        ? agent.color
                        : status === 'complete'
                        ? agent.color + '30'
                        : 'rgba(255,255,255,0.03)',
                      boxShadow: status === 'working'
                        ? `0 0 16px ${agent.color}50, 0 0 4px ${agent.color}80`
                        : 'none',
                    }}
                    aria-hidden="true"
                  />

                  {/* Agent name and role */}
                  <div className="text-center">
                    <h4 className={`font-bold text-xs md:text-sm transition-colors duration-300 ${
                      status === 'working' ? 'text-cream/90' : status === 'complete' ? 'text-cream/60' : 'text-cream/25'
                    }`}>
                      {agent.name}
                    </h4>
                    <p className={`text-[10px] md:text-xs transition-colors duration-300 ${
                      status === 'working' ? 'text-cream/50' : 'text-cream/15'
                    }`}>
                      {agent.role}
                    </p>
                  </div>

                  {/* Output preview (complete state, desktop only) */}
                  {status === 'complete' && output && (
                    <p className="hidden md:block text-[10px] text-cream/35 leading-relaxed mt-3 line-clamp-2 animate-reveal text-center">
                      {output}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Connection progress indicator */}
        <div className="mt-8 flex items-center justify-center gap-1.5" aria-hidden="true">
          {agents.map((agent, i) => (
            <React.Fragment key={agent.id}>
              <div
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  getAgentStatus(phase, i, revealIndex) === 'working' ? 'scale-125' : ''
                }`}
                style={{
                  backgroundColor: getAgentStatus(phase, i, revealIndex) === 'complete'
                    ? agent.color
                    : getAgentStatus(phase, i, revealIndex) === 'working'
                    ? agent.color
                    : 'rgba(253,251,247,0.08)',
                  boxShadow: getAgentStatus(phase, i, revealIndex) === 'working'
                    ? `0 0 10px ${agent.color}80, 0 0 4px ${agent.color}`
                    : getAgentStatus(phase, i, revealIndex) === 'complete'
                    ? `0 0 4px ${agent.color}40`
                    : 'none',
                }}
              />
              {i < agents.length - 1 && (
                <div
                  className="w-6 md:w-10 h-0.5 rounded-full transition-all duration-500"
                  style={{
                    backgroundColor: getAgentStatus(phase, i, revealIndex) === 'complete'
                      ? agents[i].color + '30'
                      : 'rgba(253,251,247,0.05)',
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentWorkspace;
