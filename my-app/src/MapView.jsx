import "./MapView.css";
import {GoogleMap,InfoWindow, Marker,useLoadScript,} from "@react-google-maps/api";
import React, { useEffect, useMemo, useRef, useState } from "react";

const overlapRadius = 10;
const MapView = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCIdAofDyeBU8kc9VcVfBPGa30voIG7klc",
  });


  const mapRef = useRef();
  const center = useMemo(() => ({ lat: 37.4406279, lng: -122.1638752 }), []);
  const [uploads, setUploads] = useState([]);
  const [clusters, setClusters] = useState([]);
  const [selectedCluster, setSelectedCluster] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(13);


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


  function markersOverLap(marker1, marker2) {
    console.log(marker1);
    console.log(marker2);
    var p1 = mapRef.current.getProjection().fromLatLngToPoint(marker1.position);
    var p2 = mapRef.current.getProjection().fromLatLngToPoint(marker2.position);
    var pixelSize = Math.pow(2, -mapRef.current.getZoom());

    var d =
      Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y)) /
      pixelSize;
    return d < overlapRadius;
  }

  useEffect(() => {
    const fetchMarkers = async () => {
      const markerPromises = uploads.map(async (upload) => {
        const position = await geoCode(upload.Location);
        return position ? { position, ...upload } : null;
      });

      const markers = (await Promise.all(markerPromises)).filter(Boolean);

      const clusters = [];
      markers.forEach((marker) => {
        let addedToCluster = false;
        clusters.forEach((cluster) => {
          if (markersOverLap(marker, cluster)) {
            cluster.markers.push(marker);
            addedToCluster = true;
          }
        });
        if (!addedToCluster) {
          clusters.push({
            position: marker.position,
            markers: [marker],
          });
        }
      });
      setClusters(clusters);
    };

    fetchMarkers();
  }, [uploads, overlapRadius, zoomLevel]);

// https://stackoverflow.com/questions/45914412/get-distance-between-google-maps-markers-in-pixels-or-visual-distance
  return (
    <div className="maps">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          onLoad={(map) => {
            mapRef.current = map;
          }}
          onUnmount={() => {
            mapRef.current = null;
          }}
          mapContainerClassName="MapContainer"
          center={center}
          zoom={13}
          onZoomChanged={() => {
            if (mapRef.current) {
              const newZoom = mapRef.current.getZoom();
              setZoomLevel(newZoom);
            }
          }}
        >
          {clusters.map((cluster, index) => (
            <Marker
              key={index}
              position={cluster.position}
              label={String(cluster.markers.length)}
              onClick={() => setSelectedCluster(cluster)}
            />
          ))}
          {selectedCluster && (
            <InfoWindow
              position={selectedCluster.position}
              onCloseClick={() => setSelectedCluster(null)}
            >
              <div style={{ width: 300 }}>
                {selectedCluster.markers.map((marker) => (
                  <div key={marker.ProjectName}>
                    <h2>{marker.ProjectName}</h2>
                    <h3>{marker.Describe}</h3>
                    <img
                      src={`http://localhost:3000/uploads/${marker.Image}`}
                      alt={marker.ProjectName}
                      style={{ maxWidth: "100%", maxHeight: "200px" }}
                    />
                  </div>
                ))}

              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      )}
    </div>
  );
};
export default MapView;
