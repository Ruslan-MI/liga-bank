import {
  createAction,
} from "@reduxjs/toolkit";

import {
  StoreNameSpace,
} from "../../const";

const ActionType = {
  SHOW_REQUEST_FORM: `${StoreNameSpace.PAGE}/showRequestForm`,
  HIDE_REQUEST_FORM: `${StoreNameSpace.PAGE}/hideRequestForm`,
  SHOW_GRATITUDE_MODAL: `${StoreNameSpace.PAGE}/showGratitudeModal`,
  HIDE_GRATITUDE_MODAL: `${StoreNameSpace.PAGE}/hideGratitudeModal`,
  SHOW_LOGIN_MODAL: `${StoreNameSpace.PAGE}/showLoginModal`,
  HIDE_LOGIN_MODAL: `${StoreNameSpace.PAGE}/hideLoginModal`,
  SHOW_MOBILE_MENU: `${StoreNameSpace.PAGE}/showMobileMenu`,
  HIDE_MOBILE_MENU: `${StoreNameSpace.PAGE}/hideMobileMenu`,
};

export const showRequestForm = createAction(ActionType.SHOW_REQUEST_FORM);

export const hideRequestForm = createAction(ActionType.HIDE_REQUEST_FORM);

export const showGratitudeModal = createAction(ActionType.SHOW_GRATITUDE_MODAL);

export const hideGratitudeModal = createAction(ActionType.HIDE_GRATITUDE_MODAL);

export const showLoginModal = createAction(ActionType.SHOW_LOGIN_MODAL);

export const hideLoginModal = createAction(ActionType.HIDE_LOGIN_MODAL);

export const showMobileMenu = createAction(ActionType.SHOW_MOBILE_MENU);

export const hideMobileMenu = createAction(ActionType.HIDE_MOBILE_MENU);
