import React from "react";
import "./Follow.css";
import abhi from "../../assets/abhishek.png";
import bhai from "../../assets/sonu.png";

const Follow = ({}) => {
  return (
    <div className="">
      <p className="">
        <l className="text-primary">WOW </l>New Followers
      </p>
      <div className="d-flex justify-content-between">
        <div className="folow d-flex gap-2 ">
          <div className="Curcle rounded-5 d-flex justify-content-center  align-items-center m-0">
            <p className="m-0 fw-bold text-primary">Mr</p>
          </div>
          <img src={abhi} alt="" className=" FolowImg rounded-5" />
          <div className="Curcle rounded-5 d-flex justify-content-center  align-items-center m-0">
            <p className="m-0 fw-bold text-primary">Dr</p>
          </div>
          <img src={bhai} alt="" className=" FolowImg rounded-5" />
        </div>
        <span className="Curcle p  d-flex justify-content-center  align-items-center fw-bold text-primary rounded-5">
          3
        </span>
      </div>
      <br />
      <hr />
    </div>
  );
};

export default Follow;
