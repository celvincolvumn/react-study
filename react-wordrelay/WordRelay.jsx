const React = require("react");
const bindAll = require("lodash.bindall");
const { render } = require("react-dom");

const WordRelay = () => {
  const [word, setWord] = useState("Tom");
  const [value, setValue] = useState();
  const [result, setResult] = useState();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setResult(this.state.word[this.state.word.length - 1] === this.state.value[0] ? "OK" : "NOT OK");
  };

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <React.Fragment>
      <div>{word}</div>
      <form onSubmit={handleOnSubmit}>
        <input value={value} onChange={handleOnChange} />
        <button type="submit">Go</button>
        <div>{result}</div>
      </form>
    </React.Fragment>
  );
};

module.exports = WordRelay;
