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
          in:"mekanism:ingot_steel",
          out:"immersiveengineering:plate_steel"
      },{
          in:"mekanism:ingot_uranium",
          out:"immersiveengineering:plate_uranium"
      },{
          in:"immersiveengineering:ingot_aluminum",
          out:"immersiveengineering:plate_aluminum"
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