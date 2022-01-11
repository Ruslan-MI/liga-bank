import React from "react";

const FooterNavigation = () => (
  <section className="footer__navigation footer-navigation">
    <h2 className="visually-hidden">Навигация</h2>
    <ul className="footer-navigation__list">
      <li className="footer-navigation__item">
        <a className="footer-navigation__link" href="#">Услуги</a>
      </li>
      <li className="footer-navigation__item">
        <a className="footer-navigation__link" href="#">Рассчитать кредит</a>
      </li>
      <li className="footer-navigation__item">
        <a className="footer-navigation__link" href="#">Контакты</a>
      </li>
      <li className="footer-navigation__item">
        <a className="footer-navigation__link" href="#">Задать вопрос</a>
      </li>
    </ul>
  </section>
);

export default FooterNavigation;
