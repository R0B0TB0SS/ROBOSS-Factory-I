onEvent('recipes', event => {
    //Machine recipe : 

  const item = [
    {
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
      out:Item.of('mekanism:creative_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}')
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
    .requireItem(Item.of("robosstweaks:robotboss_ingot"))
    .requireItem(Item.of("robosstweaks:samvfjd_ingot"))
    .requireItem(Item.of("avaritia:infinity_catalyst", 4))
    .requireItem(Item.of("robosstweaks:blakdestroyer_ingot"))
    .requireItem(Item.of("robosstweaks:laimx_ingot"))
    .requireItem(creativeitem.in)
    .produceItem(creativeitem.out, "output1")
    .requireStructure([["a a","   ","a a"],[" a ","aba"," m "]],{"a":"robosstweaks:creative_catalyst","b":"avaritia:infinity_block"})
  })

const item2 =[
  {
    in:Item.of("ae2:item_storage_cell_256k"),
    out:Item.of("ae2:creative_item_cell")
  },{
    in:Item.of("draconicevolution:draconium_chest"),
    out:Item.of("create:creative_crate")
  }

]

item2.forEach((cri) =>{
  event.recipes.custommachinery.custom_machine("robosstweaks:creative_fabricator", 200)
    .requireEnergyPerTick(1000)
    .requireItem(Item.of("robosstweaks:robotboss_ingot"))
    .requireItem(Item.of("robosstweaks:samvfjd_ingot"))
    .requireItem(Item.of("avaritia:infinity_ingot",4))
    .requireItem(Item.of("robosstweaks:blakdestroyer_ingot"))
    .requireItem(Item.of("robosstweaks:laimx_ingot"))
    .requireItem(cri.in)
    .produceItem(cri.out, "output1")
    .requireStructure([["a a","   ","a a"],[" a ","aba"," m "]],{"a":"robosstweaks:creative_catalyst","b":"avaritia:infinity_block"})
  })
})
