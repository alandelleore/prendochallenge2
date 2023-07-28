import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

import InputName from "../components/InputName";
import BtnIcon from "../components/BtnIcon";
import Icons from "../assets/icons/Icons";
import ContinueButton from "../components/ContinueButton";
import ProgessBar from "../components/ProgessBar";

const NameForm = () => {
  const { BackBtn, CloseBtn } = Icons;
  const { edit, fnClose, data } = useContext(GlobalContext);
  const { name } = data;

  return (
    <div>
      <ProgessBar progressState={280} />

      <div className="d-flex justify-content-between mb-5">
        <Link to="/">
          <BtnIcon imageSrc={BackBtn} fnButton={edit} />
        </Link>
        <Link to="/">
          <BtnIcon imageSrc={CloseBtn} fnButton={fnClose} />
        </Link>
      </div>

      <InputName />

      <ContinueButton textBtn={"Siguiente"} flag={name} fnNavigate={"/step3"} />
    </div>
  );
};

export default NameForm;
