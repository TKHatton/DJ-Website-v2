// JSON-LD Schema definitions for Digital Jaywalking
// Comprehensive structured data for maximum AI/search discoverability
// Every page gets detailed schemas so AI systems can fully understand
// what Digital Jaywalking offers, who runs it, and how to engage.

const SITE_URL = 'https://digitaljaywalking.com';
const SITE_NAME = 'Digital Jaywalking';
const LOGO_URL = SITE_URL + '/logo.png';

// ── Organization (shared across all pages) ─────────────────
// This is the primary entity. AI systems use this to understand
// who Digital Jaywalking is, what they do, and how to categorize them.

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['ProfessionalService', 'ITService'],
  '@id': SITE_URL + '/#organization',
  name: SITE_NAME,
  alternateName: ['Digital Jaywalking, LLC', 'Digital Jaywalking AI', 'DJ AI Systems'],
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: LOGO_URL,
    width: 512,
    height: 512,
  },
  description:
    'Digital Jaywalking builds custom multi-agent AI systems that automate business operations. We design and deploy networks of AI agents that coordinate tasks, manage workflows, and run processes across departments. Based in Durham, NC, we serve small to medium businesses nationwide with three tiers of service: Agent Core (single workflow automation), Agent System (multi-workflow orchestration), and Agent Scale (full operational backbone). We also teach AI skills through our Academy with hands-on workshops and courses.',
  email: 'info@digitaljaywalking.com',
  foundingDate: '2025',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 2,
    maxValue: 10,
  },
  founder: [
    {
      '@type': 'Person',
      '@id': SITE_URL + '/#lenise',
      name: 'Lenise',
      jobTitle: 'Co-Founder',
      description:
        'Builds multi-agent AI systems and teaches others how to think about automation, workflows, and AI architecture. Focused on making complex technology accessible and useful.',
      worksFor: { '@id': SITE_URL + '/#organization' },
      knowsAbout: [
        'Multi-agent AI systems',
        'LangGraph',
        'AI agent architecture',
        'Workflow automation',
        'React',
        'Next.js',
        'Small language models',
      ],
    },
    {
      '@type': 'Person',
      '@id': SITE_URL + '/#julian',
      name: 'Julian',
      jobTitle: 'Co-Founder',
      description:
        'Brings a strategic lens to technology and operations. Focused on helping businesses understand where AI fits into their growth and how to adopt it with confidence.',
      worksFor: { '@id': SITE_URL + '/#organization' },
      knowsAbout: [
        'Business strategy',
        'AI adoption',
        'Operations management',
        'Technology consulting',
      ],
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Durham',
    addressRegion: 'NC',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'State', name: 'North Carolina' },
    { '@type': 'City', name: 'Durham' },
  ],
  serviceType: [
    'Multi-Agent AI System Architecture',
    'AI Workflow Automation',
    'Business Process Automation',
    'AI Operations Infrastructure',
    'Custom AI Agent Development',
    'AI System Consulting',
    'AI Architecture Design',
    'Operational AI Systems',
    'AI Integration Services',
    'AI Workshops and Training',
  ],
  knowsAbout: [
    'Multi-agent AI systems',
    'AI agent architecture',
    'Workflow automation',
    'Business process automation',
    'LangGraph',
    'AI orchestration',
    'Operational AI infrastructure',
    'Custom AI integrations',
    'AI system design',
    'Autonomous AI agents',
    'AI for small business',
    'AI for medium business',
    'Agent-based automation',
    'AI operations',
    'Process automation with AI',
    'AI consulting',
    'AI workshops',
    'AI training and education',
    'Multi-agent coordination',
    'AI system deployment',
    'Cross-department AI automation',
    'AI-powered operations',
    'Intelligent automation',
    'AI agent frameworks',
    'Small language models',
    'React development',
    'Next.js development',
    'API integrations',
    'CRM automation',
    'AI decision automation',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Jaywalking Services',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'AI System Builds',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': SITE_URL + '/#agent-core',
              name: 'Agent Core',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': SITE_URL + '/#agent-system',
              name: 'Agent System',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': SITE_URL + '/#agent-scale',
              name: 'Agent Scale',
            },
          },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Consulting',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': SITE_URL + '/#agent-blueprint',
              name: 'Agent Blueprint',
            },
          },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Education and Training',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Course',
              '@id': SITE_URL + '/#workshop-meetings',
              name: 'Run Better Meetings with AI',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Course',
              '@id': SITE_URL + '/#course-autonomous-agents',
              name: 'Autonomous AI Agents: What Works, What Does Not, and When to Use Them',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Course',
              '@id': SITE_URL + '/#course-ai-for-business',
              name: 'AI for Your Business: Where to Start',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Course',
              '@id': SITE_URL + '/#course-first-agent-system',
              name: 'Building Your First Agent System',
            },
          },
        ],
      },
    ],
  },
  potentialAction: [
    {
      '@type': 'CommunicateAction',
      name: 'Contact Digital Jaywalking',
      target: SITE_URL + '/#start',
      description: 'Start a conversation about building a multi-agent AI system for your business',
    },
    {
      '@type': 'CommunicateAction',
      name: 'Email Digital Jaywalking',
      target: 'mailto:info@digitaljaywalking.com',
    },
  ],
  slogan: 'Multi-Agent AI Systems, Architected for Your Business',
  sameAs: [],
};

