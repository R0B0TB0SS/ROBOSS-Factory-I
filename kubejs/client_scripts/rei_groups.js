onEvent("rei.group", (event) => {
  const useNbt = [
    "tconstruct:crafting_station",
    "tconstruct:tinker_station",
    "tconstruct:part_builder",
    "tconstruct:tinkers_anvil",
    "tconstruct:scorched_anvil",
    "tconstruct:potion_bucket",
    "tconstruct:repair_kit",
    "tconstruct:pick_head",
    "tconstruct:hammer_head",
    "tconstruct:small_axe_head",
    "tconstruct:broad_axe_head",
    "tconstruct:small_blade",
    "tconstruct:broad_blade",
    "tconstruct:round_plate",
    "tconstruct:large_plate",
    "tconstruct:tool_binding",
    "tconstruct:tool_handle",
    "tconstruct:tough_handle",
    "tconstruct:pickaxe",
    "tconstruct:sledge_hammer",
    "tconstruct:vein_hammer",
    "tconstruct:mattock",
    "tconstruct:pickadze",
    "tconstruct:excavator",
    "tconstruct:hand_axe",
    "tconstruct:broad_axe",
    "tconstruct:kama",
    "tconstruct:scythe",
    "tconstruct:dagger",
    "tconstruct:sword",
    "tconstruct:cleaver",
    "potion",
    "enchanted_book",
    "splash_potion",
    "tipped_arrow",
    "lingering_potion",
    "bloodmagic:upgradetome",
    "rftoolsutility:syringe",
    "immersiveengineering:shader",
  ];

  useNbt.forEach((id) => {
    const item = Item.of(id);
    const { namespace, path } = Utils.id(item.id);
    event.groupSameItem(
      `${namespace}:rei_groups/${path}`,
      item.getName(),
      item
    );
  });

  let ae2Cables = ["glass", "covered", "smart", "covered_dense", "smart_dense"];
  ae2Cables.forEach((type) => {
    event.groupItemsByTag(
      `ae2:rei_groups/${type}_cables`,
      `${toMultiTitleCase(type)} Cables`,
      `ae2:${type}_cable`
    );
  });

  event.groupItemsByTag(
    `ae2:rei_groups/memory_cards`,
    `Memory Cards`,
    `ae2:memory_cards`
  );

  event.groupItemsByTag(
    `tconstruct:rei_groups/single_use`,
    `Single use casts`,
    `tconstruct:casts/single_use`
  );

  event.groupItemsByTag(
    `tconstruct:rei_groups/multi_use`,
    `Multi use casts`,
    `tconstruct:casts/multi_use`
  );

  event.groupItems(
    `roboss:rei_groups/spawn_eggs`,
    `Spawn Eggs`,
    /.*spawn_egg/
  );

  event.groupItems("minecraft:rei_groups/buckets", "Bucket of something :)", [
    /.*_bucket/,
    /.*:bucket_of.*/,
  ]);

  event.groupItems(
    "ae2:rei_groups/paint_balls",
    "Paint Balls",
    /^ae2:.*_paint_ball$/
  );

  event.groupItems(
    "industrialforegoing:rei_groups/item_bh",
    "Black Hole Units",
    /indus.*hole_unit/
  );

  event.groupItems(
    "industrialforegoing:rei_groups/tank_bh",
    "Black Hole Tanks",
    /indus.*hole_tank/
  );

  event.groupItems(
    "mcwpaths:rei_groups/paths_and_pavings",
    "Macaw's Paths and Pavings",
    "@mcwpaths"
  );

  event.groupItems(
    "functionalstorage:rei_groups/drawers",
    "Functional Storage's Drawers",
    "#functionalstorage:drawer"
  );

  let modFluidsToHide = [
    "tconstruct",
    "thermal",
    "industrialforegoing",
    "minecraft",
    "create",
    "mekanism",
    "immersiveengineering",
    "createaddition",
    "cofh_core",
    "mekanismgenerators",
    "mob_grinding_utils",
    "experienceobelisk",
  ];

  event.groupFluids(
    "kubejs:rei_groups/fluids",
    "Fluids",
    Ku.Fluids.getFluidsByNamespaces(modFluidsToHide).toArray()
  );

  // const $EntryTypeRegistry = java(
  //   "me.shedaniel.rei.api.common.entry.type.EntryTypeRegistry"
  // );
  //
  // console.log($EntryTypeRegistry.getInstance().keySet());

  const mekGas = [
    "mekanism:hydrogen",
    "mekanism:oxygen",
    "mekanism:water_vapor",
    "mekanism:chlorine",
    "mekanism:sulfur_dioxide",
    "mekanism:sulfur_trioxide",
    "mekanism:sulfuric_acid",
    "mekanism:hydrogen_chloride",
    "mekanism:hydrofluoric_acid",
    "mekanism:uranium_oxide",
    "mekanism:uranium_hexafluoride",
    "mekanism:ethene",
    "mekanism:sodium",
    "mekanism:steam",
    "mekanism:superheated_sodium",
    "mekanism:brine",
    "mekanism:lithium",
    "mekanism:osmium",
    "mekanism:fissile_fuel",
    "mekanism:nuclear_waste",
    "mekanism:spent_nuclear_waste",
    "mekanism:plutonium",
    "mekanism:polonium",
    "mekanism:antimatter",
    "mekanismgenerators:deuterium",
    "mekanismgenerators:tritium",
    "mekanismgenerators:fusion_fuel",
  ];
  event.groupEntries(
    `mekanism:rei_groups/gas`,
    "Gas!",
    "mekanism:jei_plugin_jei_compat_gasstack",
    mekGas
  );

  const mekInfuse = [
    "mekanism:carbon",
    "mekanism:redstone",
    "mekanism:diamond",
    "mekanism:refined_obsidian",
    "mekanism:gold",
    "mekanism:tin",
    "mekanism:fungi",
    "mekanism:bio",
  ];
  event.groupEntries(
    `mekanism:rei_groups/infuse`,
    "Infuses!",
    "mekanism:jei_plugin_jei_compat_infusionstack",
    mekInfuse
  );

  const mekpigment = [
    "mekanism:black",
    "mekanism:blue",
    "mekanism:green",
    "mekanism:cyan",
    "mekanism:dark_red",
    "mekanism:purple",
    "mekanism:orange",
    "mekanism:light_gray",
    "mekanism:gray",
    "mekanism:light_blue",
    "mekanism:lime",
    "mekanism:aqua",
    "mekanism:red",
    "mekanism:magenta",
    "mekanism:yellow",
    "mekanism:white",
    "mekanism:brown",
    "mekanism:pink",
  ];
  event.groupEntries(
    `mekanism:rei_groups/pigment`,
    "Pigments!",
    "mekanism:jei_plugin_jei_compat_pigmentstack",
    mekpigment
  );

  const mekslurry = [
    "mekanism:dirty_iron",
    "mekanism:clean_iron",
    "mekanism:dirty_gold",
    "mekanism:clean_gold",
    "mekanism:dirty_osmium",
    "mekanism:clean_osmium",
    "mekanism:dirty_copper",
    "mekanism:clean_copper",
    "mekanism:dirty_tin",
    "mekanism:clean_tin",
    "mekanism:dirty_lead",
    "mekanism:clean_lead",
    "mekanism:dirty_uranium",
    "mekanism:clean_uranium",
  ];
  event.groupEntries(
    `mekanism:rei_groups/slurry`,
    "Slurrys!",
    "mekanism:jei_plugin_jei_compat_slurrystack",
    mekslurry
  );

  event.groupEntries(
    `tconstruct:rei_groups/tcon_modifier`,
    "Tinkers Construct Modifiers",
    "tconstruct:jei_plugin_jei_compat_modifierentry",
    asd
  );
});

