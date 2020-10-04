import React, { Component } from "react";

/* <img
          src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
          className="img-thumbnail"
          alt=""
        ></img> */

class ThumbnailCard extends Component {
  state = {};
  render() {
    return (
      <div className="w-25 h-25 border border-secondary">
        <p>{this.props.name}</p>
        <p>{this.props.description}</p>
        <p>{this.props.year}</p>
      </div>
    );
  }
}

export default ThumbnailCard;
