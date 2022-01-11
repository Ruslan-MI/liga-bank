import {
  createAction,
} from "@reduxjs/toolkit";

import {
  StoreNameSpace,
} from "../../const";

const ActionType = {
  CHANGE_NAME: `${StoreNameSpace.USER}/changeName`,
  CHANGE_PHONE: `${StoreNameSpace.USER}/changePhone`,
  CHANGE_EMAIL: `${StoreNameSpace.USER}/changeEmail`,
  INCREASE_REQUEST_NUMBER: `${StoreNameSpace.USER}/increaseRequestNumber`,
  CHANGE_LOGIN: `${StoreNameSpace.USER}/changeLogin`,
  CHANGE_PASSWORD: `${StoreNameSpace.USER}/changePassword`,
};

export const changeName = createAction(ActionType.CHANGE_NAME, (name) => ({
  payload: name,
}));

export const changePhone = createAction(ActionType.CHANGE_PHONE, (phone) => ({
  payload: phone,
}));

export const changeEmail = createAction(ActionType.CHANGE_EMAIL, (email) => ({
  payload: email,
}));

export const increaseRequestNumber = createAction(ActionType.INCREASE_REQUEST_NUMBER);

export const changeLogin = createAction(ActionType.CHANGE_LOGIN, (login) => ({
  payload: login,
}));

export const changePassword = createAction(ActionType.CHANGE_PASSWORD, (password) => ({
  payload: password,
}));
