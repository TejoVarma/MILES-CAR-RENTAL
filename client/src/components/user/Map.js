import React, { useState,useEffect } from 'react';
import { GoogleMap, DirectionsService, DirectionsRenderer, Marker,LoadScript } from '@react-google-maps/api';
import { getBookingDetails } from '../../utils/api-utils';

const mapContainerStyle = {
  width: '100%',
  height: '180px'
};

const center = {
  lat: 37.7749,
  lng: -122.4194
};

function Map() {
  const [response, setResponse] = useState(null);
  const [destination, setdestination] = useState([]);
  useEffect(() => {
    getBookingDetails()
    .then(res => {
      setdestination(res.result[res.result.length-1]);
    })
  }, []);

  const directionsCallback = (res) => {
    if (res !== null) {
      setResponse(res);
    }
  };

  return (
    <LoadScript  googleMapsApiKey ="">
         <GoogleMap 
      mapContainerStyle={mapContainerStyle}
      zoom={8}
      center={center}
    >
      <DirectionsService
        options={{
          origin:destination.origin,
          destination:destination.destination,
          travelMode: 'DRIVING'
        }}
        callback={directionsCallback}
      />

      {response !== null && (
        <DirectionsRenderer
          options={{
            directions: response
          }}
        />
      )}

      <Marker
        position={center}
      />
    </GoogleMap>

    </LoadScript>
   
  );
}

export default Map;
