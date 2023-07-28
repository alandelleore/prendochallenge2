import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

import ContinueButton from "../components/ContinueButton";
import Map from "../components/Map";
import SearchBox from "../components/SearchBox";
import ProgessBar from "../components/ProgessBar";

const LocationForm = () => {
  const { data, completedAddress } = useContext(GlobalContext);
  const { center } = data;
  return (
    <div>
      <ProgessBar progressState={!completedAddress ? 0 : 150} />

      <h1>¿Dónde se puede ver?</h1>

      <SearchBox />
      <Map
        geoLoc={center}
        size={340}
        flag={completedAddress}
        zoom1={13}
        zoom2={5}
      />

      <ContinueButton
        textBtn={"Continuar"}
        flag={completedAddress}
        fnNavigate={"/step2"}
      />
    </div>
  );
};

export default LocationForm;
