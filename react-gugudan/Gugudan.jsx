const React = require("react");

class Gugudan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        result: this.state.first * this.state.second === parseInt(this.state.value) ? "ok" : "not ok",
      };
    });
  }

  onChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.first} x {this.state.second}
        </div>
        <form onSubmit={this.onSubmit}>
          <input type="number" value={this.state.value} onChange={this.onChange} />
          <button type="submit">Go</button>
        </form>
        <div>{this.state.result}</div>
      </React.Fragment>
    );
  }
}

module.exports = Gugudan;
