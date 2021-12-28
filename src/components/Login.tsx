import React from "react";

import {
  AuthenticationResult,
  InteractionStatus,
  IPublicClientApplication,
} from "@azure/msal-browser";
import { loginPopupRequest, loginRedirectRequest } from "../authConfig";

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
      .loginRedirect(loginRedirectRequest)
      .then(() => {
        console.log("Login Success");
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
};

const Login = (props: ILoginProps) => {
  return (
    <div className="container mt-5">
      <h3>This is my page</h3>
      <button
        className="btn btn-primary mt-2"
        onClick={() =>
          handleLogin(props.instance, props.inProgress, props.isAuthenticated)
        }
      >
        Sign In
      </button>
    </div>
  );
};

export default Login;
