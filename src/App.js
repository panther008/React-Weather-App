import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import { history } from "./helpers/history";
import Home from "./components/Home";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const App = () => {
  return (
    <Router history={history}>
      <div className="container-fluid">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Redirect to={"/home"} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
