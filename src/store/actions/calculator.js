import {
  createAction,
} from "@reduxjs/toolkit";

import {
  StoreNameSpace,
} from "../../const";

const ActionType = {
  CHANGE_CREDIT_TYPE: `${StoreNameSpace.CALCULATOR}/changeCreditType`,
  CHANGE_PRICE: `${StoreNameSpace.CALCULATOR}/changePrice`,
  CHANGE_INITIAL_FEE: `${StoreNameSpace.CALCULATOR}/changeInitialFee`,
  CHANGE_DURATION: `${StoreNameSpace.CALCULATOR}/changeDuration`,
  CHANGE_CREDIT_OPTIONS: `${StoreNameSpace.CALCULATOR}/changeCreditOptions`,
};

export const changeCreditType = createAction(ActionType.CHANGE_CREDIT_TYPE, (creditType) => ({
  payload: creditType,
}));

export const changePrice = createAction(ActionType.CHANGE_PRICE, (price) => ({
  payload: price,
}));

export const changeInitialFee = createAction(ActionType.CHANGE_INITIAL_FEE, (initialFee) => ({
  payload: initialFee,
}));

export const changeDuration = createAction(ActionType.CHANGE_DURATION, (duration) => ({
  payload: duration,
}));

export const changeCreditOptions = createAction(ActionType.CHANGE_CREDIT_OPTIONS, (data) => ({
  payload: data,
}));
