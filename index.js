import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyles } from "./global-styles";
import { GlobalContext } from "./GlobalContext";

ReactDOM.render(
  <GlobalContext>
    <GlobalStyles />
    <App />
  </GlobalContext>,
  document.getElementById("root")
);
