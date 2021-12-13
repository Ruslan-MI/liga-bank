import React, {
  useState,
  useEffect,
} from "react";
import PropTypes from "prop-types";

import {
  ShiftDirection,
} from "../const";

const MIN_DOCUMENT_PART_FOR_SWIPE = 0.2;

const withSlidesChange = (Component) => {
  const WithSlidesChangeComponent = ({
    slidesChangeInterval = 0,
    ...props
  }) => {
    const [
      state,
      setState,
    ] = useState({
      timeOut: null,
      touchStartX: null,
      slidesChange: ShiftDirection.NONE,
    });

    const onSlidesChange = () => {
      setState((prevState) => ({
        ...prevState,
        slidesChange: ShiftDirection.NONE,
      }));
    };

    const onTouchStart = (evt) => {
      clearTimeout(state.timeOut);

      setState((prevState) => ({
        ...prevState,
        touchStartX: evt.changedTouches[0].clientX,
      }));
    };

    const onTouchEnd = (evt) => {
      const shift = state.touchStartX - evt.changedTouches[0].clientX;

      const isSwipe = Math.abs(shift) >= (document.body.offsetWidth * MIN_DOCUMENT_PART_FOR_SWIPE);

      if (isSwipe) {
        setState((prevState) => ({
          ...prevState,
          slidesChange: Math.sign(shift),
          touchStartX: null,
        }));

        return;
      }

      setState((prevState) => ({
        ...prevState,
        touchStartX: null,
      }));
    };

    useEffect(() => {
      if (slidesChangeInterval && !state.slidesChange && !state.touchStartX) {
        const timeOut = setTimeout(() =>
          setState((prevState) => ({
            ...prevState,
            slidesChange: ShiftDirection.LEFT,
          })), slidesChangeInterval);

        setState((prevState) => ({
          ...prevState,
          timeOut,
        }));

        return () => clearTimeout(state.timeOut);
      }

      return () => { };
    }, [
      state.slidesChange,
      state.touchStartX,
    ]);

    return <Component {...props} slidesChange={state.slidesChange}
      onSlidesChange={onSlidesChange} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} />;
  };

  WithSlidesChangeComponent.propTypes = {
    slidesChangeInterval: PropTypes.number,
  };

  return WithSlidesChangeComponent;
};

export default withSlidesChange;
