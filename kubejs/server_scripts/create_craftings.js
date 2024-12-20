onEvent("recipes", (event) => {
  event.remove({ id: "create:crafting/kinetics/empty_blaze_burner" });

  event.recipes.minecraft.crafting_shaped(
    "create:empty_blaze_burner",
    [" A ", "ABA", " A "],
    {
      A: "create:iron_sheet",
      B: "create:blaze_cake_base",
    }
  );
});
