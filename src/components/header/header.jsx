import React from "react";

import mobileLogo from "./img/main-logo-mobile.svg";
import tabletLogo from "./img/main-logo-tablet.svg";
import desktopLogo from "./img/main-logo-desktop.svg";

const Header = () => (
  <header className="page__header header">
    <nav className="header__nav header__nav--menu-closed wrapper">
      <div className="header__nav-wrapper header__nav-wrapper--first">
        <a className="header__logo-link" href="#" title="Перейти на главную">
          <picture>
            <source media="(min-width: 1024px)" srcSet={desktopLogo} />
            <source media="(min-width: 768px)" srcSet={tabletLogo} />
            <img className="header__logo-image" src={mobileLogo} alt="ЛИГА Банк" width="116" height="19" />
          </picture>
        </a>
        <button className="header__nav-button header__nav-button--open-menu" type="button">
          <span className="visually-hidden">Открыть меню</span>
        </button>
        <button className="header__nav-button header__nav-button--close-menu" type="button">
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
            <a className="header__nav-link header__nav-link--log-in" href="#">Войти в Интернет-банк</a>
          </li>
        </ul>
      </div>
    </nav>
  </header >
);

export default Header;
