ServerEvents.recipes((event) => {
  global.reshaped(event, "shears", ["LB", "B "], {
    B: "#achro:generic_metal_ingot",
    L: "leather",
  });

  global.reshaped(event, "brush", ["FFF", " L ", " A "], {
    F: "feather",
    L: "leather",
    A: "stick",
  });


  
});