import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const ContinueButton = () => {
  const { completedAddress, btnEnabled, btnDisabled } =
    useContext(GlobalContext);

  return (
    <button
      className={completedAddress ? btnEnabled : btnDisabled}
      disabled={!completedAddress}
    >
      Continuar
    </button>
  );
};

export default ContinueButton;
