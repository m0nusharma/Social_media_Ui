import React from "react";
import "./User.css";

const User = ({title, Caption , UserImg , UseApp}) => {
  return (
    <div className=" ps-4 pe-4 pb-3 d-flex align-items-center ">
      <div className=" BoXDeffine d-flex align-items-center  gap-3  w-100 ">
        <img src={UserImg} alt="" className="UserDefine rounded-5" />
        <div className="d-flex align-items-center justify-content-between  w-100">
          <div className="">
            <p className="fw-bold m-0">{title}</p>
        <p className=" hr_ago m-0 text-secondary">{Caption} </p>
          </div>
          <div className="">
            <img src={UseApp} alt="" className="AppDefine rounded-5" />
          </div>
          </div>
      </div>
      <hr/>
      </div>
  );
};

export default User;
