import React, {
  useEffect,
} from "react";
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
import {
  toast,
} from "../../../utils/toast/toast";

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

  useEffect(() => {
    document.querySelectorAll(`a[href="#"]`).forEach((item) => {
      item.onclick = (evt) => {
        evt.preventDefault();

        toast(item.title || item.textContent);
      };
    });

    return () => {
      document.querySelectorAll(`a[href="#"]`).forEach((item) => {
        item.onclick = null;
      });
    };
  }, [
    isShowLoginModal,
  ]);

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
