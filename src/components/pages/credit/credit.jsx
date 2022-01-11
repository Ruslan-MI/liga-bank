import React from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";

import Header from "../../header/header";
import CreditCalculator from "./credit-calculator/credit-calculator";
import Aside from "./aside/aside";
import GratitudeModal from "../../gratitude-modal/gratitude-modal";
import {
  StoreNameSpace,
} from "../../../const";
import {
  hideGratitudeModal,
} from "../../../store/actions/page";

const Credit = () => {
  const {
    isShowGratitudeModal,
    isShowMobileMenu,
  } = useSelector((globalState) => ({
    ...globalState[StoreNameSpace.PAGE],
  }));

  const dispatch = useDispatch();

  const onGratitudeModalClose = () => {
    dispatch(hideGratitudeModal());
  };

  return (
    <>
      <Header />
      <main className={`page__main ${isShowMobileMenu ? `page__main--mobile-menu-opened` : ``} main main--credit`}>
        <h1 className="visually-hidden">Рассчитайте кредит</h1>
        <Aside />
        <CreditCalculator />
      </main>
      {isShowGratitudeModal && <GratitudeModal onModalClose={onGratitudeModalClose} />}
    </>
  );
};

export default Credit;
