import { r as redirect } from "../../../chunks/index.js";
import { c as constants } from "../../../chunks/constants.js";
const GET = async ({ locals, url, cookies }) => {
  try {
    const provider = JSON.parse(cookies.get("provider"));
    console.log("Provider" + provider);
    const params = url.searchParams;
    if (provider.state !== params.get("state")) {
      throw "State parameters don't match.";
    }
    await locals.pb.collection("users").authWithOAuth2Code(
      provider.name,
      params.get("code"),
      provider.codeVerifier,
      constants.oAuthRedirectUrl
    );
    throw redirect(303, "/dashboard");
  } catch (err) {
    console.error("Error: ", err);
    throw redirect(303, "/");
  }
};
export {
  GET
};
