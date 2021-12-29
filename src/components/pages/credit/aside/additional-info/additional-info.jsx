import React, {
  useEffect,
  useState,
} from "react";
import PropTypes from "prop-types";

import SliderPagination from "../../../../slider-pagination/slider-pagination";
import withSlidesChange from "../../../../../hocs/with-slides-change/with-slides-change";

import {
  getSlideIndex,
} from "../../../../../utils/common";
import {
  FIRST_SLIDE_INDEX,
} from "../../../../../const";
import {
  getAdditionalInfoData,
} from "../../../../../mocks";

const SLIDES_CHANGE_INTERVAL = 4000;

const AdditionalInfo = ({
  slidesChange,
  onSlidesChange,
  onTouchStart,
  onTouchEnd,
}) => {
  const [
    state,
    setState,
  ] = useState({
    slidesData: getAdditionalInfoData(),
    currentSlideIndex: FIRST_SLIDE_INDEX,
  });

  const handleSectionTouchStart = (evt) => {
    onTouchStart(evt);
  };

  const handleSectionTouchEnd = (evt) => {
    onTouchEnd(evt);
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
    <section className="aside__additional-info additional-info"
      onTouchStart={handleSectionTouchStart} onTouchEnd={handleSectionTouchEnd}>
      <h2 className="visually-hidden">Дополнительная информация</h2>
      <ul className="additional-info__slide-list">
        {state.slidesData.map(({
          name,
          slogan,
          link,
          images,
          backgroundImage,
          id,
        }, i,
        ) => (
          <li className={`additional-info__slide-item ${state.currentSlideIndex === i ? `additional-info__slide-item--current` : ``}`} key={id}>
            <article className={`additional-info__content additional-info__content--${name} wrapper`} style={backgroundImage && {
              backgroundImage: `url(${backgroundImage})`,
            }}>
              <div className="additional-info__content-wrapper">
                <h3 className="additional-info__heading">
                  <span className="visually-hidden">ЛИГА Банк</span>
                  <svg className={`additional-info__logo additional-info__logo--${name}`} role="img" xmlns="http://www.w3.org/2000/svg"
                    width="182" height="29" viewBox="0 0 182 29">
                    <path d="M24.38.984V28h-5.584V5.493h-7.2l-.445 9.537c-.185 3.216-.593 5.752-1.224 7.608-.631 1.843-1.553 3.197-2.765 4.063-1.212.854-2.87 1.287-4.973 1.299H.742v-4.472l.928-.092c1.398-.186 2.393-.99 2.987-2.413.606-1.434.99-3.983 1.15-7.644L6.272.984h18.11Zm16.607 6.94h5.363V28h-5.363V15.605L34.27 28h-5.38V7.924h5.38V20.3l6.717-12.376Zm23.138 4.342h-8.313V28H50.45V7.924h13.675v4.342ZM78.004 28c-.248-.482-.427-1.082-.538-1.8-1.299 1.448-2.987 2.171-5.066 2.171-1.966 0-3.6-.569-4.898-1.707-1.286-1.138-1.93-2.573-1.93-4.305 0-2.127.786-3.76 2.357-4.898 1.583-1.138 3.865-1.713 6.846-1.726h2.468v-1.15c0-.928-.241-1.67-.724-2.227-.47-.556-1.218-.835-2.245-.835-.903 0-1.614.217-2.133.65-.508.433-.761 1.027-.761 1.781h-5.362c0-1.163.358-2.239 1.076-3.228.717-.99 1.732-1.763 3.043-2.32 1.31-.569 2.783-.853 4.416-.853 2.474 0 4.434.624 5.882 1.874 1.46 1.237 2.189 2.98 2.189 5.232v8.702c.012 1.905.278 3.346.798 4.324V28h-5.418Zm-4.435-3.73c.792 0 1.522-.173 2.19-.519.668-.359 1.162-.835 1.484-1.429v-3.45H75.24c-2.684 0-4.113.927-4.286 2.782l-.018.316c0 .668.235 1.218.705 1.651.47.433 1.113.65 1.93.65Zm40.617-18.777h-12.061v5.233h4.342c3.179 0 5.696.773 7.552 2.319 1.867 1.534 2.801 3.606 2.801 6.216 0 2.622-.927 4.731-2.783 6.327-1.843 1.583-4.298 2.387-7.366 2.412H96.503V.984h17.683v4.51Zm-12.061 9.723v8.312h4.435c1.422 0 2.554-.39 3.395-1.169.854-.779 1.28-1.824 1.28-3.135 0-1.225-.408-2.19-1.224-2.895-.804-.717-1.911-1.088-3.322-1.113h-4.564ZM131.664 28c-.247-.482-.427-1.082-.538-1.8-1.299 1.448-2.987 2.171-5.065 2.171-1.967 0-3.6-.569-4.899-1.707-1.286-1.138-1.93-2.573-1.93-4.305 0-2.127.786-3.76 2.357-4.898 1.583-1.138 3.865-1.713 6.847-1.726h2.467v-1.15c0-.928-.241-1.67-.723-2.227-.47-.556-1.219-.835-2.245-.835-.903 0-1.615.217-2.134.65-.507.433-.761 1.027-.761 1.781h-5.362c0-1.163.358-2.239 1.076-3.228.717-.99 1.732-1.763 3.043-2.32 1.311-.569 2.783-.853 4.416-.853 2.474 0 4.434.624 5.882 1.874 1.459 1.237 2.189 2.98 2.189 5.232v8.702c.013 1.905.278 3.346.798 4.324V28h-5.418Zm-4.435-3.73c.792 0 1.522-.173 2.19-.519.668-.359 1.163-.835 1.484-1.429v-3.45h-2.004c-2.684 0-4.113.927-4.286 2.782l-.018.316c0 .668.235 1.218.705 1.651.47.433 1.113.65 1.929.65ZM157.808 28h-5.381v-7.719h-6.661V28h-5.363V7.924h5.363v8.053h6.661V7.924h5.381V28Zm12.023-7.403h-2.152V28h-5.363V7.924h5.363v7.552h1.911l4.379-7.552h6.772l-6.568 9.556L181.354 28h-7.144l-4.379-7.403Z" />
                  </svg>
                </h3>
                <p className={`additional-info__slogan additional-info__slogan--${name}`}>{slogan}</p>
                {link && <a className={`additional-info__link additional-info__link--${name} blue-button`} href={link.href}>{link.title}</a>}
                {images &&
                  <div className="additional-info__image-wrapper">
                    {images.map(({
                      title,
                      src,
                      description,
                      id: imageID,
                    }) =>
                      <img className={`additional-info__image additional-info__image--${title}`}
                        src={src} alt={description} width="211" height="133" key={imageID} />)}
                  </div>}
              </div>
            </article>
          </li>
        ))}
      </ul>
      <SliderPagination className="additional-info__pagination"
        slidesData={state.slidesData.map((item) => item.id)} currentSlideIndex={state.currentSlideIndex} />
    </section>
  );
};

AdditionalInfo.propTypes = {
  slidesChange: PropTypes.number.isRequired,
  onSlidesChange: PropTypes.func.isRequired,
  onTouchStart: PropTypes.func.isRequired,
  onTouchEnd: PropTypes.func.isRequired,
};

export default withSlidesChange(AdditionalInfo, SLIDES_CHANGE_INTERVAL);
