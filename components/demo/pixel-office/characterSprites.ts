import type { SpriteData } from './types';
import { Direction } from './types';

// Expanded Character Palette with 10 colors per character

export interface CharPalette {
  skin: string;
  skinShadow: string;
  shirt: string;
  shirtHighlight: string;
  pants: string;
  hair: string;
  hairHighlight: string;
  shoes: string;
  accessory: string;
  eyeColor: string;
}

export interface CharacterSprites {
  walk: Record<Direction, SpriteData[]>;
  typing: Record<Direction, SpriteData[]>;
}

// 6 palettes with diverse skin tones
export const CHARACTER_PALETTES: CharPalette[] = [
  {skin:'#FFCC99',skinShadow:'#DBA878',shirt:'#E2725B',shirtHighlight:'#F09880',pants:'#443322',hair:'#553322',hairHighlight:'#7A5533',shoes:'#222222',accessory:'#E2725B',eyeColor:'#553322'},
  {skin:'#A0764A',skinShadow:'#8B6139',shirt:'#4A7C7A',shirtHighlight:'#6B9E9B',pants:'#334444',hair:'#222222',hairHighlight:'#444444',shoes:'#222222',accessory:'#EBC06D',eyeColor:'#222222'},
  {skin:'#D4A574',skinShadow:'#B88B5A',shirt:'#6B4E71',shirtHighlight:'#8B6E91',pants:'#443355',hair:'#111111',hairHighlight:'#333333',shoes:'#333333',accessory:'#88BBDD',eyeColor:'#334455'},
  {skin:'#6B4A2E',skinShadow:'#5A3D24',shirt:'#DC2626',shirtHighlight:'#FF4444',pants:'#333333',hair:'#111111',hairHighlight:'#333333',shoes:'#222222',accessory:'#DC2626',eyeColor:'#1A1A1A'},
  {skin:'#C9A87C',skinShadow:'#B39468',shirt:'#EBC06D',shirtHighlight:'#FFD88A',pants:'#444433',hair:'#8B4513',hairHighlight:'#AA6633',shoes:'#333333',accessory:'#FFD700',eyeColor:'#6B8E23'},
  {skin:'#FFCC99',skinShadow:'#DBA878',shirt:'#3A3A3A',shirtHighlight:'#555555',pants:'#222222',hair:'#AA4422',hairHighlight:'#CC6644',shoes:'#333333',accessory:'#6B4E71',eyeColor:'#4488CC'},
];

type TC = 'hair'|'hairHL'|'skin'|'skinSh'|'shirt'|'shirtHL'|'pants'|'shoes'|'acc'|'eye'|'#FFFFFF'|'';

const TC_MAP: Record<string, TC> = {
  'H': 'hair', 'h': 'hairHL', 'K': 'skin', 'k': 'skinSh',
  'S': 'shirt', 's': 'shirtHL', 'P': 'pants', 'O': 'shoes',
  'A': 'acc', 'E': 'eye', 'W': '#FFFFFF', '.': '',
};

function p(s: string): TC[] {
  const result: TC[] = [];
  for (let i = 0; i < s.length; i++) {
    result.push(TC_MAP[s[i]] ?? '');
  }
  return result;
}

function frame(rows: string[]): TC[][] {
  return rows.map(r => p(r));
}

function resolve(tpl: TC[][], pal: CharPalette): SpriteData {
  return tpl.map(row =>
    row.map(cell => {
      switch (cell) {
        case 'hair': return pal.hair;
        case 'hairHL': return pal.hairHighlight;
        case 'skin': return pal.skin;
        case 'skinSh': return pal.skinShadow;
        case 'shirt': return pal.shirt;
        case 'shirtHL': return pal.shirtHighlight;
        case 'pants': return pal.pants;
        case 'shoes': return pal.shoes;
        case 'acc': return pal.accessory;
        case 'eye': return pal.eyeColor;
        case '#FFFFFF': return '#FFFFFF';
        case '': return '';
        default: return '';
      }
    })
  );
}

