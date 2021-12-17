import React from "react";
import PropTypes from "prop-types";

const SliderPagination = ({
  className = ``,
  slidesData,
  currentSlideIndex,
}) => (
  <ul className={`slider-pagination ${className}`}>
    {slidesData.map((item, i) => (
      <li className={`slider-pagination__item ${currentSlideIndex === i ? `slider-pagination__item--current` : ``}`} key={item} />
    ))}
  </ul>
);

SliderPagination.propTypes = {
  className: PropTypes.string,
  slidesData: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentSlideIndex: PropTypes.number.isRequired,
};

export default SliderPagination;
