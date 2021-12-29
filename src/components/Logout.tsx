import React from "react";

import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { InteractionStatus } from "@azure/msal-browser";

const Logout = (): React.ReactElement => {
  const { instance, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const handleLogout = (): void => {
    if (inProgress === InteractionStatus.None && isAuthenticated) {
      instance
        .logoutPopup()
        .then(() => {
          console.log("Logout Success");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <button className="btn btn-primary" onClick={() => handleLogout()}>
      Log Out
    </button>
  );
};

export default Logout;
