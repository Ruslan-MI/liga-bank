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
    <section className="credit-result__warning credit-warning">
      <div className="credit-warning__wrapper">
        <h3 className="credit-warning__heading">{`Наш банк не выдаёт ${creditTypeCyrillicMap[creditType][2]}
          меньше ${formatPrice(CreditParameter[creditType].CREDIT_MIN_VALUE)} рублей.`}</h3>
        <p className="credit-warning__text">Попробуйте использовать другие параметры для расчёта.</p>
      </div>
    </section>
  );
};

export default CreditWarning;
