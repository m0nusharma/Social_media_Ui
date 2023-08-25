import React from "react";
import "./Friends.css";

const Friends = () => {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <div className="d-flex">
        <div className="C_ROund bg-primary rounded-5  d-flex justify-content-center  align-items-center bg-seconadry">
          <i className="fa-regular fa-envelope text-light"></i>
        </div>
        <div className="C_ROund ROundTwo  rounded-5 m-0 d-flex justify-content-center  align-items-center shadow-lg">
          15
        </div>
      </div>
      <p className="text-secondary m-0">Waiting for</p>
      <h5 className="text-primary m-0">15 friends</h5>
    </div>
  );
};

export default Friends;
