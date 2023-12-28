onEvent('recipes', e => {
    
    e.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"robosstweaks:creative_fabricator"}'), [
        ' S ',
        ' O ',
        ' A '
      ], {
        A: 'robosstweaks:creative_catalyst',
        O: 'computercraft:monitor_normal',
        S: 'avaritia:infinity_catalyst'
      })
    
      e.shaped('8x robosstweaks:creative_catalyst', [
        'SSS',
        'SOS',
        'SSS'
      ], {
        S: 'ae2:controller',
        O: 'avaritia:infinity_block'
      })
})