onEvent("recipes", (event) => {
  event.remove({ id: "compactmachines:wall" });
  event.recipes.compactcrafting.miniaturization({
    recipeSize: 1,
    layers: [
      {
        type: "compactcrafting:filled",
        component: "R",
      },
      {
        type: "compactcrafting:filled",
        component: "I",
      },
    ],

    catalyst: {
      id: "minecraft:ender_pearl",
      Count: 1,
    },

    components: {
      R: {
        type: "compactcrafting:block",
        block: "minecraft:redstone_wire",
      },
      I: {
        type: "compactcrafting:block",
        block: "minecraft:iron_block",
      },
    },

    outputs: [
      {
        id: "compactmachines:wall",
        Count: 16,
      },
    ],
  });

  event.remove({ id: "compactmachines:machine_tiny" });
  event.recipes.compactcrafting.miniaturization({
    recipeSize: 3,
    layers: [
      {
        type: "compactcrafting:filled",
        component: "W",
      },
      {
        type: "compactcrafting:mixed",
        pattern: [
          ["W", "W", "W"],
          ["W", "I", "W"],
          ["W", "W", "W"],
        ],
      },
      {
        type: "compactcrafting:filled",
        component: "W",
      },
    ],

    catalyst: {
      id: "minecraft:ender_pearl",
      Count: 1,
    },

    components: {
      W: {
        type: "compactcrafting:block",
        block: "compactmachines:wall",
      },
      I: {
        type: "compactcrafting:block",
        block: "minecraft:copper_block",
      },
    },

    outputs: [
      {
        id: "compactmachines:machine_tiny",
        Count: 1,
      },
    ],
  });

  event.remove({ id: "compactmachines:machine_small" });
  event.recipes.compactcrafting.miniaturization({
    recipeSize: 3,
    layers: [
      {
        type: "compactcrafting:filled",
        component: "W",
      },
      {
        type: "compactcrafting:mixed",
        pattern: [
          ["W", "W", "W"],
          ["W", "I", "W"],
          ["W", "W", "W"],
        ],
      },
      {
        type: "compactcrafting:filled",
        component: "W",
      },
    ],

    catalyst: {
      id: "minecraft:ender_pearl",
      Count: 1,
    },

    components: {
      W: {
        type: "compactcrafting:block",
        block: "compactmachines:wall",
      },
      I: {
        type: "compactcrafting:block",
        block: "minecraft:iron_block",
      },
    },

    outputs: [
      {
        id: "compactmachines:machine_small",
        Count: 1,
      },
    ],
  });

  event.remove({ id: "compactmachines:machine_normal" });
  event.recipes.compactcrafting.miniaturization({
    recipeSize: 3,
    layers: [
      {
        type: "compactcrafting:filled",
        component: "W",
      },
      {
        type: "compactcrafting:mixed",
        pattern: [
          ["W", "W", "W"],
          ["W", "G", "W"],
          ["W", "W", "W"],
        ],
      },
      {
        type: "compactcrafting:filled",
        component: "W",
      },
    ],

    catalyst: {
      id: "minecraft:ender_pearl",
      Count: 1,
    },

    components: {
      W: {
        type: "compactcrafting:block",
        block: "compactmachines:wall",
      },
      G: {
        type: "compactcrafting:block",
        block: "minecraft:gold_block",
      },
    },

    outputs: [
      {
        id: "compactmachines:machine_normal",
        Count: 1,
      },
    ],
  });

  event.remove({ id: "compactmachines:machine_maximum" });
  event.recipes.compactcrafting.miniaturization({
    recipeSize: 5,
    layers: [
      {
        type: "compactcrafting:filled",
        component: "W",
      },
      {
        type: "compactcrafting:hollow",
        wall: "W",
      },
      {
        type: "compactcrafting:mixed",
        pattern: [
          ["W", "W", "W", "W", "W"],
          ["W", "-", "-", "-", "W"],
          ["W", "-", "E", "-", "W"],
          ["W", "-", "-", "-", "W"],
          ["W", "W", "W", "W", "W"],
        ],
      },
      {
        type: "compactcrafting:hollow",
        wall: "W",
      },
      {
        type: "compactcrafting:filled",
        component: "W",
      },
    ],

    catalyst: {
      id: "minecraft:ender_pearl",
      Count: 1,
    },

    components: {
      W: {
        type: "compactcrafting:block",
        block: "compactmachines:wall",
      },

      E: {
        type: "compactcrafting:block",
        block: "minecraft:netherite_block",
      },
    },

    outputs: [
      {
        id: "compactmachines:machine_maximum",
        Count: 1,
      },
    ],
  });

  event.remove({ id: "compactmachines:machine_large" });
  event.recipes.compactcrafting.miniaturization({
    recipeSize: 5,
    layers: [
      {
        type: "compactcrafting:filled",
        component: "W",
      },
      {
        type: "compactcrafting:hollow",
        wall: "W",
      },
      {
        type: "compactcrafting:mixed",
        pattern: [
          ["W", "W", "W", "W", "W"],
          ["W", "-", "-", "-", "W"],
          ["W", "-", "I", "-", "W"],
          ["W", "-", "-", "-", "W"],
          ["W", "W", "W", "W", "W"],
        ],
      },
      {
        type: "compactcrafting:hollow",
        wall: "W",
      },
      {
        type: "compactcrafting:filled",
        component: "W",
      },
    ],

    catalyst: {
      id: "minecraft:ender_pearl",
      Count: 1,
    },

    components: {
      W: {
        type: "compactcrafting:block",
        block: "compactmachines:wall",
      },
      I: {
        type: "compactcrafting:block",
        block: "minecraft:obsidian",
      },
    },

    outputs: [
      {
        id: "compactmachines:machine_large",
        Count: 1,
      },
    ],
  });

  event.remove({ id: "compactmachines:machine_giant" });
  event.recipes.compactcrafting.miniaturization({
    recipeSize: 5,
    layers: [
      {
        type: "compactcrafting:filled",
        component: "W",
      },
      {
        type: "compactcrafting:hollow",
        wall: "W",
      },
      {
        type: "compactcrafting:mixed",
        pattern: [
          ["W", "W", "W", "W", "W"],
          ["W", "-", "-", "-", "W"],
          ["W", "-", "D", "-", "W"],
          ["W", "-", "-", "-", "W"],
          ["W", "W", "W", "W", "W"],
        ],
      },
      {
        type: "compactcrafting:hollow",
        wall: "W",
      },
      {
        type: "compactcrafting:filled",
        component: "W",
      },
    ],

    catalyst: {
      id: "minecraft:ender_pearl",
      Count: 1,
    },

    components: {
      W: {
        type: "compactcrafting:block",
        block: "compactmachines:wall",
      },
      D: {
        type: "compactcrafting:block",
        block: "minecraft:diamond_block",
      },
    },

    outputs: [
      {
        id: "compactmachines:machine_giant",
        Count: 1,
      },
    ],
  });
});
