import React, {
  useRef,
  useEffect,
} from "react";
import PropTypes from "prop-types";

import withOverlay from "../../../../../hocs/with-overlay/with-overlay";

const GratitudeModal = ({
  onModalClose,
}) => {
  const closeButtonRef = useRef();

  const handleCloseButtonClick = () => {
    onModalClose();
  };

  const handleCloseButtonTabKeydown = (evt) => {
    if (evt.key === `Tab`) {
      evt.preventDefault();

      closeButtonRef.current.focus();
    }
  };

  useEffect(() => {
    closeButtonRef.current.focus();
  });

  return (
    <section className="page__modal gratitude-modal wrapper">
      <div className="gratitude-modal__wrapper message">
        <h2 className="gratitude-modal__heading message__heading">Спасибо за обращение в наш банк.</h2>
        <p className="gratitude-modal__text message__text">Наш менеджер скоро свяжется с вами по указанному номеру телефона</p>
        <button className="gratitude-modal__close-button" type="button" ref={closeButtonRef}
          onKeyDown={handleCloseButtonTabKeydown} onClick={handleCloseButtonClick}>
          <span className="visually-hidden">Закрыть</span>
        </button>
      </div>
    </section>
  );
};

GratitudeModal.propTypes = {
  onModalClose: PropTypes.func.isRequired,
};

export default withOverlay(GratitudeModal);
