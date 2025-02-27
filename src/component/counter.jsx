import React, { Component } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="container">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses = () => {
    let classes = "btn m-3 btn-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount = () => {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
