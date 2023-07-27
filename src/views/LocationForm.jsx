import ContinueButton from "../components/ContinueButton";
import Map from "../components/Map";
import SearchBox from "../components/SearchBox";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import ProgessBar from "../components/ProgessBar";

const LocationForm = () => {
  const { completedAddress } = useContext(GlobalContext);
  return (
    <div>
      <ProgessBar progressState={!completedAddress ? 0 : 150} />

      <h1>¿Dónde se puede ver?</h1>

      <SearchBox />
      <Map />
      <Link to="/step2">
        <ContinueButton />
      </Link>
    </div>
  );
};

export default LocationForm;
