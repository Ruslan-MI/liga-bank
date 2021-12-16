import React from "react";

import AdditionalInfo from "./additional-info/additional-info";
import Services from "./services/services";

const SLIDE_CHANGE_INTERVAL = 4000;

const Aside = () => (
  <aside className="main__aside aside">
    <AdditionalInfo slidesChangeInterval={SLIDE_CHANGE_INTERVAL} />
    <Services />
  </aside>
);

export default Aside;
