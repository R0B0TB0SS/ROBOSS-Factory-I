onEvent('recipes', e => {
    
    
    const pressplate = [
        {
            in:"robosstweaks:robotboss_ingot", 
            out: "robosstweaks:robotboss_plate",
            rf:2400
        },{
            in:"robosstweaks:laimx_ingot", 
            out: "robosstweaks:laimx_plate",
            rf:2400
        },{
            in:"robosstweaks:blakdestroyer_ingot", 
            out: "robosstweaks:blakdestroyer_plate",
            rf:2400
        }
    ]
   
    pressplate.forEach((i) => {
        e.custom({
            "type": "create:pressing",
            "ingredients": [
              {
                "item": i.in
              }
            ],
            "results": [
              {
                "item": i.out
              }
            ]
          })
    })

    pressplate.forEach((i) => {
        e.custom({
            "type":"immersiveengineering:metal_press",
            "mold":"immersiveengineering:mold_plate",
            "result":{"item":i.out},
            "input":{"item":i.in},
            "energy":i.rf
        })
    })

    pressplate.forEach((i) => {
        e.custom({
            "type":"minecraft:crafting_shapeless",
            "ingredients":[
                {"item":i.in},
                {"item":"immersiveengineering:hammer"}
            ],
            "result":{"item":i.out}
        })
    })


    pressplate.forEach((i) => {
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
    })



    const pressgear =[
        {
            in:"robosstweaks:robotboss_ingot", 
            out: "robosstweaks:robotboss_gear",
            rf:2400
        },{
            in:"robosstweaks:laimx_ingot", 
            out: "robosstweaks:laimx_gear",
            rf:2400
        },{
            in:"robosstweaks:blakdestroyer_ingot", 
            out: "robosstweaks:blakdestroyer_gear",
            rf:2400
        }
    ]

    pressgear.forEach((i) => {
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
                "item": i.out
              }
            ]
          })
    })

    pressgear.forEach((i) => {
        e.custom({
            "type":"immersiveengineering:metal_press",
            "mold":"immersiveengineering:mold_gear",
            "result":{"item":i.out},
            "input":{
                "count":4,
                "base_ingredient":{
                    "item":i.in
                }
            },
            "energy":i.rf
        })
    })

})