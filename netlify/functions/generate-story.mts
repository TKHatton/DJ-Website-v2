interface StoryRequest {
  storyId: string;
  storyTitle: string;
  protagonist: string;
  characters: string[];
  setting: string;
  destination: string;
  mission: string;
  moral: string;
  obstacles: string[];
}

interface ClaudeMessage {
  role: 'user' | 'assistant';
  content: string;
}

async function callClaude(
  system: string,
  messages: ClaudeMessage[],
  maxTokens: number = 1500
): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY is not configured');
  }

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: maxTokens,
      system,
      messages,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Claude API error: ${response.status} ${error}`);
  }

  const data = await response.json();
  const textBlock = data.content?.find(
    (block: { type: string }) => block.type === 'text'
  );
  return textBlock?.text || '';
}

function parseJSON(text: string): Record<string, string> {
  // Try to find JSON in the response
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    try {
      return JSON.parse(jsonMatch[0]);
    } catch {
      // Fall through to manual parsing
    }
  }

  // Manual extraction by looking for field names
  const result: Record<string, string> = {};
  const fields = [
    'worldBuilder',
    'pathfinder',
    'strategist',
    'chaosEngine',
    'moralWeaver',
    'storyteller',
  ];

  for (const field of fields) {
    const regex = new RegExp(
      `"${field}"\\s*:\\s*"((?:[^"\\\\]|\\\\.)*)"`
    );
    const match = text.match(regex);
    if (match) {
      result[field] = match[1].replace(/\\n/g, '\n').replace(/\\"/g, '"');
    }
  }

  return result;
}

export default async (req: Request) => {
  // CORS headers
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers }
    );
  }

  try {
    const body: StoryRequest = await req.json();
    const {
      storyTitle,
      protagonist,
      characters,
      setting,
      destination,
      mission,
      moral,
      obstacles,
    } = body;

    // ─── Call 1: World Builder + Pathfinder + Strategist ───

    const call1System = `You are simulating three AI agents working on a collaborative fairy tale creation project. You must respond with valid JSON containing exactly three fields. Each field value should be 2-4 sentences. Do not use em dashes anywhere. Use periods, commas, or restructure sentences instead. Keep the tone fun, light, and adventurous. Think Pixar, not Brothers Grimm. No dark, sad, or heavy themes.

Agent 1 - World Builder: Take the fairy tale setting and the custom destination. Create a vivid world description. Establish what makes this version of the world different from the traditional tale.
Output field: "worldBuilder"

Agent 2 - Pathfinder: Based on the world, plan the character's journey. Define 3-4 key waypoints from start to destination. Note potential hazards.
Output field: "pathfinder"

Agent 3 - Strategist: Based on the mission and the world/path, develop the character's plan. What resources or allies might they need? What is their approach?
Output field: "strategist"

Respond ONLY with a JSON object. No markdown, no code fences, no extra text.`;

    const call1Prompt = `Fairy Tale: ${storyTitle}
Protagonist: ${protagonist}
Characters: ${characters.join(', ')}
Setting: ${setting}
Destination: ${destination}
Mission: ${mission}

Generate the three agent outputs as JSON.`;

    const call1Result = await callClaude(call1System, [
      { role: 'user', content: call1Prompt },
    ]);
    const call1Data = parseJSON(call1Result);

    // ─── Call 2: Chaos Engine + Moral Weaver ───

    const call2System = `You are simulating two AI agents. You have context from three previous agents. You must respond with valid JSON containing exactly two fields. Each field value should be 2-4 sentences. Do not use em dashes anywhere. Keep the tone fun, light, playful, and adventurous. Tension comes from comedy and cleverness, never from sadness or hardship.

Agent 4 - Chaos Engine: You MUST incorporate these specific obstacles into the story. Describe how each one disrupts the character's plan and creates unexpected challenges. Be creative and dramatic.
Output field: "chaosEngine"

Agent 5 - Moral Weaver: The story should teach this moral lesson. Explain how the obstacles and events will naturally lead to this realization. Identify the key moment of understanding.
Output field: "moralWeaver"

Respond ONLY with a JSON object. No markdown, no code fences, no extra text.`;

    const call2Prompt = `Previous agent context:
World: ${call1Data.worldBuilder || 'A transformed fairy tale world'}
Path: ${call1Data.pathfinder || 'A journey with several waypoints'}
Strategy: ${call1Data.strategist || 'A careful plan of approach'}

Obstacles that MUST appear:
${obstacles.map((o, i) => `${i + 1}. ${o}`).join('\n')}

Moral lesson: ${moral}

Generate the two agent outputs as JSON.`;

    const call2Result = await callClaude(call2System, [
      { role: 'user', content: call2Prompt },
    ]);
    const call2Data = parseJSON(call2Result);

    // ─── Call 3: Storyteller ───

    const call3System = `You are the Storyteller agent. You have received outputs from 5 previous AI agents. Your job is to weave everything into one cohesive, engaging fairy tale narrative.

Rules:
- Write at an 8th grade reading level. Use simple, vivid words. Short sentences mixed with medium ones.
- Keep the tone FUN, playful, and adventurous. Think Pixar, not Brothers Grimm.
- Tension should come from comedy, adventure, and cleverness. Never from sadness, hardship, or fear.
- Start with a fun, hooky opening. "Once upon a time" is fine but not required.
- Write 250 to 400 words. Keep it tight and punchy. Every sentence should be interesting.
- NEVER use em dashes. Use periods, commas, colons, or restructure sentences instead.
- Make the story feel fresh and different from the original fairy tale. Do not retell the classic plot.
- Incorporate ALL elements from previous agents: the world, the path, the strategy, the obstacles, and the moral.
- The obstacles should feel like funny or exciting surprises, not threats.
- The moral should be earned through the character's choices, woven in naturally, not stated as a lesson.
- End with a satisfying, upbeat resolution.
- Use vivid sensory details. Write in third person past tense.

Respond with ONLY the story text. No JSON, no labels, no markdown formatting.`;

    const call3Prompt = `Here are all the agent outputs to weave together:

WORLD BUILDER: ${call1Data.worldBuilder || 'A transformed fairy tale world'}

PATHFINDER: ${call1Data.pathfinder || 'A multi-stage journey'}

STRATEGIST: ${call1Data.strategist || 'A careful plan'}

CHAOS ENGINE: ${call2Data.chaosEngine || 'Unexpected obstacles arise'}

MORAL WEAVER: ${call2Data.moralWeaver || 'A lesson learned through experience'}

Story: ${storyTitle}
Protagonist: ${protagonist}
Characters: ${characters.join(', ')}
Mission: ${mission}
Destination: ${destination}
Moral: ${moral}

Write the complete story now.`;

    const call3Result = await callClaude(
      call3System,
      [{ role: 'user', content: call3Prompt }],
      1500
    );

    // ─── Return all outputs ───

    return new Response(
      JSON.stringify({
        worldBuilder:
          call1Data.worldBuilder || 'The world has been reshaped for this tale.',
        pathfinder:
          call1Data.pathfinder || 'A journey of several stages awaits.',
        strategist:
          call1Data.strategist || 'A plan has been formed.',
        chaosEngine:
          call2Data.chaosEngine || 'Unexpected challenges emerged.',
        moralWeaver:
          call2Data.moralWeaver || 'The lesson will reveal itself.',
        storyteller: call3Result.trim(),
      }),
      { status: 200, headers }
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Generate story error:', message);

    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers }
    );
  }
};

export const config = {
  path: '/api/generate-story',
};
