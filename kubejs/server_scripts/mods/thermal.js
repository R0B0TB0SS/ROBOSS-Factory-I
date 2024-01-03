onEvent('recipes', e => {
    
    const plate =[]

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



})