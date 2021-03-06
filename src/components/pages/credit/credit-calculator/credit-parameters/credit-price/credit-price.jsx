import React, {
  useRef,
  useEffect,
} from "react";
import {
  useSelector,
  useDispatch,
} from "react-redux";

import {
  changePrice,
} from "../../../../../../store/actions/calculator";
import {
  getCreditParameters,
} from "../../../../../../store/selectors";
import {
  creditTypeTargetMap,
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

const CreditPrice = () => {
  const {
    price,
    creditType,
    creditParameters: {
      PRICE_MIN_VALUE,
      PRICE_MAX_VALUE,
      PRICE_CHANGE_STEP,
    },
  } = useSelector((globalState) => ({
    ...globalState[StoreNameSpace.CALCULATOR],
    ...getCreditParameters(globalState),
  }));

  const priceInputRef = useRef();

  const dispatch = useDispatch();

  const handlePriceChange = (evt) => {
    if (checkBreakingInput(evt)) {
      return;
    }

    const value = removeNonDigits(evt.target.value);

    if (value.length > `${PRICE_MAX_VALUE}`.length) {
      return;
    }

    dispatch(changePrice(Number(value)));
  };

  const handleDecreasePriceClick = () => {
    const value = getValueInRange(price - PRICE_CHANGE_STEP, PRICE_MIN_VALUE, PRICE_MAX_VALUE);

    dispatch(changePrice(value));
  };

  const handleIncreasePriceClick = () => {
    const value = getValueInRange(price + PRICE_CHANGE_STEP, PRICE_MIN_VALUE, PRICE_MAX_VALUE);

    dispatch(changePrice(value));
  };

  const handlePriceBlur = () => {
    const value = getValueInRange(price, PRICE_MIN_VALUE, PRICE_MAX_VALUE);

    dispatch(changePrice(value));
  };

  useEffect(() => {
    checkInvalidity([
      priceInputRef.current,
    ]);
  }, [
    price,
  ]);

  return (
    <fieldset className="credit-calculator__fieldset credit-price">
      <label className="credit-calculator__label" htmlFor="price">Стоимость {creditTypeTargetMap[creditType]}</label>
      <div className="credit-calculator__number-input-wrapper">
        <button className="credit-price__button credit-price__button--decrease" type="button"
          onClick={handleDecreasePriceClick}>
          <span className="visually-hidden">Уменьшить стоимость на {PRICE_CHANGE_STEP}</span>
        </button>
        <div className="credit-calculator__number-input-substrate">{`${formatPrice(price)} ${getUnitForm(price)}`}</div>
        <input className="credit-calculator__input input" type="number" id="price" name="price"
          required value={price.toString()} min={PRICE_MIN_VALUE} max={PRICE_MAX_VALUE} ref={priceInputRef}
          onChange={handlePriceChange} onBlur={handlePriceBlur} />
        <button className="credit-price__button credit-price__button--increase" type="button"
          onClick={handleIncreasePriceClick}>
          <span className="visually-hidden">Увеличить стоимость на {PRICE_CHANGE_STEP}</span>
        </button>
      </div>
      <p className="credit-calculator__description">
        От {formatPrice(PRICE_MIN_VALUE)}  до {formatPrice(PRICE_MAX_VALUE)} рублей
      </p>
    </fieldset>
  );
};

export default CreditPrice;
