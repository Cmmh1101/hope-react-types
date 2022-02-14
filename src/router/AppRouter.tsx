import React from "react";
import { Route, Switch } from "react-router-dom";
import ProgramsListPage from "../views/articles/ProgramsListPage";
import HomePage from "../views/homepage/HomePage";

const AppRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/programs" exact component={ProgramsListPage} />
      </Switch>
    </>
  );
};

export default AppRouter;
