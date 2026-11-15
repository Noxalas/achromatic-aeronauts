ServerEvents.tags("block", (event) => {
    event.add("mineable/axe", "achromatic_aeronauts:wax_block");
    event.remove("mineable/axe", [
        "create:brass_casing",
        "create:brass_encased_shaft",
        "create:brass_encased_cogwheel",
        "create:brass_encased_large_cogwheel",
    ]);

    event.remove("mineable/pickaxe", "create:andesite_casing");

});