import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./components/home";
import Sculptures from "./components/sculptures";

//go from most specific to least inside switch component

class App2 extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar className="navbar navbar-inverse">
          <div>
            <a className="m-3" href="/">
              Home
            </a>
            <a className="m-3" href="/sculptures">
              Sculptures
            </a>
          </div>
        </NavBar>
        <div className="content">
          <Switch>
            <Route exact path="/sculptures" component={Sculptures} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App2;
