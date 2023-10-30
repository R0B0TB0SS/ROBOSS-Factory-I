onEvent('recipes', event => {
    //Machine recipe : 
    event.recipes.custommachinery.custom_machine("robosstweaks:creative_fabricator", 200)
    .requireEnergyPerTick(1000)
    .requireItem(Item.of("robosstweaks:robotboss_plate"))
    .requireItem(Item.of("robosstweaks:kikongin_plate"))
    .requireItem(Item.of("ae2:item_storage_cell_256k"))
    .requireItem(Item.of("robosstweaks:laimx_plate"))
    .requireItem(Item.of("robosstweaks:blakdestroyer_plate"))
    .produceItem(Item.of("ae2:creative_item_cell"), "output1")
    .requireStructure([["a a","   ","a a"],[" a ","aba"," m "]],{"a":"robosstweaks:creative_catalyst","b":"avaritia:infinity_block"})

  })