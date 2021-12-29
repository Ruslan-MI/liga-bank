import React from "react";
import {
  useSelector,
} from "react-redux";

import CreditRequestForm from "./credit-request-form/credit-request-form";
import {
  StoreNameSpace,
  Unit,
  creditTypeTargetMap,
  creditTypeCyrillicMap,
} from "../../../../../const";
import {
  formatPrice,
  getUnitForm,
  getRequestNumber,
} from "../../../../../utils/common";

const CreditRequest = () => {
  const {
    creditType,
    price,
    initialFee,
    duration,
    requestNumber,
  } = useSelector((globalState) => ({
    ...globalState[StoreNameSpace.CALCULATOR],
    ...globalState[StoreNameSpace.USER],
  }));

  return (
    <section className="credit-calculator__step credit-request">
      <h3 className="credit-calculator__step-heading credit-request__heading">Шаг 3. Оформление заявки</h3>
      <dl className="credit-request__totals-list totals-list">
        <div className="credit-request__totals-item totals-list__item">
          <dt className="credit-request__totals-parameter totals-list__parameter">Номер заявки</dt>
          <dd className="credit-request__totals-value totals-list__value">№ {getRequestNumber(requestNumber)}</dd>
        </div>
        <div className="credit-request__totals-item totals-list__item">
          <dt className="credit-request__totals-parameter totals-list__parameter">Цель кредита</dt>
          <dd className="credit-request__totals-value totals-list__value">{creditTypeCyrillicMap[creditType][0]}</dd>
        </div>
        <div className="credit-request__totals-item totals-list__item">
          <dt className="credit-request__totals-parameter totals-list__parameter">Стоимость {creditTypeTargetMap[creditType]}</dt>
          <dd className="credit-request__totals-value totals-list__value">{formatPrice(price)} {getUnitForm(price)}</dd>
        </div>
        <div className="credit-request__totals-item totals-list__item">
          <dt className="credit-request__totals-parameter totals-list__parameter">Первоначальный взнос</dt>
          <dd className="credit-request__totals-value totals-list__value">{formatPrice(initialFee)} {getUnitForm(initialFee)}</dd>
        </div>
        <div className="credit-request__totals-item totals-list__item">
          <dt className="credit-request__totals-parameter totals-list__parameter">Срок кредитования</dt>
          <dd className="credit-request__totals-value totals-list__value">{formatPrice(duration)} {getUnitForm(duration, Unit.YEAR)}</dd>
        </div>
      </dl>
      <CreditRequestForm />
    </section>
  );
};

export default CreditRequest;
