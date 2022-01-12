import React from "react";
import {
  useDispatch,
} from "react-redux";
import {
  useSelector,
} from "react-redux";

import MainLogo from "../main-logo/main-logo";
import {
  StoreNameSpace,
} from "../../const";
import {
  hideMobileMenu,
  showLoginModal,
  showMobileMenu,
} from "../../store/actions/page";

const Header = () => {
  const {
    isShowMobileMenu,
  } = useSelector((globalState) => ({
    ...globalState[StoreNameSpace.PAGE],
  }));

  const dispatch = useDispatch();

  const handleOpenMenuButtonClick = () => {
    dispatch(showMobileMenu());
  };

  const handleCloseMenuButtonClick = () => {
    dispatch(hideMobileMenu());
  };

  const handleLoginLinkClick = (evt) => {
    evt.preventDefault();

    dispatch(showLoginModal());
  };

  return (
    <header className={`page__header header ${isShowMobileMenu ? `header--menu-opened` : ``}`}>
      <nav className={`header__nav ${isShowMobileMenu ? `header__nav--menu-opened` : ``} wrapper`}>
        <div className="header__nav-wrapper header__nav-wrapper--first">
          <a className="header__logo-link" title="Вы находитесь на главной странице">
            <MainLogo className="header__logo-image" />
          </a>
          <button className="header__nav-button header__nav-button--open-menu" type="button"
            disabled={isShowMobileMenu} onClick={handleOpenMenuButtonClick}>
            <span className="visually-hidden">Открыть меню</span>
          </button>
          <button className="header__nav-button header__nav-button--close-menu" type="button"
            onClick={handleCloseMenuButtonClick}>
            <span className="visually-hidden">Закрыть меню</span>
          </button>
        </div>
        <div className="header__nav-wrapper header__nav-wrapper--second">
          <ul className="header__nav-list header__nav-list--main-nav">
            <li className="header__nav-item header__nav-item--main-nav">
              <a className="header__nav-link" href="#">Услуги</a>
            </li>
            <li className="header__nav-item header__nav-item--main-nav">
              <a className="header__nav-link" href="#">Рассчитать кредит</a>
            </li>
            <li className="header__nav-item header__nav-item--main-nav">
              <a className="header__nav-link" href="#">Конвертер валют</a>
            </li>
            <li className="header__nav-item header__nav-item--main-nav">
              <a className="header__nav-link" href="#">Контакты</a>
            </li>
          </ul>
          <ul className="header__nav-list header__nav-list--user-nav">
            <li className="header__nav-item">
              <a className="header__nav-link header__nav-link--log-in" href="#login"
                onClick={handleLoginLinkClick}>Войти в Интернет-банк</a>
            </li>
          </ul>
        </div>
      </nav>
    </header >
  );
};

export default Header;
