import type { Clothing } from "./types";

export const RarityProfits = {
  Common: 3,
  Rare: 9,
  Epic: 27,
  Legendary: 81,
  Ultimate: 243,
} as const;

export const hatsData: Readonly<Clothing[]> = [
  {
    name: "Blue Beanie",
    rarity: "Common",
  },
  {
    name: "Blue Cap",
    rarity: "Common",
  },
  {
    name: "Chef's Hat",
    rarity: "Common",
  },
  {
    name: "Green Cap",
    rarity: "Common",
  },
  {
    name: "Bowler Hat",
    rarity: "Rare",
    instantChance: { solo: 20 },
  },
  {
    name: "Cone",
    rarity: "Rare",
    walkingSpeed: { solo: 90 },
  },
  {
    name: "Cool Cap",
    rarity: "Rare",
    walkingSpeed: { solo: 90 },
  },
  {
    name: "Crown",
    rarity: "Rare",
    perfectChance: { solo: 5 },
  },
  {
    name: "Fireman Hat",
    rarity: "Rare",

    walkingSpeed: { solo: 90 },
  },
  {
    name: "Safety Hat",
    rarity: "Rare",

    walkingSpeed: { solo: 90 },
  },
  {
    name: "Sushi Hat",
    rarity: "Rare",

    instantChance: { solo: 20 },
  },
  {
    name: "White Hat",
    rarity: "Rare",
    perfectChance: { solo: 5 },
  },
  {
    name: "Black Chef's Hat",
    rarity: "Epic",
    cookingSpeed: { solo: 33 },
    perfectChance: { solo: 10 },
  },
  {
    name: "Hood",
    rarity: "Epic",
    instantChance: { solo: 38 },
    walkingSpeed: { solo: 90 },
  },
  {
    name: "Mafia Hat",
    rarity: "Epic",
    cookingSpeed: { solo: 59 },
    walkingSpeed: { solo: 90 },
  },
  {
    name: "Red Glasses",
    rarity: "Epic",
    cookingSpeed: { solo: 11 },
    perfectChance: { solo: 16 },
  },
  {
    name: "Tall Hat",
    rarity: "Epic",
    instantChance: { solo: 25 },
    perfectChance: { solo: 10 },
  },
  {
    name: "Cat Head",
    rarity: "Legendary",
    cookingSpeed: { solo: 500 },
    walkingSpeed: { solo: 150 },
  },
  {
    name: "Elder Beard",
    rarity: "Legendary",
    cookingSpeed: { team: 150 },
    walkingSpeed: { team: 50 },
  },
  {
    name: "Irish Hat",
    rarity: "Legendary",
    instantChance: { solo: 65 },
    perfectChance: { solo: 50 },
  },
  {
    name: "Purple Cap",
    rarity: "Legendary",
    cookingSpeed: { solo: 270 },
    walkingSpeed: { solo: 300 },
  },
  {
    name: "Sushi Master",
    rarity: "Legendary",
    cookingSpeed: { solo: 500 },
    instantChance: { solo: 40 },
  },
  {
    name: "Tall Black Hat",
    rarity: "Legendary",
    instantChance: { team: 20 },
    perfectChance: { team: 20 },
  },
  {
    name: "Robot Head",
    rarity: "Ultimate",
    perfectChance: { team: 50 },
    walkingSpeed: { team: 116 },
  },
  {
    name: "Royal Crown",
    rarity: "Ultimate",
    cookingSpeed: { team: 300 },
    instantChance: { team: 20 },
  },
  {
    name: "Shark",
    rarity: "Ultimate",
    cookingSpeed: { team: 65, solo: 500 },
  },
  {
    name: "Torch Helmet",
    rarity: "Ultimate",
    cookingSpeed: { team: 200 },
    walkingSpeed: { team: 150 },
  },
] as const;

