import React from "react";
import "./Socail_media.css";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/insta.png";
import Twitter from "../../assets/twitter.png";

const Socail_media = () => {
  return (
    <div className=" d-flex">
      <div className="Socail_icons one_icon rounded-5  ">
        <img
          src={Facebook}
          alt="Facebook"
          className="Socail_icons bg-secondary rounded-5"
        />
      </div>
      <div className="Socail_icons two_icon rounded-5 ">
        <img
          src={Instagram}
          alt="Instagram"
          className="Socail_icons bg-secondary rounded-5"
        />
      </div>
      <div className="Socail_icons three_icon rounded-5  ">
        <img
          src={Twitter}
          alt="Twitter"
          className="Socail_icons bg-secondary rounded-5"
        />
      </div>
      <div className="Socail_icons four_icon  rounded-5 bg-secondary d-flex justify-content-center align-items-center text-light fs-6">
        5+
      </div>
    </div>
  );
};

export default Socail_media;
