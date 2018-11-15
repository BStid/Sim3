import React from "react";
import { Switch, Route } from "react-router-dom";
import Form from "./components/Form/Form";
import Post from "./components/Post/Post";
import DashBoardContent from "./components/Dashboard/DashBoardContent";

export default (
  <Switch>
    <Route path="/dashboard/content" component={DashBoardContent} />
    <Route path="/dashboard/form" component={Form} />
    <Route path="/dashboard/post" component={Post} />
    <Route
      path="*"
      render={() => (
        <div className="redirectPage">
          <h1>404</h1>
        </div>
      )}
    />
  </Switch>
);
