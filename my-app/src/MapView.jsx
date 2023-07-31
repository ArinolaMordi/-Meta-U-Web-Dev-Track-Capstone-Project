import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
import { useEffect, useMemo, useState } from "react";

import "./MapView.css";

const MapView = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCIdAofDyeBU8kc9VcVfBPGa30voIG7klc",
  });
  const center = useMemo(() => ({ lat: 37.4406279, lng: -122.1630952 }), []);
  <script
    async
    defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCIdAofDyeBU8kc9VcVfBPGa30voIG7klc&callback=initMap"
  ></script>;
  const [uploads, setUploads] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch("http://localhost:3000/uploads");
        const data = await response.json();
        setUploads(data);
      } catch (error) {
        console.error("Error fetching uploads:", error);
      }
    };
    fetchLocation();
  }, []);
  const geoCode = async (address) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address
        )}&key=AIzaSyCIdAofDyeBU8kc9VcVfBPGa30voIG7klc`
      );
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry.location;
        return { lat, lng };
      }
      return null;
    } catch (error) {
      return null;
    }
  };
  useEffect(() => {
    const fetchMarkers = async () => {
      const marker = uploads.map(async (upload) => {
        const { lat, lng } = await geoCode(upload.Location);
        if (lat !== null && lng !== null) {
          return {
            position: { lat, lng },
            ProjectName: upload.ProjectName,
            Description: upload.Describe,
            Image: upload.Image,
          };
        }
    
        return null;
      });
      const correctMarkers = await Promise.all(marker);
      setMarkers(correctMarkers.filter((marker) => marker !== null));
    };
    

    fetchMarkers();
  }, [uploads]);

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
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={marker.position}
              onClick={() => setSelectedMarker(marker)}
            />
          ))}
          {selectedMarker && (
            <InfoWindow
              position={selectedMarker.position}
              onCloseClick={() => setSelectedMarker(null)} 
            >
              <div style={{ width: 300 }}>
                <h2>{selectedMarker.ProjectName}</h2>
                <p>{selectedMarker.Description}</p>
                <img
                  src={`http://localhost:3000/uploads/${selectedMarker.Image}`}
                  alt={selectedMarker.ProjectName}
                  style={{ maxWidth: "100%", maxHeight: "200px" }}
                />
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      )}
    </div>
  );
};

export default MapView;
