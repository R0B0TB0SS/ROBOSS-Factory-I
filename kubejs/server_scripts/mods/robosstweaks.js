onEvent('recipes', e => {
    e.shapeless(Item.of('mekanism:creative_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}'),'draconicevolution:creative_op_capacitor')
    e.shapeless('draconicevolution:creative_op_capacitor',Item.of('mekanism:creative_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}'))
})