// ── WebSite ────────────────────────────────────────────────

export const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': SITE_URL + '/#website',
  name: SITE_NAME,
  url: SITE_URL,
  description:
    'Digital Jaywalking builds custom multi-agent AI systems for businesses. Explore our services, workshops, blog, and approach to AI architecture.',
  publisher: { '@id': SITE_URL + '/#organization' },
  inLanguage: 'en-US',
};

// ── SiteNavigationElement (helps AI understand site structure) ─

export const siteNavSchema = {
  '@context': 'https://schema.org',
  '@type': 'SiteNavigationElement',
  name: 'Main Navigation',
  hasPart: [
    { '@type': 'WebPage', name: 'Home', url: SITE_URL },
    { '@type': 'WebPage', name: 'The Studio', url: SITE_URL + '/#studio' },
    { '@type': 'WebPage', name: 'The Academy', url: SITE_URL + '/#academy' },
    { '@type': 'WebPage', name: 'Blog', url: SITE_URL + '/#blog' },
    { '@type': 'WebPage', name: 'FAQ', url: SITE_URL + '/#faq' },
    { '@type': 'WebPage', name: 'How We Build', url: SITE_URL + '/#approach' },
    { '@type': 'WebPage', name: 'About', url: SITE_URL + '/#about' },
    { '@type': 'WebPage', name: 'Start a Project', url: SITE_URL + '/#start' },
  ],
};

// ── Breadcrumb factory ─────────────────────────────────────

function makeBreadcrumb(pageName: string, pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: pageName,
        item: pageUrl,
      },
    ],
  };
}

// ── Home Page ──────────────────────────────────────────────

export const homePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': SITE_URL + '/#homepage',
  name: 'Digital Jaywalking | Multi-Agent AI Systems, Architected for Your Business',
  description:
    'We build custom multi-agent AI systems that run your business operations. From single workflow automation to full operational backbones. Based in Durham, NC. Serving businesses nationwide.',
  url: SITE_URL,
  isPartOf: { '@id': SITE_URL + '/#website' },
  about: { '@id': SITE_URL + '/#organization' },
  primaryImageOfPage: { '@type': 'ImageObject', url: LOGO_URL },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.hero-description'],
  },
  mainEntity: { '@id': SITE_URL + '/#organization' },
  keywords: [
    'multi-agent AI systems',
    'AI automation',
    'business workflow automation',
    'custom AI agents',
    'AI architecture',
    'AI operations',
    'Durham NC AI company',
    'AI for small business',
    'AI consulting',
  ],
};

// ── Studio Page (Services + Pricing) ───────────────────────

export const studioPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'The Studio | Digital Jaywalking',
  description:
    'Explore our three service tiers for multi-agent AI system builds. Agent Core for single workflows, Agent System for connected processes, Agent Scale for full operational backbones. Plus Agent Blueprint for architecture-only consulting.',
  url: SITE_URL + '/#studio',
  isPartOf: { '@id': SITE_URL + '/#website' },
  keywords: [
    'AI system pricing',
    'multi-agent AI services',
    'AI workflow automation cost',
    'AI consulting services',
    'business AI solutions',
    'custom AI development',
    'agent system build',
  ],
};

export const studioBreadcrumb = makeBreadcrumb('The Studio', SITE_URL + '/#studio');

