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
): void => {};

const Logout = () => {
  const { instance, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  return (
    <button onClick={() => handleLogout(instance, inProgress, isAuthenticated)}>
      Logout
    </button>
  );
};

export default Logout;
