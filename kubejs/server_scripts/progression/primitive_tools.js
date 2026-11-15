ServerEvents.recipes((event) => {
    event.remove([
        "modestmining:flint_mattock",
        "modestmining:flint_hoe",
        "modestmining:flint_hammer",
        "modestmining:flint_blade",
        "manual_labour:flint_hammer",
    ])
    
    event.shaped("achromatic_aeronauts:bone_pick", global.toolPatterns.pickaxe, {
        C: "bone",
        S: "stick"
    });

    
});