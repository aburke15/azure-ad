import { Configuration } from "@azure/msal-browser";
import { reactMsalClientId, reactMsalAuthority, reactMsalRedirectUri } from "./env";

export const msalConfig: Configuration = {
  auth: {
    clientId: reactMsalClientId,
    authority: reactMsalAuthority,
    redirectUri: reactMsalRedirectUri,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  }
};

export const loginRequest = {
  scopes: ["openid", "profile", "User.Read"]
}