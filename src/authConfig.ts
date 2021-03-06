import { Configuration, PopupRequest } from "@azure/msal-browser";
import { reactMsalClientId, reactMsalAuthority, reactMsalRedirectUri } from "./env";

export const msalConfig: Configuration = {
  auth: {
    clientId: reactMsalClientId,
    authority: reactMsalAuthority,
    redirectUri: reactMsalRedirectUri,
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  }
};

export const loginRequest: PopupRequest = {
  scopes: ["openid", "profile", "User.Read"]
}