import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app";
import {
  toast,
} from "./utils/toast/toast";

import reportWebVitals from "./reportWebVitals";

import "./scss/index.scss";

ReactDOM.render((
  <React.StrictMode>
    <App />
  </React.StrictMode>
), document.querySelector(`#root`));

document.querySelectorAll(`a[href="#"]`).forEach((item) => {
  item.onclick = () => toast(`Nope`);
});

reportWebVitals();
