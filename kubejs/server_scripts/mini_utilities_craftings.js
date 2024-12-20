onEvent("recipes", (event) => {
  event.recipes.minecraft.crafting_shaped(
    "miniutilities:flame_lily_seeds",
    ["AAA", "ABA", "AAA"],
    {
      A: "minecraft:blaze_rod",
      B: "#forge:seeds",
    }
  );
});
