import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component {
  // only executed upon first time creation

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>there are no tags</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.length === 3 && "there are 3 tags"}
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }
  // naming conventtion, name  it handle"action"

  render() {
    let classes = this.getClasses();
    return (
      <React.Fragment>
        {this.props.children}
        <span className={classes}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  getClasses() {
    let classes = "btn m-2 btn-";
    classes += this.props.counter.value === 0 ? "warning" : "danger";
    return classes;
  }

  formatCount() {
    // jsx expressions are just like javascript objects.
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
