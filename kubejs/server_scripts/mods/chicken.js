onEvent("recipes", (event) => {
event.shapeless("minecraft:water_bucket", [
    Item.of("chickens:liquid_egg", '{id:"minecraft:water"}'),
    "minecraft:bucket",
  ]);

  event.shapeless("minecraft:lava_bucket", [
    Item.of("chickens:liquid_egg", '{id:"minecraft:lava"}'),
    "minecraft:bucket",
  ]);

  const chickens = [
    {
      input: "minecraft:flint",
      output: Item.of(
        "chickens:chicken_item",
        '{ChickenType:{id:"chickens:flint_chicken"},gain:1,growth:1,strength:1}'
      ),
    },{
      input: "minecraft:egg",
      output: Item.of(
        "chickens:chicken_item",
        '{ChickenType:{id:"chickens:smart_chicken"},gain:1,growth:1,strength:1}'
      ),
    },
    {
      input: "minecraft:sand",
      output: Item.of(
        "chickens:chicken_item",
        '{ChickenType:{id:"chickens:sand_chicken"},gain:1,growth:1,strength:1}'
      ),
    },
    {
      input: "#minecraft:logs",
      output: Item.of(
        "chickens:chicken_item",
        '{ChickenType:{id:"chickens:log_chicken"},gain:1,growth:1,strength:1}'
      ),
    },
    {
      input: "minecraft:soul_sand",
      output: Item.of(
        "chickens:chicken_item",
        '{ChickenType:{id:"chickens:soulsand_chicken"},gain:1,growth:1,strength:1}'
      ),
    },
    {
      input: "minecraft:quartz",
      output: Item.of(
        "chickens:chicken_item",
        '{ChickenType:{id:"chickens:quartz_chicken"},gain:1,growth:1,strength:1}'
      ),
    },

    {
      input: "#forge:dyes/green",
      output: Item.of(
        "chickens:chicken_item",
        '{ChickenType:{id:"chickens:green_chicken"},gain:1,growth:1,strength:1}'
      ),
    },
    {
      input: "#forge:dyes/blue",
      output: Item.of(
        "chickens:chicken_item",
        '{ChickenType:{id:"chickens:blue_chicken"},gain:1,growth:1,strength:1}'
      ),
    },
    {
      input: "#forge:dyes/red",
      output: Item.of(
        "chickens:chicken_item",
        '{ChickenType:{id:"chickens:red_chicken"},gain:1,growth:1,strength:1}'
      ),
    },
    {
      input: "#forge:dyes/black",
      output: Item.of(
        "chickens:chicken_item",
        '{ChickenType:{id:"chickens:black_chicken"},gain:1,growth:1,strength:1}'
      ),
    },
    {
      input: "#forge:dyes/yellow",
      output: Item.of(
        "chickens:chicken_item",
        '{ChickenType:{id:"chickens:yellow_chicken"},gain:1,growth:1,strength:1}'
      ),
    },
    {
      input: "minecraft:bone_meal",
      output: Item.of(
        "chickens:chicken_item",
        '{ChickenType:{id:"chickens:white_chicken"},gain:1,growth:1,strength:1}'
      ),
    },
  ];

  chickens.forEach((chicken) => {
    event.recipes.createMechanicalCrafting(
      chicken.output,
      [" AAA ", "AAAAA", "AASAA", "AAAAA", " AAA "],
      {
        S: {
          item: "minecraft:egg",
        },
        A: chicken.input,
      }
    );
  });

  event.recipes.create.emptying({
    ingredients: [
      Item.of("chickens:liquid_egg", '{id:"minecraft:lava"}').toJson(),
    ],
    results: [
      {
        fluid: "minecraft:lava",
        amount: 1000,
      },
    ],
  });

  event.recipes.create.emptying({
    ingredients: [
      Item.of("chickens:liquid_egg", '{id:"minecraft:water"}').toJson(),
    ],
    results: [
      {
        fluid: "minecraft:water",
        amount: 1000,
      },
    ],
  });
});
