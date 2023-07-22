import PocketBase from "pocketbase";
const serializeNonPOJOs = (obj) => {
  return structuredClone(obj);
};
const handle = async ({ event, resolve }) => {
  try {
    event.locals.pb = new PocketBase("http://127.0.0.1:8090");
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");
    if (event.locals.pb.authStore.isValid) {
      event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
    } else {
      event.locals.user = void 0;
    }
    const response = await resolve(event);
    response.headers.set("set-cookie", event.locals.pb.authStore.exportToCookie({ secure: false }));
    return response;
  } catch (err) {
    console.log("Error: ", err);
  }
};
export {
  handle
};
