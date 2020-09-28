import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
    ],
  };

  handleDelete = (counterId) => {
    const newcounters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: newcounters });
  };

  handleIncrement = (counter) => {
    const newcounters = [...this.state.counters];
    const index = newcounters.indexOf(counter);
    newcounters[index] = { ...counter };
    newcounters[index].value++;
    this.setState({ counters: newcounters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
