import React from "react";

import {
  InteractionStatus,
  IPublicClientApplication,
} from "@azure/msal-browser";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { loginPopupRequest } from "../authConfig";

const handleLogin = (
  instance: IPublicClientApplication,
  inProgress: InteractionStatus,
  isAuthenticated: boolean
) => {
  if (inProgress === InteractionStatus.None && !isAuthenticated) {
    instance
      .loginPopup(loginPopupRequest)
      .then((loginResponse) => {
        console.log(loginResponse.account);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

const Login = () => {
  const { instance, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  return (
    <button onClick={() => handleLogin(instance, inProgress, isAuthenticated)}>
      Sign In
    </button>
  );
};

export default Login;
