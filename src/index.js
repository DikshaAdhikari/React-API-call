import React from "react";
import ReactDOM from "react-dom";
import CompA from "./compA";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <CompA />
  </React.StrictMode>,
  rootElement
);
