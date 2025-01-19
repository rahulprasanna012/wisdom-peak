import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div className="bg-red-700 text-white  w-16 px-2 py-1 rounded shadow-md">{text}</div>
);

export default function SimpleMap({lat,lng}) {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
      
        <div className="h-40 w-full rounded-lg overflow-hidden border ">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyA6OIY3aprbVI11loLRKmIiV11FXeGAMvU" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={lat}
              lng={lng}
              text="My loaction">

              </AnyReactComponent>
          </GoogleMapReact>
        </div>
     
      

  );
}
