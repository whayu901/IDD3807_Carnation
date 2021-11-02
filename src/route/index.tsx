import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import CustomeRoute from "./CustomeRoute";
import Login from "../pages/Login";
import Main from "./Main";
import LandingPage from "../pages/LandingPage";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <CustomeRoute path="/login" exact privateMode={false}>
          <Login />
        </CustomeRoute>
        <CustomeRoute path="/dashboard">
          <Main />
        </CustomeRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoute;
