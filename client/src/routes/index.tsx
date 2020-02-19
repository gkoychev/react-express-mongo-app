import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../views/Home";
import Post from "../views/Post";

const Routes = () => (
  <Switch>
    <Route path="/post/:postId" exact>
      <Post />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default Routes;
