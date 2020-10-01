import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./components/home";
import Sculptures from "./components/sculptures";

//go from most specific to least inside switch component

class App2 extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar>
          <div>
            <Link className="p-4" to="/">
              Home
            </Link>
            <Link className="p-4" to="/sculptures">
              Sculptures
            </Link>
          </div>
        </NavBar>
        <div className="content">
          <Switch>
            <Route exact path="/sculptures" component={() => <Sculptures />} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App2;
