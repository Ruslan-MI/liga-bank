import React, {
  useRef,
  useState,
} from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import PropTypes from "prop-types";

import withOverlay from "../../hocs/with-overlay/with-overlay";
import {
  changeLogin,
  changePassword,
} from "../../store/actions/user";
import {
  checkInvalidity,
  getShakeAnimation,
} from "../../utils/common";
import {
  StoreNameSpace,
} from "../../const";

import logo from "./img/logo.svg";

const LoginModal = ({
  onModalClose,
}) => {
  const {
    login,
    password,
  } = useSelector((globalState) => ({
    ...globalState[StoreNameSpace.USER],
  }));

  const [
    state,
    setState,
  ] = useState({
    isShowPassword: false,
  });

  const loginInputRef = useRef();
  const passwordInputRef = useRef();
  const closeButtonRef = useRef();

  const dispatch = useDispatch();

  const handleFormChange = (evt) => {
    const {
      name,
      value,
    } = evt.target;

    switch (name) {
      case `login`:
        dispatch(changeLogin(value));

        break;
      case `password`:
        dispatch(changePassword(value));

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

    onModalClose();
  };

  const handleSubmitButtonClick = (evt) => {
    const isInvalid = checkInvalidity([
      loginInputRef.current,
      passwordInputRef.current,
    ]);

    if (isInvalid) {
      evt.preventDefault();

      getShakeAnimation(document.forms[`login-modal-form`]);
    }
  };

  const handleCloseButtonClick = () => {
    onModalClose();
  };

  const handleLoginInputShiftTabKeydown = (evt) => {
    if (evt.shiftKey && evt.key === `Tab`) {
      evt.preventDefault();

      closeButtonRef.current.focus();
    }
  };

  const handleCloseButtonTabKeydown = (evt) => {
    if (!evt.shiftKey && evt.key === `Tab`) {
      evt.preventDefault();

      loginInputRef.current.focus();
    }
  };

  const showPassword = () => {
    setState((prevState) => ({
      ...prevState,
      isShowPassword: true,
    }));
  };

  const hidePassword = () => {
    setState((prevState) => ({
      ...prevState,
      isShowPassword: false,
    }));
  };

  const handleShowPasswordButtonPointerDown = (evt) => {
    evt.preventDefault();

    showPassword();
  };

  const handleShowPasswordButtonPointerUp = () => {
    hidePassword();
  };

  const handleShowPasswordButtonPointerLeave = () => {
    hidePassword();
  };

  const handleShowPasswordButtonKeyDown = (evt) => {
    if (evt.key === `Enter` || evt.key === ` `) {
      evt.preventDefault();

      showPassword();
    }
  };

  const handleShowPasswordButtonKeyUp = () => {
    hidePassword();
  };

  const handleShowPasswordButtonBlur = () => {
    hidePassword();
  };

  return (
    <section className="login-modal">
      <div className="login-modal__wrapper">
        <h2 className="visually-hidden">Авторизация</h2>
        <img className="login-modal__logo-image" src={logo} alt="ЛИГА Банк. Интернет-банк" width="151" height="31" />
        <form className="login-modal__form" id="login-modal-form" action="https://echo.htmlacademy.ru" method="POST"
          onChange={handleFormChange} onSubmit={handleFormSubmit}>
          <p className="login-modal__paragraph">
            <label className="login-modal__label login-modal__label--login" htmlFor="login">Логин</label>
            <span className="login-modal__input-wrapper">
              <input className="login-modal__input login-modal__input--login input" type="text" id="login" name="login" required autoFocus
                defaultValue={login} ref={loginInputRef} onKeyDown={handleLoginInputShiftTabKeydown} />
            </span>
          </p>
          <p className="login-modal__paragraph">
            <label className="login-modal__label login-modal__label--password" htmlFor="password">Пароль</label>
            <span className="login-modal__input-wrapper">
              <input className="login-modal__input login-modal__input--password input" type={state.isShowPassword ? `text` : `password`} id="password" name="password"
                required defaultValue={password} ref={passwordInputRef} />
              <button className={`login-modal__show-password-button ${state.isShowPassword ? `login-modal__show-password-button--active` : ``}`} type="button"
                onPointerDown={handleShowPasswordButtonPointerDown} onPointerUp={handleShowPasswordButtonPointerUp}
                onPointerLeave={handleShowPasswordButtonPointerLeave}
                onKeyDown={handleShowPasswordButtonKeyDown} onKeyUp={handleShowPasswordButtonKeyUp}
                onBlur={handleShowPasswordButtonBlur}>
                <span className="visually-hidden">Показать пароль</span>
              </button>
            </span>
          </p>
          <a className="login-modal__link" href="#">Забыли пароль?</a>
          <button className="login-modal__submit-button blue-button" type="submit"
            onClick={handleSubmitButtonClick}>Войти</button>
        </form>
        <button className="login-modal__close-button close-button" type="button" ref={closeButtonRef}
          onKeyDown={handleCloseButtonTabKeydown} onClick={handleCloseButtonClick}>
          <span className="visually-hidden">Закрыть</span>
        </button>
      </div>
    </section>
  );
};

LoginModal.propTypes = {
  onModalClose: PropTypes.func.isRequired,
};

export default withOverlay(LoginModal);
