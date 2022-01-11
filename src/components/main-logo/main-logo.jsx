import React from "react";
import PropTypes from "prop-types";

import mobileLogo from "./img/main-logo-mobile.svg";
import tabletLogo from "./img/main-logo-tablet.svg";
import desktopLogo from "./img/main-logo-desktop.svg";

const MainLogo = ({
  className = ``,
}) => (
  <picture>
    <source media="(min-width: 1024px)" srcSet={desktopLogo} />
    <source media="(min-width: 768px)" srcSet={tabletLogo} />
    <img className={`main-logo ${className}`} src={mobileLogo} alt="ЛИГА Банк" width="116" height="19" />
  </picture>
);

MainLogo.propTypes = {
  className: PropTypes.string,
};

export default MainLogo;
