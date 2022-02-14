import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../views/homepage/HomePage";

const AppRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </>
  );
};

export default AppRouter;
