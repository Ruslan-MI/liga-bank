import React, {
  useEffect,
  useRef,
} from "react";
import PropTypes from "prop-types";

import withGoogleMapsWrapper from "../../../../../hocs/with-google-maps-wrapper/with-google-maps-wrapper";

import pin from "./img/pin.svg";

const ZOOM_INCREMENT_STEP = 1;

const zoom = 5;
const currentLocationZoom = 10;

const center = {
  lat: 56.86054780447693,
  lng: 60.63827772388713,
};

const Map = ({
  pins = [],
}) => {
  const mapRef = useRef();
  const controlsRef = useRef();
  const zoomInButtonRef = useRef();
  const zoomOutButtonRef = useRef();
  const currentPositionButtonRef = useRef();

  const initControls = (map) => {
    zoomInButtonRef.current.onclick = () => {
      map.setZoom(map.getZoom() + ZOOM_INCREMENT_STEP);
    };

    zoomOutButtonRef.current.onclick = () => {
      map.setZoom(map.getZoom() - ZOOM_INCREMENT_STEP);
    };

    currentPositionButtonRef.current.onclick = () => {
      if (window.navigator) {
        window.navigator.geolocation.getCurrentPosition((position) => {
          const {
            latitude,
            longitude,
          } = position.coords;

          map.setCenter(new window.google.maps.LatLng(latitude, longitude));
          map.setZoom(currentLocationZoom);
        });
      }
    };

    map.controls[window.google.maps.ControlPosition.RIGHT_CENTER].push(controlsRef.current);
  };

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom,
      disableDefaultUI: true,
    });

    pins.forEach((item) => {
      window.googleMapMarker = new window.google.maps.Marker({
        position: item,
        icon: pin,
        map,
      });
    });

    initControls(map);
  }, []);

  return (
    <div className="bank-branches__map map" id="map" ref={mapRef}>
      <div className="map__controls" ref={controlsRef}>
        <div className="map__zoom-controls">
          <button className="map__zoom-button map__zoom-button--in" ref={zoomInButtonRef}>
            <span className="visually-hidden">Приблизить</span>
          </button>
          <button className="map__zoom-button map__zoom-button--out" ref={zoomOutButtonRef}>
            <span className="visually-hidden">Отдалить</span>
          </button>
        </div>
        <button className="map__current-position-button" ref={currentPositionButtonRef}>
          <span className="visually-hidden">Переместиться к текущему местоположению</span>
        </button>
      </div>
    </div>
  );
};

Map.propTypes = {
  pins: PropTypes.arrayOf(PropTypes.exact({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  })),
};

export default withGoogleMapsWrapper(Map);
