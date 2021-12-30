import React, {
  useRef,
  useEffect,
} from "react";
import {
  useSelector,
  useDispatch,
} from "react-redux";

import {
  changeInitialFee,
} from "../../../../../../store/actions/calculator";
import {
  getCreditParameters,
  getInitialFeeRangeValues,
} from "../../../../../../store/selectors";
import {
  StoreNameSpace,
} from "../../../../../../const";
import {
  formatPrice,
  getUnitForm,
  getValueInRange,
  removeNonDigits,
  checkBreakingInput,
  checkInvalidity,
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

  const initialFeeInputRef = useRef();

  const dispatch = useDispatch();

  const handleInitialFeeChange = (evt) => {
    if (checkBreakingInput(evt)) {
      return;
    }

    const value = removeNonDigits(evt.target.value);

    if (value.length > `${price}`.length) {
      return;
    }

    dispatch(changeInitialFee(Number(value)));
  };

  const handleInitialFeeBlur = () => {
    const value = getValueInRange(initialFee, minValue, price);

    dispatch(changeInitialFee(value));
  };

  const handleInitialFeeRangeChange = (evt) => {
    dispatch(changeInitialFee(Math.ceil(Number(evt.target.value))));
  };

  useEffect(() => {
    dispatch(changeInitialFee(Math.ceil(price * INITIAL_FEE_MIN_PART)));
  }, [
    price,
  ]);

  useEffect(() => {
    checkInvalidity([
      initialFeeInputRef.current,
    ]);
  }, [
    initialFee,
  ]);

  return (
    <fieldset className="credit-calculator__fieldset credit-initial-fee">
      <label className="credit-calculator__label" htmlFor="initial-fee">Первоначальный взнос</label>
      <div className="credit-calculator__number-input-wrapper">
        <div className="credit-calculator__number-input-substrate">{`${formatPrice(initialFee)} ${getUnitForm(initialFee)}`}</div>
        <input className="credit-calculator__input credit-calculator__input--number" type="number" id="initial-fee" name="initial-fee"
          required value={initialFee.toString()} min={minValue} max={price} ref={initialFeeInputRef}
          onChange={handleInitialFeeChange} onBlur={handleInitialFeeBlur} />
      </div>
      <input className="credit-parameters__range-input" type="range"
        min={minValue} max={maxValue} step={stepValue} value={initialFee}
        onChange={handleInitialFeeRangeChange} />
      <p className="credit-calculator__description">
        {currentValue}%
      </p>
    </fieldset>
  );
};

export default CreditInitialFee;
