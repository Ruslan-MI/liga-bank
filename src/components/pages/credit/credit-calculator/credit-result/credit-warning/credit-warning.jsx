import React from "react";
import {
  useSelector,
} from "react-redux";
import PropTypes from "prop-types";

import {
  creditTypeCyrillicMap,
  StoreNameSpace,
} from "../../../../../../const";

const CreditWarning = ({
  value,
}) => {
  const {
    creditType,
  } = useSelector((globalState) => ({
    ...globalState[StoreNameSpace.CALCULATOR],
  }));

  return (
    <section className="credit-calculator__result-warning credit-warning">
      <h3 className="credit-calculator__result-heading">Наш банк не выдаёт {creditTypeCyrillicMap[creditType][2]} меньше {value} рублей.</h3>
      <p className="credit-calculator__result-paragraph">Попробуйте использовать другие параметры для расчёта.</p>
    </section>
  );
};

CreditWarning.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CreditWarning;
