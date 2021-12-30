import {
  createReducer,
} from "@reduxjs/toolkit";

import {
  showRequestForm,
  hideRequestForm,
  showGratitudeModal,
  hideGratitudeModal,
} from "../actions/page";

const initialState = {
  isShowRequestForm: false,
  isShowGratitudeModal: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(showRequestForm, (state) => {
    state.isShowRequestForm = true;
  });

  builder.addCase(hideRequestForm, (state) => {
    state.isShowRequestForm = false;
  });

  builder.addCase(showGratitudeModal, (state) => {
    state.isShowGratitudeModal = true;
  });

  builder.addCase(hideGratitudeModal, (state) => {
    state.isShowGratitudeModal = false;
  });
});