export const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Digital Jaywalking Service Tiers',
  description:
    'Three tiers of multi-agent AI system builds scaled to business complexity, plus an architecture-only consulting option.',
  numberOfItems: 4,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        '@id': SITE_URL + '/#agent-core',
        name: 'Agent Core',
        description:
          'One workflow. One team. We automate a specific bottleneck end-to-end with a focused agent system built around that one workflow. Includes discovery session, targeted system architecture, full build and deployment, system access via dashboards and commands, and handoff walkthrough with documentation. Best for solo founders and small teams with one process that needs to stop being manual.',
        provider: { '@id': SITE_URL + '/#organization' },
        serviceType: 'Single Workflow AI Automation',
        category: 'AI System Build',
        areaServed: { '@type': 'Country', name: 'United States' },
        audience: {
          '@type': 'Audience',
          audienceType:
            'Solo founders and small teams with one workflow that needs automation',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Agent Core Deliverables',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Discovery session' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Targeted system architecture' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full build and deployment' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dashboard and command access' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Handoff walkthrough with documentation' } },
          ],
        },
        termsOfService: 'Pricing scales based on project complexity and company size',
        serviceOutput: 'A fully deployed AI agent system automating one business workflow',
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        '@id': SITE_URL + '/#agent-system',
        name: 'Agent System',
        description:
          'Multiple workflows, connected. We orchestrate multiple processes so they communicate, hand off tasks, and share context automatically. Includes deep discovery across multiple workflows, cross-functional agent orchestration, complex integrations with your existing tools (CRMs, project management, communication platforms), agents that communicate and coordinate autonomously, and system access with dashboards and documentation. Best for growing businesses with multi-step processes across teams.',
        provider: { '@id': SITE_URL + '/#organization' },
        serviceType: 'Multi-Workflow AI Orchestration System',
        category: 'AI System Build',
        areaServed: { '@type': 'Country', name: 'United States' },
        audience: {
          '@type': 'Audience',
          audienceType:
            'Growing businesses with multi-step processes across teams that need coordination without manual handoffs',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Agent System Deliverables',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Deep multi-workflow discovery' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cross-functional agent orchestration' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tool and platform integrations' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Autonomous agent coordination' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dashboards and documentation' } },
          ],
        },
        termsOfService: 'Pricing scales based on project complexity and company size',
        serviceOutput: 'A deployed multi-agent system connecting multiple business workflows',
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Service',
        '@id': SITE_URL + '/#agent-scale',
        name: 'Agent Scale',
        description:
          'Full operational backbone. Your entire business runs on a system, not on you remembering what to do next. We build the operational infrastructure that connects departments, automates decisions, and keeps everything moving. Includes comprehensive discovery across departments, full operational system architecture with dozens of specialized agents, cross-department workflows and data flow, monitoring, logging, and system health dashboards, and ongoing architecture support during rollout. Best for established businesses ready to replace scattered tools with one intelligent connected system.',
        provider: { '@id': SITE_URL + '/#organization' },
        serviceType: 'Full Operational AI Infrastructure',
        category: 'AI System Build',
        areaServed: { '@type': 'Country', name: 'United States' },
        audience: {
          '@type': 'Audience',
          audienceType:
            'Established businesses ready to replace scattered tools and manual processes with one intelligent, connected system',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Agent Scale Deliverables',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Comprehensive cross-department discovery' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full operational system architecture' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cross-department workflows and data flow' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Monitoring, logging, and health dashboards' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ongoing architecture support during rollout' } },
          ],
        },
        termsOfService: 'Pricing scales based on project complexity and company size',
        serviceOutput: 'A comprehensive AI operational backbone running your entire business',
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Service',
        '@id': SITE_URL + '/#agent-blueprint',
        name: 'Agent Blueprint',
        description:
          'Architecture-only engagement. We run a discovery session, map your workflows, and deliver a detailed system design document showing exactly how your agent system should work. Includes 2 follow-up check-in calls. Perfect for technical teams who want the roadmap before committing to a build, or for teams who want to build it themselves with a professional blueprint.',
        provider: { '@id': SITE_URL + '/#organization' },
        serviceType: 'AI System Architecture Consulting',
        category: 'AI Consulting',
        areaServed: { '@type': 'Country', name: 'United States' },
        audience: {
          '@type': 'Audience',
          audienceType:
            'Technical teams and business owners who want professional AI architecture design before committing to a full build',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Agent Blueprint Deliverables',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Discovery session' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Workflow mapping' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Detailed system design document' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '2 follow-up check-in calls' } },
          ],
        },
        serviceOutput: 'A detailed system design document with architecture blueprint',
      },
    },
  ],
};