// Character 0: World Builder (broad, spiky hair, rolled sleeves)
const C0_DS: TC[][] = frame([
  '........................',
  '..........HhH...........',
  '........HHhHHHH.........',
  '.......HHHHHHHHH........',
  '.......HHHHHHHHH........',
  '.......HKKKKKKKH........',
  '........KKKKKKKK........',
  '........KWEKKEWE........',
  '........KKKkKKKK........',
  '.........KKKKKK.........',
  '..........kKKk..........',
  '..........KKKK..........',
  '........sSSSSSSs........',
  '.......SSSSSSSSSS.......',
  '......SSSSSSSSSSSS......',
  '......SSSSSSSSSSSS......',
  '......KKSSSSSSSSKK......',
  '.......KSSSSSSSSK.......',
  '........SSSSSSSS........',
  '........PPPPPPPP........',
  '........PPPPPPPP........',
  '........PPP..PPP........',
  '........PP....PP........',
  '........PP....PP........',
  '........PP....PP........',
  '........OO....OO........',
  '.......OOO....OOO.......',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
]);

const C0_US: TC[][] = frame([
  '........................',
  '..........HhH...........',
  '........HHhHHHH.........',
  '.......HHHHHHHHH........',
  '.......HHHHHHHHH........',
  '.......HHHHHHHHH........',
  '........HHHHHHHH........',
  '........HKHHKkHH........',
  '........KKKKKKKK........',
  '.........KKKKKK.........',
  '..........kKKk..........',
  '..........KKKK..........',
  '........sSSSSSSs........',
  '.......SSSSSSSSSS.......',
  '......SSSSSSSSSSSS......',
  '......SSSSSSSSSSSS......',
  '......KKSSSSSSSSKK......',
  '.......KSSSSSSSSK.......',
  '........SSSSSSSS........',
  '........PPPPPPPP........',
  '........PPPPPPPP........',
  '........PPP..PPP........',
  '........PP....PP........',
  '........PP....PP........',
  '........PP....PP........',
  '........OO....OO........',
  '.......OOO....OOO.......',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
]);

// Character 1: Pathfinder (slim, smooth hair, scarf)
const C1_DS: TC[][] = frame([
  '........................',
  '........................',
  '........HHHHHH..........',
  '.......HHHHHHHHH........',
  '.......HHHHHHHHH........',
  '.......HKKKKKKKH........',
  '........KKKKKKKK........',
  '........KWEKKEWE........',
  '........KKKkKKKK........',
  '.........KKKKKK.........',
  '..........kKKk..........',
  '.........AAKKAA.........',
  '.........sSSSSs.........',
  '........SSSSSSSS........',
  '........SSSSSSSS........',
  '........SSSSSSSS........',
  '........KSSSSSK.........',
  '.........SSSSSS.........',
  '.........SSSSSS.........',
  '.........PPPPPP.........',
  '.........PPPPPP.........',
  '.........PP..PP.........',
  '.........PP..PP.........',
  '.........PP..PP.........',
  '.........PP..PP.........',
  '.........OO..OO.........',
  '........OOO..OOO........',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
]);

const C1_US: TC[][] = frame([
  '........................',
  '........................',
  '........HHHHHH..........',
  '.......HHHHHHHHH........',
  '.......HHHHHHHHH........',
  '.......HHHHHHHHH........',
  '........HHHHHHHH........',
  '........HKHHKkHH........',
  '........KKKKKKKK........',
  '.........KKKKKK.........',
  '..........kKKk..........',
  '.........AAKKAA.........',
  '.........sSSSSs.........',
  '........SSSSSSSS........',
  '........SSSSSSSS........',
  '........SSSSSSSS........',
  '........KSSSSSK.........',
  '.........SSSSSS.........',
  '.........SSSSSS.........',
  '.........PPPPPP.........',
  '.........PPPPPP.........',
  '.........PP..PP.........',
  '.........PP..PP.........',
  '.........PP..PP.........',
  '.........PP..PP.........',
  '.........OO..OO.........',
  '........OOO..OOO........',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
]);

