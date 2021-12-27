import React from "react";
import ReactDOM from "react-dom";
import {
  createStore,
} from "@reduxjs/toolkit";
import {
  Provider,
} from "react-redux";

import App from "./components/app/app";
import {
  rootReducer as reducer,
} from "./store/reducers/root-reducer";
import {
  toast,
} from "./utils/toast/toast";

import reportWebVitals from "./reportWebVitals";

import "./scss/index.scss";

const store = createStore(reducer);

ReactDOM.render((
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
), document.querySelector(`#root`));

document.querySelectorAll(`a[href="#"]`).forEach((item) => {
  item.onclick = (evt) => {
    evt.preventDefault(evt);

    toast(item.title || item.textContent);
  };
});

reportWebVitals();