// ── Academy Page ───────────────────────────────────────────

export const academyPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'The Academy | Digital Jaywalking',
  description:
    'Practical, hands-on workshops and courses on AI agent systems, workflow automation, and building your first multi-agent system. Designed for professionals, business owners, and anyone who wants to understand AI beyond the hype. Monthly workshops, bi-monthly course series, community-driven topics.',
  url: SITE_URL + '/#academy',
  isPartOf: { '@id': SITE_URL + '/#website' },
  keywords: [
    'AI workshops',
    'AI training',
    'learn AI agents',
    'AI course',
    'multi-agent workshop',
    'AI for business owners',
    'hands-on AI training',
    'Durham NC AI workshop',
    'AI education',
    'autonomous agents course',
    'build AI agents',
  ],
};

export const academyBreadcrumb = makeBreadcrumb('The Academy', SITE_URL + '/#academy');

export const academyOrgSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': SITE_URL + '/#academy-org',
  name: 'Digital Jaywalking Academy',
  description:
    'The teaching arm of Digital Jaywalking. We offer practical, hands-on workshops, course series, and kids programs on AI, agent systems, workflow automation, and technology. All taught by people who build multi-agent AI systems professionally. Monthly workshops with rotating topics, bi-monthly course series for deeper learning, and community-driven topic selection.',
  parentOrganization: { '@id': SITE_URL + '/#organization' },
  url: SITE_URL + '/#academy',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'City', name: 'Durham' },
  ],
  educationalCredentialAwarded: 'Certificate of Completion',
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'Certificate',
    name: 'Digital Jaywalking Academy Certificate of Completion',
  },
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceType: 'In-person and virtual workshops',
    availableLanguage: 'English',
  },
  knowsAbout: [
    'AI agent systems',
    'Multi-agent architecture',
    'Workflow automation',
    'Autonomous AI agents',
    'AI for business',
    'Building agent systems',
    'AI meetings and productivity',
  ],
};

// Individual course schemas for maximum discoverability
export const courseSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': SITE_URL + '/#workshop-meetings',
    name: 'Run Better Meetings with AI',
    description:
      'A hands-on workshop for professionals who want to transform how they plan, run, and follow up on meetings using AI tools. Half-day format (4 hours), small group for personal attention, practical exercises you can apply immediately, templates and frameworks included.',
    provider: { '@id': SITE_URL + '/#academy-org' },
    educationalLevel: 'Beginner to Intermediate',
    courseMode: 'In-person and virtual',
    timeRequired: 'PT4H',
    isAccessibleForFree: false,
    inLanguage: 'en-US',
    teaches: [
      'AI-powered meeting preparation',
      'Automated meeting follow-up',
      'AI note-taking and summarization',
      'Meeting templates and frameworks',
    ],
    audience: {
      '@type': 'Audience',
      audienceType: 'Professionals and business owners',
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Mixed',
      courseWorkload: 'PT4H',
    },
    availabilityStarts: '2026',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/PreOrder',
      description: 'Registration opening soon',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': SITE_URL + '/#course-autonomous-agents',
    name: 'Autonomous AI Agents: What Works, What Does Not, and When to Use Them',
    description:
      'Cut through the hype. Learn what autonomous agents actually do, where they fall short, and when they are worth using. A 90-minute session that separates real capability from marketing noise.',
    provider: { '@id': SITE_URL + '/#academy-org' },
    educationalLevel: 'Beginner to Intermediate',
    courseMode: 'In-person and virtual',
    timeRequired: 'PT1H30M',
    isAccessibleForFree: false,
    inLanguage: 'en-US',
    teaches: [
      'What autonomous AI agents actually do',
      'Limitations and failure modes of AI agents',
      'When to use autonomous agents vs simpler automation',
      'Evaluating AI agent tools and frameworks',
    ],
    audience: {
      '@type': 'Audience',
      audienceType: 'Professionals and business owners curious about AI agents',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': SITE_URL + '/#course-ai-for-business',
    name: 'AI for Your Business: Where to Start',
    description:
      'A practical introduction for business owners who know AI matters but do not know where to begin. Half-day workshop that gives you a clear picture of where AI fits into your business and what to do first.',
    provider: { '@id': SITE_URL + '/#academy-org' },
    educationalLevel: 'Beginner',
    courseMode: 'In-person and virtual',
    timeRequired: 'PT4H',
    isAccessibleForFree: false,
    inLanguage: 'en-US',
    teaches: [
      'Where AI fits into your business',
      'Identifying automation opportunities',
      'AI adoption strategy for small business',
      'Evaluating AI tools and services',
    ],
    audience: {
      '@type': 'Audience',
      audienceType: 'Business owners new to AI',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': SITE_URL + '/#course-first-agent-system',
    name: 'Building Your First Agent System',
    description:
      'For technical founders and builders who want to understand multi-agent architecture from the ground up. A 2-session course series that takes you from concepts to a working agent system.',
    provider: { '@id': SITE_URL + '/#academy-org' },
    educationalLevel: 'Intermediate',
    courseMode: 'In-person and virtual',
    timeRequired: 'PT8H',
    isAccessibleForFree: false,
    inLanguage: 'en-US',
    teaches: [
      'Multi-agent system architecture fundamentals',
      'Designing agent communication and coordination',
      'Building and deploying agent systems',
      'Testing and monitoring agents in production',
    ],
    audience: {
      '@type': 'Audience',
      audienceType: 'Technical founders and developers',
    },
  },
];

