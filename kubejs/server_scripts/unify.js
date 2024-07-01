onEvent('recipes', e => {
       
        e.replaceOutput({}, 'mekanism:sawdust', 'thermal:sawdust')
        e.replaceOutput({}, 'mekanism:ingot_steel', 'thermal:steel_ingot')
        e.replaceInput(
            "minecraft:lava_bucket",
            Ingredient.of([Item.of("chickens:liquid_egg", '{id:"minecraft:lava"}'), "minecraft:lava_bucket"]).toJson()
          );
        
          e.replaceInput(
            "minecraft:water_bucket",
            Ingredient.of([Item.of("chickens:liquid_egg", '{id:"minecraft:water"}'), "minecraft:water_bucket"]).toJson()
          );

          e.replaceInput("industrialforegoing:plastic","pneumaticcraft:plastic");
          e.replaceInput("extendedexchange:stone_table","minecraft:netherite_block");
          e.replaceInput("mekanism:salt","pamhc2foodcore:saltitem");
          e.replaceOutput("industrialforegoing:plastic","pneumaticcraft:plastic");
          e.replaceOutput("mekanism:salt","pamhc2foodcore:saltitem");

})