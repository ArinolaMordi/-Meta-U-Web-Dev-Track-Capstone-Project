import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "./MapView.css";

const MapView = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCIdAofDyeBU8kc9VcVfBPGa30voIG7klc",
  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
  <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCIdAofDyeBU8kc9VcVfBPGa30voIG7klc&callback=initMap">
  </script>
  return (
    <div className="maps">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="MapContainer"
          center={center}
          zoom={10}
        >
          <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
        </GoogleMap>
        
      )}
    </div>
  );
};

export default MapView;