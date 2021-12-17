import React, {
  useState,
  useEffect,
} from "react";
import PropTypes from "prop-types";

import Tabs from "./tabs/tabs";
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

  const onChange = (evt) => {
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
    <section className="aside__services services wrapper"
      onTouchStart={handleSectionTouchStart} onTouchEnd={handleSectionTouchEnd} >
      <h2 className="services__heading visually-hidden">Подробная информация</h2>
      <Tabs tabsData={state.slidesData.map(({
        name,
        title,
        id,
      }) => ({
        name,
        title,
        id,
      }))} currentTabIndex={state.currentSlideIndex} onChange={onChange} />
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
              <div className="services__content-wrapper">
                <h3 className={`services__content-heading services__content-heading--${name}`}>{heading}</h3>
              </div>
              <div className="services__content-wrapper services__content-wrapper--picture">
                <div className={`services__picture services__picture--${name}`} style={{
                  backgroundImage: `url(${picture})`,
                }} />
              </div>
              <div className="services__content-wrapper">
                <ul className={`services__description-list services__description-list--${name}`}>
                  {description.map((item) => (
                    <li className="services__description-item" key={item}>{item}</li>
                  ))}
                </ul>
                {link && <a className={`services__link services__link--${name}`} href={link.href}>{link.title}</a>}
                {offer && <p className="services__offer" dangerouslySetInnerHTML={offer} />}
              </div>
            </article>
          </li>
        ))}
      </ul>
      <SliderPagination className="services__pagination"
        slidesData={state.slidesData.map((item) => item.id)} currentSlideIndex={state.currentSlideIndex} />
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
