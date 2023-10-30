onEvent('recipes', e => {

    let ri = (id) =>{
        e.remove({id:id})
    }
    let ro = (id) =>{
        e.remove({output:id})
    }
     
    ri('twilightforest:uncrafting_table')
    ri('cyclic:uncrafter')
    ro(['avaritia:quartz_singularity','avaritia:redstone_singularity','avaritia:lapis_singularity', 'avaritia:gold_singularity','avaritia:iron_singularity', 'avaritia:emerald_singularity','avaritia:extreme_crafting_table','avaritia:double_compressed_crafting_table', 'avaritia:compressed_crafting_table','avaritia:diamond_singularity', 'avaritia:copper_singularity','avaritia:tin_singularity','avaritia:lead_singularity','avaritia:nickel_singularity','avaritia:silver_singularity'])
    ri('twilightforest:stonecutting/oak_log/hollow_oak_log')
    ri('intefrateddynamics:special/facade')

    //lead
    ri('create:smelting/lead_ingot_compat_thermal')
    ri('create:smelting/ingot_lead_compat_mekanism')
    ri('create:smelting/ingot_lead_compat_immersiveengineering')
    ri('create:blasting/lead_ingot_compat_thermal')
    ri('create:blasting/ingot_lead_compat_mekanism')    
    ri('create:blasting/ingot_lead_compat_immersiveengineering')
    ri('create:splashing/immersiveengineering/crushed_lead_ore')
    ri('create:splashing/mekanism/crushed_lead_ore')
    ri('immersiveengineering:smelting/ingot_lead')
    ri('immersiveengineering:smelting/ingot_lead_from_blasting')
    ri('immersiveengineering:smelting/ingot_lead2')
    ri('immersiveengineering:smelting/ingot_lead_from_blasting2')
    ri('immersiveengineering:smelting/ingot_lead3')
    ri('immersiveengineering:smelting/ingot_lead_from_blasting3')
    ri('immersiveengineering:smelting/ingot_lead_from_dust')
    ri('immersiveengineering:smelting/ingot_lead_from_dust_from_blasting')
    ri('immersiveengineering:crafting/raw_lead_to_raw_block_lead')
    ri('immersiveengineering:crafting/raw_block_lead_to_raw_lead')
    ri('immersiveengineering:crafting/ingot_lead_to_storage_lead')
    ri('immersiveengineering:crafting/storage_lead_to_ingot_lead')
    ri('immersiveengineering:crafting/nugget_lead_to_ingot_lead')
    ri('immersiveengineering:crafting/ingot_lead_to_nugget_lead')
    ri('immersiveengineering:crafting/storage_lead_from_slab')
    ri('immersiveengineering:crafting/storage_lead_to_slab')
    ri('mekanism:processing/lead/raw_storage_blocks/from_raw')
    ri('mekanism:processing/lead/raw/from_raw_block')
    ri('mekanism:processing/lead/storage_blocks/from_ingots')
    ri('mekanism:processing/lead/ingot/from_nuggets')
    ri('mekanism:processing/lead/ingot/from_block')
    ri('mekanism:processing/lead/ingot/from_raw_smelting')
    ri('mekanism:processing/lead/ingot/from_ore_smelting')
    ri('mekanism:processing/lead/ingot/from_dust_smelting')
    ri('mekanism:processing/lead/ingot/from_raw_blasting')
    ri('mekanism:processing/lead/ingot/from_ore_blasting')
    ri('mekanism:processing/lead/ingot/from_dust_blasting')
    ri('mekanism:processing/lead/nugget/from_ingot')

    //copper
    ri('tconstruct:common/materials/copper_nugget_from_ingot')
    ri('tconstruct:common/materials/copper_ingot_from_nuggets')
    ri('immersiveengineering:smelting/copper_ingot_from_dust')
    ri('immersiveengineering:smelting/copper_ingot_from_dust_from_blasting')
    ri('immersiveengineering:crafting/copper_ingot_to_nugget_copper')
    ri('immersiveengineering:crafting/nugget_copper_to_copper_ingot')
    ri('create:smelting/copper_ingot_from_crushed')
    ri('create:blasting/copper_ingot_from_crushed')
    ri('create:crafting/materials/copper_nugget')
    ri('cyclic:copper_nugget')
    ri('iceandfire:copper_ingot')
    ri('iceandfire:copper_block_to_ingots')
    ri('iceandfire:furnace/copper_ingot')
    ri('iceandfire:furnace/copper_ingot_blasting')
    ri('iceandfire:copper_block')
    ri('iceandfire:copper_ingot_to_nuggets')
    ri('iceandfire:copper_hoe')
    ri('iceandfire:copper_axe')
    ri('iceandfire:copper_pickaxe')
    ri('iceandfire:copper_shovel')
    ri('iceandfire:copper_sword')

    //bronze
    ri('mekanism:storage_blocks/bronze')
    ri('mekanism:processing/bronze/ingot/from_block')
    ri('mekanism:processing/bronze/ingot/from_nuggets')
    ri('mekanism:processing/bronze/ingot/from_dust_smelting')
    ri('mekanism:processing/bronze/ingot/from_dust_blasting')
    ri('mekanism:nuggets/bronze')
    //silver
    ri('iceandfire:silver_ingot')
    ri('iceandfire:silver_block_to_ingots')
    ri('iceandfire:furnace/silver_ingot')
    ri('iceandfire:furnace/silver_ingot_blasting')
    ri('iceandfire:silver_block')
    ri('iceandfire:silver_ingot_to_nuggets')
    ri('iceandfire:silver_hoe')
    ri('iceandfire:silver_axe')
    ri('iceandfire:silver_pickaxe')
    ri('iceandfire:silver_shovel')
    ri('iceandfire:silver_sword')
    ri('immersiveengineering:crafting/raw_silver_to_raw_block_silver')
    ri('immersiveengineering:crafting/raw_block_silver_to_raw_silver')
    ri('immersiveengineering:crafting/storage_silver_to_ingot_silver')
    ri('immersiveengineering:crafting/nugget_silver_to_ingot_silver')
    ri('immersiveengineering:crafting/ingot_silver_to_storage_silver')
    ri('immersiveengineering:smelting/ingot_silver_from_dust')
    ri('immersiveengineering:smelting/ingot_silver')
    ri('immersiveengineering:smelting/ingot_silver_from_dust_from_blasting')
    ri('immersiveengineering:smelting/ingot_silver_from_blasting')
    ri('immersiveengineering:smelting/ingot_silver_from_blasting2')
    ri('immersiveengineering:smelting/ingot_silver_from_blasting3')
    ri('immersiveengineering:smelting/ingot_silver2')
    ri('immersiveengineering:smelting/ingot_silver3')
    ri('create:smelting/ingot_silver_compat_immersiveengineering')
    ri('create:blasting/ingot_silver_compat_immersiveengineering')
    ri('create:smelting/silver_ingot_compat_thermal')
    ri('create:blasting/silver_ingot_compat_thermal')
    ri('create:splashing/immersiveengineering/crushed_raw_silver')

    
    

    //steel
    ro('immersiveengineering:armor_steel_feet')
    ro('immersiveengineering:armor_steel_legs')
    ro('immersiveengineering:armor_steel_chest')
    ro('immersiveengineering:armor_steel_head')
    ro('immersiveengineering:sword_steel')
    ro('immersiveengineering:pickaxe_steel')
    ro('immersiveengineering:axe_steel')
    ro('immersiveengineering:shovel_steel')
    ro('immersiveengineering:hoe_steel')
    ro('beyond_earth:steel_block')
    ro('immersiveengineering:nugget_steel')
    ro('beyond_earth:steel_nugget')
    ro('beyond_earth:steel_ingot')
    ro('immersiveengineering:ingot_steel')

    //osmium
    ri('create:smelting/ingot_osmium_compat_mekanism')
    ri('create:blasting/ingot_osmium_compat_mekanism')
    //tin
    ri('create:splashing/mekanism/crushed_raw_tin')
    ri('create:blasting/ingot_tin_compat_mekanism')
    ri('create:blasting/tin_ingot_compat_thermal')
    ri('create:smelting/ingot_tin_compat_mekanism')
    ri('create:smelting/tin_ingot_compat_thermal')
    ri('mekanism:processing/tin/ingot/from_dust_smelting')
    ri('mekanism:processing/tin/ingot/from_dust_blasting')
    ri('mekanism:processing/tin/raw/from_raw_block')
    ri('mekanism:processing/tin/nugget/from_ingot')
    ri('mekanism:processing/tin/raw_storage_blocks/from_raw')
    ri('mekanism:processing/tin/storage_blocks/from_ingots')
    ri('mekanism:processing/tin/ingot/from_nuggets')
    ri('mekanism:processing/tin/ingot/from_block')
    ri('mekanism:processing/tin/ingot/from_raw_smelting')
    ri('mekanism:processing/tin/ingot/from_ore_smelting')
    ri('mekanism:processing/tin/ingot/from_raw_blasting')
    ri('mekanism:processing/tin/ingot/from_ore_blasting')
    //aluminium
    ri('create:smelting/ingot_aluminum_compat_immersiveengineering')
    ri('create:blasting/ingot_aluminum_compat_immersiveengineering')
    //gold

    //iron

    //uranuim

    //constantan

    //nickel

    //electrum

    //diamond
    ri('industrialforegoing:diamond_gear')
    //emerald

    //netherite
    ri('cyclic:netherite_nugget')
    ri('tconstruct:common/materials/netherite_nugget_from_ingot')
    //avaritia
    ri('avaritia:compressor')

})