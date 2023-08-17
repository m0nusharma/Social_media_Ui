import React from "react";
import "./Socail_media.css";

const Socail_media = ({ImageOne, ImageTwo, Imagethree, title}) => {
  return (
    <div className=" d-flex">
      <div className="Socail_icons one_icon rounded-5  ">
        <img
          src={ImageOne}
          alt="ImageOne"
          className="Socail_icons bg-secondary rounded-5"
        />
      </div>
      <div className="Socail_icons two_icon rounded-5 ">
        <img
          src={ImageTwo}
          alt="ImageTwo"
          className="Socail_icons bg-secondary rounded-5"
        />
      </div>
      <div className="Socail_icons three_icon rounded-5  ">
        <img
          src={Imagethree}
          alt="Imagethree"
          className="Socail_icons bg-secondary rounded-5"
        />
      </div>
      <div className="Socail_icons four_icon  rounded-5 bg-secondary d-flex justify-content-center align-items-center text-light fs-6">
        {title}
      </div>
    </div>
  );
};

export default Socail_media;
