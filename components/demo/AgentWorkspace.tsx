import React from 'react';
import type { Agent } from '../../lib/demo-config';
import PixelOffice from './pixel-office/PixelOffice';

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

const AgentWorkspace: React.FC<AgentWorkspaceProps> = ({
  agents,
  phase,
  revealIndex,
  agentOutputs,
  thinkingMessageIndex,
}) => {
  const activeAgent = phase === 'revealing' && revealIndex >= 0 && revealIndex < agents.length
    ? agents[revealIndex]
    : null;
  const thinkingMsg = activeAgent
    ? activeAgent.thinkingMessages[thinkingMessageIndex % activeAgent.thinkingMessages.length]
    : null;

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
        <div className="flex items-center justify-between mb-6 md:mb-8">
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

        {/* Animated Pixel Office Canvas */}
        <PixelOffice
          phase={phase}
          revealIndex={revealIndex}
          agentCount={agents.length}
        />

        {/* Active agent thinking message */}
        {activeAgent && thinkingMsg && (
          <div className="mt-4 flex items-center justify-center gap-3">
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: activeAgent.color }}
              aria-hidden="true"
            />
            <p className="text-xs md:text-sm italic" style={{ color: activeAgent.color + 'CC' }}>
              {activeAgent.name}: {thinkingMsg}
              <span className="inline-flex gap-1 ml-2" aria-hidden="true">
                <span className="typing-dot w-1.5 h-1.5 bg-current rounded-full inline-block" />
                <span className="typing-dot w-1.5 h-1.5 bg-current rounded-full inline-block" />
                <span className="typing-dot w-1.5 h-1.5 bg-current rounded-full inline-block" />
              </span>
            </p>
          </div>
        )}

        {/* Connection progress indicator */}
        <div className="mt-6 flex items-center justify-center gap-1.5" aria-hidden="true">
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
