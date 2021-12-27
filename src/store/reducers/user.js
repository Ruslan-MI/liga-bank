import {
  createReducer,
} from "@reduxjs/toolkit";

import {
  nameChange,
  phoneChange,
  emailChange,
  requestNumberIncrease,
} from "../actions/user";

const initialState = {
  name: localStorage.getItem(`name`) || ``,
  phone: localStorage.getItem(`phone`) || ``,
  email: localStorage.getItem(`email`) || ``,
  requestNumber: 10,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(nameChange, (state, action) => {
    state.name = action.payload;
  });

  builder.addCase(phoneChange, (state, action) => {
    state.phone = action.payload;
  });

  builder.addCase(emailChange, (state, action) => {
    state.email = action.payload;
  });

  builder.addCase(requestNumberIncrease, (state) => {
    state.requestNumber += 1;
  });
});
