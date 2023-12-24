import React from "react";
import GoogleMapReact from "google-map-react";
const Map = ({setCoordinates,setBounds,coordinates}) => {
  
  return (
    <div className=" h-[300px] w-[300px] md:h-[600px] md:w-[1000px] md:fixed">
      <GoogleMapReact
        className="h-full w-full rounded-lg "
        bootstrapURLKeys={{ key: "AIzaSyC8XA4FuJxI-lYeYlo3HPHw6Oq0P6OtcGE",
        language: 'en', }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        yesIWantToUseGoogleMapApiInternals
        options={''}
        onChange={(e)=>{
               setCoordinates({lat:e.center.lat,lng:e.center.lng})
               setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw})
        }}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;

