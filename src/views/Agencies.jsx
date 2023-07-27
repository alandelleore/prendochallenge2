import { GoogleMap, Marker } from "@react-google-maps/api";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";
import carIcon from "../assets/car-icon.png";
import "../App.css";
import BtnIcon from "../components/BtnIcon";

import Icons from "../assets/icons/Icons";
import ProgessBar from "../components/ProgessBar";

const Agencies = () => {
  const { data, agencies, fnNewAgencie, fnClose } = useContext(GlobalContext);
  const { center } = data;
  const [agencieName, setAgencieName] = useState("");
  const { AddBtn, CloseBtn } = Icons;

  return (
    <div>
      <ProgessBar progressState={700} />

      <div className="d-flex justify-content-between mb-4">
        <Link to="/">
          <BtnIcon imageSrc={AddBtn} fnButton={fnNewAgencie} />
        </Link>
        <Link to="/">
          <BtnIcon imageSrc={CloseBtn} fnButton={fnClose} />
        </Link>
      </div>

      <h2>Agencias</h2>
      <hr />
      {agencieName ? (
        <div className="agencieName">{`Titular: ${agencieName}`}</div>
      ) : (
        <div className="agencieNameEmpy"></div>
      )}

      <GoogleMap
        mapContainerStyle={{ height: "460px" }}
        center={center}
        zoom={4}
        apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
      >
        {agencies.map((item) => (
          <Marker
            key={item.name}
            position={item.center}
            options={{ icon: carIcon }}
            title={`Titular : ${item.name} \n ${item.address}`}
            onClick={() => setAgencieName(`${item.name} - ${item.address}`)}
          ></Marker>
        ))}
      </GoogleMap>
    </div>
  );
};

export default Agencies;
