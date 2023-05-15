import React, { useState,useEffect } from 'react';
import { GoogleMap, DirectionsService, DirectionsRenderer, Marker,LoadScript } from '@react-google-maps/api';
import { getToken } from '../../utils/storage-utils';

const mapContainerStyle = {
  width: '100%',
  height: '120px'
};

const center = {
  lat: 37.7749,
  lng: -122.4194
};

function MapComponent({id}) {
  const [response, setResponse] = useState(null);
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch(`https://miles-car-rental-node-tejo.onrender.com/user/getbookingdetails`, {
      headers: {
        authorization: getToken(),
      },
    })
      .then((response) => response.json())
      .then((data) => setdata(data.result));
  }, []);


  const directionsCallback = (res) => {
    if (res !== null) {
      setResponse(res);
    }
  };

  return (
    <LoadScript  googleMapsApiKey = "">
         <GoogleMap 
      mapContainerStyle={mapContainerStyle}
      zoom={8}
      center={center}
    >
      <DirectionsService
        options={{
          origin:data.origin,
          destination:data.destination,
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

export default MapComponent;