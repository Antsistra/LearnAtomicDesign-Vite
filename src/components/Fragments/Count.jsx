import React, { Component } from "react";

export default class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("constructor");
  }

  /*  componentDidMount() {
    this.setState({ count: 100 });
    console.log("ini componentDidMount");
  }}*/

  render() {
    return (
      <div className="flex justify-center items-center  mt-10">
        <h1>{this.state.count}</h1>
        <button
          className="bg-black text-white "
          onClick={() =>
            this.setState({ count: this.state.count + 1 })
          }>
          +
        </button>
      </div>
    );
  }
}
