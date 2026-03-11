import type { Plugin } from 'vite';
import { readFileSync } from 'fs';
import { resolve } from 'path';

function loadEnvKey(): string {
  try {
    const envPath = resolve(process.cwd(), '.env');
    const envContent = readFileSync(envPath, 'utf-8');
    const match = envContent.match(/ANTHROPIC_API_KEY=(.+)/);
    return match ? match[1].trim() : '';
  } catch {
    return '';
  }
}

interface ClaudeMessage {
  role: 'user' | 'assistant';
  content: string;
}

async function callClaude(
  apiKey: string,
  system: string,
  messages: ClaudeMessage[],
  maxTokens: number = 1500
): Promise<string> {
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

  const data = await response.json() as { content?: Array<{ type: string; text?: string }> };
  const textBlock = data.content?.find(
    (block: { type: string }) => block.type === 'text'
  );
  return (textBlock as { text?: string })?.text || '';
}

function parseJSON(text: string): Record<string, string> {
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    try {
      return JSON.parse(jsonMatch[0]);
    } catch {
      // Fall through
    }
  }
  const result: Record<string, string> = {};
  const fields = ['worldBuilder', 'pathfinder', 'strategist', 'chaosEngine', 'moralWeaver', 'storyteller'];
  for (const field of fields) {
    const regex = new RegExp(`"${field}"\\s*:\\s*"((?:[^"\\\\]|\\\\.)*)"`);
    const match = text.match(regex);
    if (match) {
      result[field] = match[1].replace(/\\n/g, '\n').replace(/\\"/g, '"');
    }
  }
  return result;
}

