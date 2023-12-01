onEvent('recipes', e => {
    
    e.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"robosstweaks:creative_fabricator"}'), [
        'SSS',
        'SOS',
        'SAS'
      ], {
        S: 'ae2:controller',
        A: 'computercraft:monitor_normal',
        O: 'avaritia:infinity_catalyst'
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