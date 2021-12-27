import React from "react";

import Header from "../../header/header";
import CreditCalculator from "./credit-calculator/credit-calculator";
import Aside from "./aside/aside";

const Credit = () => (
  <div className="page page--credit">
    <Header />
    <main className="page__main main main--credit">
      <h1 className="visually-hidden">Рассчитайте кредит</h1>
      <Aside />
      <CreditCalculator />
    </main>
  </div>
);

export default Credit;
