import React from "react";
import spinnerImg from "../../assets/loading-spinner.gif";

const Spinner = () => {
  return (
    <div className="loadinf-spinner">
      <img
        src={spinnerImg}
        alt="Loading-img"
        className="d-block m-auto"
        style={{ width: "100px" }}
      />
    </div>
  );
};

export default Spinner;
