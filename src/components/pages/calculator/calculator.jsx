import React from "react";

import Header from "../../header/header";
import Aside from "./aside/aside";

const Calculator = () => (
  <div className="page page--calculator">
    <Header />
    <main className="page__main main main--calculator">
      <Aside />
    </main>
  </div>
);

export default Calculator;
