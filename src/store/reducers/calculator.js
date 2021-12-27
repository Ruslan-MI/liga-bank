import {
  createReducer,
} from "@reduxjs/toolkit";

import {
  creditTypeChange,
  priceChange,
  initialFeeChange,
  durationChange,
  creditOptionsChange,
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
  builder.addCase(creditTypeChange, (state, action) => {
    const {
      PRICE_INITIAL_VALUE,
      INITIAL_FEE_MIN_PART,
      DURATION_MIN_VALUE,
    } = CreditParameter[action.payload];

    state.creditType = action.payload;
    state.price = PRICE_INITIAL_VALUE;
    state.initialFee = Math.ceil(PRICE_INITIAL_VALUE * INITIAL_FEE_MIN_PART);
    state.duration = DURATION_MIN_VALUE;
    state.isMaternalCapital = initialState.isMaternalCapital;
    state.isCasco = initialState.isCasco;
    state.isLifeInsurance = initialState.isLifeInsurance;
  });

  builder.addCase(priceChange, (state, action) => {
    state.price = action.payload;
  });

  builder.addCase(initialFeeChange, (state, action) => {
    state.initialFee = action.payload;
  });

  builder.addCase(durationChange, (state, action) => {
    state.duration = action.payload;
  });

  builder.addCase(creditOptionsChange, (state, action) => {
    const {
      name,
      checked,
    } = action.payload;

    state[name] = checked;
  });
});
