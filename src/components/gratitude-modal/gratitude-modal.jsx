import React, {
  useRef,
  useEffect,
} from "react";
import PropTypes from "prop-types";

import withOverlay from "../../hocs/with-overlay/with-overlay";

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
    <section className="gratitude-modal">
      <h2 className="gratitude-modal__heading">Спасибо за обращение в наш банк.</h2>
      <p className="gratitude-modal__text">Наш менеджер скоро свяжется с вами по указанному номеру телефона</p>
      <button className="gratitude-modal__close-button close-button" type="button" ref={closeButtonRef}
        onKeyDown={handleCloseButtonTabKeydown} onClick={handleCloseButtonClick}>
        <span className="visually-hidden">Закрыть</span>
      </button>
    </section>
  );
};

GratitudeModal.propTypes = {
  onModalClose: PropTypes.func.isRequired,
};

export default withOverlay(GratitudeModal);
