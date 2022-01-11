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

reportWebVitals();
