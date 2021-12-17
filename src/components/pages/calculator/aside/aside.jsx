import React from "react";

import AdditionalInfo from "./additional-info/additional-info";
import Services from "./services/services";

const Aside = () => (
  <aside className="main__aside aside">
    <AdditionalInfo />
    <Services />
  </aside>
);

export default Aside;
