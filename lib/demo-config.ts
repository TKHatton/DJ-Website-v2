export interface Story {
  id: string;
  title: string;
  tagline: string;
  characters: string[];
  protagonist: string;
  setting: string;
  defaultDestination: string;
  defaultMission: string;
  destinationSuggestions: string[];
  missionSuggestions: string[];
  color: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  description: string;
  color: string;
  pixels: number[][];
  thinkingMessages: string[];
}

export const stories: Story[] = [
  {
    id: 'red-riding-hood',
    title: 'Little Red Riding Hood',
    tagline: 'A journey through the enchanted forest',
    characters: ['Red Riding Hood', 'The Wolf', 'Grandmother', 'The Woodsman'],
    protagonist: 'Red Riding Hood',
    setting: 'An enchanted forest with winding paths, ancient trees, and hidden clearings',
    defaultDestination: "Grandmother's cottage at the edge of the forest",
    defaultMission: 'Deliver food and medicine to Grandmother',
    destinationSuggestions: [
      'The Crystal Caverns beneath Thunder Mountain',
      'The Sky Market floating above the clouds',
      "The Witch's Tower at the edge of the world",
      'The Frozen Lake where wishes come true',
    ],
    missionSuggestions: [
      'Find and return a lost golden key',
      'Deliver a secret message no one else can carry',
      'Map the uncharted forest before it shifts again',
      'Rescue a friend captured by shadow merchants',
    ],
    color: '#E2725B',
    bgClass: 'bg-terracotta/10',
    borderClass: 'border-terracotta/30',
    textClass: 'text-terracotta',
  },
  {
    id: 'three-pigs',
    title: 'The Three Little Pigs',
    tagline: 'An architectural adventure in building and strategy',
    characters: ['First Pig', 'Second Pig', 'Third Pig', 'The Big Bad Wolf'],
    protagonist: 'The Three Pigs',
    setting: 'A rolling countryside with villages, workshops, and wild meadows',
    defaultDestination: 'The hilltop where they will build their new homes',
    defaultMission: 'Build shelters strong enough to withstand the wolf',
    destinationSuggestions: [
      'An abandoned castle that needs rebuilding',
      'A floating island that sinks a little each day',
      'The underground city beneath the old well',
      'A volcanic island where nothing stays still',
    ],
    missionSuggestions: [
      "Build a machine that can predict the wolf's next move",
      'Create a network of safe houses across the kingdom',
      'Design a trap that catches problems before they arrive',
      'Construct a bridge between two warring villages',
    ],
    color: '#4A7C7A',
    bgClass: 'bg-teal/10',
    borderClass: 'border-teal/30',
    textClass: 'text-teal',
  },
  {
    id: 'hansel-gretel',
    title: 'Hansel and Gretel',
    tagline: 'A tale of navigation, wit, and sweet danger',
    characters: ['Hansel', 'Gretel', 'The Witch', 'The Father'],
    protagonist: 'Hansel and Gretel',
    setting: 'A vast, shifting forest where paths change and nothing is what it seems',
    defaultDestination: 'The gingerbread house deep in the darkest part of the forest',
    defaultMission: 'Find their way home after being abandoned',
    destinationSuggestions: [
      'The Library of Lost Things buried under the roots',
      'The Night Market that only appears during storms',
      'The Garden of Forgotten Names beyond the thorns',
      'The Lighthouse at the center of the maze',
    ],
    missionSuggestions: [
      "Decode the witch's spell book to free trapped children",
      'Find ingredients for a potion that reveals hidden paths',
      'Collect the seven stones that unlock the forest gate',
      'Outsmart the forest itself to earn safe passage',
    ],
    color: '#EBC06D',
    bgClass: 'bg-honey/10',
    borderClass: 'border-honey/30',
    textClass: 'text-honey',
  },
];

