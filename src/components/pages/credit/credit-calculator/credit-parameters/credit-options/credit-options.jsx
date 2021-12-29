import React from "react";
import {
  useSelector,
  useDispatch,
} from "react-redux";

import {
  creditOptionsChange,
} from "../../../../../../store/actions/calculator";
import {
  CreditType,
  StoreNameSpace,
} from "../../../../../../const";

const CreditOptions = () => {
  const {
    creditType,
    isMaternalCapital,
    isCasco,
    isLifeInsurance,
  } = useSelector((globalState) => ({
    ...globalState[StoreNameSpace.CALCULATOR],
  }));

  const dispatch = useDispatch();

  const handleCreditOptionsChange = (evt) => {
    const {
      dataset: {
        name,
      },
      checked,
    } = evt.target;

    dispatch(creditOptionsChange({
      name,
      checked,
    }));
  };

  return (
    <fieldset className="credit-calculator__fieldset credit-options" onChange={handleCreditOptionsChange}>
      <ul className="credit-options__list">
        {creditType === CreditType.MORTGAGE &&
          <li className="credit-options__item">
            <input className="credit-options__input" type="checkbox" id="maternal-capital" name="maternal-capital"
              data-name="isMaternalCapital" defaultChecked={isMaternalCapital} />
            <label className="credit-options__label" htmlFor="maternal-capital">Использовать материнский капитал</label>
          </li>}
        {creditType === CreditType.CAR && <>
          <li className="credit-options__item">
            <input className="credit-options__input" type="checkbox" id="casco" name="casco"
              data-name="isCasco" defaultChecked={isCasco} />
            <label className="credit-options__label" htmlFor="casco">Оформить КАСКО в нашем банке</label>
          </li>
          <li className="credit-options__item">
            <input className="credit-options__input" type="checkbox" id="life-insurance" name="life-insurance"
              data-name="isLifeInsurance" defaultChecked={isLifeInsurance} />
            <label className="credit-options__label" htmlFor="life-insurance">Оформить страхование жизни в нашем банке</label>
          </li></>}
      </ul>
    </fieldset>
  );
};

export default CreditOptions;