// Character 2: Strategist (standard, cropped hair, glasses)
const C2_DS: TC[][] = frame([
  '........................',
  '........................',
  '.........HHHHHH.........',
  '........HHHHHHHH........',
  '........HKKKKKKH........',
  '........KKKKKKKK........',
  '........AWEKKEWA........',
  '........KKKkKKKK........',
  '.........KKKKKK.........',
  '..........kKKk..........',
  '..........KKKK..........',
  '.........kKKKKk.........',
  '........sSSSSSSs........',
  '.......SSSSSSSSSS.......',
  '.......SSSSSSSSSS.......',
  '.......SSSSSSSSSS.......',
  '.......KSSSSSSSK........',
  '........SSSSSSSS........',
  '........SSSSSSSS........',
  '........PPPPPPPP........',
  '........PPPPPPPP........',
  '........PPP..PPP........',
  '........PP....PP........',
  '........PP....PP........',
  '........PP....PP........',
  '........OO....OO........',
  '.......OOO....OOO.......',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
]);

const C2_US: TC[][] = frame([
  '........................',
  '........................',
  '.........HHHHHH.........',
  '........HHHHHHHH........',
  '........HHHHHHHH........',
  '........HHHHHHHH........',
  '........HHKHKkHH........',
  '........KKKKKKKK........',
  '.........KKKKKK.........',
  '..........kKKk..........',
  '..........KKKK..........',
  '.........kKKKKk.........',
  '........sSSSSSSs........',
  '.......SSSSSSSSSS.......',
  '.......SSSSSSSSSS.......',
  '.......SSSSSSSSSS.......',
  '.......KSSSSSSSK........',
  '........SSSSSSSS........',
  '........SSSSSSSS........',
  '........PPPPPPPP........',
  '........PPPPPPPP........',
  '........PPP..PPP........',
  '........PP....PP........',
  '........PP....PP........',
  '........PP....PP........',
  '........OO....OO........',
  '.......OOO....OOO.......',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
]);

// Character 3: Chaos Engine (broad, wild big hair)
const C3_DS: TC[][] = frame([
  '......HhHH..HHhH........',
  '.....HHHhHHHHhHHH.......',
  '.....HHHHHHHHHHHH.......',
  '......HHHHHHHHHH........',
  '.......HHHHHHHHH........',
  '.......HKKKKKKKH........',
  '........KKKKKKKK........',
  '........KWEKKEWE........',
  '........KKKkKKKK........',
  '.........KKKKKK.........',
  '..........kKKk..........',
  '..........KKKK..........',
  '........sSSSSSSs........',
  '.......SSSSSSSSSS.......',
  '......SSSSSSSSSSSS......',
  '......SSSSSSSSSSSS......',
  '......KKSSSSSSSSKK......',
  '.......KSSSSSSSSK.......',
  '........SSSSSSSS........',
  '........PPPPPPPP........',
  '........PPPPPPPP........',
  '........PPP..PPP........',
  '........PP....PP........',
  '........PP....PP........',
  '........PP....PP........',
  '........OO....OO........',
  '.......OOO....OOO.......',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
]);

const C3_US: TC[][] = frame([
  '......HhHH..HHhH........',
  '.....HHHhHHHHhHHH.......',
  '.....HHHHHHHHHHHH.......',
  '......HHHHHHHHHH........',
  '.......HHHHHHHHH........',
  '.......HHHHHHHHH........',
  '........HHHHHHHH........',
  '........HKHHKkHH........',
  '........KKKKKKKK........',
  '.........KKKKKK.........',
  '..........kKKk..........',
  '..........KKKK..........',
  '........sSSSSSSs........',
  '.......SSSSSSSSSS.......',
  '......SSSSSSSSSSSS......',
  '......SSSSSSSSSSSS......',
  '......KKSSSSSSSSKK......',
  '.......KSSSSSSSSK.......',
  '........SSSSSSSS........',
  '........PPPPPPPP........',
  '........PPPPPPPP........',
  '........PPP..PPP........',
  '........PP....PP........',
  '........PP....PP........',
  '........PP....PP........',
  '........OO....OO........',
  '.......OOO....OOO.......',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
]);

