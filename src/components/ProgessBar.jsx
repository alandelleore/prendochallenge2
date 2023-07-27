import React from "react";

const ProgessBar = ({ progressState }) => {
  return (
    <div
      className="progress mb-2"
      role="progressbar"
      aria-label="Basic example"
      aria-valuenow="0"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div className="progress-bar" style={{ width: progressState }}></div>
    </div>
  );
};

export default ProgessBar;
