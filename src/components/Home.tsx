import React from "react";
import Logout from "./Logout";
import { Navigate } from "react-router-dom";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";

const Home = (): React.ReactElement => {
  const isAuthenticated = useIsAuthenticated();
  const { accounts } = useMsal();
  const account = accounts[0];
  const name = account ? account.name : "";

  if (!isAuthenticated) {
    return <Navigate to="/Login" />;
  }

  return (
    <div className="container mt-5">
      Hello {name}, you are in!{" "}
      <span>
        <Logout />
      </span>
    </div>
  );
};

export default Home;