// ── Blog Page ──────────────────────────────────────────────

export const blogPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': SITE_URL + '/#blog',
  name: 'Against Traffic | Digital Jaywalking Blog',
  description:
    'Insights on multi-agent AI systems, workflow automation, operational architecture, and the future of AI-powered business operations. Written by the team that builds these systems every day.',
  url: SITE_URL + '/#blog',
  publisher: { '@id': SITE_URL + '/#organization' },
  isPartOf: { '@id': SITE_URL + '/#website' },
  inLanguage: 'en-US',
  about: [
    'Multi-agent AI systems',
    'AI agent architecture',
    'Workflow automation',
    'AI strategy',
    'Business AI adoption',
    'Custom GPT vs AI agents',
    'Open source AI tools',
  ],
  blogPost: [
    {
      '@type': 'BlogPosting',
      headline: 'What a Multi-Agent System Actually Looks Like in Practice',
      description:
        'Most people hear "multi-agent system" and picture science fiction. The reality is more practical, more useful, and honestly more interesting than that.',
      author: { '@id': SITE_URL + '/#organization' },
      publisher: { '@id': SITE_URL + '/#organization' },
      inLanguage: 'en-US',
      about: ['Multi-agent AI systems', 'AI architecture', 'practical AI'],
      keywords: ['multi-agent system', 'AI in practice', 'AI architecture example'],
    },
    {
      '@type': 'BlogPosting',
      headline: 'Your Custom GPT Is Not an Agent. Here Is the Difference.',
      description:
        'There is a growing confusion between chatbots, custom GPTs, and actual AI agents. They are not the same thing, and the distinction matters for your business.',
      author: { '@id': SITE_URL + '/#organization' },
      publisher: { '@id': SITE_URL + '/#organization' },
      inLanguage: 'en-US',
      about: ['Custom GPT', 'AI agents', 'chatbots vs agents'],
      keywords: ['custom GPT', 'AI agent difference', 'chatbot vs agent', 'GPT vs agent'],
    },
    {
      '@type': 'BlogPosting',
      headline: 'Why We Do Not Use Open-Source Autonomous Agent Tools',
      description:
        'Open-source agent frameworks are exciting. They are also fragile, undocumented, and changing every week. Here is why we chose a different path.',
      author: { '@id': SITE_URL + '/#organization' },
      publisher: { '@id': SITE_URL + '/#organization' },
      inLanguage: 'en-US',
      about: ['Open source AI tools', 'AI agent frameworks', 'AI security'],
      keywords: ['open source AI agents', 'AI framework security', 'custom AI vs open source'],
    },
  ],
};

export const blogBreadcrumb = makeBreadcrumb('Blog', SITE_URL + '/#blog');

// ── FAQ Page ───────────────────────────────────────────────

