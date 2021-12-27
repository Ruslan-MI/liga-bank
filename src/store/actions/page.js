import {
  createAction,
} from "@reduxjs/toolkit";

import {
  StoreNameSpace,
} from "../../const";

const ActionType = {
  SHOW_REQUEST_FORM: `${StoreNameSpace.PAGE}/showRequestForm`,
  HIDE_REQUEST_FORM: `${StoreNameSpace.PAGE}/hideRequestForm`,
};

export const showRequestForm = createAction(ActionType.SHOW_REQUEST_FORM);

export const hideRequestForm = createAction(ActionType.HIDE_REQUEST_FORM);
