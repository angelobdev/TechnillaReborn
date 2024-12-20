onEvent("ui.main_menu", (event) => {
  event.replace((ui) => {
    // Background
    ui.fillBackground("technilla:images/background.png", 1920, 1080);

    const gridColumns = 32;
    const gridRows = 20;

    const gridBoxWidth = ui.width / gridColumns;
    const gridBoxHeight = ui.height / gridRows;

    // Logo
    ui.image((img) => {
      img.width = gridBoxWidth * ((gridColumns * 3) / 4);
      img.height = (img.width * 183) / 1024;
      img.x = gridBoxWidth * 4;
      img.y = gridBoxHeight;
      img.texture = "technilla:images/logo.png";
    });

    // Singleplayer
    ui.button((btn) => {
      btn.name = "Singleplayer";
      btn.action = "minecraft:singleplayer";
      btn.width = gridBoxWidth * (gridColumns / 4);
      btn.x = gridBoxWidth * (gridColumns / 2) - btn.width / 2;
      btn.y = gridBoxHeight * (gridRows / 2);
    });

    // Multiplayer
    ui.button((btn) => {
      btn.name = "Multiplayer";
      btn.action = "minecraft:multiplayer";
      btn.width = gridBoxWidth * (gridColumns / 4);
      btn.x = gridBoxWidth * (gridColumns / 2) - btn.width / 2;
      btn.y = gridBoxHeight * (gridRows / 2) + btn.height * 1.1 * 1;
    });

    // Mods
    ui.button((btn) => {
      btn.name = "Mods";
      btn.action = "forge:mod_list";
      btn.width = gridBoxWidth * (gridColumns / 8) - 1;
      btn.x = gridBoxWidth * (gridColumns / 2) - btn.width;
      btn.y = gridBoxHeight * (gridRows / 2) + btn.height * 1.1 * 2;
    });

    // Options
    ui.button((btn) => {
      btn.name = "Options";
      btn.action = "minecraft:options";
      btn.width = gridBoxWidth * (gridColumns / 8) - 1;
      btn.x = gridBoxWidth * (gridColumns / 2) + 2;
      btn.y = gridBoxHeight * (gridRows / 2) + btn.height * 1.1 * 2;
    });

    // Exit
    ui.button((btn) => {
      btn.name = "Quit Game";
      btn.action = "minecraft:quit";
      btn.width = gridBoxWidth * (gridColumns / 4);
      btn.x = gridBoxWidth * (gridColumns / 2) - btn.width / 2;
      btn.y = gridBoxHeight * (gridRows / 2) + btn.height * 1.1 * 3;
    });

    // Mojang
    ui.label((lab) => {
      lab.name = Text.of("Minecraft, © Mojang AB, Do not distribute").color(
        0xffffff
      );
      lab.width = gridBoxWidth * gridColumns;
      lab.height = gridBoxHeight / 4;
      lab.x = gridBoxWidth / 8;
      lab.y = ui.height - gridBoxHeight / 4;
      lab.shadow = true;
    });
  });
});
