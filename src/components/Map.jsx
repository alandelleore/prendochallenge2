import { GoogleMap, Marker } from "@react-google-maps/api";

const Map = ({ geoLoc, size, flag, zoom1, zoom2 }) => {
  return (
    <div className="mt-2">
      <GoogleMap
        mapContainerStyle={{ height: size }}
        center={geoLoc}
        zoom={flag ? zoom1 : zoom2}
        apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
      >
        <Marker position={flag ? geoLoc : null}></Marker>
      </GoogleMap>
    </div>
  );
};

export default Map;