// Character 4: Moral Weaver (slim, bun on top, earring)
const C4_DS: TC[][] = frame([
  '..........HHH...........',
  '.........HhHhH..........',
  '........HHHHHHHH........',
  '.......HHHHHHHHH........',
  '.......HKKKKKKKH........',
  '........KKKKKKKK........',
  '........KWEKKEWE........',
  '.......AKKKkKKKK........',
  '.........KKKKKK.........',
  '..........kKKk..........',
  '..........KKKK..........',
  '.........kKKKKk.........',
  '.........sSSSSs.........',
  '........SSSSSSSS........',
  '........SSSSSSSS........',
  '........SSSSSSSS........',
  '........KSSSSSK.........',
  '.........SSSSSS.........',
  '.........SSSSSS.........',
  '.........PPPPPP.........',
  '.........PPPPPP.........',
  '.........PP..PP.........',
  '.........PP..PP.........',
  '.........PP..PP.........',
  '.........PP..PP.........',
  '.........OO..OO.........',
  '........OOO..OOO........',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
]);

const C4_US: TC[][] = frame([
  '..........HHH...........',
  '.........HhHhH..........',
  '........HHHHHHHH........',
  '.......HHHHHHHHH........',
  '.......HHHHHHHHH........',
  '........HHHHHHHH........',
  '........HKHHKkHH........',
  '.......AKKKKKKKK........',
  '.........KKKKKK.........',
  '..........kKKk..........',
  '..........KKKK..........',
  '.........kKKKKk.........',
  '.........sSSSSs.........',
  '........SSSSSSSS........',
  '........SSSSSSSS........',
  '........SSSSSSSS........',
  '........KSSSSSK.........',
  '.........SSSSSS.........',
  '.........SSSSSS.........',
  '.........PPPPPP.........',
  '.........PPPPPP.........',
  '.........PP..PP.........',
  '.........PP..PP.........',
  '.........PP..PP.........',
  '.........PP..PP.........',
  '.........OO..OO.........',
  '........OOO..OOO........',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
]);

// Character 5: Storyteller (standard, beanie/hat in accessory color)
const C5_DS: TC[][] = frame([
  '.......AAAAAAAAAA.......',
  '......AAAAAAAAAAAA......',
  '......AAAAAAAAAAAA......',
  '.......HHHHHHHHH........',
  '.......HKKKKKKKH........',
  '........KKKKKKKK........',
  '........KWEKKEWE........',
  '........KKKkKKKK........',
  '.........KKKKKK.........',
  '..........kKKk..........',
  '..........KKKK..........',
  '.........kKKKKk.........',
  '........sSSSSSSs........',
  '.......SSSSSSSSSS.......',
  '.......SSSSSSSSSS.......',
  '.......SSSSSSSSSS.......',
  '.......KSSSSSSSK........',
  '........SSSSSSSS........',
  '........SSSSSSSS........',
  '........PPPPPPPP........',
  '........PPPPPPPP........',
  '........PPP..PPP........',
  '........PP....PP........',
  '........PP....PP........',
  '........PP....PP........',
  '........OO....OO........',
  '.......OOO....OOO.......',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
]);

const C5_US: TC[][] = frame([
  '.......AAAAAAAAAA.......',
  '......AAAAAAAAAAAA......',
  '......AAAAAAAAAAAA......',
  '.......HHHHHHHHH........',
  '.......HHHHHHHHH........',
  '........HHHHHHHH........',
  '........HKHHKkHH........',
  '........KKKKKKKK........',
  '.........KKKKKK.........',
  '..........kKKk..........',
  '..........KKKK..........',
  '.........kKKKKk.........',
  '........sSSSSSSs........',
  '.......SSSSSSSSSS.......',
  '.......SSSSSSSSSS.......',
  '.......SSSSSSSSSS.......',
  '.......KSSSSSSSK........',
  '........SSSSSSSS........',
  '........SSSSSSSS........',
  '........PPPPPPPP........',
  '........PPPPPPPP........',
  '........PPP..PPP........',
  '........PP....PP........',
  '........PP....PP........',
  '........PP....PP........',
  '........OO....OO........',
  '.......OOO....OOO.......',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
]);