export const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: 'Frequently Asked Questions | Digital Jaywalking',
  description:
    'Answers to common questions about multi-agent AI systems, our service tiers (Agent Core, Agent System, Agent Scale), pricing, the Agent Blueprint, workshops, the Digital Jaywalking Academy, and how we work with clients.',
  url: SITE_URL + '/#faq',
  isPartOf: { '@id': SITE_URL + '/#website' },
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does Digital Jaywalking actually build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We build multi-agent AI systems. These are custom-built networks of AI agents that automate your business workflows, coordinate tasks across teams, and handle processes that currently require manual effort. Every system is designed specifically for your business.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a multi-agent system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A multi-agent system is a group of AI agents, each responsible for a specific task, that work together as a coordinated team. They communicate, share context, and hand off work to each other automatically. Think of it like a team of specialists that never sleeps and never drops the ball.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Agent Core, Agent System, and Agent Scale?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agent Core automates one specific workflow for one team. Agent System connects multiple workflows so they coordinate automatically across your business. Agent Scale is a full operational backbone that replaces manual processes across departments with one intelligent, connected system. Each tier builds on the complexity of the one before it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an Agent Blueprint?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An Agent Blueprint is an architecture-only engagement. We run a discovery session, map your workflows, and deliver a detailed system design document showing exactly how your agent system should work. It includes 2 follow-up check-in calls. From there you can build it yourself or hire us to build it.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a typical project take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agent Core projects usually take 2 to 4 weeks. Agent System builds take 4 to 8 weeks. Agent Scale projects are scoped individually based on complexity and number of departments involved. Agent Blueprint is typically delivered within 1 to 2 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pricing scales based on project complexity and company size. A solo coaching business is not the same investment as a company with 300 employees. We work with small to medium businesses and price fairly for every stage. Contact us for a conversation about your specific needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I need changes after the system is delivered?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every build includes a handoff period where you can test, ask questions, and request adjustments. For ongoing needs, our Ongoing Optimization retainer keeps your system evolving with your business.',
      },
    },
    {
      '@type': 'Question',
      name: 'What tools and platforms do you integrate with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We integrate with the tools your business already uses. CRMs, project management platforms, communication tools, databases, APIs, and more. During discovery, we map your existing tech stack and design integrations around it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of workshops and courses does the Digital Jaywalking Academy offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer practical, hands-on workshops and course series focused on AI topics that matter to businesses and professionals. Topics include AI-powered meetings, autonomous agents, building your first agent system, and AI for business owners. Monthly workshops with rotating topics and bi-monthly course series for deeper learning. All taught by people who build these systems every day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need technical experience to attend a workshop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most of our workshops are designed for professionals and business owners, not developers. We teach concepts clearly and focus on practical takeaways you can use immediately. Course series that go deeper into technical topics will note that in the description.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Digital Jaywalking based?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are based in Durham, North Carolina. We work with clients remotely and are open to businesses anywhere in the United States.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get started?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fill out the form on our Start a Project page or email us at info@digitaljaywalking.com. We will review your details and follow up within a few days to schedule a discovery conversation.',
      },
    },
  ],
};

export const faqBreadcrumb = makeBreadcrumb('FAQ', SITE_URL + '/#faq');

// ── Approach Page ──────────────────────────────────────────

export const approachPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'How We Build | Digital Jaywalking',
  description:
    'Our four-step process for building multi-agent AI systems: Discover, Architect, Build, and Support. Simple, transparent, no surprises. Every project follows this process.',
  url: SITE_URL + '/#approach',
  isPartOf: { '@id': SITE_URL + '/#website' },
  keywords: [
    'AI development process',
    'how AI systems are built',
    'AI project methodology',
    'multi-agent system development',
  ],
};

export const approachBreadcrumb = makeBreadcrumb('How We Build', SITE_URL + '/#approach');

