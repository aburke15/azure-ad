import React from "react";
import { Navigate } from "react-router-dom";

import { InteractionStatus } from "@azure/msal-browser";
import { loginRequest } from "../authConfig";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";

const Login = (): React.ReactElement => {
  const { instance, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const handleLogin = (): void => {
    if (inProgress === InteractionStatus.None && !isAuthenticated) {
      instance
        .loginPopup(loginRequest)
        .then(() => {
          console.log("Login Success");
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="container mt-5">
      <h3>This is my page</h3>
      <button className="btn btn-primary mt-2" onClick={() => handleLogin()}>
        Sign In
      </button>
    </div>
  );
};

export default Login;
