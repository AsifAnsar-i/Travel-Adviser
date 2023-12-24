import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Map from "./components/Map";
import { getPlacesData } from "./api";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates,setCoordinates] = useState({})
  const [bounds,setBounds] = useState('')
  useEffect(()=>{
       navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
        setCoordinates({lat:latitude,lng:longitude})
       })
  },[])
  useEffect(() => {
    getPlacesData(bounds.sw,bounds.ne).then((data) => {
      setPlaces(data);
    });
  }, [coordinates,bounds]);
  console.warn(places)
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row">
        <div className="p-9 md:p-8 border-b-2 md:border-r-2 md:min-h-screen overflow-y-auto">
        {places && places.map((place)=> <List key={place.location_id} place={place.photo && place.photo.images.large.url} phone={place.phone} address={place.address} name={place.name} price={place.price} />)}
        </div>
        <div className="p-9 md:p-8  ">
          <Map 
           setCoordinates={setCoordinates}
           setBounds={setBounds}
           coordinates={coordinates}
           />
        </div>
      </div>
    </>
  );
};

export default App;
