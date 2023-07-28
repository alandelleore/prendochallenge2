import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

import BtnIcon from "../components/BtnIcon";
import Icons from "../assets/icons/Icons";
import ProgessBar from "../components/ProgessBar";
import Map from "../components/Map";

const SuccessMessage = () => {
  const { data, btnEnabled, fnConfirm, fnClose } = useContext(GlobalContext);
  const { BackBtn, CloseBtn, Check } = Icons;
  const { center, name, address } = data;

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
        <p>Titular: {name.toUpperCase()}</p>
        <p>Dirección: {address}</p>

        <Map geoLoc={center} size={180} zoom1={15} flag={address} />

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
