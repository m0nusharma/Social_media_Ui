import React from "react";
import "./Enent.css";
import Socail_media from "../Socail_media/Socail_media";
import monu from '../../assets/monu.jpg'
import sonu from '../../assets/sonu.png'
import suhil from'../../assets/sushil.png'

const Event = () => {
  return (
    <div >
    <div className="d-flex align-items-center justify-content-between mb-3">
      <h5 className="m-0">Events</h5>
      <span className="d-flex align-items-center gap-4">
        <p className="m-0 fw-bold text-secondary ">Create</p>
        <i className="fa-solid fa-square-plus m-0 fs-4 text-secondary items"></i>
      </span>
      </div>
      <div className="d-flex">
      <Socail_media 
      ImageOne={monu}
      ImageTwo={sonu}
      Imagethree={suhil} 
      title="10+"/>
      <p className="m-0 fw-bold text-secondary">36+ Friends</p>
      </div>
    </div>
  );
};

export default Event;
