import { useIsAuthenticated } from "@azure/msal-react";
import React from "react";
import { Navigate } from "react-router-dom";

const RequireAuthenticated: React.FunctionComponent<any> = ({
  children,
  redirectTo,
}) => {
  const isAuthenticated = useIsAuthenticated();
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

export default RequireAuthenticated;
