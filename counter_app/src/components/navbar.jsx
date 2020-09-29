import React, { Component } from "react";

//Stateless functional component

const NavBar = ({ counters }) => {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar
        <span className="badge badge-primary m-3">{counters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
