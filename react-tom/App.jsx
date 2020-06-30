const React = require("react");
const ReactDOM = require("react-dom");
const Tom = require("./Tom");
const { hot } = require("react-hot-loader/root");

const rootElement = document.querySelector("#root");
const Hot = hot(Tom);

ReactDOM.render(<Hot />, rootElement);
