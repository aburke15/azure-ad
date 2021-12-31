import React from "react";
import { Link, Navigate } from "react-router-dom";

import { useIsAuthenticated } from "@azure/msal-react";

const NotFound = (): React.ReactElement => {
  const isAuthenticated = useIsAuthenticated();
  if (!isAuthenticated) {
    return <Navigate to="login" />;
  }

  return (
    <div className="container mt-5">
      <h3 className="mt-2">404</h3>
      <Link className="btn btn-secondary" to="/">
        <i>Click Here</i> to go back
      </Link>
    </div>
  );
};

export default NotFound;
