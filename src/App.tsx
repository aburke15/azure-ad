import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";

import { useIsAuthenticated } from "@azure/msal-react";

const App = () => {
  const isAuthenticated = useIsAuthenticated();
  return (
    <div className="App">
      <Router>
        <Routes>
          {isAuthenticated && <Route path="/" element={<Home />} />}
          {!isAuthenticated && <Route path="/Login" element={<Login />} />}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
