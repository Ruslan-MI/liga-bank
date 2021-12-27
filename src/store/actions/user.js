import {
  createAction,
} from "@reduxjs/toolkit";

import {
  StoreNameSpace,
} from "../../const";

const ActionType = {
  NAME_CHANGE: `${StoreNameSpace.USER}/nameChange`,
  PHONE_CHANGE: `${StoreNameSpace.USER}/phoneChange`,
  EMAIL_CHANGE: `${StoreNameSpace.USER}/emailChange`,
  REQUEST_NUMBER_INCREASE: `${StoreNameSpace.USER}/requestNumberIncrease`,
};

export const nameChange = createAction(ActionType.NAME_CHANGE, (name) => ({
  payload: name,
}));

export const phoneChange = createAction(ActionType.PHONE_CHANGE, (phone) => ({
  payload: phone,
}));

export const emailChange = createAction(ActionType.EMAIL_CHANGE, (email) => ({
  payload: email,
}));

export const requestNumberIncrease = createAction(ActionType.REQUEST_NUMBER_INCREASE);
