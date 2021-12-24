import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";

import { useIsAuthenticated, useMsal } from "@azure/msal-react";

interface IAppProps {}

const App = () => {
  const isAuthenticated = useIsAuthenticated();
  const { instance, inProgress } = useMsal();

  if (!isAuthenticated) {
    return (
      <div className="App">
        <Login
          instance={instance}
          inProgress={inProgress}
          isAuthenticated={isAuthenticated}
        />
      </div>
    );
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home isAuthenticated={isAuthenticated} name="Andre" />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