// Shared walk step bodies by build type (20 rows each, rows 12-31)

// Broad step body (walk step, legs spread)
const BROAD_STEP: TC[][] = frame([
  '........sSSSSSSs........',
  '.......SSSSSSSSSS.......',
  '......SSSSSSSSSSSS......',
  '......SSSSSSSSSSSS......',
  '......KKSSSSSSSSKK......',
  '.......KSSSSSSSSK.......',
  '........SSSSSSSS........',
  '........PPPPPPPP........',
  '........PPPPPPPP........',
  '.......PPP....PPP.......',
  '......PP........PP......',
  '......PP........PP......',
  '......PP........PP......',
  '......PP........PP......',
  '.....OO..........OO.....',
  '.....OOO........OOO.....',
  '........................',
  '........................',
  '........................',
  '........................',
]);

// Standard step body
const STANDARD_STEP: TC[][] = frame([
  '........sSSSSSSs........',
  '.......SSSSSSSSSS.......',
  '.......SSSSSSSSSS.......',
  '.......SSSSSSSSSS.......',
  '.......KSSSSSSSK........',
  '........SSSSSSSS........',
  '........SSSSSSSS........',
  '........PPPPPPPP........',
  '........PPPPPPPP........',
  '........PPP..PPP........',
  '.......PP......PP.......',
  '.......PP......PP.......',
  '.......PP......PP.......',
  '.......PP......PP.......',
  '......OO........OO......',
  '......OOO......OOO......',
  '........................',
  '........................',
  '........................',
  '........................',
]);

// Slim step body
const SLIM_STEP: TC[][] = frame([
  '.........sSSSSs.........',
  '........SSSSSSSS........',
  '........SSSSSSSS........',
  '........SSSSSSSS........',
  '........KSSSSSK.........',
  '.........SSSSSS.........',
  '.........SSSSSS.........',
  '.........PPPPPP.........',
  '.........PPPPPP.........',
  '........PPP..PPP........',
  '........PP....PP........',
  '........PP....PP........',
  '........PP....PP........',
  '........PP....PP........',
  '.......OO......OO.......',
  '.......OOO....OOO.......',
  '........................',
  '........................',
  '........................',
  '........................',
]);

// Shared right view standing frames by build type (32 rows)

// Broad right stand
const RIGHT_STAND_B: TC[][] = frame([
  '........................',
  '........................',
  '........HHHHHH..........',
  '.......HHHHHHHHH........',
  '.......HHHHHHHHH........',
  '.......KKKKKKKHH........',
  '.......KKWKKKKH.........',
  '.......KKKKKKKK.........',
  '........KKKKKK..........',
  '..........KK............',
  '..........KK............',
  '..........KK............',
  '........sSSSSSSs........',
  '.......SSSSSSSSSS.......',
  '......SSSSSSSSSSSS......',
  '......SSSSSSSSSSSS......',
  '.......KSSSSSSSK........',
  '........SSSSSSSS........',
  '........SSSSSSSS........',
  '........PPPPPPPP........',
  '........PPPPPPPP........',
  '........PPP..PPP........',
  '........PP....PP........',
  '........PP....PP........',
  '........PP....PP........',
  '........OO....OO........',
  '.......OOO....OOO.......',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
]);

// Broad right step
const RIGHT_STEP_B: TC[][] = frame([
  '........................',
  '........................',
  '........HHHHHH..........',
  '.......HHHHHHHHH........',
  '.......HHHHHHHHH........',
  '.......KKKKKKKHH........',
  '.......KKWKKKKH.........',
  '.......KKKKKKKK.........',
  '........KKKKKK..........',
  '..........KK............',
  '..........KK............',
  '..........KK............',
  '........sSSSSSSs........',
  '.......SSSSSSSSSS.......',
  '......SSSSSSSSSSSS......',
  '......SSSSSSSSSSSS......',
  '.......KSSSSSSSK........',
  '........SSSSSSSS........',
  '........SSSSSSSS........',
  '........PPPPPPPP........',
  '........PPPPPPPP........',
  '.......PPP....PPP.......',
  '......PP........PP......',
  '......PP........PP......',
  '......PP........PP......',
  '.....OO..........OO.....',
  '.....OOO........OOO.....',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
]);

