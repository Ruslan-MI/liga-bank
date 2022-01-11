import React, {
  useState,
} from "react";

import {
  getBankBranches,
} from "../../../../mocks";

import Map from "./map/map";

const BankBranches = () => {
  const [
    state,
  ] = useState({
    bankBranches: getBankBranches(),
  });

  return (
    <section className="main__bank-branches bank-branches wrapper" id="bank-branches">
      <h2 className="bank-branches__heading">Отделения Лига Банка</h2>
      <Map pins={state.bankBranches.map((item) => item.coords)} />
    </section>
  );
};

export default BankBranches;
