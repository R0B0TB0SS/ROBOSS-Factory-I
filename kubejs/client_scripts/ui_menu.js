/*ZonEvent("ui.main_menu", (event) => {
  event.replace((ui) => {
    ui.fillBackground("roboss:textures/ui/bg.png", 1920, 991);
    // Pack logo
    ui.image((i) => {
      i.height = 150 * 0.00123 * ui.h;;
      i.width = 1000 * 0.00123 * ui.h;
      i.x = ui.width / 2 - i.width / 2;
      i.y = ui.height * 0.07;
      i.texture = "roboss:textures/ui/logo.png";
    });
    //Singleplayer
    ui.image((i) => {
      i.height = 496 * 0.000255 * ui.h;
      i.width = 2000 * 0.000255 * ui.h;
      i.x = ui.width / 2 - i.width - 1;
      i.y = ui.height - i.height - ui.height * 0.13;
      i.texture = "roboss:textures/ui/button/sp.png";
      i.hoverTexture = "roboss:textures/ui/button/sp_hover.png";
      i.action = "minecraft:singleplayer";
    });
    //multiplayer
    ui.image((i) => {
      i.height = 496 * 0.000255 * ui.h;
      i.width = 2000 * 0.000255 * ui.h;
      i.x = ui.width / 2;
      i.y = ui.height - i.height - ui.height * 0.13;
      i.texture = "roboss:textures/ui/button/mp.png";
      i.hoverTexture = "roboss:textures/ui/button/mp_hover.png";
      i.action = "minecraft:multiplayer";
    });
    //Lower part
    const lw = 395 * 0.00017 * ui.h;
    const lh = 391 * 0.00017 * ui.h;
    const ly = ui.height - lh - ui.height * 0.04;
    //language
    ui.image((i) => {
      i.height = lh;
      i.width = lw;
      i.x = ui.width / 2 - lw * 3.0 - i.w;
      i.y = ly;
      i.texture = "roboss:textures/ui/button/lang.png";
      i.hoverTexture = "roboss:textures/ui/button/lang_hover.png";
      i.action = "minecraft:language";
    });
    //mods
    ui.image((i) => {
      i.height = lh;
      i.width = lw * 3.0;
      i.x = ui.width / 2 - i.width - 1;
      i.y = ly;
      i.texture = "roboss:textures/ui/button/mods.png";
      i.hoverTexture = "roboss:textures/ui/button/mods_hover.png";
      i.action = "forge:mod_list";
    });
    //options
    ui.image((i) => {
      i.height = lh ;
      i.width = lw * 3.0;
      i.x = ui.width / 2 + 1;
      i.y = ly ;
      i.texture = "roboss:textures/ui/button/options.png";
      i.hoverTexture = "roboss:textures/ui/button/options_hover.png";
      i.action = "minecraft:options";
    });
   //quit
    ui.image((i) => {
      i.height = lh;
      i.width = lw;
      i.x = ui.width / 2 + lw * 3.0 + 1;
      i.y = ly;
      i.texture = "roboss:textures/ui/button/exit.png";
      i.hoverTexture = "roboss:textures/ui/button/exit_hover.png";
      i.action = "minecraft:quit";
    });
    //Mojang
    ui.label((l) => {
      l.height = 7;
      l.name = Text.of("Minecraft, © Mojang AB, Do not distribute").color(
        0xffffff 
      );
      l.x = ui.width - l.width - 3;
      l.y = ui.height - 7;
      l.shadow = true;
    });
  });
});
*/