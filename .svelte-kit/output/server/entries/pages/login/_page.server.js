import { e as error, r as redirect } from "../../../chunks/index.js";
import { c as constants } from "../../../chunks/constants.js";
const actions = {
  login: async ({ request, locals }) => {
    const formData = await request.formData();
    const data = Object.fromEntries([...formData]);
    try {
      await locals.pb.collection("users").authWithPassword(data.email, data.password);
    } catch (err) {
      console.log("Error: ", err);
      throw error(500, "Something went wrong");
    }
    throw redirect(303, "/dashboard");
  },
  githubLogin: async ({ locals, cookies }) => {
    const authMethods = await locals.pb.collection("users").listAuthMethods();
    const githubAuth = authMethods.authProviders.filter((auth) => auth.name === "github")[0];
    console.log(cookies.getAll());
    cookies.set("provider", JSON.stringify(githubAuth), {
      secure: false
    });
    throw redirect(303, githubAuth.authUrl + constants.oAuthRedirectUrl);
  },
  discordLogin: async ({ locals }) => {
    try {
      await locals.pb.collection("users").authWithOAuth2({ provider: "discord" });
    } catch (err) {
      console.log("Error: ", err);
    }
    throw redirect(303, "/dashboard");
  }
};
export {
  actions
};
