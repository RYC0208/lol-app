export type ChampionList = {
  [key: string]: Champion;
};

export interface Champion {
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  lore: string;
  spells: Spell[];
  skins: Skin[];
}

interface Spell {
  id: string;
  name: string;
  description: string;
  tooltip: string;
}

export interface Skin {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
}
