import React from "react";
import Logout from "./Logout";
import { Navigate } from "react-router-dom";

interface IHomeProps {
  name: string;
  isAuthenticated: boolean;
}

const Home = (props: IHomeProps) => {
  if (props.isAuthenticated) {
    return (
      <div>
        Hello {props.name}, you are in!{" "}
        <span>
          <Logout />
        </span>
      </div>
    );
  }

  return <Navigate to="/" />;
};

export default Home;
