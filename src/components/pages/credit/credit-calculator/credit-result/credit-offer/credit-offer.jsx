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
    <section className="credit-calculator__result-offer credit-offer">
      <h3 className="credit-calculator__result-heading">Наше предложение</h3>
      <dl className="credit-calculator__result-list">
        <div className="credit-calculator__result-item">
          <dt className="credit-calculator__result-term">Сумма {creditTypeCyrillicMap[creditType][1]}</dt>
          <dd className="credit-calculator__result-definition">{formatPrice(creditValue)} {getUnitForm(creditValue)}</dd>
        </div>
        <div className="credit-calculator__result-item">
          <dt className="credit-calculator__result-term">Процентная ставка</dt>
          <dd className="credit-calculator__result-definition">{rate}%</dd>
        </div>
        <div className="credit-calculator__result-item">
          <dt className="credit-calculator__result-term">Ежемесячный платеж</dt>
          <dd className="credit-calculator__result-definition">{formatPrice(monthlyPayment)} {getUnitForm(monthlyPayment)}</dd>
        </div>
        <div className="credit-calculator__result-item">
          <dt className="credit-calculator__result-term">Необходимый доход</dt>
          <dd className="credit-calculator__result-definition">{formatPrice(minSalary)} {getUnitForm(minSalary)}</dd>
        </div>
      </dl>
      <button className="credit-calculator__result-submit-button" type="submit" form="credit-parameters-form">Оформить заявку</button>
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
