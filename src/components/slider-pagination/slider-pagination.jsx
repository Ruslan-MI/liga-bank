import React from "react";
import PropTypes from "prop-types";

const SliderPagination = ({
  slidesData,
  currentSlideIndex,
}) => (
  <ul className="slider-pagination">
    {slidesData.map((item, i) => (
      <li className={`slider-pagination__item ${currentSlideIndex === i ? `slider-pagination__item--current` : ``}`} key={item} />
    ))}
  </ul>
);

SliderPagination.propTypes = {
  slidesData: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentSlideIndex: PropTypes.number.isRequired,
};

export default SliderPagination;
