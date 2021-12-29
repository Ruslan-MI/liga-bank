import React from "react";
import {
  useSelector,
} from "react-redux";

import CreditWarning from "./credit-warning/credit-warning";
import CreditOffer from "./credit-offer/credit-offer";
import {
  getCreditParameters,
  getCreditResults,
} from "../../../../../store/selectors";

const CreditResult = () => {
  const {
    creditParameters: {
      CREDIT_MIN_VALUE,
    },
    creditResults,
  } = useSelector((globalState) => ({
    ...getCreditParameters(globalState),
    ...getCreditResults(globalState),
  }));

  return (
    <div className="credit-calculator__result credit-result">
      {creditResults.creditValue < CREDIT_MIN_VALUE ?
        <CreditWarning /> :
        <CreditOffer results={creditResults} />}
    </div>
  );
};

export default CreditResult;
