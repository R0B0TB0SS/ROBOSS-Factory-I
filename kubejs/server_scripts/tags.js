onEvent('tags.items', e => {

    e.remove('forge:ingots/uranium','bigreactors:yellorium_ingot')
    e.remove('forge:ores/uranium','bigreactors:yellorite_ore')

    e.removeAllTagsFrom(['cyclic:copper_nugget',
                             'mekanism:dust_copper',
                             'immersiveengineering:wire_copper',
                             'immersiveengineering:nugget_copper',
                             'immersiveengineering:dust_copper', 
                             'immersiveengineering:plate_copper', 
                             'create:copper_nugget', 
                             'create:crushed_copper_ore', 
                             'create:copper_sheet', 
                             'tconstruct:copper_nugget',
                             'immersiveengineering:ore_lead', 
                             'immersiveengineering:deepslate_ore_lead', 
                             'immersiveengineering:raw_block_lead', 
                             'immersiveengineering:raw_lead', 
                             'immersiveengineering:storage_lead', 
                             'immersiveengineering:ingot_lead', 
                             'immersiveengineering:dust_lead', 
                             'immersiveengineering:plate_lead', 
                             'immersiveengineering:nugget_lead', 
                             'mekanism:nugget_lead', 
                             'create:crushed_lead_ore', 
                             'mekanism:dust_lead', 
                             'mekanism:ingot_lead', 
                             'mekanism:block_lead', 
                             'mekanism:raw_lead', 
                             'mekanism:block_raw_lead', 
                             'mekanism:deepslate_lead_ore', 
                             'mekanism:lead_ore',
                             'mekanism:block_bronze', 
                             'mekanism:ingot_bronze', 
                             'mekanism:nugget_bronze', 
                             'mekanism:dust_bronze',
                             'create:crushed_tin_ore', 
                             'mekanism:tin_ore', 
                             'mekanism:deepslate_tin_ore', 
                             'mekanism:ingot_tin', 
                             'mekanism:block_tin', 
                             'mekanism:block_raw_tin', 
                             'mekanism:dust_tin',
                             'mekanism:raw_tin', 
                             'mekanism:nugget_tin',
                             'create:crushed_silver_ore', 
                             'immersiveengineering:plate_silver', 
                             'immersiveengineering:dust_silver', 
                             'immersiveengineering:raw_silver', 
                             'immersiveengineering:ingot_silver', 
                             'immersiveengineering:storage_silver', 
                             'immersiveengineering:raw_block_silver', 
                             'immersiveengineering:deepslate_ore_silver', 
                             'immersiveengineering:ore_silver',
                             'tconstruct:netherite_nugget', 
                             'mekanism:dust_netherite', 
                             'cyclic:netherite_nugget',
                             'mekanism:dust_emerald',
                             'createaddition:diamond_grit',
                             'mekanism:dust_diamond',
                             'industrialforegoing:diamond_gear',
                             'immersiveengineering:plate_iron', 
                             'immersiveengineering:dust_iron', 
                             'mekanism:dust_gold', 
                             'immersiveengineering:dust_gold', 
                             'immersiveengineering:plate_gold', 
                             'create:golden_sheet', 
                             'create:crushed_gold_ore', 
                             'create:crushed_aluminum_ore', 
                             'create:crushed_osmium_ore', 
                             'mekanism:dust_iron', 
                             'create:crushed_iron_ore', 
                             'create:iron_sheet', 
                             'immersiveengineering:stick_iron', 
                             'industrialforegoing:iron_gear',
                             'immersiveengineering:slab_storage_lead',
                             'immersiveengineering:deepslate_ore_uranium', 
                             'immersiveengineering:storage_uranium', 
                             'immersiveengineering:raw_block_uranium', 
                             'immersiveengineering:raw_uranium', 
                             'immersiveengineering:ingot_uranium', 
                             'immersiveengineering:dust_uranium', 
                             'immersiveengineering:nugget_uranium',
                             'immersiveengineering:slab_storage_uranium', 
                             'immersiveengineering:ore_uranium',
                             'immersiveengineering:slab_storage_constantan', 
                             'immersiveengineering:plate_constantan', 
                             'immersiveengineering:dust_constantan', 
                             'immersiveengineering:nugget_constantan', 
                             'immersiveengineering:ingot_constantan', 
                             'immersiveengineering:storage_constantan',
                             'immersiveengineering:slab_storage_nickel', 
                             'immersiveengineering:plate_nickel', 
                             'immersiveengineering:dust_nickel', 
                             'immersiveengineering:raw_nickel', 
                             'immersiveengineering:raw_block_nickel', 
                             'immersiveengineering:ingot_nickel', 
                             'immersiveengineering:storage_nickel', 
                             'immersiveengineering:deepslate_ore_nickel', 
                             'immersiveengineering:ore_nickel', 
                             'create:crushed_nickel_ore',
                             'iceandfire:copper_ingot', 
                             'iceandfire:copper_block', 
                             'iceandfire:copper_ore', 
                             'iceandfire:copper_nugget',
                             'iceandfire:silver_nugget', 
                             'iceandfire:silver_ingot', 
                             'iceandfire:silver_block', 
                             'iceandfire:silver_ore',
                             'create:crushed_raw_osmium',
                             'twilightforest:uncrafting_table', 
                             'avaritia:extreme_crafting_table', 
                             'avaritia:compressed_crafting_table', 
                             'avaritia:double_compressed_crafting_table',
                             'mekanism:tin_ore',
                             'create:crushed_raw_tin',
                             'create:crushed_raw_aluminum',
                             'mekanism:dust_quartz',
                             'create:crushed_raw_nickel',
                             'beyond_earth:iron_plate',
                             'create:crushed_raw_iron',
                             'create:crushed_raw_gold',
                             'industrialforegoing:gold_gear',
                             'immersiveengineering:ingot_steel', 
                             'immersiveengineering:dust_steel', 
                             'immersiveengineering:nugget_steel', 
                             'immersiveengineering:pickaxe_steel',
                             'immersiveengineering:axe_steel',
                             'immersiveengineering:shovel_steel', 
                             'immersiveengineering:hoe_steel', 
                             'beyond_earth:steel_nugget', 
                             'beyond_earth:steel_ingot', 
                             'beyond_earth:steel_block',
                             'mekanism:dust_lapis_lazuli',
                             'mekanism:block_steel',
                             'iceandfire:amythest_ore', 
                             'iceandfire:amythest_gem', 
                             'iceandfire:amythest_block',
                             'create:crushed_raw_uranium',
                             'immersiveengineering:nugget_nickel',
                             'createaddition:electrum_sheet',
                             'createaddition:electrum_nugget',
                             'createaddition:electrum_ingot',
                             'immersiveengineering:wire_electrum',
                             'immersiveengineering:plate_electrum',
                             'immersiveengineering:dust_electrum',
                             'immersiveengineering:storage_electrum',
                             'immersiveengineering:ingot_electrum',
                             'immersiveengineering:nugget_electrum',
                             'create:crushed_raw_copper',
                             'immersiveengineering:wire_lead',
                             'beyond_earth:iron_stick',
                             'mekanism:sawdust',
                             'thermal:ender_pearl_dust',
                             'immersiveengineering:dust_wood',
                             'immersiveengineering:dust_sulfur',
                             'mekanism:dust_sulfur',
                             'immersiveengineering:plate_steel',
                             'mekanism:nugget_steel',
                             'mekanism:ingot_steel',
                             'thermal:steel_block',
                             'mekanism:dust_steel',
                             'thermal:rose_gold_block',
                             'thermal:rose_gold_ingot',
                             'thermal:rose_gold_nugget',
                             'thermal:rose_gold_dust',
                             'thermal:rose_gold_gear',
                             'thermal:rose_gold_plate',
                             'thermal:rose_gold_coin',
                             'industrialforegoing:plastic',
                             'pneumaticcraft:wheat_flour', 
                             'pamhc2foodcore:flouritem',
                             'pamhc2foodcore:doughitem',
                             'mekanism:salt'
                             ])


                    const it =[
                                {
                                item:'viescraftmachines:music_disc_bramble',
                                tag:'minecraft:music_discs'
                                },{
                                item:'viescraftmachines:music_disc_castle',
                                tag:'minecraft:music_discs'
                                },{
                                item:'viescraftmachines:music_disc_dire',
                                tag:'minecraft:music_discs'
                                },{
                                item:'viescraftmachines:music_disc_jungle',
                                tag:'minecraft:music_discs'
                                },{
                                item:'viescraftmachines:music_disc_storms',
                                tag:'minecraft:music_discs'
                                },{
                                item:'viescraftmachines:music_disc_timescar',
                                tag:'minecraft:music_discs'
                                },{
                                item:'pneumaticcraft:plastic',
                                tag:'forge:plastic'
                                },{
                                item:'create:wheat_flour',
                                tag:'forge:dusts/flour'
                                },{
                                    item:'pamhc2foodcore:saltitem',
                                    tag:'forge:dusts/salt'
                                }
                            ]
                    
                    it.forEach((i)=>{
                        e.add(i.tag, i.item);
                    
                    })

                            
                             


})
onEvent('tags.blocks', e => {

e.removeAllTagsFrom([
    'avaritia:compressor',
    'immersiveengineering:storage_constantan', 
    'mekanism:creative_bin', 
    'thermal:steel_block', 
    'immersiveengineering:ore_nickel', 
    'immersiveengineering:deepslate_ore_nickel', 
    'immersiveengineering:raw_block_nickel', 
    'immersiveengineering:storage_nickel', 
    'beyond_earth:steel_block', 
    'mekanism:block_steel', 
    'immersiveengineering:slab_storage_nickel', 
    'immersiveengineering:slab_storage_electrum', 
    'immersiveengineering:storage_electrum', 
    'immersiveengineering:slab_storage_constantan',
    'avaritia:double_compressed_crafting_table', 
    'avaritia:compressed_crafting_table', 
    'avaritia:extreme_crafting_table', 
    'twilightforest:uncrafting_table',
    'immersiveengineering:storage_lead', 
    'immersiveengineering:raw_block_lead', 
    'mekanism:block_raw_lead', 
    'immersiveengineering:ore_lead', 
    'mekanism:deepslate_lead_ore', 
    'mekanism:lead_ore', 
    'immersiveengineering:deepslate_ore_lead', 
    'iceandfire:copper_ore', 
    'iceandfire:copper_block', 
    'thermal:rose_gold_block', 
    'iceandfire:amythest_block', 
    'iceandfire:amythest_ore', 
    'immersiveengineering:slab_storage_uranium', 
    'immersiveengineering:raw_block_uranium', 
    'immersiveengineering:storage_uranium', 
    'immersiveengineering:deepslate_ore_uranium', 
    'immersiveengineering:ore_uranium', 
    'mekanism:block_raw_tin',
    'mekanism:block_tin', 
    'mekanism:deepslate_tin_ore', 
    'mekanism:tin_ore', 
    'immersiveengineering:slab_storage_silver', 
    'iceandfire:silver_block', 
    'immersiveengineering:storage_silver', 
    'immersiveengineering:raw_block_silver', 
    'immersiveengineering:deepslate_ore_silver', 
    'iceandfire:silver_ore', 
    'immersiveengineering:ore_silver', 
    'mekanism:block_bronze', 
    'mekanism:block_lead', 
    'immersiveengineering:slab_storage_lead'
])





const it =[
            /*{
                item:'iceandfire:copper_ore',
                tag:':ores'
            }*/
        ]

it.forEach((i)=>{
    e.remove(i.tag, i.item);

})

})


onEvent('fluid.tags', event => {

    event.removeAllTagsFrom('tconstruct:molten_ender')
    event.removeAllTagsFrom('thermal:crude_oil')
    event.removeAllTagsFrom('immersivepetroleum:crudeoil')
    event.removeAllTagsFrom('thermal:creosote')
    event.removeAllTagsFrom('immersiveengineering:ethanol')
    event.removeAllTagsFrom('mekanismgenerators:bioethanol')
    event.removeAllTagsFrom('immersivepetroleum:gasoline')
    event.removeAllTagsFrom('immersivepetroleum:kerosene')
    event.removeAllTagsFrom('immersivepetroleum:diesel')
    event.removeAllTagsFrom('immersiveengineering:biodiesel')
})
