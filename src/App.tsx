import React from "react";
import "./styles/App.css";
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
      <div className="App container">
        <Login
          instance={instance}
          inProgress={inProgress}
          isAuthenticated={isAuthenticated}
        />
      </div>
    );
  }

  return (
    <div className="App container">
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
