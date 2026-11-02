ServerEvents.recipes((event) => {
    [
        "ars_nouveau:enchanting_apparatus",
        "ars_nouveau:armor_upgrade",
        "ars_nouveau:imbuement",
        "ars_nouveau:glyph_recipe",
        "ars_nouveau:budding_conversion",
        "ars_nouveau:crush",
        "ars_nouveau:scry_ritual",
        "ars_nouveau:alarkinos",
        "ars_nouveau:apparatus_enchanting",
    ].forEach((type) => event.remove({ type: type }));
});