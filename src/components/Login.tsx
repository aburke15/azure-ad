import React from "react";

import {
  InteractionStatus,
  IPublicClientApplication,
} from "@azure/msal-browser";
import { loginPopupRequest } from "../authConfig";

interface ILoginProps {
  instance: IPublicClientApplication;
  inProgress: InteractionStatus;
  isAuthenticated: boolean;
}

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

const Login = (props: ILoginProps) => {
  const instance = props.instance;
  const inProgress = props.inProgress;
  const isAuthenticated = props.isAuthenticated;

  return (
    <button onClick={() => handleLogin(instance, inProgress, isAuthenticated)}>
      Sign In
    </button>
  );
};

export default Login;
