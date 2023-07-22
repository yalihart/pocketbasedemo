import { c as create_ssr_component } from "./index3.js";
const TextDivider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="relative flex py-3 items-center"><div class="flex-grow border-t border-gray-200"></div>
    <span class="flex-shrink mx-3 text-gray-200">${slots.default ? slots.default({}) : ``}</span>
    <div class="flex-grow border-t border-gray-200"></div></div>`;
});
export {
  TextDivider as T
};
