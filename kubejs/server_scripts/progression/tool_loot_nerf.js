LootJS.modifiers((event) => {
    const modifier = event.addTableModifier("chest");

    [
        ["enchanted_book", "emerald"],

        ["iron_pickaxe", "modestmining:bronze_pickaxe"],
        ["iron_sword", "modestmining:bronze_nugget"],
        ["iron_axe", "modestmining:bronze_axe"],
        ["iron_shovel", "modestmining:bronze_shovel"],
        ["farmersdelight:iron_knife", "modestmining:bronze_knife"],

        ["diamond_pickaxe", "iron_pickaxe"],
        ["diamond_sword", "iron_sword"],
        ["diamond_axe", "iron_axe"],
        ["diamond_hoe", "iron_hoe"],
        ["diamond_shovel", "iron_shovel"],
        ["farmersdelight:diamond_knife", "farmersdelight:iron_knife"],

        ["stone_pickaxe", "modestmining:bronze_pickaxe"],
        ["stone_sword", "modestmining:bronze_nugget"],
        ["stone_axe", "modestmining:bronze_axe"],
        ["stone_hoe", "iron_hoe"],
        ["stone_shovel", "modestmining:bronze_shovel"],

        ["wooden_pickaxe", "achromatic_aeronauts:bone_pick"],
        ["wooden_sword", "modestmining:flint_hatchet"],
        ["wooden_axe", "modestmining:flint_hatchet"],
        ["wooden_hoe", "achromatic_aeronauts:bone_pick"],
        ["wooden_shovel", "modestmining:flint_spade"],

        ["netherite_ingot", "netherite_scrap"],
    ].forEach((pair) => modifier.replaceLoot(pair[0], pair[1], true));
});