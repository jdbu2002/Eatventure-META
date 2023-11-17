export interface Clothing {
  name: string;
  rarity: Rarity;
  walkingSpeed?: MultiplayerObj;
  instantChance?: MultiplayerObj;
  perfectChance?: MultiplayerObj;
  cookingSpeed?: MultiplayerObj;
}

type Rarity = "Common" | "Epic" | "Legendary" | "Rare" | "Ultimate";

interface MultiplayerObj {
  solo?: number;
  team?: number;
}

export type ClothingWithProfit = Clothing & { profit: number };
export type ClothingWithWeight = ClothingWithProfit & { totalWeight: number };
