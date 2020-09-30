import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-light bg-light">{this.props.children}</nav>
    );
  }
}

export default NavBar;
