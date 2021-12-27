import React from "react";
import {
  useSelector,
  useDispatch,
} from "react-redux";

import {
  emailChange,
  nameChange,
  phoneChange,
  requestNumberIncrease,
} from "../../../../../../store/actions/user";
import {
  StoreNameSpace,
} from "../../../../../../const";
import {
  formatPhoneNumber,
} from "../../../../../../utils/phone";

const CreditUserData = () => {
  const {
    name: userName,
    phone,
    email,
  } = useSelector((globalState) => ({
    ...globalState[StoreNameSpace.USER],
  }));

  const dispatch = useDispatch();

  const handleNameChange = (evt) => {
    const {
      name,
      value,
    } = evt.target;

    dispatch(nameChange(value));

    localStorage.setItem(name, value);
  };

  const handlePhoneChange = (evt) => {
    const {
      target: {
        name,
        value,
      },
      nativeEvent: {
        inputType,
      },
    } = evt;

    let formattedValue = value;

    if (inputType !== `deleteContentForward` && inputType !== `deleteContentBackward`) {
      formattedValue = formatPhoneNumber(value);
    }

    dispatch(phoneChange(formattedValue));

    localStorage.setItem(name, formattedValue);
  };

  const handleEmailChange = (evt) => {
    const {
      name,
      value,
    } = evt.target;

    dispatch(emailChange(value));

    localStorage.setItem(name, value);
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    dispatch(requestNumberIncrease());
  };

  return (
    <form className="credit-calculator__request-form credit-user-data" id="credit-user-data-form" action="https://echo.htmlacademy.ru"
      method="POST" onSubmit={handleFormSubmit}>
      <p className="credit-calculator__name">
        <label className="visually-hidden" htmlFor="name">Фамилия, имя, отчество</label>
        <input className="credit-calculator__input" type="text" name="name" id="name" placeholder="ФИО"
          pattern="[A-Za-zА-Яа-яЁё][-─–—A-Za-zА-Яа-яЁё\s]{0,}" required autoFocus value={userName} onChange={handleNameChange} />
      </p>
      <p className="credit-calculator__phone">
        <label className="visually-hidden" htmlFor="phone">Телефон</label>
        <input className="credit-calculator__input" type="tel" name="phone" id="phone" placeholder="Телефон" required
          value={phone} onChange={handlePhoneChange} />
      </p>
      <p className="credit-calculator__phone">
        <label className="visually-hidden" htmlFor="phone">E-mail</label>
        <input className="credit-calculator__input" type="email" name="email" id="email" placeholder="E-mail" required
          value={email} onChange={handleEmailChange} />
      </p>
      <button className="credit-calculator__request-submit-button" type="submit">Отправить</button>
    </form>
  );
};

export default CreditUserData;
