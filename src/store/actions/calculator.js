import {
  createAction,
} from "@reduxjs/toolkit";

import {
  StoreNameSpace,
} from "../../const";

const ActionType = {
  CREDIT_TYPE_CHANGE: `${StoreNameSpace.CALCULATOR}/creditTypeChange`,
  PRICE_CHANGE: `${StoreNameSpace.CALCULATOR}/priceChange`,
  INITIAL_FEE_CHANGE: `${StoreNameSpace.CALCULATOR}/initialFeeChange`,
  DURATION_CHANGE: `${StoreNameSpace.CALCULATOR}/durationChange`,
  CREDIT_OPTIONS_CHANGE: `${StoreNameSpace.CALCULATOR}/creditOptionsChange`,
};

export const creditTypeChange = createAction(ActionType.CREDIT_TYPE_CHANGE, (creditType) => ({
  payload: creditType,
}));

export const priceChange = createAction(ActionType.PRICE_CHANGE, (price) => ({
  payload: price,
}));

export const initialFeeChange = createAction(ActionType.INITIAL_FEE_CHANGE, (initialFee) => ({
  payload: initialFee,
}));

export const durationChange = createAction(ActionType.DURATION_CHANGE, (duration) => ({
  payload: duration,
}));

export const creditOptionsChange = createAction(ActionType.CREDIT_OPTIONS_CHANGE, (data) => ({
  payload: data,
}));
