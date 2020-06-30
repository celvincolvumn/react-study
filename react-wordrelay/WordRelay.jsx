const React = require("react");
const bindAll = require("lodash.bindall");

class WordRelay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: "Tom",
    };
    bindAll(this, ["handleOnSubmit", "handleOnChange"]);
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.setState(() => {
      return {
        result: this.state.word[this.state.word.length - 1] === this.state.value[0] ? "OK" : "NOT OK",
      };
    });
  }

  handleOnChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <div>{this.state.word}</div>
        <form onSubmit={this.handleOnSubmit}>
          <input value={this.state.value} onChange={this.handleOnChange} />
          <button type="submit">Go</button>
          <div>{this.state.result}</div>
        </form>
      </React.Fragment>
    );
  }
}

module.exports = WordRelay;
