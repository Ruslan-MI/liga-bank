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
};

export const showRequestForm = createAction(ActionType.SHOW_REQUEST_FORM);

export const hideRequestForm = createAction(ActionType.HIDE_REQUEST_FORM);

export const showGratitudeModal = createAction(ActionType.SHOW_GRATITUDE_MODAL);

export const hideGratitudeModal = createAction(ActionType.HIDE_GRATITUDE_MODAL);
