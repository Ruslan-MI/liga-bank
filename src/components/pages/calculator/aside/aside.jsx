import React from "react";

import AdditionalInfo from "./additional-info/additional-info";

const SLIDE_CHANGE_INTERVAL = 4000;

const Aside = () => (
  <aside className="main__aside aside">
    <AdditionalInfo slidesChangeInterval={SLIDE_CHANGE_INTERVAL} />
  </aside>
);

export default Aside;
