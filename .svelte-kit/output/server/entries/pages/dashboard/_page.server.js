import { r as redirect } from "../../../chunks/index.js";
const load = async ({ locals }) => {
  if (!locals.user) {
    throw redirect(303, "/login");
  }
};
export {
  load
};
