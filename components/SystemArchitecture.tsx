import React, { useState, useRef, useEffect } from 'react';

/* ─── Types ─── */

interface DiagramNode {
  id: string;
  label: string;
  description: string;
  type: 'trigger' | 'agent' | 'output' | 'store';
  x: number;
  y: number;
  mx: number;
  my: number;
}

interface DiagramConnection {
  from: string;
  to: string;
}

interface TierConfig {
  id: 'core' | 'system' | 'scale';
  title: string;
  subtitle: string;
  accentHex: string;
  accentClass: string;
  nodes: DiagramNode[];
  connections: DiagramConnection[];
}

/* ─── Tier Data ─── */

const tiers: TierConfig[] = [
  {
    id: 'core',
    title: 'Agent Core',
    subtitle: 'One workflow. One team.',
    accentHex: '#E2725B',
    accentClass: 'terracotta',
    nodes: [
      { id: 'trigger', label: 'Customer Inquiry', description: 'New message arrives via form or email', type: 'trigger', x: 5, y: 42, mx: 50, my: 10 },
      { id: 'intake', label: 'Intake Agent', description: 'Extracts name, intent, and urgency', type: 'agent', x: 25, y: 42, mx: 50, my: 28 },
      { id: 'router', label: 'Router Agent', description: 'Determines the right response path', type: 'agent', x: 45, y: 42, mx: 50, my: 46 },
      { id: 'response', label: 'Response Agent', description: 'Drafts and sends a personalized reply', type: 'agent', x: 65, y: 42, mx: 50, my: 64 },
      { id: 'output', label: 'Reply Sent', description: 'Customer gets a response in minutes', type: 'output', x: 85, y: 42, mx: 50, my: 82 },
    ],
    connections: [
      { from: 'trigger', to: 'intake' },
      { from: 'intake', to: 'router' },
      { from: 'router', to: 'response' },
      { from: 'response', to: 'output' },
    ],
  },
  {
    id: 'system',
    title: 'Agent System',
    subtitle: 'Multiple workflows. Connected.',
    accentHex: '#EBC06D',
    accentClass: 'honey',
    nodes: [
      { id: 'trigger', label: 'New Lead', description: 'Contact submits an inquiry', type: 'trigger', x: 3, y: 40, mx: 50, my: 5 },
      { id: 'intake', label: 'Intake Agent', description: 'Scores urgency and fit', type: 'agent', x: 20, y: 40, mx: 50, my: 17 },
      { id: 'schedule', label: 'Scheduling Agent', description: 'Books the discovery call', type: 'agent', x: 40, y: 18, mx: 32, my: 30 },
      { id: 'prep', label: 'Prep Agent', description: 'Researches lead, builds briefing', type: 'agent', x: 58, y: 18, mx: 68, my: 30 },
      { id: 'crm', label: 'CRM Agent', description: 'Updates pipeline, logs activity', type: 'agent', x: 40, y: 65, mx: 32, my: 44 },
      { id: 'store', label: 'CRM Database', description: 'All lead data, always current', type: 'store', x: 58, y: 65, mx: 68, my: 44 },
      { id: 'followup', label: 'Follow-Up Agent', description: 'Sends confirmations and recaps', type: 'agent', x: 76, y: 40, mx: 50, my: 58 },
      { id: 'output', label: 'Call Booked', description: 'Lead confirmed, prepped, tracked', type: 'output', x: 92, y: 40, mx: 50, my: 72 },
    ],
    connections: [
      { from: 'trigger', to: 'intake' },
      { from: 'intake', to: 'schedule' },
      { from: 'intake', to: 'crm' },
      { from: 'schedule', to: 'prep' },
      { from: 'schedule', to: 'followup' },
      { from: 'prep', to: 'followup' },
      { from: 'crm', to: 'store' },
      { from: 'store', to: 'prep' },
      { from: 'followup', to: 'output' },
    ],
  },
  {
    id: 'scale',
    title: 'Agent Scale',
    subtitle: 'Full operational backbone.',
    accentHex: '#4A7C7A',
    accentClass: 'teal',
    nodes: [
      { id: 'trigger', label: 'Business Event', description: 'A lead, ticket, or milestone fires', type: 'trigger', x: 3, y: 42, mx: 50, my: 4 },
      { id: 'orchestrator', label: 'Orchestrator', description: 'Routes tasks across the system', type: 'agent', x: 22, y: 42, mx: 50, my: 14 },
      { id: 'sales', label: 'Sales Intake', description: 'Qualifies leads, routes to pipeline', type: 'agent', x: 42, y: 12, mx: 32, my: 26 },
      { id: 'support', label: 'Support Agent', description: 'Triages tickets, resolves issues', type: 'agent', x: 42, y: 72, mx: 68, my: 26 },
      { id: 'onboarding', label: 'Onboarding Agent', description: 'Provisions accounts, sends welcome', type: 'agent', x: 58, y: 12, mx: 32, my: 38 },
      { id: 'project', label: 'Project Agent', description: 'Creates timelines, tracks milestones', type: 'agent', x: 58, y: 42, mx: 68, my: 38 },
      { id: 'finance', label: 'Finance Agent', description: 'Invoices, payments, overdue flags', type: 'agent', x: 58, y: 72, mx: 50, my: 50 },
      { id: 'store', label: 'Central Data Store', description: 'Shared memory for all agents', type: 'store', x: 42, y: 42, mx: 50, my: 62 },
      { id: 'reporting', label: 'Reporting Agent', description: 'Aggregates data into dashboards', type: 'agent', x: 78, y: 42, mx: 50, my: 74 },
      { id: 'dashboard', label: 'Live Dashboard', description: 'Real-time visibility, full operation', type: 'output', x: 92, y: 42, mx: 50, my: 86 },
    ],
    connections: [
      { from: 'trigger', to: 'orchestrator' },
      { from: 'orchestrator', to: 'sales' },
      { from: 'orchestrator', to: 'support' },
      { from: 'orchestrator', to: 'store' },
      { from: 'sales', to: 'onboarding' },
      { from: 'onboarding', to: 'project' },
      { from: 'project', to: 'finance' },
      { from: 'support', to: 'store' },
      { from: 'finance', to: 'store' },
      { from: 'sales', to: 'store' },
      { from: 'store', to: 'reporting' },
      { from: 'reporting', to: 'dashboard' },
    ],
  },
];

