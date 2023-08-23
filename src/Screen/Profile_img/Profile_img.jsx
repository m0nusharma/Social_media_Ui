import React from "react";
import "./Profile_img.css";
import Profile from "../../assets/profile.jpg";
import monu from "../../assets/monu.jpg";

const Profile_img = () => {
  return (
    <div className="m-0 position-relative">
      <div className="d-flex justify-content-center  ">
        <img src={Profile} alt="" className="w-75 rounded-3">
        </img>
        </div>
        <img src={monu} alt="" className="myImg w-25 border border-4 position-absolute" />
    </div>
  );
};

export default Profile_img;
