

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c088775b.js","_app/immutable/chunks/index.7582b933.js","_app/immutable/chunks/singletons.32b1a222.js","_app/immutable/chunks/index.c9641520.js"];
export const stylesheets = [];
export const fonts = [];
