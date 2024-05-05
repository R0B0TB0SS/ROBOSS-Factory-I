onEvent('entity.loot_tables', e => {
    
    e.modifyEntity('mother_silverfish:mother_silverfish', table => {
      table.addPool(pool => {
        // Modify pig loot table to *also* drop dirt on top of its regular drops
        pool.addItem(Item.of('minecraft:player_head', '{SkullOwner:{Id:[I;816106844,1465142712,-1990191102,712270461],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZGE5MWRhYjgzOTFhZjVmZGE1NGFjZDJjMGIxOGZiZDgxOWI4NjVlMWE4ZjFkNjIzODEzZmE3NjFlOTI0NTQwIn19fQ=="}]}},display:{Name:\'{"text":"Mother Silverfish Head"}\'}}'))
      })
    })
  })