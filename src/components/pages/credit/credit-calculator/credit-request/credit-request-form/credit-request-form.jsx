import React, {
  useRef,
  useEffect,
  useState,
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
  const [
    state,
    setState,
  ] = useState({
    isPhoneChanged: false,
  });

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

  const handleFormChange = (evt) => {
    const {
      name,
      value,
    } = evt.target;

    switch (name) {
      case `name`:
        dispatch(changeName(value));

        break;
      case `email`:
        dispatch(changeEmail(value));

        break;
      default:
        return;
    }

    localStorage.setItem(name, value);

    checkInvalidity([
      evt.target,
    ]);
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    dispatch(increaseRequestNumber());
    dispatch(hideRequestForm());
    dispatch(changeCreditType(null));
    dispatch(showGratitudeModal());
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

    setState((prevState) => ({
      ...prevState,
      isPhoneChanged: true,
    }));
  };

  const handleSubmitButtonClick = (evt) => {
    const isInvalid = checkInvalidity([
      nameInputRef.current,
      phoneInputRef.current,
      emailInputRef.current,
    ]);

    if (isInvalid) {
      evt.preventDefault();
    }
  };

  useEffect(() => {
    if (state.isPhoneChanged) {
      checkInvalidity([
        phoneInputRef.current,
      ]);
    }
  }, [
    phone,
  ]);

  return (
    <form className="credit-request__form credit-request-form" id="credit-request-form" action="https://echo.htmlacademy.ru"
      method="POST" onChange={handleFormChange} onSubmit={handleFormSubmit}>
      <p className="credit-request-form__paragraph">
        <label className="visually-hidden" htmlFor="name">Фамилия, имя, отчество</label>
        <input className="credit-request-form__input input" type="text" name="name" id="name" placeholder="ФИО"
          pattern="[A-Za-zА-Яа-яЁё][-─–—A-Za-zА-Яа-яЁё\s]{0,}" required autoFocus defaultValue={userName} ref={nameInputRef} />
      </p>
      <p className="credit-request-form__paragraph credit-request-form__paragraph--phone">
        <label className="visually-hidden" htmlFor="phone">Телефон</label>
        <input className="credit-request-form__input input" type="tel" name="phone" id="phone" placeholder="Телефон"
          required value={phone} ref={phoneInputRef} onChange={handlePhoneChange} />
      </p>
      <p className="credit-request-form__paragraph credit-request-form__paragraph--email">
        <label className="visually-hidden" htmlFor="phone">E-mail</label>
        <input className="credit-request-form__input input" type="email" name="email" id="email" placeholder="E-mail"
          required defaultValue={email} ref={emailInputRef} />
      </p>
      <button className="credit-request-form__submit-button blue-button" type="submit" onClick={handleSubmitButtonClick}>Отправить</button>
    </form>
  );
};

export default CreditRequestForm;
