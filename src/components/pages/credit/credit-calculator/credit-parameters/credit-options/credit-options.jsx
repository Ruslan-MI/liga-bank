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
    <fieldset className="credit-calculator__options credit-options" onChange={handleCreditOptionsChange}>
      {creditType === CreditType.MORTGAGE &&
        <p className="credit-calculator__maternal-capital">
          <input className="credit-calculator__checkbox-input" type="checkbox" id="maternal-capital" name="maternal-capital"
            data-name="isMaternalCapital" defaultChecked={isMaternalCapital} />
          <label className="credit-calculator__label" htmlFor="maternal-capital">Использовать материнский капитал</label>
        </p>}
      {creditType === CreditType.CAR && <>
        <p className="credit-calculator__casco">
          <input className="credit-calculator__checkbox-input" type="checkbox" id="casco" name="casco"
            data-name="isCasco" defaultChecked={isCasco} />
          <label className="credit-calculator__label" htmlFor="casco">Оформить КАСКО в нашем банке</label>
        </p>
        <p className="credit-calculator__life-insurance">
          <input className="credit-calculator__checkbox-input" type="checkbox" id="life-insurance" name="life-insurance"
            data-name="isLifeInsurance" defaultChecked={isLifeInsurance} />
          <label className="credit-calculator__label" htmlFor="life-insurance">Оформить Страхование жизни в нашем банке</label>
        </p></>}
    </fieldset>
  );
};

export default CreditOptions;
