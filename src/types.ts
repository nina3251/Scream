export type Community = 'legacy' | 'core-four' | 'killers' | 'secondary';

export const communityDescriptions: Record<Community, { name: string; desc: string }> = {
  'legacy': {
    name: 'Woodsboro Legacy',
    desc: 'Likovi povezani s izvornim masakrima koji služe kao čuvari pravila i arhiv znanja o preživljavanju.'
  },
  'core-four': {
    name: 'The Carpenter Node',
    desc: 'Nova generacija preživjelih ("Core Four"). Njihova zajednica se temelji na međusobnom povjerenju, zajedničkoj traumi i nasljeđu.'
  },
  'killers': {
    name: 'The Stab Parasites',
    desc: 'Skupine ubojica pod maskom Ghostfacea vođeni privlačnošću slave, osvetom ili ideološkim rekonstruiranjem filmova.'
  },
  'secondary': {
    name: 'Secondary / Gosti',
    desc: 'Sporedni likovi, prolazne mete ili mostovi između generacija koji nemaju potpunu zaštitu unutar primarnih krugova.'
  }
};

export interface Character {
  id: string;
  name: string;
  movies: number[]; // [1, 2, 3, 4, 5, 6]
  role: 'main' | 'secondary' | 'killer' | 'victim' | 'legacy';
  status: 'alive' | 'dead';
  description: string;
  imageUrl?: string;
  community: Community;
}

export interface Relationship {
  source: string; // id
  target: string; // id
  type: 'family' | 'romantic' | 'friendship' | 'killer-victim' | 'rivalry';
  strength: number;
  reason?: string;
}

export interface ScreamData {
  characters: Character[];
  relationships: Relationship[];
}
