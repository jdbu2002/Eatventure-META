import { writeFileSync } from "fs";
import { CartesianProduct } from "js-combinatorics";

import { hatsData, RarityProfits, suitsData, toolsData } from "./data";
import type { Clothing, ClothingWithProfit, ClothingWithWeight } from "./types";

/*
  These weights are arbitrary and can be changed to suit your needs
  In this case, I'm prioritizing perfect team chance and instant team chance
  over everything else. That's because Perfect food is x6 multiplier and
  instant food is literally no waiting time for cooking food.
*/
const WEIGHTS = {
  profit: 1,
  cookingSpeed: {
    solo: 0,
    team: 0,
  },
  walkingSpeed: {
    solo: 0,
    team: 0,
  },
  instantChance: {
    solo: 0,
    team: 2,
  },
  perfectChance: {
    solo: 0,
    team: 3,
  },
} as const;

function addProfitsByRarity(clothing: Readonly<Clothing[]>) {
  return clothing.map((item) => {
    const profit = RarityProfits[item.rarity];
    return { ...item, profit };
  });
}

function addWeights(clothing: ClothingWithProfit[]) {
  return clothing.map((item) => {
    const profitWeight = item.profit * WEIGHTS.profit;
    const cookingSpeedWeight =
      (item.cookingSpeed?.solo ?? 0) * WEIGHTS.cookingSpeed.solo +
      (item.cookingSpeed?.team ?? 0) * WEIGHTS.cookingSpeed.team;

    const walkingSpeedWeight =
      (item.walkingSpeed?.solo ?? 0) * WEIGHTS.walkingSpeed.solo +
      (item.walkingSpeed?.team ?? 0) * WEIGHTS.walkingSpeed.team;

    const instantChanceWeight =
      (item.instantChance?.solo ?? 0) * WEIGHTS.instantChance.solo +
      (item.instantChance?.team ?? 0) * WEIGHTS.instantChance.team;

    const perfectChanceWeight =
      (item.perfectChance?.solo ?? 0) * WEIGHTS.perfectChance.solo +
      (item.perfectChance?.team ?? 0) * WEIGHTS.perfectChance.team;

    const totalWeight =
      profitWeight +
      cookingSpeedWeight +
      walkingSpeedWeight +
      instantChanceWeight +
      perfectChanceWeight;
    return { ...item, totalWeight };
  });
}

const hats = addWeights(addProfitsByRarity(hatsData));
const suits = addWeights(addProfitsByRarity(suitsData));
const tools = addWeights(addProfitsByRarity(toolsData));

const threeKitsCombinations = new CartesianProduct<ClothingWithWeight>(
  hats,
  suits,
  tools,
)
  .toArray()
  .map(([hat, suit, tool]) => {
    const totalWeight = hat.totalWeight + suit.totalWeight + tool.totalWeight;
    return { hat, suit, tool, totalWeight };
  })
  .sort((a, b) => b.totalWeight - a.totalWeight);

writeFileSync(
  "./files/ThreeKits.json",
  JSON.stringify(threeKitsCombinations.splice(0, 10), null, 2),
);

// A second tool space is unlocked on city 60
const fourKitsCombinations = new CartesianProduct<ClothingWithWeight>(
  hats,
  suits,
  tools,
  tools,
)
  .toArray()
  .map(([hat, suit, tool1, tool2]) => {
    const totalWeight =
      hat.totalWeight +
      suit.totalWeight +
      tool1.totalWeight +
      tool2.totalWeight;
    return { hat, suit, tool1, tool2, totalWeight };
  })
  .sort((a, b) => b.totalWeight - a.totalWeight);

writeFileSync(
  "./files/FourKits.json",
  JSON.stringify(fourKitsCombinations.splice(0, 10), null, 2),
);
