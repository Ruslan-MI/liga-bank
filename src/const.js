export const FIRST_SLIDE_INDEX = 0;

export const ShiftDirection = {
  NONE: 0,
  RIGHT: -1,
  LEFT: 1,
};

export const StoreNameSpace = {
  USER: `user`,
  CALCULATOR: `calculator`,
  PAGE: `page`,
};

export const CreditType = {
  MORTGAGE: `mortgage`,
  CAR: `car`,
};

export const CreditParameter = {
  [CreditType.MORTGAGE]: {
    CREDIT_TITLE: `Ипотечное кредитование`,
    CREDIT_MIN_VALUE: 500000,
    PRICE_INITIAL_VALUE: 2000000,
    PRICE_MIN_VALUE: 1200000,
    PRICE_MAX_VALUE: 25000000,
    PRICE_CHANGE_STEP: 100000,
    INITIAL_FEE_MIN_PART: 0.1,
    INITIAL_FEE_CHANGE_STEP: 0.05,
    DURATION_MIN_VALUE: 5,
    DURATION_MAX_VALUE: 30,
    DURATION_CHANGE_STEP: 1,
    MATERNAL_CAPITAL_VALUE: 470000,
    RATE_VALUES: [
      0.094,
      0.085,
    ],
    RATE_INITIAL_FEE_THRESHOLD: 0.15,
  },
  [CreditType.CAR]: {
    CREDIT_TITLE: `Автомобильное кредитование`,
    CREDIT_MIN_VALUE: 200000,
    PRICE_INITIAL_VALUE: 2000000,
    PRICE_MIN_VALUE: 500000,
    PRICE_MAX_VALUE: 5000000,
    PRICE_CHANGE_STEP: 50000,
    INITIAL_FEE_MIN_PART: 0.2,
    INITIAL_FEE_CHANGE_STEP: 0.05,
    DURATION_MIN_VALUE: 1,
    DURATION_MAX_VALUE: 5,
    DURATION_CHANGE_STEP: 1,
    RATE_VALUES: [
      0.16,
      0.15,
      0.085,
      0.035,
    ],
    RATE_PRICE_THRESHOLD: 2000000,
  },
};

export const Unit = {
  RUBLE: `ruble`,
  YEAR: `year`,
};

export const creditTypeTargetMap = {
  [CreditType.MORTGAGE]: `недвижимости`,
  [CreditType.CAR]: `автомобиля`,
};

export const creditTypeCyrillicMap = {
  [CreditType.MORTGAGE]: [
    `ипотека`,
    `ипотеки`,
    `ипотечные кредиты`,
  ],
  [CreditType.CAR]: [
    `автокредит`,
    `автокредита`,
    `автокредиты`,
  ],
};