/* ─── Node Component ─── */

const nodeStyles: Record<string, string> = {
  trigger: 'border-dashed',
  agent: 'border-solid',
  output: 'border-solid',
  store: 'border-solid',
};

const nodeIcons: Record<string, string> = {
  trigger: '\u26A1',
  agent: '\u25CF',
  output: '\u2713',
  store: '\u25C6',
};

function DiagramNodeCard({
  node,
  accentHex,
  delay,
  isMobile,
}: {
  node: DiagramNode;
  accentHex: string;
  delay: number;
  isMobile: boolean;
}) {
  const x = isMobile ? node.mx : node.x;
  const y = isMobile ? node.my : node.y;

  const bgColor =
    node.type === 'trigger'
      ? accentHex + '15'
      : node.type === 'output'
      ? accentHex + '20'
      : node.type === 'store'
      ? '#6B4E7115'
      : 'rgba(255,255,255,0.05)';

  const borderColor =
    node.type === 'trigger'
      ? accentHex + '60'
      : node.type === 'output'
      ? accentHex
      : node.type === 'store'
      ? '#6B4E7160'
      : 'rgba(255,255,255,0.1)';

  const iconColor = node.type === 'store' ? '#6B4E71' : accentHex;

  return (
    <div
      className={'absolute animate-node-appear ' + nodeStyles[node.type]}
      style={{
        left: x + '%',
        top: y + '%',
        transform: 'translate(-50%, -50%)',
        width: isMobile ? '115px' : '160px',
        background: bgColor,
        border: '1.5px ' + (node.type === 'trigger' ? 'dashed' : 'solid') + ' ' + borderColor,
        borderRadius: '16px',
        padding: isMobile ? '8px 10px' : '10px 14px',
        animationDelay: delay + 'ms',
        opacity: 0,
        zIndex: 10,
      }}
    >
      <div className="flex items-center gap-2">
        <span style={{ color: iconColor, fontSize: '10px' }}>
          {nodeIcons[node.type]}
        </span>
        <span
          className="font-bold"
          style={{
            color: '#FDFBF7',
            fontSize: isMobile ? '11px' : '12px',
            lineHeight: '1.3',
          }}
        >
          {node.label}
        </span>
      </div>
      <p
        style={{
          color: 'rgba(253,251,247,0.45)',
          fontSize: isMobile ? '9px' : '10px',
          lineHeight: '1.4',
          marginTop: '3px',
        }}
      >
        {node.description}
      </p>
    </div>
  );
}

/* ─── SVG Connections ─── */

