import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { GoogleMap } from "@react-google-maps/api";
import { Link } from "react-router-dom";
import BtnIcon from "../components/BtnIcon";
import Icons from "../assets/icons/Icons";
import ProgessBar from "../components/ProgessBar";

const SuccessMessage = () => {
  const { data, btnEnabled, fnConfirm, fnClose } = useContext(GlobalContext);
  const { BackBtn, CloseBtn, Check } = Icons;

  return (
    <>
      <ProgessBar progressState={320} />

      <div className="d-flex justify-content-between mb-5">
        <Link to="/step2">
          <BtnIcon imageSrc={BackBtn} />
        </Link>
        <Link to="/">
          <BtnIcon imageSrc={CloseBtn} fnButton={fnClose} />
        </Link>
      </div>
      <div className="success">
        <div className="d-flex">
          <div>
            <h3 className="mt-1">Agencia</h3>
          </div>
          <div className="m-2">
            <img src={Check} alt="" className="add-icon" />
          </div>
        </div>

        <hr className="mb-4" />
        <p>Titular: {data.name.toUpperCase()}</p>
        <p>Dirección: {data.address}</p>
        <GoogleMap
          mapContainerStyle={{ height: "180px" }}
          center={data.center}
          zoom={15}
          apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        ></GoogleMap>
        <Link to="/step4">
          <button className={btnEnabled} onClick={fnConfirm}>
            Confirmar
          </button>
        </Link>
      </div>
    </>
  );
};

export default SuccessMessage;
