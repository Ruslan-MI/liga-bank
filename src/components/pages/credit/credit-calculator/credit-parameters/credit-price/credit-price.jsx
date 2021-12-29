import React from "react";
import {
  useSelector,
  useDispatch,
} from "react-redux";

import {
  priceChange,
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

  const dispatch = useDispatch();

  const handlePriceChange = (evt) => {
    if (evt.nativeEvent.data === `.`) {
      return;
    }

    const value = removeNonDigits(evt.target.value);

    if (value.length > `${PRICE_MAX_VALUE}`.length) {
      return;
    }

    dispatch(priceChange(Number(value)));
  };

  const handleDecreasePriceClick = () => {
    const value = getValueInRange(price - PRICE_CHANGE_STEP, PRICE_MIN_VALUE, PRICE_MAX_VALUE);

    dispatch(priceChange(value));
  };

  const handleIncreasePriceClick = () => {
    const value = getValueInRange(price + PRICE_CHANGE_STEP, PRICE_MIN_VALUE, PRICE_MAX_VALUE);

    dispatch(priceChange(value));
  };

  const handlePriceBlur = () => {
    const value = getValueInRange(price, PRICE_MIN_VALUE, PRICE_MAX_VALUE);

    dispatch(priceChange(value));
  };

  return (
    <fieldset className="credit-calculator__fieldset credit-price">
      <label className="credit-calculator__label" htmlFor="price">Стоимость {creditTypeTargetMap[creditType]}</label>
      <div className="credit-calculator__number-input-wrapper">
        <button className="credit-price__button credit-price__button--decrease" type="button"
          onClick={handleDecreasePriceClick}>
          <span className="visually-hidden">Уменьшить стоимость на {PRICE_CHANGE_STEP}</span>
        </button>
        <div className="credit-calculator__number-input-substrate">{`${formatPrice(price)} ${getUnitForm(price)}`}</div>
        <input className="credit-calculator__input credit-calculator__input--number" type="number" id="price" name="price"
          value={price} min={PRICE_MIN_VALUE} max={PRICE_MAX_VALUE} onChange={handlePriceChange} onBlur={handlePriceBlur} />
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
