import {
  createReducer,
} from "@reduxjs/toolkit";

import {
  changeName,
  changePhone,
  changeEmail,
  increaseRequestNumber,
} from "../actions/user";

const initialState = {
  name: localStorage.getItem(`name`) || ``,
  phone: localStorage.getItem(`phone`) || ``,
  email: localStorage.getItem(`email`) || ``,
  requestNumber: 10,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeName, (state, action) => {
    state.name = action.payload;
  });

  builder.addCase(changePhone, (state, action) => {
    state.phone = action.payload;
  });

  builder.addCase(changeEmail, (state, action) => {
    state.email = action.payload;
  });

  builder.addCase(increaseRequestNumber, (state) => {
    state.requestNumber += 1;
  });
});
