import React from "react";

const FooterContacts = () => (
  <section className="footer__contacts footer-contacts">
    <h2 className="visually-hidden">Контакты</h2>
    <ul className="footer-contacts__list">
      <li className="footer-contacts__item footer-contacts__item--short-number">
        <p className="footer-contacts__paragraph">
          <a className="footer-contacts__link" href="tel:0904">*0904</a>
        </p>
        <p className="footer-contacts__paragraph">
          Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2
        </p>
      </li>
      <li className="footer-contacts__item footer-contacts__item--phone-number">
        <p className="footer-contacts__paragraph">
          <a className="footer-contacts__link" href="tel:+78001112233">8 800 111 22 33</a>
        </p>
        <p className="footer-contacts__paragraph">
          Бесплатный для всех городов России
        </p>
      </li>
    </ul>
  </section>
);

export default FooterContacts;
