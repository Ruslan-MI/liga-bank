import React from "react";
import {
  Wrapper,
} from "@googlemaps/react-wrapper";

const withGoogleMapsWrapper = (Component) => {
  const WithGoogleMapsWrapperComponent = (props) => (
    <Wrapper apiKey={`AIzaSyBSyupZ0960ucVfQie8Zo9ohagG5URMRO0`}>
      <Component {...props} />
    </Wrapper>
  );

  return WithGoogleMapsWrapperComponent;
};

export default withGoogleMapsWrapper;
