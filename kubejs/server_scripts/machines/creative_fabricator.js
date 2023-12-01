onEvent('recipes', event => {
    //Machine recipe : 

  const item = [
    {
      in:Item.of("ae2:item_storage_cell_256k"),
      out:Item.of("ae2:creative_item_cell")
    },{
      in:Item.of("ae2:fluid_storage_cell_256k"),
      out:Item.of("ae2:creative_fluid_cell")
    },{
      in:Item.of("appbot:mana_storage_cell_256k"),
      out:Item.of("appbot:creative_mana_cell")
    },{
      in:Item.of("appmek:chemical_storage_cell_256k"),
      out:Item.of("appmek:creative_chemical_cell")
    },{
      in:Item.of("createaddition:electric_motor"),
      out:Item.of("create:creative_motor")
    },{
      in:Item.of('create:blaze_cake'),
      out:Item.of("create:creative_blaze_cake")
    },{
      in:Item.of('botania:fabulous_pool'),
      out:Item.of("botania:creative_pool")
    },{
      in:Item.of('mekanism:ultimate_chemical_tank'),
      out:Item.of("mekanism:creative_chemical_tank")
    },{
      in:Item.of('mekanism:ultimate_fluid_tank'),
      out:Item.of("mekanism:creative_fluid_tank")
    },{
      in:Item.of('mekanism:ultimate_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"256000000"}]}}'),
      out:Item.of("draconicevolution:creative_op_capacitor")
    },{
      in:Item.of('draconicevolution:chaotic_capacitor'),
      out:Item.of("draconicevolution:creative_capacitor")
    },{
      in:Item.of('pipez:ultimate_upgrade'),
      out:Item.of("pipez:infinity_upgrade")
    },{
      in:Item.of('functionalstorage:netherite_upgrade'),
      out:Item.of("functionalstorage:creative_vending_upgrade")
    },{
      in:Item.of('botania:mana_tablet', '{mana:500000}'),
      out:Item.of('botania:mana_tablet', '{creative:1b,mana:500000}')
    }
  ]

  item.forEach((creativeitem) => {
    event.recipes.custommachinery.custom_machine("robosstweaks:creative_fabricator", 200)
    .requireEnergyPerTick(1000)
    .requireItem(Item.of("robosstweaks:robotboss_ingot"), "input1")
    .requireItem(Item.of("robosstweaks:kikongin_ingot"), "input3")
    .requireItem(Item.of("avaritia:infinity_catalyst"), "input2")
    .requireItem(Item.of("avaritia:infinity_catalyst"), "input4")
    .requireItem(creativeitem.in, "input5")
    .requireItem(Item.of("avaritia:infinity_catalyst"), "input6")
    .requireItem(Item.of("robosstweaks:laimx_ingot", "input7"))
    .requireItem(Item.of("avaritia:infinity_catalyst"), "input8")
    .requireItem(Item.of("robosstweaks:blakdestroyer_ingot", "input9"))
    .produceItem(creativeitem.out, "output1")
    .requireStructure([["a a","   ","a a"],[" a ","aba"," m "]],{"a":"robosstweaks:creative_catalyst","b":"avaritia:infinity_block"})
  })

  event.recipes.custommachinery.custom_machine("robosstweaks:creative_fabricator", 200)
    .requireEnergyPerTick(1000)
    .requireItem(Item.of("robosstweaks:robotboss_ingot"), "input1")
    .requireItem(Item.of("robosstweaks:kikongin_ingot"), "input3")
    .requireItem(Item.of("avaritia:infinity_ingot"), "input2")
    .requireItem(Item.of("avaritia:infinity_catalyst"), "input4")
    .requireItem(Item.of("draconicevolution:draconium_chest"), "input5")
    .requireItem(Item.of("avaritia:infinity_catalyst"), "input6")
    .requireItem(Item.of("robosstweaks:laimx_ingot", "input7"))
    .requireItem(Item.of("avaritia:infinity_catalyst"), "input8")
    .requireItem(Item.of("robosstweaks:blakdestroyer_ingot", "input9"))
    .produceItem(Item.of("create:creative_crate"), "output1")
    .requireStructure([["a a","   ","a a"],[" a ","aba"," m "]],{"a":"robosstweaks:creative_catalyst","b":"avaritia:infinity_block"})
  
})
