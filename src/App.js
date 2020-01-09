import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { routes } from "./config/routes";
import "./App.scss";

const App = () => (
  <Router>
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.main}
      />
    ))}
  </Router>
);

export default App;
