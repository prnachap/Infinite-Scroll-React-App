import React from "react";
import Loader from "./loader.svg";

const Spinner = () => {
  return (
    <div className="loader">
      <img src={Loader} alt="loader"></img>
    </div>
  );
};

export default Spinner;
