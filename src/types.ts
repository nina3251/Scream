export type Community = 'legacy' | 'core-four' | 'killers' | 'secondary';

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
}

export interface ScreamData {
  characters: Character[];
  relationships: Relationship[];
}
