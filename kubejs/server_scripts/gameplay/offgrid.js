ServerEvents.tags("block", (event) => {
  const dyed = (format) => global.dyes.map((dye) => format.replace("%", dye));
  const withWall = (ids) => ids.reduce((all, id) => all.concat([id, id.replace(/torch$/, "wall_torch")]), []);

  event.add("offgrid:can_offset", [
    "spicedcider:sulfur_torch",
    "thick_air:signal_torch"
  ]);

  event.add("offgrid:can_overlay", withWall([
    "spicedcider:sulfur_torch",
    "spicedcider:sulfur_sconce",
    "thick_air:signal_torch" // extinguished is driven by the LIT state
  ])
    .concat([
      "wayfarer_core:rift_lantern",
      "wayfarer_core:rift_light_bulb",
      "wayfarer_core:rift_cage_light_bulb",
      "wayfarer_core:item_gauge",
      "wayfarer_core:fluid_gauge",
      "wayfarer_core:redstone_gauge",
      "wayfarer_core:amethyst_crystal",
      "wayfarer_core:quartz_crystal",
    ]));

  event.add("offgrid:facing_attaching", [
    "wayfarer_core:item_gauge",
    "wayfarer_core:fluid_gauge",
    "wayfarer_core:redstone_gauge",
    "wayfarer_core:rift_wall_torch",
    "wayfarer_core:sconce_rift_wall_torch",
    "wayfarer_core:sconce_cupric_wall_torch",
    "wayfarer_core:extinguished_rift_wall_torch",
    "wayfarer_core:extinguished_sconce_rift_wall_torch",
    "wayfarer_core:extinguished_cupric_wall_torch",
    "wayfarer_core:extinguished_sconce_cupric_wall_torch",
    "wayfarer_core:amethyst_crystal",
    "wayfarer_core:quartz_crystal",
  ]);
});