// Standard right stand
const RIGHT_STAND_S: TC[][] = frame([
  '........................',
  '........................',
  '........HHHHHH..........',
  '.......HHHHHHHHH........',
  '.......HHHHHHHHH........',
  '.......KKKKKKKHH........',
  '.......KKWKKKKH.........',
  '.......KKKKKKKK.........',
  '........KKKKKK..........',
  '..........KK............',
  '..........KK............',
  '..........KK............',
  '........sSSSSSSs........',
  '.......SSSSSSSSSS.......',
  '.......SSSSSSSSSS.......',
  '.......SSSSSSSSSS.......',
  '.......KSSSSSSSK........',
  '........SSSSSSSS........',
  '........SSSSSSSS........',
  '........PPPPPPPP........',
  '........PPPPPPPP........',
  '........PPP..PPP........',
  '........PP....PP........',
  '........PP....PP........',
  '........PP....PP........',
  '........OO....OO........',
  '.......OOO....OOO.......',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
]);

// Standard right step
const RIGHT_STEP_S: TC[][] = frame([
  '........................',
  '........................',
  '........HHHHHH..........',
  '.......HHHHHHHHH........',
  '.......HHHHHHHHH........',
  '.......KKKKKKKHH........',
  '.......KKWKKKKH.........',
  '.......KKKKKKKK.........',
  '........KKKKKK..........',
  '..........KK............',
  '..........KK............',
  '..........KK............',
  '........sSSSSSSs........',
  '.......SSSSSSSSSS.......',
  '.......SSSSSSSSSS.......',
  '.......SSSSSSSSSS.......',
  '.......KSSSSSSSK........',
  '........SSSSSSSS........',
  '........SSSSSSSS........',
  '........PPPPPPPP........',
  '........PPPPPPPP........',
  '........PPP..PPP........',
  '.......PP......PP.......',
  '.......PP......PP.......',
  '.......PP......PP.......',
  '......OO........OO......',
  '......OOO......OOO......',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
]);

// Slim right stand
const RIGHT_STAND_L: TC[][] = frame([
  '........................',
  '........................',
  '........HHHHHH..........',
  '.......HHHHHHHHH........',
  '.......HHHHHHHHH........',
  '.......KKKKKKKHH........',
  '.......KKWKKKKH.........',
  '.......KKKKKKKK.........',
  '........KKKKKK..........',
  '..........KK............',
  '..........KK............',
  '..........KK............',
  '.........sSSSSs.........',
  '........SSSSSSSS........',
  '........SSSSSSSS........',
  '........SSSSSSSS........',
  '........KSSSSSK.........',
  '.........SSSSSS.........',
  '.........SSSSSS.........',
  '.........PPPPPP.........',
  '.........PPPPPP.........',
  '.........PP..PP.........',
  '.........PP..PP.........',
  '.........PP..PP.........',
  '.........PP..PP.........',
  '.........OO..OO.........',
  '........OOO..OOO........',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
]);

// Slim right step
const RIGHT_STEP_L: TC[][] = frame([
  '........................',
  '........................',
  '........HHHHHH..........',
  '.......HHHHHHHHH........',
  '.......HHHHHHHHH........',
  '.......KKKKKKKHH........',
  '.......KKWKKKKH.........',
  '.......KKKKKKKK.........',
  '........KKKKKK..........',
  '..........KK............',
  '..........KK............',
  '..........KK............',
  '.........sSSSSs.........',
  '........SSSSSSSS........',
  '........SSSSSSSS........',
  '........SSSSSSSS........',
  '........KSSSSSK.........',
  '.........SSSSSS.........',
  '.........SSSSSS.........',
  '.........PPPPPP.........',
  '.........PPPPPP.........',
  '........PPP..PPP........',
  '........PP....PP........',
  '........PP....PP........',
  '........PP....PP........',
  '.......OO......OO.......',
  '.......OOO....OOO.......',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
]);

