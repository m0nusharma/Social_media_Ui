import React from "react";
import "./Video_play.css";

const Video_play = ({ Video , title }) => {
  return (
    <div className=" ">
      <div className=" Text_img col-sm-12 ">
        <p className=" text_hover fw-bold ">{title}</p>
        <img className="imageBox rounded-2 " src={Video} />
      </div>
    </div>
  );
};

export default Video_play;