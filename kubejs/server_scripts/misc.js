LootJS.modifiers((event) => {
    [
        [["nomansland:deer", "llama", "trader_llama", "sheep", "goat", "mooshroom", "pig", "wolf", "panda"], 0.8],
        [["cow", "camel", "polar_bear", "horse", "mule", "donkey", "hoglin", "cat"], 1],
        [["for", "rabbit", "chicken", "goose"], 0.2]
    ].forEach((group) => {
        const modifier = event.addEntityModifier(group[0]);
        if (group[1] < 1) modifier.randomChance(group[1]);
        modifier.matchMainHand("#farmersdelight:tools/knives").addLoot("bone");
    });
});