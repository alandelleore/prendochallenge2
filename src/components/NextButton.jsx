import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const NextButton = () => {
  const { btnEnabled, btnDisabled, data, fnNext } = useContext(GlobalContext);

  return (
    <button
      className={data.name !== "" ? btnEnabled : btnDisabled}
      disabled={!data.name}
      onClick={fnNext}
    >
      Siguiente
    </button>
  );
};

export default NextButton;
