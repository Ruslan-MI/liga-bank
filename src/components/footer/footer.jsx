import React from "react";
import {
  useSelector,
} from "react-redux";

import MainLogo from "../main-logo/main-logo";
import FooterContacts from "./footer-contacts/footer-contacts";
import FooterInfo from "./footer-info/footer-info";
import FooterNavigation from "./footer-navigation/footer-navigation";
import FooterSocial from "./footer-social/footer-social";
import {
  StoreNameSpace,
} from "../../const";

const Footer = () => {
  const {
    isShowMobileMenu,
  } = useSelector((globalState) => ({
    ...globalState[StoreNameSpace.PAGE],
  }));

  return (
    <footer className={`page__footer ${isShowMobileMenu ? `page__footer--mobile-menu-opened` : ``} footer`}>
      <div className="footer__wrapper wrapper">
        <div className="footer__content-wrapper footer__content-wrapper--first">
          <p className="footer__logo">
            <a className="footer__logo-link" href="#" title="Перейти на главную">
              <MainLogo className="footer__logo-image" />
            </a>
          </p>
          <FooterInfo />
          <FooterNavigation />
        </div>
        <div className="footer__content-wrapper footer__content-wrapper--second">
          <FooterContacts />
          <FooterSocial />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
