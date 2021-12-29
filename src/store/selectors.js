import {
  createSelector,
} from "@reduxjs/toolkit";

import {
  CreditParameter,
  CreditType,
  StoreNameSpace,
} from "../const";

const PERCENTAGE_IN_FULL = 100;
const MONTH_IN_YEAR = 12;
const MAX_PART_OF_SALARY = 0.45;


const getCreditType = (state) => state[StoreNameSpace.CALCULATOR].creditType;
const getPrice = (state) => state[StoreNameSpace.CALCULATOR].price;
const getInitialFee = (state) => state[StoreNameSpace.CALCULATOR].initialFee;
const getDuration = (state) => state[StoreNameSpace.CALCULATOR].duration;
const getIsMaternalCapital = (state) => state[StoreNameSpace.CALCULATOR].isMaternalCapital;
const getIsCasco = (state) => state[StoreNameSpace.CALCULATOR].isCasco;
const getIsLifeInsurance = (state) => state[StoreNameSpace.CALCULATOR].isLifeInsurance;

export const getCreditParameters = (state) => ({
  creditParameters: CreditParameter[state[StoreNameSpace.CALCULATOR].creditType],
});

const getCreditRate = createSelector([
  getCreditParameters,
  getCreditType,
  getPrice,
  getInitialFee,
  getIsCasco,
  getIsLifeInsurance,
], (creditParameters, creditType, price, initialFee, isCasco, isLifeInsurance) => {
  const {
    RATE_VALUES,
    RATE_INITIAL_FEE_THRESHOLD,
    RATE_PRICE_THRESHOLD,
  } = creditParameters.creditParameters;

  let creditRate = 0;

  switch (creditType) {
    case CreditType.MORTGAGE:
      const initialFeePart = initialFee / price;

      creditRate = RATE_VALUES[0];

      if (initialFeePart >= RATE_INITIAL_FEE_THRESHOLD) {
        creditRate = RATE_VALUES[1];
      }

      break;
    case CreditType.CAR:
      creditRate = RATE_VALUES[0];

      if (price >= RATE_PRICE_THRESHOLD) {
        creditRate = RATE_VALUES[1];
      }

      if (isCasco || isLifeInsurance) {
        creditRate = RATE_VALUES[2];
      }

      if (isCasco && isLifeInsurance) {
        creditRate = RATE_VALUES[3];
      }

      break;
    default:
      creditRate = Math.random();

      break;
  }

  creditRate = Number((creditRate * PERCENTAGE_IN_FULL).toFixed(1));

  return {
    creditRate,
  };
});

export const getInitialFeeValues = createSelector([
  getCreditParameters,
  getPrice,
  getInitialFee,
  getIsMaternalCapital,
], (creditParameters, price, initialFee, isMaternalCapital) => {
  const {
    INITIAL_FEE_MIN_PART,
    INITIAL_FEE_CHANGE_STEP,
    CREDIT_MIN_VALUE,
    MATERNAL_CAPITAL_VALUE,
  } = creditParameters.creditParameters;

  const max = (price - CREDIT_MIN_VALUE
    - (isMaternalCapital ? MATERNAL_CAPITAL_VALUE : 0));
  const min = max > 0 ? price * INITIAL_FEE_MIN_PART : 0;
  const step = price * INITIAL_FEE_CHANGE_STEP;
  const rangeMax = max > 0 ? max - (max % step) : 0;
  const current = max > 0 ?
    Math.floor(initialFee / price * PERCENTAGE_IN_FULL) : 0;

  return {
    initialFeeValues: {
      min,
      max,
      rangeMax,
      step,
      current,
    },
  };
});

export const getCreditResults = createSelector([
  getCreditParameters,
  getPrice,
  getInitialFee,
  getIsMaternalCapital,
  getDuration,
  getCreditRate,
], (creditParameters, price, initialFee, isMaternalCapital, duration, creditRate) => {
  const {
    MATERNAL_CAPITAL_VALUE,
  } = creditParameters.creditParameters;

  const {
    creditRate: rate,
  } = creditRate;

  const creditValue = price - initialFee - (isMaternalCapital ? MATERNAL_CAPITAL_VALUE : 0);
  const monthlyPartRate = rate / MONTH_IN_YEAR / PERCENTAGE_IN_FULL;
  const durationInMonth = duration * MONTH_IN_YEAR;
  const monthlyPayment = Math.ceil(creditValue * (monthlyPartRate + (monthlyPartRate /
    (((1 + monthlyPartRate) ** durationInMonth) - 1))));
  const minSalary = Math.ceil(monthlyPayment / MAX_PART_OF_SALARY);

  return {
    creditResults: {
      creditValue,
      rate,
      monthlyPayment,
      minSalary,
    },
  };
});