// Shared typing body templates by build type (20 rows, seated)

// Broad type body frame 1 (arms out symmetrically)
const TYPE_BODY_B1: TC[][] = frame([
  '........sSSSSSSs........',
  '.......SSSSSSSSSS.......',
  '......SSSSSSSSSSSS......',
  '......SSSSSSSSSSSS......',
  '.....KKSSSSSSSSSSKK.....',
  '......KSSSSSSSSSSK......',
  '........SSSSSSSS........',
  '........PPPPPPPP........',
  '........PPPPPPPP........',
  '........PPPPPPPP........',
  '........PP....PP........',
  '........OO....OO........',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
]);

// Broad type body frame 2 (arms shifted slightly)
const TYPE_BODY_B2: TC[][] = frame([
  '........sSSSSSSs........',
  '.......SSSSSSSSSS.......',
  '......SSSSSSSSSSSS......',
  '......SSSSSSSSSSSS......',
  '......KSSSSSSSSSSKK.....',
  '.......SSSSSSSSSS.K.....',
  '........SSSSSSSS........',
  '........PPPPPPPP........',
  '........PPPPPPPP........',
  '........PPPPPPPP........',
  '........PP....PP........',
  '........OO....OO........',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
]);

// Standard type body frame 1
const TYPE_BODY_S1: TC[][] = frame([
  '........sSSSSSSs........',
  '.......SSSSSSSSSS.......',
  '.......SSSSSSSSSS.......',
  '.......SSSSSSSSSS.......',
  '......KKSSSSSSSSSKK.....',
  '.......KSSSSSSSSK.......',
  '........SSSSSSSS........',
  '........PPPPPPPP........',
  '........PPPPPPPP........',
  '........PPPPPPPP........',
  '........PP....PP........',
  '........OO....OO........',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
]);

// Standard type body frame 2
const TYPE_BODY_S2: TC[][] = frame([
  '........sSSSSSSs........',
  '.......SSSSSSSSSS.......',
  '.......SSSSSSSSSS.......',
  '.......SSSSSSSSSS.......',
  '.......KSSSSSSSSKK......',
  '........SSSSSSSS.K......',
  '........SSSSSSSS........',
  '........PPPPPPPP........',
  '........PPPPPPPP........',
  '........PPPPPPPP........',
  '........PP....PP........',
  '........OO....OO........',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
]);

// Slim type body frame 1
const TYPE_BODY_L1: TC[][] = frame([
  '.........sSSSSs.........',
  '........SSSSSSSS........',
  '........SSSSSSSS........',
  '........SSSSSSSS........',
  '.......KKSSSSSSKK.......',
  '........KSSSSSK.........',
  '.........SSSSSS.........',
  '.........PPPPPP.........',
  '.........PPPPPP.........',
  '.........PPPPPP.........',
  '.........PP..PP.........',
  '.........OO..OO.........',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
]);

// Slim type body frame 2
const TYPE_BODY_L2: TC[][] = frame([
  '.........sSSSSs.........',
  '........SSSSSSSS........',
  '........SSSSSSSS........',
  '........SSSSSSSS........',
  '........KSSSSSSKK.......',
  '.........SSSSSS.K.......',
  '.........SSSSSS.........',
  '.........PPPPPP.........',
  '.........PPPPPP.........',
  '.........PPPPPP.........',
  '.........PP..PP.........',
  '.........OO..OO.........',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
  '........................',
]);

// Character definitions: down-stand, up-stand, and body type
interface CharDef {
  ds: TC[][];
  us: TC[][];
  bt: 'b' | 's' | 'l';
}

const DEFS: CharDef[] = [
  { ds: C0_DS, us: C0_US, bt: 'b' },
  { ds: C1_DS, us: C1_US, bt: 'l' },
  { ds: C2_DS, us: C2_US, bt: 's' },
  { ds: C3_DS, us: C3_US, bt: 'b' },
  { ds: C4_DS, us: C4_US, bt: 'l' },
  { ds: C5_DS, us: C5_US, bt: 's' },
];

