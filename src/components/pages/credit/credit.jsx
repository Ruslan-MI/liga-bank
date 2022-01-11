import React from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";

import Header from "../../header/header";
import CreditCalculator from "./credit-calculator/credit-calculator";
import Aside from "./aside/aside";
import BankBranches from "./bank-branches/bank-branches";
import Footer from "../../footer/footer";
import GratitudeModal from "../../gratitude-modal/gratitude-modal";
import LoginModal from "../../login-modal/login-modal";
import {
  StoreNameSpace,
} from "../../../const";
import {
  hideGratitudeModal,
  hideLoginModal,
} from "../../../store/actions/page";

const Credit = () => {
  const {
    isShowGratitudeModal,
    isShowLoginModal,
    isShowMobileMenu,
  } = useSelector((globalState) => ({
    ...globalState[StoreNameSpace.PAGE],
  }));

  const dispatch = useDispatch();

  const onGratitudeModalClose = () => {
    dispatch(hideGratitudeModal());
  };

  const onLoginModalClose = () => {
    dispatch(hideLoginModal());
  };

  return (
    <>
      <Header />
      <main className={`page__main ${isShowMobileMenu ? `page__main--mobile-menu-opened` : ``} main main--credit`}>
        <h1 className="visually-hidden">Рассчитайте кредит</h1>
        <Aside />
        <CreditCalculator />
        <BankBranches />
      </main>
      <Footer />
      {isShowGratitudeModal && <GratitudeModal onModalClose={onGratitudeModalClose} />}
      {isShowLoginModal && <LoginModal onModalClose={onLoginModalClose} />}
    </>
  );
};

export default Credit;
