import React from "react";
import {
  useSelector,
} from "react-redux";
import PropTypes from "prop-types";

import {
  formatPrice,
  formatRate,
  getUnitForm,
} from "../../../../../../utils/common";
import {
  StoreNameSpace,
  creditTypeCyrillicMap,
} from "../../../../../../const";

const CreditOffer = ({
  results: {
    creditValue,
    rate,
    monthlyPayment,
    minSalary,
  },
}) => {
  const {
    creditType,
  } = useSelector((globalState) => ({
    ...globalState[StoreNameSpace.CALCULATOR],
  }));

  const handleSubmitButtonClick = (evt) =>
    !document.forms[`credit-parameters-form`].checkValidity() && evt.preventDefault();

  return (
    <section className="credit-result__offer credit-offer">
      <div className="credit-offer__wrapper">
        <h3 className="credit-offer__heading">Наше предложение</h3>
        <dl className="credit-offer__totals-list">
          <div className="credit-offer__totals-item">
            <dt className="credit-offer__totals-parameter">Сумма {creditTypeCyrillicMap[creditType][1]}</dt>
            <dd className="credit-offer__totals-value">{formatPrice(creditValue)} {getUnitForm(creditValue)}</dd>
          </div>
          <div className="credit-offer__totals-item">
            <dt className="credit-offer__totals-parameter">Процентная ставка</dt>
            <dd className="credit-offer__totals-value">{formatRate(rate)}</dd>
          </div>
          <div className="credit-offer__totals-item">
            <dt className="credit-offer__totals-parameter">Ежемесячный платеж</dt>
            <dd className="credit-offer__totals-value">{formatPrice(monthlyPayment)} {getUnitForm(monthlyPayment)}</dd>
          </div>
          <div className="credit-offer__totals-item">
            <dt className="credit-offer__totals-parameter">Необходимый доход</dt>
            <dd className="credit-offer__totals-value">{formatPrice(minSalary)} {getUnitForm(minSalary)}</dd>
          </div>
        </dl>
        <button className="credit-offer__submit-button blue-button" type="submit" form="credit-parameters-form"
          onClick={handleSubmitButtonClick}>Оформить заявку</button>
      </div>
    </section>
  );
};

CreditOffer.propTypes = {
  results: PropTypes.exact({
    creditValue: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    monthlyPayment: PropTypes.number.isRequired,
    minSalary: PropTypes.number.isRequired,
  }).isRequired,
};

export default CreditOffer;
