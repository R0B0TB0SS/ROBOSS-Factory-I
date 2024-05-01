onEvent('recipes', e => {

    const gear =[
        {
            f:"tconstruct:molten_diamond",
            out:"thermal:diamond_gear",
            am:400
        },{
            f:"tconstruct:molten_quartz",
            out:"thermal:quartz_gear",
            am:400
        },{
            f:"tconstruct:molten_emerald",
            out:"thermal:emerald_gear",
            am:400
        }
    ]



   const plate =[

   ]

    gear.forEach((i)=>{
        e.custom({
            "type": "tconstruct:casting_table",
            "cast": {
              "tag": "tconstruct:casts/multi_use/gear"
            },
            "fluid": {
              "tag": i.f,
              "amount": i.am
            },
            "result": {
              "item": i.out
            },
            "cooling_time": 100
          })
    })

    gear.forEach((i)=>{
        e.custom({
            "type": "tconstruct:casting_table",
            "cast": {
              "tag": "tconstruct:casts/single_use/gear"
            },
            "cast_consumed": true,
            "fluid": {
              "tag": i.f,
              "amount": i.am
            },
            "result": {
              "item":i.out 
            },
            "cooling_time": 100
          })
    })



    plate.forEach((i)=>{
      e.custom({
          "type": "tconstruct:casting_table",
          "cast": {
            "tag": "tconstruct:casts/multi_use/plate"
          },
          "fluid": {
            "tag": i.f,
            "amount": i.am
          },
          "result": {
            "item": i.out
          },
          "cooling_time": 100
        })
  })

  plate.forEach((i)=>{
      e.custom({
          "type": "tconstruct:casting_table",
          "cast": {
            "tag": "tconstruct:casts/single_use/plate"
          },
          "cast_consumed": true,
          "fluid": {
            "tag": i.f,
            "amount": i.am
          },
          "result": {
            "item":i.out 
          },
          "cooling_time": 100
        })
  })

})