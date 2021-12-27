import {
  createReducer,
} from "@reduxjs/toolkit";

import {
  showRequestForm,
  hideRequestForm,
} from "../actions/page";

const initialState = {
  isShowRequestForm: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(showRequestForm, (state) => {
    state.isShowRequestForm = true;
  });

  builder.addCase(hideRequestForm, (state) => {
    state.isShowRequestForm = false;
  });
});
