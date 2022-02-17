import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFoundPage from "../views/404page";
import ProgramPage from "../views/articles/components/ProgramPage";
import ProgramsListPage from "../views/articles/ProgramsListPage";
import HomePage from "../views/homepage/HomePage";
import StoryPage from "../views/storiesOfHope.tsx/components/StoryPage";
import StoriesListPage from "../views/storiesOfHope.tsx/StoriesListPage";

const AppRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/programs" exact component={ProgramsListPage} />
        <Route path="/program/:name" component={ProgramPage} exact />
        <Route path="/storiesOfHope" exact component={StoriesListPage} />
        <Route path="/storyOfHope/:name" component={StoryPage} exact />
        <Route component={NotFoundPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default AppRouter;
