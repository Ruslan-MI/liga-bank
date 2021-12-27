import React from "react";
import {
  useSelector,
} from "react-redux";

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
import CreditUserData from "./credit-user-data/credit-user-data";

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
      <h3 className="credit-calculator__step-heading">Шаг 3. Оформление заявки</h3>
      <dl className="credit-calculator__result-list">
        <div className="credit-calculator__result-item">
          <dt className="credit-calculator__result-term">Номер заявки</dt>
          <dd className="credit-calculator__result-definition">№ {getRequestNumber(requestNumber)}</dd>
        </div>
        <div className="credit-calculator__result-item">
          <dt className="credit-calculator__result-term">Цель кредита</dt>
          <dd className="credit-calculator__result-definition">{creditTypeCyrillicMap[creditType][0]}</dd>
        </div>
        <div className="credit-calculator__result-item">
          <dt className="credit-calculator__result-term">Стоимость {creditTypeTargetMap[creditType]}</dt>
          <dd className="credit-calculator__result-definition">{formatPrice(price)} {getUnitForm(price)}</dd>
        </div>
        <div className="credit-calculator__result-item">
          <dt className="credit-calculator__result-term">Первоначальный взнос</dt>
          <dd className="credit-calculator__result-definition">{formatPrice(initialFee)} {getUnitForm(initialFee)}</dd>
        </div>
        <div className="credit-calculator__result-item">
          <dt className="credit-calculator__result-term">Срок кредитования</dt>
          <dd className="credit-calculator__result-definition">{formatPrice(duration)} {getUnitForm(duration, Unit.YEAR)}</dd>
        </div>
      </dl>
      <CreditUserData />
    </section>
  );
};

export default CreditRequest;
