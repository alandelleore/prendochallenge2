import { useNavigate } from "react-router-dom";

const ContinueButton = ({ textBtn, flag, fnNavigate }) => {
  const navigate = useNavigate();

  const btnDisabled =
    "btn btn-outline-light disabled btn-lg text-white col-12 mt-4";
  const btnEnabled = "btn btn-info btn-lg text-white col-12 mt-4";

  return (
    <button
      className={flag ? btnEnabled : btnDisabled}
      disabled={!flag}
      onClick={() => navigate(fnNavigate)}
    >
      {textBtn}
    </button>
  );
};

export default ContinueButton;
