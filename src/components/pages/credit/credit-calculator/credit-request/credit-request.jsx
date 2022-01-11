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
      <dl className="credit-request__totals-list">
        <div className="credit-request__totals-item">
          <dt className="credit-request__totals-parameter">Номер заявки</dt>
          <dd className="credit-request__totals-value">№ {getRequestNumber(requestNumber)}</dd>
        </div>
        <div className="credit-request__totals-item">
          <dt className="credit-request__totals-parameter">Цель кредита</dt>
          <dd className="credit-request__totals-value credit-request__totals-value--credit-type">{creditTypeCyrillicMap[creditType][0]}</dd>
        </div>
        <div className="credit-request__totals-item">
          <dt className="credit-request__totals-parameter">Стоимость {creditTypeTargetMap[creditType]}</dt>
          <dd className="credit-request__totals-value">{formatPrice(price)} {getUnitForm(price)}</dd>
        </div>
        <div className="credit-request__totals-item">
          <dt className="credit-request__totals-parameter">Первоначальный взнос</dt>
          <dd className="credit-request__totals-value">{formatPrice(initialFee)} {getUnitForm(initialFee)}</dd>
        </div>
        <div className="credit-request__totals-item">
          <dt className="credit-request__totals-parameter">Срок кредитования</dt>
          <dd className="credit-request__totals-value">{formatPrice(duration)} {getUnitForm(duration, Unit.YEAR)}</dd>
        </div>
      </dl>
      <CreditRequestForm />
    </section>
  );
};

export default CreditRequest;
