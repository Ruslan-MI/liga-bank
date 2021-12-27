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
    <fieldset className="credit-calculator__price credit-price">
      <label className="credit-calculator__label" htmlFor="price">Стоимость {creditTypeTargetMap[creditType]}</label>
      <div className="credit-calculator__price-input-wrapper">
        <button className="credit-calculator__change-price-button credit-calculator__change-price-button--decrease" type="button"
          onClick={handleDecreasePriceClick}>
          <span>Уменьшить стоимость на {PRICE_CHANGE_STEP}</span>
        </button>
        <input className="credit-calculator__input" type="text" id="price" name="price"
          value={price} onChange={handlePriceChange} onBlur={handlePriceBlur} />
        <button className="credit-calculator__change-price-button credit-calculator__change-price-button--increase" type="button"
          onClick={handleIncreasePriceClick}>
          <span>Увеличить стоимость на {PRICE_CHANGE_STEP}</span>
        </button>
      </div>
      <p className="credit-calculator__description">
        От {formatPrice(PRICE_MIN_VALUE)} до {formatPrice(PRICE_MAX_VALUE)} рублей
      </p>
    </fieldset>
  );
};

export default CreditPrice;
