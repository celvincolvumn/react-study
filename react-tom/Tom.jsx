const React = require("react");
// const bindAll = require("lodash.bindall");

class Tom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Tom",
      flag: false,
    };
  }

  render() {
    return (
      <React.Fragment>
        <button
          onClick={(e) => {
            this.setState({ flag: !this.state.flag });
          }}
        >
          Tom
        </button>
        {this.state.flag ? <h1>{this.state.name}</h1> : <h6>{this.state.name}</h6>}
      </React.Fragment>
    );
  }
}

module.exports = Tom;
