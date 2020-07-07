import React, { Component } from "react";
import bindAll from "lodash.bindall";

export default class Try extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    );
  }
}
