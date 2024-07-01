onEvent('recipes', e => {



  const chiller =[
    {
      in:"tconstruct:molten_electrum",
      inamount:45,
      out:'createaddition:electrum_rod',
      cast:"thermal:chiller_rod_cast",
      rf:2400
    },{
      in:"tconstruct:molten_copper",
      inamount:45,
      out:'createaddition:copper_rod',
      cast:"thermal:chiller_rod_cast",
      rf:2400
    },{
      in:"tconstruct:molten_gold",
      inamount:45,
      out:'createaddition:gold_rod',
      cast:"thermal:chiller_rod_cast",
      rf:2400
    },{
      in:"tconstruct:molten_brass",
      inamount:45,
      out:'createaddition:brass_rod',
      cast:"thermal:chiller_rod_cast",
      rf:2400
    },{
      in:"thermal_extra:dragonsteel",
      inamount:90,
      out:'thermal_extra:dragonsteel_ingot',
      cast:"thermal:chiller_ingot_cast",
      rf:2400
    },{
      in:"thermal_extra:twinite",
      inamount:90,
      out:'thermal_extra:twinite_ingot',
      cast:"thermal:chiller_ingot_cast",
      rf:4800
    },{
      in:"thermal_extra:shellite",
      inamount:90,
      out:'thermal_extra:shellite_ingot',
      cast:"thermal:chiller_ingot_cast",
      rf:4800
    },{
      in:"thermal_extra:soul_infused",
      inamount:90,
      out:'thermal_extra:soul_infused_ingot',
      cast:"thermal:chiller_ingot_cast",
      rf:4800
    },{
      in:"tconstruct:molten_brass",
      inamount:90,
      out:'create:brass_ingot',
      cast:"thermal:chiller_ingot_cast",
      rf:4800
    },{
      in:"beyond_earth:molten_calorite",
      inamount:90,
      out:'beyond_earth:calorite_ingot',
      cast:"thermal:chiller_ingot_cast",
      rf:4800
    },{
      in:"beyond_earth:molten_desh",
      inamount:90,
      out:'beyond_earth:desh_ingot',
      cast:"thermal:chiller_ingot_cast",
      rf:4800
    },{
      in:"beyond_earth:molten_ostrum",
      inamount:90,
      out:'beyond_earth:ostrum_ingot',
      cast:"thermal:chiller_ingot_cast",
      rf:4800
    },{
      in:"tconstruct:molten_refined_obsidian",
      inamount:90,
      out:'mekanism:ingot_refined_obsidian',
      cast:"thermal:chiller_ingot_cast",
      rf:4800
    },{
      in:"tconstruct:molten_refined_glowstone",
      inamount:90,
      out:'mekanism:ingot_refined_glowstone',
      cast:"thermal:chiller_ingot_cast",
      rf:4800
    },{
      in:"tconstruct:molten_signalum",
      inamount:90,
      out:'thermal:signalum_ingot',
      cast:"thermal:chiller_ingot_cast",
      rf:4800
    },{
      in:"tconstruct:molten_lumium",
      inamount:90,
      out:'thermal:lumium_ingot',
      cast:"thermal:chiller_ingot_cast",
      rf:4800
    },{
      in:"tconstruct:molten_enderium",
      inamount:90,
      out:'thermal:enderium_ingot',
      cast:"thermal:chiller_ingot_cast",
      rf:4800
    },{
      in:"tconstruct:molten_uranium",
      inamount:90,
      out:'mekanism:ingot_uranium',
      cast:"thermal:chiller_ingot_cast",
      rf:4800
    },{
      in:"tconstruct:molten_osmium",
      inamount:90,
      out:'mekanism:ingot_osmium',
      cast:"thermal:chiller_ingot_cast",
      rf:4800
    },{
      in:"tconstruct:molten_zinc",
      inamount:90,
      out:'create:zinc_ingot',
      cast:"thermal:chiller_ingot_cast",
      rf:4800
    },{
      in:"tconstruct:molten_rose_gold",
      inamount:90,
      out:'tconstruct:rose_gold_ingot',
      cast:"thermal:chiller_ingot_cast",
      rf:4800
    },{
      in:"tconstruct:molten_clay",
      inamount:90,
      out:'minecraft:brick',
      cast:"thermal:chiller_ingot_cast",
      rf:4800
    }

  ]

  chiller.forEach((i) =>{
    e.custom({
      "type": "thermal:chiller",
      "ingredients": [
        {
          "fluid": i.in,
          "amount": i.inamount
        },
        {
          "item": i.cast
        }
      ],
      "result": [
        {
          "item": i.out
        }
      ],
      "energy": i.rf,
    })
  })     
    const plate =[
        {
          in:"mekanism:ingot_uranium",
          out:"immersiveengineering:plate_uranium"
      },{
          in:"immersiveengineering:ingot_aluminum",
          out:"immersiveengineering:plate_aluminum"
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
                "type": "thermal:press",
                "ingredient": {
                  "item": i.in
                },
                "result": [
                  {
                    "item": i.out
                  }
                ]
              })
        }
    )

    const gear =[
      {
        in:"minecraft:diamond",
        out:"thermal:diamond_gear"
    },{
        in:"minecraft:quartz",
        out:"thermal:quartz_gear"
    },{
        in:"minecraft:emerald",
        out:"thermal:emerald_gear"
    },{
      in:"minecraft:lapis_lazuli",
      out:"thermal:lapis_gear"
    },{
      in:"pneumaticcraft:ingot_iron_compressed",
      out:'pneumaticcraft:compressed_iron_gear'
  }
    ]

    gear.forEach((i)=>{
        e.custom({
          "type": "thermal:press",
          "ingredients": [
            {
              "item": i.in,
              "count": 4
            },
            {
              "item": "thermal:press_gear_die"
            }
          ],
          "result": [
            {
              "item":i.out
            }
          ]
        })
    })



})