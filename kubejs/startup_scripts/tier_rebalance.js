ItemEvents.modification((event) => {
    let durability = (value, items) => {
        items.forEach((id) => {
            event.modify(id, (item) => {
                item.setMaxDamage(value);
            });
        });
    };

    durability(125, [
        "minecraft:golden_sword",
        "minecraft:golden_pickaxe",
        "minecraft:golden_hoe",
        "minecraft:golden_shovel",
        "minecraft:golden_axe",
        "farmersdelight:golden_knife",
    ]);

    durability(540, [
        "minecraft:iron_sword",
        "minecraft:iron_pickaxe",
        "minecraft:iron_hoe",
        "minecraft:iron_shovel",
        "minecraft:iron_axe",
        "farmersdelight:iron_knife",
    ]);

    durability(2750, [
        "minecraft:diamond_sword",
        "minecraft:diamond_pickaxe",
        "minecraft:diamond_hoe",
        "minecraft:diamond_shovel",
        "minecraft:diamond_axe",
        "farmersdelight:diamond_knife",
    ]);

    [
        ["minecraft:leather_helmet", 165],
        ["minecraft:leather_chestplate", 240],
        ["minecraft:leather_leggings", 205],
        ["minecraft:leather_boots", 195],
        ["minecraft:iron_helmet", 265],
        ["minecraft:iron_chestplate", 340],
        ["minecraft:iron_leggings", 305],
        ["minecraft:iron_boots", 295],
        ["minecraft:diamond_helmet", 663],
        ["minecraft:diamond_chestplate", 828],
        ["minecraft:diamond_leggings", 795],
        ["minecraft:diamond_boots", 729],

        ["minecraft:mace", 637],
        ["minecraft:trident", 800],
        ["minecraft:shears", 576],
        ["caverns_and_chasms:cowl", 165],

        ["caverns_and_chasms:silver_pickaxe", 1000],
        ["caverns_and_chasms:silver_axe", 1000],
        ["caverns_and_chasms:silver_shovel", 1000],
        ["caverns_and_chasms:silver_sword", 1000],

        ["shieldexp:wooden_shield", 156],
        ["minecraft:shield", 256],
        ["shieldexp:golden_shield", 376],
        ["shieldexp:iron_shield", 376],
        ["piglinproliferation:buckler", 476],
        ["shieldexp:diamond_shield", 476],
        ["shieldexp:netherite_shield", 376],
    ].forEach((pair) => {
        event.modify(pair[0], (item) => {
        item.setMaxDamage(pair[1]);
    });
  });
})