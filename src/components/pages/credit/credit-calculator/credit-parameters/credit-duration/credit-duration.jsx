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
  Unit,
} from "../../../../../../const";
import {
  getUnitForm,
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
    if (evt.nativeEvent.data === `.`) {
      return;
    }

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
    <fieldset className="credit-calculator__fieldset credit-duration">
      <label className="credit-calculator__label" htmlFor="duration">Срок кредитования</label>
      <div className="credit-calculator__number-input-wrapper">
        <div className="credit-calculator__number-input-substrate">{`${duration} ${getUnitForm(duration, Unit.YEAR)}`}</div>
        <input className="credit-calculator__input credit-calculator__input--number" type="number" id="duration" name="duration"
          value={duration} min={DURATION_MIN_VALUE} max={DURATION_MAX_VALUE} onChange={handleDurationChange} onBlur={handleDurationBlur} />
      </div>
      <input className="credit-parameters__range-input" type="range"
        min={DURATION_MIN_VALUE} max={DURATION_MAX_VALUE} step={DURATION_CHANGE_STEP}
        value={duration} onChange={handleDurationRangeChange} />
      <p className="credit-calculator__description credit-calculator__description--duration">
        <span>{DURATION_MIN_VALUE} лет</span>
        <span>{DURATION_MAX_VALUE} лет</span>
      </p>
    </fieldset>
  );
};

export default CreditDuration;
