function getItemIdByOreName(name) {
  switch (name) {
    case "iron":
      return "minecraft:iron_ingot";
    case "gold":
      return "minecraft:gold_ingot";
    case "copper":
      return "minecraft:copper_ingot";
    case "zinc":
      return "create:zinc_ingot";
    case "osmium":
      return "mekanism:ingot_osmium";
    case "silver":
      return "immersiveengineering:ingot_silver";
    case "tin":
      return "mekanism:ingot_tin";
    case "lead":
      return "immersiveengineering:ingot_lead";
    case "aluminum":
      return "immersiveengineering:ingot_aluminum";
    case "uranium":
      return "immersiveengineering:ingot_uranium";
    case "nickel":
      return "immersiveengineering:ingot_nickel";
    default:
      return null; // Return null for unrecognized ores
  }
}

onEvent("recipes", (event) => {
  const rawOres = [
    "iron",
    "gold",
    "copper",
    "zinc",
    "osmium",
    "silver",
    "tin",
    "lead",
    "aluminum",
    "uranium",
    "nickel",
  ];
  rawOres.forEach((ore) => {
    event.recipes.immersiveengineering.arc_furnace(
      getItemIdByOreName(ore),
      `create:crushed_raw_${ore}`
    );
  });
});
