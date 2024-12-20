onEvent("recipes", (event) => {
  event.remove({ id: "create:compacting/blaze_cake" });

  event.recipes.create.compacting("create:blaze_cake_base", [
    Item.of("netherrack", 2),
    "minecraft:cauldron",
  ]);
});