export const howToBuildSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How Digital Jaywalking Builds Multi-Agent AI Systems',
  description:
    'Our four-step process for designing, building, and deploying multi-agent AI systems for businesses. From initial discovery through ongoing support.',
  totalTime: 'P2W',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Discover',
      text: 'We learn your workflows, challenges, and goals. We ask real questions and listen carefully. This is where we map your processes, identify bottlenecks, and understand what success looks like for your business.',
      url: SITE_URL + '/#approach',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Architect',
      text: 'We design the agent system. You see the full blueprint before anything gets built. This includes agent definitions, workflow maps, integration plans, and a clear picture of how everything connects.',
      url: SITE_URL + '/#approach',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Build',
      text: 'We bring the system to life. Clean code. Tested agents. Stable foundations. Each agent is built, tested, and connected to form your complete operational system.',
      url: SITE_URL + '/#approach',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Support',
      text: 'We walk with you after launch. Updates. Refinements. Guidance when you need it. Every build includes a handoff period, and our Ongoing Optimization retainer is available for businesses that want continued evolution.',
      url: SITE_URL + '/#approach',
    },
  ],
};

// ── About Page ─────────────────────────────────────────────

export const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About | Digital Jaywalking',
  description:
    'Meet the team behind Digital Jaywalking. Co-founded by Lenise and Julian, we design and build multi-agent AI systems with intention, care, and respect for your business. Based in Durham, NC.',
  url: SITE_URL + '/#about',
  isPartOf: { '@id': SITE_URL + '/#website' },
  about: { '@id': SITE_URL + '/#organization' },
  mainEntity: { '@id': SITE_URL + '/#organization' },
};

export const aboutBreadcrumb = makeBreadcrumb('About', SITE_URL + '/#about');

// ── Start a Project Page ───────────────────────────────────

export const startProjectPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Start a Project | Digital Jaywalking',
  description:
    'Tell us about your business and what you need. Fill out our project form or email info@digitaljaywalking.com. We will follow up within a few days to schedule a discovery conversation about building your multi-agent AI system.',
  url: SITE_URL + '/#start',
  isPartOf: { '@id': SITE_URL + '/#website' },
  mainEntity: { '@id': SITE_URL + '/#organization' },
  potentialAction: {
    '@type': 'CommunicateAction',
    name: 'Start a project with Digital Jaywalking',
    target: SITE_URL + '/#start',
    description: 'Fill out the form to start a conversation about your multi-agent AI system',
  },
};

export const startBreadcrumb = makeBreadcrumb('Start a Project', SITE_URL + '/#start');

// ── Page metadata for document head ────────────────────────

export interface PageMeta {
  title: string;
  description: string;
  noindex?: boolean;
}

export const PAGE_META: Record<string, PageMeta> = {
  home: {
    title: 'Digital Jaywalking | Multi-Agent AI Systems, Architected for Your Business',
    description:
      'We build custom multi-agent AI systems that run your business operations. From single workflow automation to full operational backbones. Based in Durham, NC.',
  },
  studio: {
    title: 'The Studio | Services and Pricing | Digital Jaywalking',
    description:
      'Multi-agent AI systems built around your business. Agent Core, Agent System, Agent Scale, and Agent Blueprint. Custom architecture at every scale.',
  },
  academy: {
    title: 'The Academy | AI Workshops and Courses | Digital Jaywalking',
    description:
      'Hands-on workshops and courses on AI agent systems, workflow automation, and multi-agent architecture. For professionals, business owners, and builders.',
  },
  blog: {
    title: 'Against Traffic | Blog | Digital Jaywalking',
    description:
      'Insights on multi-agent AI systems, workflow automation, operational architecture, and AI-powered business operations from the Digital Jaywalking team.',
  },
  faq: {
    title: 'FAQ | Digital Jaywalking',
    description:
      'Answers about multi-agent AI systems, Agent Core, Agent System, Agent Scale, pricing, workshops, and working with Digital Jaywalking.',
  },
  approach: {
    title: 'How We Build | Our Process | Digital Jaywalking',
    description:
      'Discover, Architect, Build, Support. Our four-step process for designing and deploying multi-agent AI systems for your business.',
  },
  about: {
    title: 'About | Meet the Team | Digital Jaywalking',
    description:
      'Co-founded by Lenise and Julian. We build multi-agent AI systems with intention, care, and respect for your business. Based in Durham, NC.',
  },
  start: {
    title: 'Start a Project | Digital Jaywalking',
    description:
      'Tell us about your business and start a conversation about building your multi-agent AI system. Email info@digitaljaywalking.com or fill out our form.',
  },
  discovery: {
    title: 'Build Brief | Digital Jaywalking',
    description:
      'Describe the process you want to automate. Tell us what you are dealing with and what you want built. No technical knowledge required.',
    noindex: true,
  },
};