export const agents: Agent[] = [
  {
    id: 'world-builder',
    name: 'World Builder',
    role: 'Environment Architect',
    description: 'Creates the world, establishes rules, and sets the stage',
    color: '#E2725B',
    pixels: [
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 1, 2, 2, 2, 2, 1, 0],
      [0, 1, 2, 2, 2, 2, 1, 0],
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 1, 1, 1, 1, 0, 1],
      [0, 0, 1, 0, 0, 1, 0, 0],
    ],
    thinkingMessages: [
      'Sculpting the landscape...',
      'Establishing world rules...',
      'Painting the environment...',
    ],
  },
  {
    id: 'pathfinder',
    name: 'Pathfinder',
    role: 'Route Strategist',
    description: 'Maps the journey and identifies key waypoints',
    color: '#4A7C7A',
    pixels: [
      [0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 1, 2, 2, 1, 0, 0],
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 0, 1, 0, 0, 1, 0, 0],
      [0, 1, 1, 0, 0, 1, 1, 0],
    ],
    thinkingMessages: [
      'Charting the course...',
      'Mapping waypoints...',
      'Calculating the route...',
    ],
  },
  {
    id: 'strategist',
    name: 'Strategist',
    role: 'Mission Planner',
    description: 'Develops the plan of action and resource needs',
    color: '#6B4E71',
    pixels: [
      [0, 0, 2, 2, 2, 2, 0, 0],
      [0, 2, 2, 2, 2, 2, 2, 0],
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 0, 1, 0, 1, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 0, 1, 0, 0, 1, 0, 0],
      [0, 1, 1, 0, 0, 1, 1, 0],
    ],
    thinkingMessages: [
      'Analyzing options...',
      'Weighing tradeoffs...',
      'Formulating the plan...',
    ],
  },
  {
    id: 'chaos-engine',
    name: 'Chaos Engine',
    role: 'Obstacle Generator',
    description: 'Introduces unexpected events and challenges',
    color: '#DC2626',
    pixels: [
      [0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 1, 1, 0, 0, 0, 0],
      [0, 1, 1, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 0, 0],
    ],
    thinkingMessages: [
      'Generating chaos...',
      'Selecting obstacles...',
      'Disrupting the plan...',
    ],
  },
  {
    id: 'moral-weaver',
    name: 'Moral Weaver',
    role: 'Lesson Architect',
    description: 'Threads the moral lesson naturally through events',
    color: '#EBC06D',
    pixels: [
      [0, 1, 0, 0, 0, 0, 1, 0],
      [1, 0, 1, 0, 0, 1, 0, 1],
      [1, 0, 0, 1, 1, 0, 0, 1],
      [0, 1, 0, 1, 1, 0, 1, 0],
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    thinkingMessages: [
      'Threading the lesson...',
      'Connecting events to meaning...',
      'Weaving the moral...',
    ],
  },
  {
    id: 'storyteller',
    name: 'Storyteller',
    role: 'Narrative Composer',
    description: 'Weaves all agent outputs into one cohesive tale',
    color: '#1A1A1A',
    pixels: [
      [1, 1, 1, 1, 1, 0, 0, 0],
      [1, 2, 2, 2, 1, 0, 0, 0],
      [1, 2, 0, 2, 1, 0, 0, 0],
      [1, 2, 2, 2, 1, 0, 0, 0],
      [1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0],
    ],
    thinkingMessages: [
      'Weaving the narrative...',
      'Composing the tale...',
      'Bringing it all together...',
    ],
  },
];

export const obstaclePool: Record<string, string[]> = {
  natural: [
    'A sudden thunderstorm floods the path and washes away all trail markers',
    'An earthquake splits the ground, creating a ravine that blocks the way forward',
    'A thick magical fog rolls in, making everything look identical in every direction',
    'A wildfire sweeps across the main road, forcing a dangerous detour',
    'An avalanche of crystallized sugar buries the only known trail',
  ],
  creature: [
    'A talking fox blocks the way and demands the answer to an impossible riddle',
    'A dragon circles overhead, hunting for the same treasure',
    'A swarm of enchanted fireflies creates illusions that look like real paths',
    'A friendly but confused giant sits on the only bridge and refuses to move',
    'A shape-shifting raven follows them, repeating everything they say to their enemies',
  ],
  magical: [
    'The forest shifts its layout and now all paths lead back to the starting point',
    'A sleeping spell begins to take effect, making it harder to stay awake with each step',
    'Gravity reverses in a clearing, sending everything upward',
    'Everything the protagonist touches turns to glass for one hour',
    'A mirror appears showing a version of the future where the mission has already failed',
  ],
  social: [
    'A group of traveling merchants warns that the destination no longer exists',
    'A lost child begs for help, pulling the protagonist completely off course',
    'A celebration in the nearest village blocks all exits until dawn',
    "A wanted poster with the protagonist's face appears on every tree",
    'A rival team is pursuing the exact same mission with a head start',
  ],
  temporal: [
    'Time freezes for everyone except the protagonist, but it will resume in five minutes',
    'The protagonist relives the last hour with no memory of having done it before',
    'Night falls instantly and lasts only eight minutes before dawn breaks',
    'Seasons change rapidly, cycling from summer to winter in moments',
    'An hourglass appears counting down to something unknown, and it cannot be stopped',
  ],
};

export const moralOptions: string[] = [
  'True courage is asking for help when you need it',
  'Kindness to strangers opens unexpected doors',
  'Not every problem is solved by fighting',
  'The longest path is sometimes the wisest',
  'Trust is earned through actions, not words',
  'Mistakes are not failures. They are teachers.',
  'Strength comes from knowing your own limits',
  'The journey matters more than the destination',
  'Honesty, even when it costs something, builds something greater',
  'Being different is not a weakness. It is a strategy.',
];

export function pickRandomObstacles(count: number = 2): string[] {
  const categories = Object.keys(obstaclePool);
  const picked: string[] = [];
  const usedCategories = new Set<string>();

  while (picked.length < count && usedCategories.size < categories.length) {
    const cat = categories[Math.floor(Math.random() * categories.length)];
    if (usedCategories.has(cat)) continue;
    usedCategories.add(cat);
    const options = obstaclePool[cat];
    picked.push(options[Math.floor(Math.random() * options.length)]);
  }

  return picked;
}

const RATE_LIMIT_KEY = 'dj_demo_uses';
const MAX_USES = 3;

export function getUsesRemaining(): number {
  try {
    const used = parseInt(localStorage.getItem(RATE_LIMIT_KEY) || '0', 10);
    return Math.max(0, MAX_USES - used);
  } catch {
    return MAX_USES;
  }
}

export function recordUse(): number {
  try {
    const used = parseInt(localStorage.getItem(RATE_LIMIT_KEY) || '0', 10);
    const newUsed = used + 1;
    localStorage.setItem(RATE_LIMIT_KEY, String(newUsed));
    return Math.max(0, MAX_USES - newUsed);
  } catch {
    return 0;
  }
}