export function apiPlugin(): Plugin {
  return {
    name: 'dev-api-handler',
    configureServer(server) {
      server.middlewares.use('/api/generate-story', async (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Content-Type', 'application/json');

        if (req.method === 'OPTIONS') {
          res.statusCode = 204;
          res.end();
          return;
        }

        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }

        const apiKey = loadEnvKey();
        if (!apiKey) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: 'ANTHROPIC_API_KEY not found in .env file' }));
          return;
        }

        let body = '';
        for await (const chunk of req) {
          body += chunk;
        }

        try {
          const data = JSON.parse(body);
          const { storyTitle, protagonist, characters, setting, destination, mission, moral, obstacles } = data;

          console.log('[API] Starting story generation...');

          // Call 1: World Builder + Pathfinder + Strategist
          const call1System = 'You are simulating three AI agents working on a collaborative fairy tale creation project. You must respond with valid JSON containing exactly three fields. Each field value should be 2-4 sentences. Do not use em dashes anywhere. Use periods, commas, or restructure sentences instead.\n\nAgent 1 - World Builder: Take the fairy tale setting and the custom destination. Create a vivid world description. Establish what makes this version of the world different from the traditional tale.\nOutput field: "worldBuilder"\n\nAgent 2 - Pathfinder: Based on the world, plan the character\'s journey. Define 3-4 key waypoints from start to destination. Note potential hazards.\nOutput field: "pathfinder"\n\nAgent 3 - Strategist: Based on the mission and the world/path, develop the character\'s plan. What resources or allies might they need? What is their approach?\nOutput field: "strategist"\n\nRespond ONLY with a JSON object. No markdown, no code fences, no extra text.';

          const call1Prompt = `Fairy Tale: ${storyTitle}\nProtagonist: ${protagonist}\nCharacters: ${characters.join(', ')}\nSetting: ${setting}\nDestination: ${destination}\nMission: ${mission}\n\nGenerate the three agent outputs as JSON.`;

          console.log('[API] Call 1: World Builder + Pathfinder + Strategist...');
          const call1Result = await callClaude(apiKey, call1System, [{ role: 'user', content: call1Prompt }]);
          const call1Data = parseJSON(call1Result);
          console.log('[API] Call 1 complete.');

          // Call 2: Chaos Engine + Moral Weaver
          const call2System = 'You are simulating two AI agents. You have context from three previous agents. You must respond with valid JSON containing exactly two fields. Each field value should be 2-4 sentences. Do not use em dashes anywhere.\n\nAgent 4 - Chaos Engine: You MUST incorporate these specific obstacles into the story. Describe how each one disrupts the character\'s plan and creates unexpected challenges. Be creative and dramatic.\nOutput field: "chaosEngine"\n\nAgent 5 - Moral Weaver: The story should teach this moral lesson. Explain how the obstacles and events will naturally lead to this realization. Identify the key moment of understanding.\nOutput field: "moralWeaver"\n\nRespond ONLY with a JSON object. No markdown, no code fences, no extra text.';

          const obstacleList = obstacles.map((o: string, i: number) => `${i + 1}. ${o}`).join('\n');
          const call2Prompt = `Previous agent context:\nWorld: ${call1Data.worldBuilder || 'A transformed fairy tale world'}\nPath: ${call1Data.pathfinder || 'A journey with several waypoints'}\nStrategy: ${call1Data.strategist || 'A careful plan of approach'}\n\nObstacles that MUST appear:\n${obstacleList}\n\nMoral lesson: ${moral}\n\nGenerate the two agent outputs as JSON.`;

          console.log('[API] Call 2: Chaos Engine + Moral Weaver...');
          const call2Result = await callClaude(apiKey, call2System, [{ role: 'user', content: call2Prompt }]);
          const call2Data = parseJSON(call2Result);
          console.log('[API] Call 2 complete.');

          // Call 3: Storyteller
          const call3System = 'You are the Storyteller agent. You have received outputs from 5 previous AI agents. Your job is to weave everything into one cohesive, engaging fairy tale narrative.\n\nRules:\n- Write in classic fairy tale style. Start with "Once upon a time" or a similar opening.\n- Incorporate ALL elements from previous agents: the world, the path, the strategy, the obstacles, and the moral.\n- The obstacles from the Chaos Engine must appear naturally in the story as surprising events.\n- The moral must be earned through the character\'s journey, not stated flatly.\n- Write 500 to 800 words.\n- NEVER use em dashes. Use periods, commas, colons, or restructure sentences instead.\n- Keep the original fairy tale characters but in the new context.\n- End with a clear resolution and the moral lesson woven in.\n- Use vivid, sensory language.\n- Write in third person past tense.\n\nRespond with ONLY the story text. No JSON, no labels, no markdown formatting.';

          const call3Prompt = `Here are all the agent outputs to weave together:\n\nWORLD BUILDER: ${call1Data.worldBuilder || 'A transformed fairy tale world'}\n\nPATHFINDER: ${call1Data.pathfinder || 'A multi-stage journey'}\n\nSTRATEGIST: ${call1Data.strategist || 'A careful plan'}\n\nCHAOS ENGINE: ${call2Data.chaosEngine || 'Unexpected obstacles arise'}\n\nMORAL WEAVER: ${call2Data.moralWeaver || 'A lesson learned through experience'}\n\nStory: ${storyTitle}\nProtagonist: ${protagonist}\nCharacters: ${characters.join(', ')}\nMission: ${mission}\nDestination: ${destination}\nMoral: ${moral}\n\nWrite the complete story now.`;

          console.log('[API] Call 3: Storyteller...');
          const call3Result = await callClaude(apiKey, call3System, [{ role: 'user', content: call3Prompt }], 2500);
          console.log('[API] Call 3 complete. Story generated!');

          res.statusCode = 200;
          res.end(JSON.stringify({
            worldBuilder: call1Data.worldBuilder || 'The world has been reshaped for this tale.',
            pathfinder: call1Data.pathfinder || 'A journey of several stages awaits.',
            strategist: call1Data.strategist || 'A plan has been formed.',
            chaosEngine: call2Data.chaosEngine || 'Unexpected challenges emerged.',
            moralWeaver: call2Data.moralWeaver || 'The lesson will reveal itself.',
            storyteller: call3Result.trim(),
          }));
        } catch (error) {
          const message = error instanceof Error ? error.message : 'Unknown error occurred';
          console.error('[API] Error:', message);
          res.statusCode = 500;
          res.end(JSON.stringify({ error: message }));
        }
      });
    },
  };
}
