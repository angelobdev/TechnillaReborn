function getItemIdByOreName(name) {
  switch (name) {
    case "iron":
      return "minecraft:raw_iron";
    case "gold":
      return "minecraft:raw_gold";
    case "copper":
      return "minecraft:raw_copper";
    case "zinc":
      return "create:raw_zinc";
    case "osmium":
      return "mekanism:raw_osmium";
    case "silver":
      return "immersiveengineering:raw_silver";
    case "tin":
      return "mekanism:raw_tin";
    case "lead":
      return "immersiveengineering:raw_lead";
    case "aluminum":
      return "immersiveengineering:raw_aluminum";
    case "uranium":
      return "immersiveengineering:raw_uranium";
    case "nickel":
      return "immersiveengineering:raw_nickel";
    default:
      return null; // Return null for unrecognized ores
  }
}

function getBlockIdByOreName(name) {
  switch (name) {
    case "iron":
      return "minecraft:raw_iron_block";
    case "gold":
      return "minecraft:raw_gold_block";
    case "copper":
      return "minecraft:raw_copper_block";
    case "zinc":
      return "create:raw_zinc_block";
    case "osmium":
      return "mekanism:block_raw_osmium";
    case "silver":
      return "immersiveengineering:raw_block_silver";
    case "tin":
      return "mekanism:block_raw_tin";
    case "lead":
      return "immersiveengineering:raw_block_lead";
    case "aluminum":
      return "immersiveengineering:raw_block_aluminum";
    case "uranium":
      return "immersiveengineering:raw_block_uranium";
    case "nickel":
      return "immersiveengineering:raw_block_nickel";
    default:
      return null; // Return null for unrecognized ores
  }
}

onEvent("recipes", (event) => {
  // Raw ores

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
    event.remove({ id: `create:crushing/raw_${ore}` });
    event.remove({ id: `create:crushing/raw_${ore}_block` });

    event.recipes.create
      .crushing(
        [
          `create:crushed_raw_${ore}`,
          Item.of(`create:crushed_raw_${ore}`).withChance(0.75),
        ],
        getItemIdByOreName(ore)
      )
      .processingTime(500);

    event.recipes.create
      .crushing(
        [
          Item.of(`create:crushed_raw_${ore}`, 9),
          Item.of(`create:crushed_raw_${ore}`, 9).withChance(0.75),
        ],
        getBlockIdByOreName(ore)
      )
      .processingTime(9 * 500);
  });
});
