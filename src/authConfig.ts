import { Configuration, PopupRequest, RedirectRequest } from "@azure/msal-browser";
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

export const loginPopupRequest: PopupRequest = {
  scopes: ["openid", "profile", "User.Read"]
}

export const loginRedirectRequest: RedirectRequest = {
  scopes: ["openid", "profile", "User.Read"]
}