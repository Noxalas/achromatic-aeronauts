ServerEvents.recipes((event) => {
    global.removeIds(event, [
        "nomansland:mushroom_stew",
        "beetroot_soup",
        "rabbit_stew_from_brown_mushroom",
        "nomansland:rabbit_stew_from_red_mushroom",
        "nomansland:food/mashed_potatoes_with_mushroom",
        "incubation:scrambled_eggs",
        "brewinandchewin:corn_dough_from_egg",
        "brewinandchewin:corn_dough_from_water",
        "abundant_atmosphere:integration/farmersdelight/cooking/gourdnut_pudding",
        "supplementaries:candy",
        "snowyspirit:candy_cane",
        "snowyspirit:eggnog"
    ])

    global.cooking(event, [
        "egg",
        "egg",
        "#c:drinks/milk",
    ], { id: "incubation:scrambled_eggs", count: 1 }, 100, 0.3, "bowl");

    // ["egg", "#achro:water_crafting"].forEach((binder) => {
    //     event.shapeless("8x brewinandchewin:corn_dough", [
    //         "4x brewinandchewin:cornmeal",
    //         `1x ${binder}`,
    //         "4x brewinandchewin:cornmeal",
    //     ]);
    // });

    global.cooking(event, [
        "abundant_atmosphere:roasted_gourdnut",
        "abundant_atmosphere:roasted_gourdnut",
        "#c:drinks/milk",
        "egg",
        "sugar",
    ], { id: "abundant_atmosphere:gourdnut_pudding", count: 1 }, 200, 0.3, "bowl");

    global.cooking(event, [
        "sugar",
        "sugar",
        "sweet_berries",
    ], { id: "supplementaries:candy", count: 2 }, 100, 0.3, "paper");

    global.cooking(event, [
        "nomansland:wild_mint",
        "sugar",
        "honey_bottle",
    ], { id: "snowyspirit:candy_cane", count: 3 }, 100, 0.3);

    global.cooking(event, [
        "snowyspirit:ginger",
        "#c:drinks/milk",
        "egg",
        "sugar",
    ], { id: "snowyspirit:eggnog", count: 1 }, 200, 0.3, "glass_bottle");
});