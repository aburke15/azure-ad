import React from "react";

import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import {
  InteractionStatus,
  IPublicClientApplication,
} from "@azure/msal-browser";

const handleLogout = (
  instance: IPublicClientApplication,
  inProgress: InteractionStatus,
  isAuthenticated: boolean
): void => {
  if (inProgress === InteractionStatus.None && isAuthenticated) {
    instance
      .logoutRedirect()
      .then(() => {
        console.log("Logout Success");
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

const Logout = () => {
  const { instance, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  return (
    <button
      className="btn btn-primary"
      onClick={() => handleLogout(instance, inProgress, isAuthenticated)}
    >
      Logout
    </button>
  );
};

export default Logout;
