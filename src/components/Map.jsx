import { GoogleMap, Marker } from "@react-google-maps/api";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Map = () => {
  const { data, completedAddress } = useContext(GlobalContext);
  const { center } = data;

  return (
    <div className="mt-2">
      <GoogleMap
        mapContainerStyle={{ height: "460px" }}
        center={center}
        zoom={completedAddress ? 13 : 5}
        apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
      >
        <Marker position={completedAddress ? center : null}></Marker>
      </GoogleMap>
    </div>
  );
};

export default Map;
