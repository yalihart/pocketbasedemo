import { c as create_ssr_component, e as escape } from "../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="container mx-auto h-full flex justify-center items-center text-center"><h1 class="h1 mb-60">Welcome, <span class="animate-text bg-gradient-to-br from-red-500 to-yellow-400 bg-clip-text text-transparent box-decoration-clone">${escape(data.user.username)}</span></h1></div>`;
});
export {
  Page as default
};
