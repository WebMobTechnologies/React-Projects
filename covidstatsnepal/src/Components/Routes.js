import React, { Component } from "react";
import FetchByCountry from "./FetchByCountry";
import MainDisplay from "./MainDisplay";
import About from "./About";
import ImportantInfo from "./ImportantInfo";
import NoMatchPage from "./NoMatchPage";

import { Route, Switch, Redirect } from "react-router-dom";

export class Routes extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={MainDisplay} />
          <Route exact path="/covidstats">
            <Redirect to="/" />
          </Route>
          <Route ecact path="/view-by-country" component={FetchByCountry} />
          <Route exact path="/about" component={About} />
          <Route exact path="/imp-info" component={ImportantInfo} />
          <Route component={NoMatchPage} />
        </Switch>
      </>
    );
  }
}

export default Routes;
