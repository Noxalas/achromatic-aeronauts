ServerEvents.recipes((event) => {
    event.shaped("achromatic_aeronauts:bone_pick", global.toolPatterns.pickaxe, {
        C: "bone",
        S: "stick"
    });
});