import React from "react";
import "./Chat.css";

const Chat = ({Title,Caption,ParsonImg,SocailImg}) => {
  return (
    <div className="m-2 p-1 d-flex align-items-center  justify-content-between ChatBody">
    <div className="d-flex gap-4 align-items-center items">
      <img src={ParsonImg} className="ProImgSIze rounded-5" />
      <div className="">
        <h5 className="m-0">{Title}</h5>
        <p className=" m-0 timeAgo">{Caption}</p>
      </div>
      </div>
      <div className=" d-flex gap-2 align-items-center">
      <img src={SocailImg} className="SIzeImg rounded-5 items"/>
      <i className="fa-regular fa-comments m-0 fs-4 text-primary items"></i>
      </div>
    </div>
  );
};

export default Chat;