export const suitsData: Readonly<Clothing[]> = [
  {
    name: "Black Buckle Belt",
    rarity: "Common",
  },
  {
    name: "Blue T-Shirt",
    rarity: "Common",
  },
  {
    name: "Brown Buckle Belt",
    rarity: "Common",
  },
  {
    name: "Green Apron",
    rarity: "Common",
  },
  {
    name: "Red T-Shirt",
    rarity: "Common",
  },
  {
    name: "Blue Hoodie",
    rarity: "Rare",
    cookingSpeed: {
      solo: 25,
    },
  },
  {
    name: "Bow Tie",
    rarity: "Rare",
    walkingSpeed: {
      solo: 90,
    },
  },
  {
    name: "Tux",
    rarity: "Rare",
    walkingSpeed: {
      solo: 90,
    },
  },
  {
    name: "White Apron",
    rarity: "Rare",
    cookingSpeed: {
      solo: 25,
    },
  },
  {
    name: "Yellow Hoodie",
    rarity: "Rare",
    walkingSpeed: {
      solo: 90,
    },
  },
  {
    name: "Black & White Sweater",
    rarity: "Epic",
    walkingSpeed: {
      solo: 90,
    },
    cookingSpeed: {
      solo: 60,
    },
  },
  {
    name: "Box",
    rarity: "Epic",
    instantChance: {
      solo: 34,
    },
    walkingSpeed: {
      solo: 100,
    },
  },
  {
    name: "Brown Cape",
    rarity: "Epic",
    cookingSpeed: {
      solo: 20,
    },
    instantChance: {
      solo: 40,
    },
  },
  {
    name: "Kimono White Belt",
    rarity: "Epic",
    walkingSpeed: {
      solo: 143,
    },
    instantChance: {
      solo: 20,
    },
  },
  {
    name: "Knight",
    rarity: "Epic",
    instantChance: { solo: 13 },
    perfectChance: { solo: 15 },
  },
  {
    name: "Purple Apron",
    rarity: "Epic",
    cookingSpeed: { solo: 33 },
    perfectChance: { solo: 10 },
  },
  {
    name: "Robe",
    rarity: "Epic",
    cookingSpeed: { solo: 59 },
    walkingSpeed: { solo: 90 },
  },
  {
    name: "Barrel",
    rarity: "Legendary",
    cookingSpeed: { solo: 400 },
    perfectChance: { solo: 20 },
  },
  {
    name: "Black Apron",
    rarity: "Legendary",
    perfectChance: { team: 13 },
    cookingSpeed: { solo: 200 },
  },
  {
    name: "General",
    rarity: "Legendary",
    cookingSpeed: { team: 150 },
    walkingSpeed: { team: 50 },
  },
  {
    name: "Italian Chef",
    rarity: "Legendary",
    cookingSpeed: { solo: 300 },
    walkingSpeed: { solo: 280 },
  },
  {
    name: "Kimono Black Belt",
    rarity: "Legendary",
    walkingSpeed: { team: 280 },
    instantChance: { solo: 50 },
  },
  {
    name: "Tank Top",
    rarity: "Legendary",
    cookingSpeed: { team: 65, solo: 200 },
  },
  {
    name: "Robot Suit",
    rarity: "Ultimate",
    cookingSpeed: { team: 150, solo: 300 },
  },
  {
    name: "Royal Robe",
    rarity: "Ultimate",
    cookingSpeed: { team: 400 },
    instantChance: { team: 30 },
  },
  {
    name: "Shark",
    rarity: "Ultimate",
    walkingSpeed: { team: 90 },
    instantChance: { team: 50 },
  },
  {
    name: "Tool Belt",
    rarity: "Ultimate",
    cookingSpeed: { team: 100 },
    perfectChance: { team: 30 },
  },
] as const;

export const toolsData: Readonly<Clothing[]> = [
  {
    name: "Chef's Knife",
    rarity: "Common",
  },
  {
    name: "Hammer",
    rarity: "Common",
  },
  {
    name: "Ladle",
    rarity: "Common",
  },
  {
    name: "Spatula",
    rarity: "Common",
  },
  {
    name: "Wooden Spoon",
    rarity: "Common",
  },
  {
    name: "Broom",
    rarity: "Rare",
    walkingSpeed: { solo: 90 },
  },
  {
    name: "Cheese Grater",
    rarity: "Rare",
    perfectChance: { solo: 5 },
  },
  {
    name: "Ketchup",
    rarity: "Rare",
    cookingSpeed: { solo: 25 },
  },
  {
    name: "Pasta Spoon",
    rarity: "Rare",
    cookingSpeed: { solo: 25 },
  },
  {
    name: "Scooper",
    rarity: "Rare",
    instantChance: { solo: 20 },
  },
  {
    name: "Mug",
    rarity: "Epic",
    cookingSpeed: { solo: 21 },
    walkingSpeed: { solo: 150 },
  },
  {
    name: "Pizza Cutter",
    rarity: "Epic",
    cookingSpeed: { solo: 20 },
    instantChance: { solo: 40 },
  },
  {
    name: "Rolling Pin",
    rarity: "Epic",
    instantChance: { solo: 25 },
    perfectChance: { solo: 10 },
  },
  {
    name: "Whisk",
    rarity: "Epic",
    walkingSpeed: { team: 10 },
    cookingSpeed: { solo: 37 },
  },
  {
    name: "Wok",
    rarity: "Epic",
    cookingSpeed: { solo: 80 },
    walkingSpeed: { solo: 68 },
  },
  {
    name: "Chef's Cleaver",
    rarity: "Legendary",
    cookingSpeed: { team: 10 },
    perfectChance: { team: 25 },
  },
  {
    name: "Chopsticks",
    rarity: "Legendary",
    cookingSpeed: { solo: 200 },
    walkingSpeed: { solo: 150 },
  },
  {
    name: "Cook Book",
    rarity: "Legendary",
    cookingSpeed: { solo: 300 },
    instantChance: { solo: 60 },
  },
  {
    name: "Mixer",
    rarity: "Legendary",
    cookingSpeed: { solo: 150, team: 100 },
  },
  {
    name: "Pepper Mill",
    rarity: "Legendary",
    instantChance: { solo: 65 },
    perfectChance: { solo: 50 },
  },
  {
    name: "Wrench",
    rarity: "Legendary",
    perfectChance: { team: 30 },
    cookingSpeed: { solo: 100 },
  },
  {
    name: "Anchor",
    rarity: "Ultimate",
    cookingSpeed: { team: 100 },
    perfectChance: { team: 30 },
  },
  {
    name: "Laser Gun",
    rarity: "Ultimate",
    instantChance: { team: 60 },
    perfectChance: { team: 20 },
  },
  {
    name: "Pickaxe",
    rarity: "Ultimate",
    perfectChance: { solo: 60, team: 30 },
  },
  {
    name: "Royal Sceptre",
    rarity: "Ultimate",
    perfectChance: { team: 50 },
    instantChance: { solo: 65 },
  },
] as const;
