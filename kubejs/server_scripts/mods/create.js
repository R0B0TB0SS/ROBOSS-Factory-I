onEvent('recipes', e => {
    
    const plate =[]

    plate.forEach((i) => {
            e.custom({
                "type":"create:pressing",
                "ingredients": [{
                      "item": i.in
                }],
                "results": [{
                    "item": i.out
                }]
            })
        }
    )



})