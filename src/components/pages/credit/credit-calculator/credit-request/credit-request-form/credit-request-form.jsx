import React, {
  useRef,
  useEffect,
} from "react";
import {
  useSelector,
  useDispatch,
} from "react-redux";

import {
  changeName,
  changePhone,
  changeEmail,
  increaseRequestNumber,
} from "../../../../../../store/actions/user";
import {
  changeCreditType,
} from "../../../../../../store/actions/calculator";
import {
  hideRequestForm,
  showGratitudeModal,
} from "../../../../../../store/actions/page";
import {
  StoreNameSpace,
} from "../../../../../../const";
import {
  formatPhoneNumber,
} from "../../../../../../utils/phone";
import {
  checkInvalidity,
} from "../../../../../../utils/common";

const CreditRequestForm = () => {
  const {
    name: userName,
    phone,
    email,
  } = useSelector((globalState) => ({
    ...globalState[StoreNameSpace.USER],
  }));

  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const emailInputRef = useRef();

  const dispatch = useDispatch();

  const handleNameChange = (evt) => {
    const {
      name,
      value,
    } = evt.target;

    dispatch(changeName(value));

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

    dispatch(changePhone(formattedValue));

    localStorage.setItem(name, formattedValue);
  };

  const handleEmailChange = (evt) => {
    const {
      name,
      value,
    } = evt.target;

    dispatch(changeEmail(value));

    localStorage.setItem(name, value);
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    dispatch(increaseRequestNumber());
    dispatch(hideRequestForm());
    dispatch(changeCreditType(null));
    dispatch(showGratitudeModal());
  };

  const handleSubmitButtonClick = (evt) =>
    checkInvalidity([
      nameInputRef.current,
      phoneInputRef.current,
      emailInputRef.current,
    ]) && evt.preventDefault();

  useEffect(() => {
    checkInvalidity([
      nameInputRef.current,
    ]);
  }, [
    userName,
  ]);

  useEffect(() => {
    checkInvalidity([
      phoneInputRef.current,
    ]);
  }, [
    phone,
  ]);

  useEffect(() => {
    checkInvalidity([
      emailInputRef.current,
    ]);
  }, [
    email,
  ]);

  return (
    <form className="credit-request__form credit-request-form" id="credit-request-form" action="https://echo.htmlacademy.ru"
      method="POST" onSubmit={handleFormSubmit}>
      <p className="credit-request-form__paragraph">
        <label className="visually-hidden" htmlFor="name">Фамилия, имя, отчество</label>
        <input className="credit-request-form__input credit-calculator__input" type="text" name="name" id="name" placeholder="ФИО"
          pattern="[A-Za-zА-Яа-яЁё][-─–—A-Za-zА-Яа-яЁё\s]{0,}" required autoFocus value={userName} ref={nameInputRef} onChange={handleNameChange} />
      </p>
      <p className="credit-request-form__paragraph">
        <label className="visually-hidden" htmlFor="phone">Телефон</label>
        <input className="credit-request-form__input credit-calculator__input" type="tel" name="phone" id="phone" placeholder="Телефон"
          required value={phone} ref={phoneInputRef} onChange={handlePhoneChange} />
      </p>
      <p className="credit-request-form__paragraph">
        <label className="visually-hidden" htmlFor="phone">E-mail</label>
        <input className="credit-request-form__input credit-calculator__input" type="email" name="email" id="email" placeholder="E-mail"
          required value={email} ref={emailInputRef} onChange={handleEmailChange} />
      </p>
      <button className="credit-request-form__submit-button blue-button" type="submit" onClick={handleSubmitButtonClick}>Отправить</button>
    </form>
  );
};

export default CreditRequestForm;
