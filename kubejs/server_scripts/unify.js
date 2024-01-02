onEvent('recipes', e => {
    //botania
    //orechid
        const oreorechide = [
            {
                out:"thermal:lead_ore", 
                chance:29371
            },{
                out:"thermal:silver_ore", 
                chance:29371
            }
        ]
       
        oreorechide.forEach((ore) => {
            e.custom({
                "type": "botania:orechid",
                "input": "minecraft:stone",
                "output": {
                  "type": "block",
                  "block": ore.out
                },
                "weight": ore.chance
              })
        })
        //meka
        const orecraft=[
            {
                out:"thermal:silver_ore",
                in:"thermal:raw_silver"
            }
        ]
        orecraft.forEach((ore)=>{
            e.custom({
                "type":"mekanism:combining",
                "mainInput":{
                    "amount":8,
                    "ingredient":{
                        "item":ore.in
                    }
                },
                "extraInput":{
                    "ingredient":{
                        "tag":"forge:cobblestone/normal"
                    }
                },
                "output":{
                    "item":ore.out
                }
            })
        })
        const deeporecraft =[
            {
                out:"thermal:deepslate_silver_ore",
                in:"thermal:raw_silver"
            }
        ]
        deeporecraft.forEach((deepore)=>{
            e.custom({
                "type":"mekanism:combining",
                "mainInput":{
                    "amount":8,
                    "ingredient":{
                        "item":deepore.in
                    }
                },
                "extraInput":{
                    "ingredient":{
                        "tag":"forge:cobblestone/deepslate"
                    }
                },
                "output":{
                    "item":deepore.out
                }
            })
        })


        e.replaceInput(
            "minecraft:lava_bucket",
            Ingredient.of([Item.of("chickens:liquid_egg", '{id:"minecraft:lava"}'), "minecraft:lava_bucket"]).toJson()
          );
        
          e.replaceInput(
            "minecraft:water_bucket",
            Ingredient.of([Item.of("chickens:liquid_egg", '{id:"minecraft:water"}'), "minecraft:water_bucket"]).toJson()
          );

})