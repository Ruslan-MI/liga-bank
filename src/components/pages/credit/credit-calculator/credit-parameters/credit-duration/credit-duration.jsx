import React from "react";
import {
  useSelector,
  useDispatch,
} from "react-redux";

import {
  durationChange,
} from "../../../../../../store/actions/calculator";
import {
  getCreditParameters,
} from "../../../../../../store/selectors";
import {
  StoreNameSpace,
} from "../../../../../../const";
import {
  getValueInRange,
  removeNonDigits,
} from "../../../../../../utils/common";

const CreditDuration = () => {
  const {
    duration,
    creditParameters: {
      DURATION_MIN_VALUE,
      DURATION_MAX_VALUE,
      DURATION_CHANGE_STEP,
    },
  } = useSelector((globalState) => ({
    ...globalState[StoreNameSpace.CALCULATOR],
    ...getCreditParameters(globalState),
  }));

  const dispatch = useDispatch();

  const handleDurationChange = (evt) => {
    const value = removeNonDigits(evt.target.value);

    if (value.length > `${DURATION_MAX_VALUE}`.length) {
      return;
    }

    dispatch(durationChange(Number(value)));
  };

  const handleDurationBlur = () => {
    const value = getValueInRange(duration, DURATION_MIN_VALUE, DURATION_MAX_VALUE);

    dispatch(durationChange(value));
  };

  const handleDurationRangeChange = (evt) => {
    dispatch(durationChange(Number(evt.target.value)));
  };

  return (
    <fieldset className="credit-calculator__duration credit-duration">
      <label className="credit-calculator__label" htmlFor="duration">Срок кредитования</label>
      <input className="credit-calculator__input" type="text" id="duration" name="duration"
        value={duration} onChange={handleDurationChange} onBlur={handleDurationBlur} />
      <input className="credit-calculator__range-input" type="range"
        min={DURATION_MIN_VALUE} max={DURATION_MAX_VALUE} step={DURATION_CHANGE_STEP}
        value={duration} onChange={handleDurationRangeChange} />
      <p className="credit-calculator__description">
        <span>{DURATION_MIN_VALUE} лет</span>
        <span>{DURATION_MAX_VALUE} лет</span>
      </p>
    </fieldset>
  );
};

export default CreditDuration;
