ServerEvents.recipes((event) => {
    [
        "create:crushing",
        "create:automated_shaped_crafting_crafting",
        "create:deploying",
        "create:cutting",
        "create:item_application",
        "create:splashing",
        "create:haunting",
        "create:potion_mixing",
        "create:milling",
        "create:mixing",
        "powergrid:magnetizing"
    ].forEach((type) => event.remove({ type: type }));


});