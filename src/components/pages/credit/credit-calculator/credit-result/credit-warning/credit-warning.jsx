import React from "react";
import {
  useSelector,
} from "react-redux";

import {
  CreditParameter,
  creditTypeCyrillicMap,
  StoreNameSpace,
} from "../../../../../../const";
import {
  formatPrice,
} from "../../../../../../utils/common";

const CreditWarning = () => {
  const {
    creditType,
  } = useSelector((globalState) => ({
    ...globalState[StoreNameSpace.CALCULATOR],
  }));

  return (
    <section className="credit-result__warning credit-warning message">
      <h3 className="credit-warning__heading message__heading">
        Наш банк не выдаёт {creditTypeCyrillicMap[creditType][2]} меньше {formatPrice(CreditParameter[creditType].CREDIT_MIN_VALUE)} рублей.
      </h3>
      <p className="credit-warning__text message__text">Попробуйте использовать другие параметры для расчёта.</p>
    </section>
  );
};

export default CreditWarning;
