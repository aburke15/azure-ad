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
        console.log("Login Success");
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
    <div className="container mt-5">
      <h3>This is my page</h3>
      <button
        className="btn btn-primary mt-2"
        onClick={() => handleLogin(instance, inProgress, isAuthenticated)}
      >
        Sign In
      </button>
    </div>
  );
};

export default Login;