const STEP_BODIES: Record<string, TC[][]> = {
  b: BROAD_STEP,
  s: STANDARD_STEP,
  l: SLIM_STEP,
};

const RIGHT_STANDS: Record<string, TC[][]> = {
  b: RIGHT_STAND_B,
  s: RIGHT_STAND_S,
  l: RIGHT_STAND_L,
};

const RIGHT_STEPS: Record<string, TC[][]> = {
  b: RIGHT_STEP_B,
  s: RIGHT_STEP_S,
  l: RIGHT_STEP_L,
};

const TYPE_BODIES_1: Record<string, TC[][]> = {
  b: TYPE_BODY_B1,
  s: TYPE_BODY_S1,
  l: TYPE_BODY_L1,
};

const TYPE_BODIES_2: Record<string, TC[][]> = {
  b: TYPE_BODY_B2,
  s: TYPE_BODY_S2,
  l: TYPE_BODY_L2,
};

// Build a step frame: character head (rows 0-11) + step body (20 rows)
function buildStep(stand: TC[][], stepBody: TC[][]): TC[][] {
  return [...stand.slice(0, 12), ...stepBody];
}

// Mirror the leg area (rows 19+) to create the opposite step
function mirrorLegs(f: TC[][]): TC[][] {
  return f.map((row, i) => (i >= 19 ? [...row].reverse() : [...row]));
}

const spriteCache = new Map<number, CharacterSprites>();

export function getCharacterSprites(paletteIndex: number): CharacterSprites {
  const cached = spriteCache.get(paletteIndex);
  if (cached) return cached;

  const idx = paletteIndex % CHARACTER_PALETTES.length;
  const pal = CHARACTER_PALETTES[idx];
  const def = DEFS[idx];

  // Walk step frames
  const stepBody = STEP_BODIES[def.bt];
  const downStep = buildStep(def.ds, stepBody);
  const downStepMirror = mirrorLegs(downStep);
  const upStep = buildStep(def.us, stepBody);
  const upStepMirror = mirrorLegs(upStep);

  // Right view frames
  const rightStand = RIGHT_STANDS[def.bt];
  const rightStep = RIGHT_STEPS[def.bt];

  // Type frames
  const typeBody1 = TYPE_BODIES_1[def.bt];
  const typeBody2 = TYPE_BODIES_2[def.bt];
  const typeDown1 = buildStep(def.ds, typeBody1);
  const typeDown2 = buildStep(def.ds, typeBody2);
  const typeUp1 = buildStep(def.us, typeBody1);
  const typeUp2 = buildStep(def.us, typeBody2);

  // Resolve all templates to actual colors
  const walkDown = [
    resolve(downStep, pal),
    resolve(def.ds, pal),
    resolve(downStepMirror, pal),
    resolve(def.ds, pal),
  ];
  const walkUp = [
    resolve(upStep, pal),
    resolve(def.us, pal),
    resolve(upStepMirror, pal),
    resolve(def.us, pal),
  ];
  const walkRight = [
    resolve(rightStep, pal),
    resolve(rightStand, pal),
    resolve(rightStep, pal),
    resolve(rightStand, pal),
  ];
  const walkLeft = walkRight.map(f => f.map(row => [...row].reverse()));

  const typeDownFrames = [resolve(typeDown1, pal), resolve(typeDown2, pal)];
  const typeUpFrames = [resolve(typeUp1, pal), resolve(typeUp2, pal)];
  const typeRightFrames = [resolve(rightStand, pal), resolve(rightStand, pal)];
  const typeLeftFrames = typeRightFrames.map(f => f.map(row => [...row].reverse()));

  const sprites: CharacterSprites = {
    walk: {
      [Direction.DOWN]: walkDown,
      [Direction.UP]: walkUp,
      [Direction.RIGHT]: walkRight,
      [Direction.LEFT]: walkLeft,
    },
    typing: {
      [Direction.DOWN]: typeDownFrames,
      [Direction.UP]: typeUpFrames,
      [Direction.RIGHT]: typeRightFrames,
      [Direction.LEFT]: typeLeftFrames,
    },
  };

  spriteCache.set(paletteIndex, sprites);
  return sprites;
}
