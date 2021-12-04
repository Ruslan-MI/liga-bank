import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import reportWebVitals from "./reportWebVitals";

import "./scss/index.scss";

ReactDOM.render((
  <React.StrictMode>
    <App />
  </React.StrictMode>
), document.querySelector(`#root`));

reportWebVitals();
