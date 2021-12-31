import React, { ReactFragment } from "react";
import "./styles/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import RequireAuth from "./components/RequireAuth";

interface IAppProps {}

const App = (): React.ReactElement => {
  return (
    <div className="App container">
      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route
            path="/"
            element={
              <RequireAuth redirectTo="login">
                <Home />
              </RequireAuth>
            }
          />
          <Route path="*" element={<Navigate to="login" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
