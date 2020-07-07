import React, { Component } from "react";
import bindAll from "lodash.bindall";

import Try from "./Try";

export default class NumberBaseball extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: this.getNumber(),
      tries: [],
    };

    bindAll(this, ["getNumber", "handleSubmit", "handleChange"]);
  }

  getNumber() {}

  handleSubmit(e) {}
  handleChange(e) {}
  render() {
    return (
      <React.Fragment>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.handleSubmit}>
          <input maxLength={4} value={this.state.value} onChange={this.handleChange} />
        </form>
        <div>Try: {this.state.tries.length}</div>
        <Try items={this.state.tries} />
      </React.Fragment>
    );
  }
}
