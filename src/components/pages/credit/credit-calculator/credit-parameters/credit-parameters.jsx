import React, {
  useState,
} from "react";
import {
  useSelector,
  useDispatch,
} from "react-redux";

import CreditPrice from "./credit-price/credit-price";
import CreditInitialFee from "./credit-initial-fee/credit-initial-fee";
import CreditDuration from "./credit-duration/credit-duration";
import CreditOptions from "./credit-options/credit-options";
import {
  changeCreditType,
} from "../../../../../store/actions/calculator";
import {
  CreditParameter,
  CreditType,
  StoreNameSpace,
} from "../../../../../const";
import {
  showRequestForm,
  hideRequestForm,
} from "../../../../../store/actions/page";

const CreditParameters = () => {
  const [
    state,
    setState,
  ] = useState({
    isTypesListOpened: false,
  });

  const {
    creditType,
  } = useSelector((globalState) => ({
    ...globalState[StoreNameSpace.CALCULATOR],
  }));

  const dispatch = useDispatch();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    dispatch(showRequestForm());
  };

  const handleFormChange = () => {
    dispatch(hideRequestForm());
  };

  const handleShowTypesListButtonClick = () => {
    setState((prevState) => ({
      ...prevState,
      isTypesListOpened: !prevState.isTypesListOpened,
    }));
  };

  const handleTypesListClick = (evt) => {
    if (evt.target.matches(`.credit-parameters__types-button`)) {
      dispatch(changeCreditType(evt.target.dataset.value));
      dispatch(hideRequestForm());

      setState((prevState) => ({
        ...prevState,
        isTypesListOpened: false,
      }));
    }
  };

  return (
    <form className="credit-calculator__parameters-form credit-parameters" id="credit-parameters-form"
      action="https://echo.htmlacademy.ru" method="POST" onSubmit={handleFormSubmit} onChange={handleFormChange}>
      <section className="credit-calculator__step credit-calculator__step--first">
        <h3 className="credit-calculator__step-heading credit-calculator__step-heading--first">Шаг 1. Цель кредита</h3>
        <div className="credit-parameters__credit-types-wrapper">
          <button className={`credit-parameters__types-button credit-parameters__types-button--show-types-list ${state.isTypesListOpened ?
            `credit-parameters__types-button--list-opened` : ``}`} type="button" onClick={handleShowTypesListButtonClick}>
            {creditType ? CreditParameter[creditType].CREDIT_TITLE : `Выберите цель кредита`}
          </button>
          {state.isTypesListOpened &&
            <ul className="credit-parameters__types-list" onClick={handleTypesListClick}>
              {Object.values(CreditType).map((item) => item !== creditType &&
                <li className="credit-parameters__types-item" key={item}>
                  <button className="credit-parameters__types-button" type="button" data-value={item}>{CreditParameter[item].CREDIT_TITLE}</button>
                </li>)}
            </ul>}
        </div>
      </section>
      {creditType &&
        <section className="credit-calculator__step credit-calculator__step--second">
          <h3 className="credit-calculator__step-heading credit-calculator__step-heading--second">Шаг 2. Введите параметры кредита</h3>
          <CreditPrice />
          <CreditInitialFee />
          <CreditDuration />
          <CreditOptions />
        </section>}
    </form>
  );
};

export default CreditParameters;
