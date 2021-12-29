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
  getInitialFeeValues,
} from "../../../../../../store/selectors";
import {
  StoreNameSpace,
} from "../../../../../../const";
import {
  formatPrice,
  getUnitForm,
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
    initialFeeValues: {
      min: minValue,
      max: maxValue,
      rangeMax: rangeMaxValue,
      step: stepValue,
      current: currentValue,
    },
  } = useSelector((globalState) => ({
    ...globalState[StoreNameSpace.CALCULATOR],
    ...getCreditParameters(globalState),
    ...getInitialFeeValues(globalState),
  }));

  const dispatch = useDispatch();

  const handleInitialFeeChange = (evt) => {
    if (evt.nativeEvent.data === `.`) {
      return;
    }

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
    <fieldset className="credit-calculator__fieldset credit-initial-fee">
      <label className="credit-calculator__label" htmlFor="initial-fee">Первоначальный взнос</label>
      <div className="credit-calculator__number-input-wrapper">
        <div className="credit-calculator__number-input-substrate">{`${formatPrice(initialFee)} ${getUnitForm(initialFee)}`}</div>
        <input className="credit-calculator__input credit-calculator__input--number" type="number" id="initial-fee" name="initial-fee"
          value={initialFee} min={minValue} max={maxValue} onChange={handleInitialFeeChange} onBlur={handleInitialFeeBlur} />
      </div>
      <input className="credit-parameters__range-input" type="range"
        min={minValue} max={rangeMaxValue} step={stepValue} value={initialFee}
        onChange={handleInitialFeeRangeChange} />
      <p className="credit-calculator__description">
        {currentValue}%
      </p>
    </fieldset>
  );
};

export default CreditInitialFee;
