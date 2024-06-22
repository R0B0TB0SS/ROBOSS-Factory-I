onEvent('recipes', e => {
    
    const plate =[
        {
            in:"thermal:enderium_ingot",
            out:"thermal:enderium_plate"
        },{
            in:"thermal:lumium_ingot",
            out:"thermal:lumium_plate"
        },{
            in:"thermal:invar_ingot",
            out:"thermal:invar_plate"
        },{
            in:"thermal_extra:soul_infused_ingot",
            out:"thermal_extra:soul_infused_plate"
        },{
            in:"thermal_extra:shellite_ingot",
            out:"thermal_extra:shellite_plate"
        },{
            in:"thermal_extra:twinite_ingot",
            out:"thermal_extra:twinite_plate"
        },{
            in:"thermal_extra:dragonsteel_ingot",
            out:"thermal_extra:dragonsteel_plate"
        },{
            in:"thermal:tin_ingot",
            out:"thermal:tin_plate"
        },{
            in:"thermal:signalum_ingot",
            out:"thermal:signalum_plate"
        },{
            in:"minecraft:netherite_ingot",
            out:"thermal:netherite_plate"
        },{
            in:"create:zinc_ingot",
            out:'createaddition:zinc_sheet'
        },{
          in:'create:brass_ingot',
          out:'create:brass_sheet'
      }
    ]

    plate.forEach((i) => {
            e.custom({
                "type":"minecraft:crafting_shapeless",
                "ingredients":[
                    {
                        "item":i.in
                    },
                    {
                        "item":"immersiveengineering:hammer"
                    }
                ],
                "result":{
                    "item":i.out
                }
            })
        }
    )


    plate.forEach((i)=>{
        e.custom({
            "type":"immersiveengineering:metal_press",
            "mold":"immersiveengineering:mold_plate",
            "result":{
                "item":i.out
            },
                "input":{
                    "item":i.in
                }
                ,"energy":2400
            })
    })


    const gear =[
        {
            in:"thermal_extra:soul_infused_ingot",
            out:"thermal_extra:soul_infused_gear"
        },{
            in:"thermal:enderium_ingot",
            out:"thermal:enderium_gear"
        },{
            in:"thermal:lumium_ingot",
            out:"thermal:lumium_gear"
        },{
            in:"thermal:signalum_ingot",
            out:"thermal:signalum_gear"
        },{
            in:"minecraft:quartz",
            out:"thermal:quartz_gear"
        },{
            in:"minecraft:diamond",
            out:"thermal:diamond_gear"
        },{
            in:"minecraft:lapis_lazuli",
            out:"thermal:lapis_gear"
        },{
            in:"minecraft:emerald",
            out:"thermal:emerald_gear"
        },{
            in:"minecraft:netherite_ingot",
            out:"thermal:netherite_gear"
        },{
            in:"thermal_extra:dragonsteel_ingot",
            out:"thermal_extra:dragonsteel_gear"
        },{
            in:"thermal_extra:twinite_ingot",
            out:"thermal_extra:twinite_gear"
        },{
            in:"thermal_extra:shellite_ingot",
            out:"thermal_extra:shellite_gear"
        },{
            in:"pneumaticcraft:ingot_iron_compressed",
            out:'pneumaticcraft:compressed_iron_gear'
        }
    ]

    gear.forEach((i) => {
        e.custom({
            "type":"immersiveengineering:metal_press",
            "mold":"immersiveengineering:mold_gear",
            "result":{
                "item":i.out
            },
            "input":{
                "count":4,
                "base_ingredient":{
                    "item":i.in
                }
            },
            "energy":2400
        })
    })



})