import {
  createReducer,
} from "@reduxjs/toolkit";

import {
  changeCreditType,
  changePrice,
  changeInitialFee,
  changeDuration,
  changeCreditOptions,
} from "../actions/calculator";
import {
  CreditParameter,
} from "../../const";

const initialState = {
  creditType: null,
  price: null,
  initialFee: null,
  duration: null,
  isMaternalCapital: false,
  isCasco: false,
  isLifeInsurance: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCreditType, (state, action) => {
    state.creditType = action.payload;

    if (!state.creditType) {
      return;
    }

    const {
      PRICE_INITIAL_VALUE,
      INITIAL_FEE_MIN_PART,
      DURATION_MIN_VALUE,
    } = CreditParameter[state.creditType];

    state.price = PRICE_INITIAL_VALUE;
    state.initialFee = Math.ceil(PRICE_INITIAL_VALUE * INITIAL_FEE_MIN_PART);
    state.duration = DURATION_MIN_VALUE;
    state.isMaternalCapital = initialState.isMaternalCapital;
    state.isCasco = initialState.isCasco;
    state.isLifeInsurance = initialState.isLifeInsurance;
  });

  builder.addCase(changePrice, (state, action) => {
    state.price = action.payload;
  });

  builder.addCase(changeInitialFee, (state, action) => {
    state.initialFee = action.payload;
  });

  builder.addCase(changeDuration, (state, action) => {
    state.duration = action.payload;
  });

  builder.addCase(changeCreditOptions, (state, action) => {
    const {
      name,
      checked,
    } = action.payload;

    state[name] = checked;
  });
});
