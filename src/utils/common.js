import {
  FIRST_SLIDE_INDEX,
  ShiftDirection,
  Unit,
} from "../const";

const INCREMENT_STEP = 1;
const REQUEST_NUMBER_LENGTH = 4;
const ZEROES_IN_THOUSAND = 3;

const unitForms = {
  first: {
    title: {
      [Unit.RUBLE]: `рублей`,
      [Unit.YEAR]: `лет`,
    },
    minValue: 11,
    maxValue: 14,
  },
  second: {
    title: {
      [Unit.RUBLE]: `рубль`,
      [Unit.YEAR]: `год`,
    },
    value: 1,
  },
  third: {
    title: {
      [Unit.RUBLE]: `рубля`,
      [Unit.YEAR]: `года`,
    },
    minValue: 2,
    maxValue: 4,
  }
};

export const getSlideIndex = (prevState, shiftDirection) => {
  switch (shiftDirection) {
    case ShiftDirection.RIGHT:
      return prevState.currentSlideIndex - INCREMENT_STEP >= FIRST_SLIDE_INDEX ?
        prevState.currentSlideIndex - INCREMENT_STEP : prevState.slidesData.length - INCREMENT_STEP;
    case ShiftDirection.LEFT:
      return prevState.currentSlideIndex + INCREMENT_STEP < prevState.slidesData.length ?
        prevState.currentSlideIndex + INCREMENT_STEP : FIRST_SLIDE_INDEX;
    default:
      return prevState.currentSlideIndex;
  }
};

export const getValueInRange = (value, minValue, maxValue) => {
  if (value < minValue) {
    return minValue;
  }

  if (value > maxValue) {
    return maxValue;
  }

  return value;
};

export const removeNonDigits = (value) => value.replace(/\D/g, ``);

export const getRequestNumber = (number) => `${number}`.padStart(REQUEST_NUMBER_LENGTH, `0`);

export const formatPrice = (value) =>
  `${value}`.split(``).map((item, i, arr) =>
    (arr.length - i) % ZEROES_IN_THOUSAND ? item : ` ${item}`).join(``).trim();

export const getUnitForm = (value, unit = Unit.RUBLE) => {
  const twoLastDigits = value % 100;
  const lastDigit = value % 10;

  const {
    first,
    second,
    third,
  } = unitForms;

  if (twoLastDigits >= first.minValue && twoLastDigits <= first.maxValue) {
    return first.title[unit];
  }

  if (lastDigit === second.value) {
    return second.title[unit];
  }

  if (lastDigit >= third.minValue && lastDigit <= third.maxValue) {
    return third.title[unit];
  }

  return first.title[unit];
};
