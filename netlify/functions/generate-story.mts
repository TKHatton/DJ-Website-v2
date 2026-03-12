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

async function callClaude(
  system: string,
  messages: { role: 'user' | 'assistant'; content: string }[],
  maxTokens: number = 4000
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

function parseResponse(text: string): {
  agentOutputs: Record<string, string>;
  story: string;
} {
  let agentOutputs: Record<string, string> = {};
  let story = '';

  // Look for the STORY: marker to split the response
  const storyMarker = text.indexOf('STORY:');

  if (storyMarker !== -1) {
    const jsonPart = text.substring(0, storyMarker);
    story = text.substring(storyMarker + 6).trim();

    // Parse the JSON from the first part
    const jsonMatch = jsonPart.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      try {
        agentOutputs = JSON.parse(jsonMatch[0]);
      } catch {
        // Manual field extraction as fallback
        const fields = ['worldBuilder', 'pathfinder', 'strategist', 'chaosEngine', 'moralWeaver'];
        for (const field of fields) {
          const regex = new RegExp(`"${field}"\s*:\s*"((?:[^"\\]|\\.)*)"`, 's');
          const match = jsonPart.match(regex);
          if (match) {
            agentOutputs[field] = match[1]
              .replace(/\n/g, '\n')
              .replace(/\\"/g, '"');
          }
        }
      }
    }
  } else {
    // No STORY: marker. Try to find JSON and treat everything after as story.
    const jsonMatch = text.match(/\{[\s\S]*?\}/);
    if (jsonMatch) {
      try {
        agentOutputs = JSON.parse(jsonMatch[0]);
      } catch {
        // ignore
      }
      story = text.substring(text.indexOf(jsonMatch[0]) + jsonMatch[0].length).trim();
    } else {
      // No JSON found at all, treat entire response as story
      story = text.trim();
    }
  }

  return { agentOutputs, story };
}

export default async (req: Request) => {
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

    // Single API call that produces all 6 agent outputs + story
    const system = `You are a team of 6 AI agents collaborating to create a fairy tale. You will produce ALL outputs in a single response.

IMPORTANT RULES:
- NEVER use em dashes anywhere. Use periods, commas, colons, or restructure sentences instead.
- Keep everything fun, playful, and adventurous. Think Pixar, not Brothers Grimm.
- Tension comes from comedy and cleverness, never sadness or hardship.

First, output a JSON object with these 5 fields (2-3 sentences each):
- "worldBuilder": A vivid, unique version of the story world. What makes it different from the traditional tale.
- "pathfinder": 3-4 key waypoints in the character journey. Potential funny hazards along the way.
- "strategist": The character plan, resources, allies, and approach to the mission.
- "chaosEngine": How the specific obstacles disrupt the plan in funny, surprising ways.
- "moralWeaver": How the obstacles and events naturally lead to the moral lesson.

Then write "STORY:" on its own line, followed by the complete fairy tale.

Story rules:
- 8th grade reading level. Simple, vivid words. Short and medium sentences.
- FUN, playful, adventurous tone. Pixar, not Brothers Grimm.
- Tension from comedy, adventure, cleverness. Never from sadness, hardship, or fear.
- 250 to 400 words. Tight and punchy. Every sentence should be interesting.
- Make it feel fresh and different from the original fairy tale.
- Incorporate the world, path, strategy, obstacles, and moral from the agent outputs above.
- Obstacles should feel like funny or exciting surprises, not threats.
- The moral should be earned through choices, woven naturally, never stated as a lesson.
- End with a satisfying, upbeat resolution.
- Vivid sensory details. Third person past tense.
- Start with a fun, hooky opening.`;

    const prompt = `Fairy Tale: ${storyTitle}
Protagonist: ${protagonist}
Characters: ${characters.join(', ')}
Setting: ${setting}
Destination: ${destination}
Mission: ${mission}
Moral: ${moral}
Obstacles:
${obstacles.map((o, i) => `${i + 1}. ${o}`).join('\n')}

Generate all 6 agent outputs now.`;

    const result = await callClaude(system, [
      { role: 'user', content: prompt },
    ]);

    const { agentOutputs, story } = parseResponse(result);

    return new Response(
      JSON.stringify({
        worldBuilder: agentOutputs.worldBuilder || 'The world has been reshaped for this tale.',
        pathfinder: agentOutputs.pathfinder || 'A journey of several stages awaits.',
        strategist: agentOutputs.strategist || 'A plan has been formed.',
        chaosEngine: agentOutputs.chaosEngine || 'Unexpected challenges emerged.',
        moralWeaver: agentOutputs.moralWeaver || 'The lesson will reveal itself.',
        storyteller: story || 'The story is being written...',
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
