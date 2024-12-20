// Priority: 0
// Name: botany_pots.js

onEvent("recipes", (event) => {
  // Soils

  event.recipes.botanypots.soil({
    input: Ingredient.of("minecraft:netherrack").toJson(),
    display: {
      block: "minecraft:netherrack",
    },
    categories: ["netherrack"],
    growthModifier: 1.0,
  });

  event.recipes.botanypots.soil({
    input: Ingredient.of("minecraft:end_stone").toJson(),
    display: {
      block: "minecraft:end_stone",
    },
    categories: ["end_stone"],
    growthModifier: 1.0,
  });

  // Crops

  event.recipes.botanypots.crop({
    seed: Ingredient.of("miniutilities:flame_lily_seeds").toJson(),
    categories: ["netherrack", "magma_block"],
    growthTicks: 4200,
    display: {
      block: "miniutilities:flame_lily_block",
      properties: {
        age: 7,
      },
    },
    drops: [
      {
        chance: 0.75,
        output: Item.of("miniutilities:flame_lily"),
        minRolls: 1,
        maxRolls: 1,
      },
      {
        chance: 0.01,
        output: Item.of("miniutilities:flame_lily_seeds"),
        minRolls: 1,
        maxRolls: 1,
      },
    ],
  });

  event.recipes.botanypots.crop({
    seed: Ingredient.of("miniutilities:ender_lily_seeds").toJson(),
    categories: ["end_stone"],
    growthTicks: 4200,
    display: {
      block: "miniutilities:ender_lily_block",
      properties: {
        age: 7,
      },
    },
    drops: [
      {
        chance: 0.75,
        output: Item.of("miniutilities:ender_dust"),
        minRolls: 1,
        maxRolls: 1,
      },
      {
        chance: 0.01,
        output: Item.of("miniutilities:ender_lily_seeds"),
        minRolls: 1,
        maxRolls: 1,
      },
    ],
  });
});
