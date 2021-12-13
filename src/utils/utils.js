import {
  FIRST_SLIDE_INDEX,
  ShiftDirection,
} from "../const";

const INCREMENT_STEP = 1;

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
