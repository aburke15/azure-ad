import React from "react";
import { Link } from "react-router-dom";

const NotFound = (): React.ReactElement => {
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
