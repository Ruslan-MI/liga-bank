import React, {
  useState,
  useEffect,
} from "react";
import PropTypes from "prop-types";

import SliderPagination from "../../../../slider-pagination/slider-pagination";
import withSlidesChange from "../../../../../hocs/with-slides-change/with-slides-change";

import {
  FIRST_SLIDE_INDEX,
} from "../../../../../const";
import {
  getServicesData,
} from "../../../../../mocks";
import {
  getSlideIndex,
} from "../../../../../utils/utils";

const Services = ({
  slidesChange,
  onSlidesChange,
  onTouchStart,
  onTouchEnd,
}) => {
  const [
    state,
    setState,
  ] = useState({
    slidesData: getServicesData(),
    currentSlideIndex: FIRST_SLIDE_INDEX,
  });

  const handleSectionTouchStart = (evt) => {
    onTouchStart(evt);
  };

  const handleSectionTouchEnd = (evt) => {
    onTouchEnd(evt);
  };

  const handleCurrentTabChange = (evt) => {
    setState((prevState) => ({
      ...prevState,
      currentSlideIndex: prevState.slidesData.findIndex((item) => item.name === evt.target.value),
    }));
  };

  useEffect(() => {
    if (slidesChange) {
      setState((prevState) => ({
        ...prevState,
        currentSlideIndex: getSlideIndex(prevState, slidesChange),
      }));

      onSlidesChange();
    }
  }, [
    slidesChange,
  ]);

  return (
    <section className="aside__services services"
      onTouchStart={handleSectionTouchStart} onTouchEnd={handleSectionTouchEnd} >
      <h2 className="services__heading visually-hidden">Подробная информация</h2>
      <fieldset className="services__nav-fieldset" onChange={handleCurrentTabChange}>
        {state.slidesData.map(({
          name,
          title,
          id,
        }, i) => (
          <p className="services__nav-paragraph" key={id}>
            <input className="services__nav-input visually-hidden" type="radio" name="tab"
              value={name} id={id} defaultChecked={i === state.currentSlideIndex} />
            <label className={`services__nav-label services__nav-label--${name}`} htmlFor={id}>{title}</label>
          </p>))}
      </fieldset>
      <ul className="services__slide-list">
        {state.slidesData.map(({
          name,
          heading,
          description,
          link,
          offer,
          picture,
          id,
        }, i) => (
          <li className={`services__slide-item ${i === state.currentSlideIndex ? `services__slide-item--current` : ``}`} key={id}>
            <article className="services__content">
              <div className="services__content-wrapper wrapper">
                <h3 className={`services__content-heading services__content-heading--${name}`}>{heading}</h3>
              </div>
              <div className="services__content-wrapper services__content-wrapper--picture wrapper">
                <div className={`services__picture services__picture--${name}`} style={{
                  backgroundImage: `url(${picture})`,
                }} />
              </div>
              <div className="services__content-wrapper wrapper">
                <ul className={`services__description-list services__description-list--${name}`}>
                  {description.map((item) => (
                    <li className="services__description-item" key={item}>{item}</li>
                  ))}
                </ul>
                {link && <a className={`services__link services__link--${name}`} href={link.href}>{link.title}</a>}
                {offer && <p className="services__offer">{offer.text}
                  <a className="services__offer-link" href={offer.link.href}>{offer.link.title}</a>
                </p>}
              </div>
            </article>
          </li>
        ))}
      </ul>
      <SliderPagination slidesData={state.slidesData.map((item) => item.id)} currentSlideIndex={state.currentSlideIndex} />
    </section>
  );
};

Services.propTypes = {
  slidesChange: PropTypes.number.isRequired,
  onSlidesChange: PropTypes.func.isRequired,
  onTouchStart: PropTypes.func.isRequired,
  onTouchEnd: PropTypes.func.isRequired,
};

export default withSlidesChange(Services);
