import React from "react";
import "./Heading.css";
import Socail_media from "../Socail_media/Socail_media";
import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";
import insta from "../../assets/insta.png";

const Heading = () => {
  return (
    <div className="row head_Color w-100 p-5 m-0">
      <div className="col-sm-12 col-md-11">
        <h2 className="m-0 fw-light ">Start Your</h2>
        <h3 className="">
          <b className="text-primary">Social media</b> Conversation
        </h3>
        <div className="d-flex gap-1 align-items-center">
          <span className="textSize m-0">All Your Social Network.</span>
          <span className="backG rounded-5  ">
            <p className="textSize m-0  p-1 d-flex">
              One Simple <b className="text-primary"> Deshboard.</b>
            </p>
          </span>
          <Socail_media
            ImageOne={Facebook}
            ImageTwo={insta}
            Imagethree={Twitter}
            title="5+"
          />
        </div>
      </div>
      <div className="col-sm-12 col-md-1 ">
        <div className=" Make_float   ">
          <div className="CurcleCrose  rounded-5 bg-light d-flex justify-content-center align-items-center ">
            <i className="fa-solid fa-xmark fs-4 text-primary "></i>
          </div>
          <button className="fa-solid fa-plus text-5 btn btn-primary mt-2 d-flex gap-2 float-start ">
            Invite
          </button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
