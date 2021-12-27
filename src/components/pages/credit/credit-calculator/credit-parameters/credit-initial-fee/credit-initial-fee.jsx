import React, {
  useEffect,
} from "react";
import {
  useSelector,
  useDispatch,
} from "react-redux";

import {
  initialFeeChange,
} from "../../../../../../store/actions/calculator";
import {
  getCreditParameters,
  getInitialFeeRangeValues,
} from "../../../../../../store/selectors";
import {
  StoreNameSpace,
} from "../../../../../../const";
import {
  getValueInRange,
  removeNonDigits,
} from "../../../../../../utils/common";

const CreditInitialFee = () => {
  const {
    price,
    initialFee,
    creditParameters: {
      INITIAL_FEE_MIN_PART,
    },
    initialFeeRangeValues: {
      min: minValue,
      max: maxValue,
      step: stepValue,
      current: currentValue,
    },
  } = useSelector((globalState) => ({
    ...globalState[StoreNameSpace.CALCULATOR],
    ...getCreditParameters(globalState),
    ...getInitialFeeRangeValues(globalState),
  }));

  const dispatch = useDispatch();

  const handleInitialFeeChange = (evt) => {
    const value = removeNonDigits(evt.target.value);

    if (value.length > `${price}`.length) {
      return;
    }

    dispatch(initialFeeChange(Number(value)));
  };

  const handleInitialFeeBlur = () => {
    const value = getValueInRange(initialFee, minValue, maxValue);

    dispatch(initialFeeChange(value));
  };

  const handleInitialFeeRangeChange = (evt) => {
    dispatch(initialFeeChange(Math.ceil(Number(evt.target.value))));
  };

  useEffect(() => {
    dispatch(initialFeeChange(Math.ceil(price * INITIAL_FEE_MIN_PART)));
  }, [
    price,
  ]);

  return (
    <fieldset className="credit-calculator__initial-fee credit-initial-fee">
      <label className="credit-calculator__label" htmlFor="initial-fee">Первоначальный взнос</label>
      <input className="credit-calculator__input" type="text" id="initial-fee" name="initial-fee"
        value={initialFee} onChange={handleInitialFeeChange} onBlur={handleInitialFeeBlur} />
      <input className="credit-calculator__range-input" type="range"
        min={minValue} max={maxValue} step={stepValue} value={initialFee}
        onChange={handleInitialFeeRangeChange} />
      <p className="credit-calculator__description">
        {currentValue}%
      </p>
    </fieldset>
  );
};

export default CreditInitialFee;
