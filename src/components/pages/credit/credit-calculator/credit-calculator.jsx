import React from "react";
import {
  useSelector,
} from "react-redux";

import CreditParameters from "./credit-parameters/credit-parameters";
import CreditResult from "./credit-result/credit-result";
import CreditRequest from "./credit-request/credit-request";
import {
  StoreNameSpace,
} from "../../../../const";

const CreditCalculator = () => {
  const {
    creditType,
    isShowRequestForm,
  } = useSelector((globalState) => ({
    ...globalState[StoreNameSpace.CALCULATOR],
    ...globalState[StoreNameSpace.PAGE],
  }));

  return (
    <section className="main__credit-calculator credit-calculator wrapper">
      <h2 className="credit-calculator__heading">Кредитный калькулятор</h2>
      <CreditParameters />
      {creditType && <CreditResult />}
      {isShowRequestForm && <CreditRequest />}
    </section>
  );
};

export default CreditCalculator;
