import {
  createReducer,
} from "@reduxjs/toolkit";

import {
  showRequestForm,
  hideRequestForm,
  showGratitudeModal,
  hideGratitudeModal,
  showLoginModal,
  hideLoginModal,
  showMobileMenu,
  hideMobileMenu,
} from "../actions/page";

const initialState = {
  isShowRequestForm: false,
  isShowGratitudeModal: false,
  isShowLoginModal: false,
  isShowMobileMenu: false,
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

  builder.addCase(showLoginModal, (state) => {
    state.isShowLoginModal = true;
  });

  builder.addCase(hideLoginModal, (state) => {
    state.isShowLoginModal = false;
  });

  builder.addCase(showMobileMenu, (state) => {
    state.isShowMobileMenu = true;
  });

  builder.addCase(hideMobileMenu, (state) => {
    state.isShowMobileMenu = false;
  });
});
