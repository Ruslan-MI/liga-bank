import React from "react";
import {
  useSelector,
} from "react-redux";
import PropTypes from "prop-types";

import {
  formatPrice,
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

  return (
    <section className="credit-result__offer credit-offer message">
      <h3 className="credit-offer__heading message__heading">Наше предложение</h3>
      <dl className="credit-offer__totals-list totals-list">
        <div className="credit-offer__totals-item totals-list__item">
          <dt className="credit-offer__totals-parameter totals-list__parameter">Сумма {creditTypeCyrillicMap[creditType][1]}</dt>
          <dd className="credit-offer__totals-value totals-list__value">{formatPrice(creditValue)} {getUnitForm(creditValue)}</dd>
        </div>
        <div className="credit-offer__totals-item totals-list__item">
          <dt className="credit-offer__totals-parameter totals-list__parameter">Процентная ставка</dt>
          <dd className="credit-offer__totals-value totals-list__value">{rate}%</dd>
        </div>
        <div className="credit-offer__totals-item totals-list__item">
          <dt className="credit-offer__totals-parameter totals-list__parameter">Ежемесячный платеж</dt>
          <dd className="credit-offer__totals-value totals-list__value">{formatPrice(monthlyPayment)} {getUnitForm(monthlyPayment)}</dd>
        </div>
        <div className="credit-offer__totals-item totals-list__item">
          <dt className="credit-offer__totals-parameter totals-list__parameter">Необходимый доход</dt>
          <dd className="credit-offer__totals-value totals-list__value">{formatPrice(minSalary)} {getUnitForm(minSalary)}</dd>
        </div>
      </dl>
      <button className="credit-offer__submit-button blue-button" type="submit" form="credit-parameters-form">Оформить заявку</button>
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