function toMultiTitleCase(str) {
  var i,
    frags = str.split("_");
  for (i = 0; i < frags.length; i++) {
    frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
  }
  return frags.join(" ");
}

const asd = [
  "tconstruct:expanded",
  "tconstruct:embellishment",
  "tconstruct:golden",
  "tconstruct:shulking",
  "tconstruct:step_up",
  "tconstruct:wetting",
  "tconstruct:haste_armor",
  "tconstruct:gilded",
  "tconstruct:reach",
  "tconstruct:unbreakable",
  "tconstruct:aqua_affinity",
  "tconstruct:autosmelt",
  "tconstruct:bucketing",
  "tconstruct:dual_wielding",
  "tconstruct:exchanging",
  "tconstruct:glowing",
  "tconstruct:luck",
  "tconstruct:melting",
  "tconstruct:silky",
  "tconstruct:spilling",
  "tconstruct:firestarter",
  "tconstruct:pathing",
  "tconstruct:stripping",
  "tconstruct:tilling",
  "tconstruct:double_jump",
  "tconstruct:bouncy",
  "tconstruct:pockets",
  "tconstruct:protection",
  "tconstruct:shield_strap",
  "tconstruct:slurping",
  "tconstruct:strength",
  "tconstruct:tool_belt",
  "tconstruct:unarmed",
  "tconstruct:wings",
  "tconstruct:zoom",
  "tconstruct:flamewake",
  "tconstruct:frost_walker",
  "tconstruct:path_maker",
  "tconstruct:plowing",
  "tconstruct:snowdrift",
  "tconstruct:blast_protection",
  "tconstruct:magic_protection",
  "tconstruct:projectile_protection",
  "tconstruct:melee_protection",
  "tconstruct:fire_protection",
  "tconstruct:knockback_resistance",
  "tconstruct:revitalizing",
  "tconstruct:dragonborn",
  "tconstruct:turtle_shell",
  "tconstruct:creative_slot",
  "tconstruct:dyed",
  "tconstruct:nearsighted",
  "tconstruct:farsighted",
  "tconstruct:overslime",
  "tconstruct:shiny",
  "tconstruct:worldbound",
  "tconstruct:writable",
  "tconstruct:recapitated",
  "tconstruct:harmonious",
  "tconstruct:resurrected",
  "tconstruct:draconic",
  "tconstruct:red_extra_upgrade",
  "tconstruct:green_extra_upgrade",
  "tconstruct:blue_extra_upgrade",
  "tconstruct:extra_ability",
  "tconstruct:diamond",
  "tconstruct:emerald",
  "tconstruct:experienced",
  "tconstruct:fireprimer",
  "tconstruct:magnetic",
  "tconstruct:netherite",
  "tconstruct:offhanded",
  "tconstruct:overforced",
  "tconstruct:reinforced",
  "tconstruct:soulbound",
  "tconstruct:tank",
  "tconstruct:the_one_probe",
  "tconstruct:blasting",
  "tconstruct:fortune",
  "tconstruct:haste",
  "tconstruct:hydraulic",
  "tconstruct:lightspeed",
  "tconstruct:antiaquatic",
  "tconstruct:bane_of_sssss",
  "tconstruct:cooling",
  "tconstruct:fiery",
  "tconstruct:killager",
  "tconstruct:knockback",
  "tconstruct:looting",
  "tconstruct:padded",
  "tconstruct:piercing",
  "tconstruct:severing",
  "tconstruct:sharpness",
  "tconstruct:smite",
  "tconstruct:sweeping_edge",
  "tconstruct:swiftstrike",
  "tconstruct:armor_power",
  "tconstruct:feather_falling",
  "tconstruct:knockback_armor",
  "tconstruct:leaping",
  "tconstruct:lightspeed_armor",
  "tconstruct:item_frame",
  "tconstruct:pocket_chain",
  "tconstruct:respiration",
  "tconstruct:ricochet",
  "tconstruct:soulspeed",
  "tconstruct:speedy",
  "tconstruct:springy",
  "tconstruct:sticky",
  "tconstruct:thorns",
  "tconstruct:cultivated",
  "tconstruct:dense",
  "tconstruct:ductile",
  "tconstruct:enderporting",
  "tconstruct:enhanced",
  "tconstruct:lightweight",
  "tconstruct:overcast",
  "tconstruct:overgrowth",
  "tconstruct:overlord",
  "tconstruct:overworked",
  "tconstruct:solar_powered",
  "tconstruct:stoneshield",
  "tconstruct:stringy",
  "tconstruct:sturdy",
  "tconstruct:tanned",
  "tconstruct:tasty",
  "tconstruct:airborne",
  "tconstruct:dwarven",
  "tconstruct:jagged",
  "tconstruct:lustrous",
  "tconstruct:momentum",
  "tconstruct:sharpweight",
  "tconstruct:temperate",
  "tconstruct:conducting",
  "tconstruct:crumbling",
  "tconstruct:decay",
  "tconstruct:heavy",
  "tconstruct:insatiable",
  "tconstruct:invariant",
  "tconstruct:lacerating",
  "tconstruct:maintained",
  "tconstruct:maintained_2",
  "tconstruct:necrotic",
  "tconstruct:raging",
  "tconstruct:scorching",
  "tconstruct:searing",
  "tconstruct:stonebound",
  "tconstruct:boon_of_sssss",
  "tconstruct:breathtaking",
  "tconstruct:chrysophilite",
  "tconstruct:enderdodging",
  "tconstruct:firebreath",
  "tconstruct:frosttouch",
  "tconstruct:gold_guard",
  "tconstruct:mithridatism",
  "tconstruct:plague",
  "tconstruct:revenge",
  "tconstruct:self_destructive",
  "tconstruct:strong_bones",
  "tconstruct:wildfire",
  "tconstruct:withered",
  "tconstruct:creeper_disguise",
  "tconstruct:enderman_disguise",
  "tconstruct:skeleton_disguise",
  "tconstruct:stray_disguise",
  "tconstruct:wither_skeleton_disguise",
  "tconstruct:spider_disguise",
  "tconstruct:cave_spider_disguise",
  "tconstruct:zombie_disguise",
  "tconstruct:husk_disguise",
  "tconstruct:drowned_disguise",
  "tconstruct:blaze_disguise",
  "tconstruct:piglin_disguise",
  "tconstruct:piglin_brute_disguise",
  "tconstruct:zombified_piglin_disguise",
  "tconstruct:wood",
  "tconstruct:flint",
  "tconstruct:bone",
  "tconstruct:necrotic_bone",
  "tconstruct:string",
  "tconstruct:leather",
  "tconstruct:vine",
  "tconstruct:iron",
  "tconstruct:copper",
  "tconstruct:seared_stone",
  "tconstruct:bloodbone",
  "tconstruct:scorched_stone",
  "tconstruct:chain",
  "tconstruct:skyslime_vine",
  "tconstruct:slimewood",
  "tconstruct:slimesteel",
  "tconstruct:amethyst_bronze",
  "tconstruct:nahuatl",
  "tconstruct:rose_gold",
  "tconstruct:pig_iron",
  "tconstruct:cobalt",
  "tconstruct:darkthread",
  "tconstruct:queens_slime",
  "tconstruct:hepatizon",
  "tconstruct:manyullyn",
  "tconstruct:blazing_bone",
  "tconstruct:ancient_hide",
  "tconstruct:enderslime_vine",
  "tconstruct:osmium",
  "tconstruct:tungsten",
  "tconstruct:platinum",
  "tconstruct:silver",
  "tconstruct:lead",
  "tconstruct:whitestone",
  "tconstruct:steel",
  "tconstruct:bronze",
  "tconstruct:constantan",
  "tconstruct:invar",
  "tconstruct:necronium",
  "tconstruct:electrum",
  "tconstruct:plated_slimewood",
  "tconstruct:obsidian",
  "tconstruct:debris",
  "tconstruct:netherite",
  "tconstruct:aluminum",
  "tconstruct:nickel",
  "tconstruct:tin",
  "tconstruct:zinc",
  "tconstruct:brass",
  "tconstruct:uranium",
  "tconstruct:gold",
  "tconstruct:gunpowder",
  "tconstruct:rotten_flesh",
  "tconstruct:spider",
  "tconstruct:venom",
  "tconstruct:ender_pearl",
  "tconstruct:earthslime",
  "tconstruct:skyslime",
  "tconstruct:blood",
  "tconstruct:ichor",
  "tconstruct:enderslime",
  "tconstruct:clay",
  "tconstruct:honey",
  "tconstruct:phantom",
  "tconstruct:chorus",
  "tconstruct:rabbi",
  "tconstruct:wood",
  "tconstruct:stone",
  "tconstruct:iron",
  "tconstruct:diamond",
  "tconstruct:netherite"
];
