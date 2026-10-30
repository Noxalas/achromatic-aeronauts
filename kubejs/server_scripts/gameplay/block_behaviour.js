ServerEvents.tags("block", (event) => {
    event.removeAll("fall_damage_resetting");
    event.removeAll("enderman_holdable");

    event.add("supplementaries:map_tint_grass_color", [
        "nomansland:grass_sprouts",
        "nomansland:oat_grass",
        "#small_flowers",
        "#c:mushrooms",
    ]);

    event.add("upgradeaquatic:pike_spawnable_in", ["nomansland:reeds", "nomansland:cattail"]);

    event.add("c:storage_blocks", [
        "caverns_and_chasms:amethyst_block",
        "caverns_and_chasms:echo_block",
        "caverns_and_chasms:gunpowder_block",
        "caverns_and_chasms:rotten_flesh_block"
    ]);

    event.add("supplementaries:bomb_breakable", "nirvana:thc");
    event.add("supplementaries:cannon_tnts", "nirvana:thc");
});