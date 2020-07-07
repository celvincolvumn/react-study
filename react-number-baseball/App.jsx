import React from "react";
import ReactDOM from "react-dom";
import NumberBaseball from "./NumberBaseball";
import { hot } from "react-hot-loader/root";

const rootElement = document.querySelector("#root");

const Hot = hot(NumberBaseball);

ReactDOM.render(<Hot />, rootElement);
