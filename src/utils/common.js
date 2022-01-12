import {
  FIRST_SLIDE_INDEX,
  ShiftDirection,
  Unit,
} from "../const";

const INCREMENT_STEP = 1;
const REQUEST_NUMBER_LENGTH = 4;
const ZEROES_IN_THOUSAND = 3;
const SHAKE_ANIMATION_TIMEOUT = 600;
const MILLISECONDS_IN_SECOND = 1000;

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

export const checkBreakingInput = (evt) => {
  const {
    target: {
      value,
    },
    nativeEvent: {
      inputType,
    },
  } = evt;

  if (inputType === `insertText` && value === ``) {
    return true;
  }

  return false;
};

export const checkInvalidity = (inputs) => inputs.map((input) => {
  const validity = input.validity;
  const classList = input.parentElement.classList;

  if (validity.valueMissing) {
    classList.add(`invalidity--value-missing`);
  } else {
    classList.remove(`invalidity--value-missing`);
  }

  if (validity.rangeUnderflow || validity.rangeOverflow || validity.typeMismatch || validity.patternMismatch) {
    classList.add(`invalidity--incorrect-value`);
  } else {
    classList.remove(`invalidity--incorrect-value`);
  }

  if (validity.valid) {
    classList.remove(`invalidity`);

    return true;
  }

  classList.add(`invalidity`);

  return false;
}).includes(false);

export const formatRate = (rate) => {
  const isFractionalNumber = rate % 1 !== 0;

  if (isFractionalNumber) {
    return `${rate}`.replace(`.`, `,`).concat(`0%`);
  }

  return `${rate}`.concat(`%`);
};

export const getShakeAnimation = (element) => {
  element.style.animation = `shake ${SHAKE_ANIMATION_TIMEOUT / MILLISECONDS_IN_SECOND}s`;

  setTimeout(() => {
    element.style.animation = ``;
  }, SHAKE_ANIMATION_TIMEOUT);
};
