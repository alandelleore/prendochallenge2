import React, { useContext } from "react";
import InputName from "../components/InputName";
import BtnIcon from "../components/BtnIcon";
import Icons from "../assets/icons/Icons";
import NextButton from "../components/NextButton";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import ProgessBar from "../components/ProgessBar";

const NameForm = () => {
  const { BackBtn, CloseBtn } = Icons;
  const { edit, fnClose } = useContext(GlobalContext);

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
      <Link to="/step3">
        <NextButton />
      </Link>
    </div>
  );
};

export default NameForm;