function SvgConnections({
  tier,
  containerRef,
  isMobile,
}: {
  tier: TierConfig;
  containerRef: React.RefObject<HTMLDivElement | null>;
  isMobile: boolean;
}) {
  const [dims, setDims] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () => setDims({ w: el.clientWidth, h: el.clientHeight });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [containerRef]);

  if (dims.w === 0) return null;

  const getNodeCenter = (nodeId: string) => {
    const node = tier.nodes.find((n) => n.id === nodeId);
    if (!node) return { cx: 0, cy: 0 };
    const nx = isMobile ? node.mx : node.x;
    const ny = isMobile ? node.my : node.y;
    return {
      cx: (nx / 100) * dims.w,
      cy: (ny / 100) * dims.h,
    };
  };

  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      width={dims.w}
      height={dims.h}
      style={{ zIndex: 5 }}
    >
      <defs>
        <marker
          id={'arrow-' + tier.id}
          markerWidth="8"
          markerHeight="6"
          refX="8"
          refY="3"
          orient="auto"
        >
          <polygon
            points="0 0, 8 3, 0 6"
            fill={tier.accentHex + '80'}
          />
        </marker>
      </defs>
      {tier.connections.map((conn, i) => {
        const from = getNodeCenter(conn.from);
        const to = getNodeCenter(conn.to);
        const dx = to.cx - from.cx;
        const dy = to.cy - from.cy;
        // On mobile, flow is primarily vertical so use vertical control points
        const cp1x = isMobile ? from.cx : from.cx + dx * 0.4;
        const cp1y = isMobile ? from.cy + dy * 0.4 : from.cy;
        const cp2x = isMobile ? to.cx : to.cx - dx * 0.4;
        const cp2y = isMobile ? to.cy - dy * 0.4 : to.cy;
        const d = 'M ' + from.cx + ' ' + from.cy + ' C ' + cp1x + ' ' + cp1y + ', ' + cp2x + ' ' + cp2y + ', ' + to.cx + ' ' + to.cy;

        return (
          <path
            key={conn.from + '-' + conn.to + '-' + i}
            d={d}
            fill="none"
            stroke={tier.accentHex + '50'}
            strokeWidth="2"
            strokeDasharray="6 4"
            markerEnd={'url(#arrow-' + tier.id + ')'}
            className="animate-architecture-flow"
            style={{ animationDelay: (i * 0.15) + 's' }}
          />
        );
      })}
    </svg>
  );
}

/* ─── Main Component ─── */

interface SystemArchitectureProps {
  onNavigate: (path: string) => void;
}

const SystemArchitecture: React.FC<SystemArchitectureProps> = ({ onNavigate }) => {
  const [activeTier, setActiveTier] = useState<'core' | 'system' | 'scale'>('core');
  const [transitioning, setTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentTier = tiers.find((t) => t.id === activeTier)!;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const switchTier = (id: 'core' | 'system' | 'scale') => {
    if (id === activeTier) return;
    setTransitioning(true);
    setTimeout(() => {
      setActiveTier(id);
      setTransitioning(false);
    }, 300);
  };

  const containerHeight = isMobile
    ? currentTier.id === 'scale'
      ? 780
      : currentTier.id === 'system'
      ? 620
      : 520
    : currentTier.id === 'scale'
    ? 420
    : 340;

  return (
    <section id="architecture" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-charcoal/40">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-accent font-black mt-3 mb-4">
            See the architecture.
          </h2>
          <p className="text-lg text-charcoal/60 max-w-2xl leading-relaxed">
            Every system we build follows the same principle: specialized agents,
            clear responsibilities, connected workflows. Click a tier to explore.
          </p>
          <div
            className="w-20 h-1 bg-terracotta rounded-full mt-6"
            aria-hidden="true"
          />
        </div>

        {/* Tier Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tiers.map((tier) => (
            <button
              key={tier.id}
              onClick={() => switchTier(tier.id)}
              aria-pressed={activeTier === tier.id}
              className={'px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ' +
                (activeTier === tier.id
                  ? 'text-white shadow-lg scale-105'
                  : 'bg-white border border-charcoal/10 text-charcoal/70 hover:border-charcoal/30')}
              style={
                activeTier === tier.id
                  ? { backgroundColor: tier.accentHex }
                  : undefined
              }
            >
              {tier.title}
            </button>
          ))}
        </div>

        {/* Active Tier Label */}
        <div className="text-center mb-6">
          <p
            className="text-sm font-bold transition-all duration-300"
            style={{ color: currentTier.accentHex }}
          >
            {currentTier.subtitle}
          </p>
        </div>

        {/* Diagram Container */}
        <div
          className="relative bg-charcoal overflow-hidden transition-all duration-500"
          style={{
            borderRadius: '40px',
            height: containerHeight + 'px',
            padding: isMobile ? '20px' : '32px',
          }}
        >
          {/* Decorative background */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none"
            style={{ backgroundColor: currentTier.accentHex + '08' }}
          />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-plum/5 rounded-full blur-3xl pointer-events-none" />

          {/* Grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(253,251,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(253,251,247,1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Diagram */}
          <div
            ref={containerRef}
            className={'relative w-full h-full transition-all duration-300 ' +
              (transitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100')}
          >
            <SvgConnections
              tier={currentTier}
              containerRef={containerRef}
              isMobile={isMobile}
            />
            {currentTier.nodes.map((node, i) => (
              <DiagramNodeCard
                key={currentTier.id + '-' + node.id}
                node={node}
                accentHex={currentTier.accentHex}
                delay={i * 80}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-charcoal/50 text-sm mb-4">
            Not sure which tier fits? We will help you figure it out.
          </p>
          <button
            onClick={() => onNavigate('start')}
            className="bg-charcoal text-cream px-8 py-4 rounded-full font-bold hover:bg-charcoal/90 transition-all"
          >
            Start a project
          </button>
        </div>
      </div>
    </section>
  );
};

export default SystemArchitecture;
