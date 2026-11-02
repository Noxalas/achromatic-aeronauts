ServerEvents.recipes((event) => {
    global.swapInput(event, ["supplementaries:cage", "bucket", "supplementaries:wind_vane"], "iron_ingot", "#achro:generic_metal_ingot");

    global.removeIds(event, [
        "caverns_and_chasms:copper_ingot_from_nuggets",
        // "create:crafting/materials/copper_ingot",
        // "create:crafting/materials/copper_nugget",
        "caverns_and_chasms:copper_nugget",
        "modestmining:copper_nugget_from_ingot",
        "modestmining:copper_ingot_from_nugget"
    ]);
});

ServerEvents.tags("item", (event) => {
    event.add("achro:generic_metal_ingot", ["iron_ingot", "modestmining:lead_ingot", "achromatic_aeronauts:tin_ingot"])
    event.add("achro:generic_metal_nugget", ["iron_nugget", "modestmining:lead_nugget", "achromatic_aeronauts:tin_nugget"])
});