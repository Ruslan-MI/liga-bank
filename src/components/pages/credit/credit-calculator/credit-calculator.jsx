import React from "react";
import {
  useSelector,
  useDispatch,
} from "react-redux";

import CreditParameters from "./credit-parameters/credit-parameters";
import CreditResult from "./credit-result/credit-result";
import CreditRequest from "./credit-request/credit-request";
import GratitudeModal from "./gratitude-modal/gratitude-modal";
import {
  StoreNameSpace,
} from "../../../../const";
import {
  hideGratitudeModal,
} from "../../../../store/actions/page";

const CreditCalculator = () => {
  const {
    creditType,
    isShowRequestForm,
    isShowGratitudeModal,
  } = useSelector((globalState) => ({
    ...globalState[StoreNameSpace.CALCULATOR],
    ...globalState[StoreNameSpace.PAGE],
  }));

  const dispatch = useDispatch();

  const onModalClose = () => {
    dispatch(hideGratitudeModal());
  };

  return (
    <section className="main__credit-calculator credit-calculator wrapper">
      <h2 className="credit-calculator__heading">Кредитный калькулятор</h2>
      <CreditParameters />
      {creditType && <CreditResult />}
      {isShowRequestForm && <CreditRequest />}
      {isShowGratitudeModal && <GratitudeModal onModalClose={onModalClose} />}
    </section>
  );
};

export default CreditCalculator;
