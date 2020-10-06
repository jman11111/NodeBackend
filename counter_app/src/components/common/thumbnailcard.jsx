import React, { Component } from "react";
import { Link } from "react-router-dom";

/* <img
          src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
          className="img-thumbnail"
          alt=""
        ></img> */

class ThumbnailCard extends Component {
  state = {};

  handleSave = () => {
    // lets them go back to previous page
    this.props.history.push("/not-found");
    // .replace will not allow them to go back, useful for when someone has logged in, yuo dont want them going back to login page
  };

  render() {
    return (
      <div className="w-25 border border-secondary">
        <p>{this.props.name}</p>
        <p>{this.props.description}</p>
        <p>{this.props.year}</p>
      </div>
    );
  }
}

export default ThumbnailCard;
