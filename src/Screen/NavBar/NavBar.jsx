import React from "react";
import Logo from "../../assets/logooo.png";
import "./NavBar.css";
import ProfileImg from "../../assets/monu.jpg";

const NavBar = () => {
  return (
    <div className="container-sm-100%">
    <div className="p-3  row ">
      <div className=" logoo_set col-sm-12 col-md-4 d-flex  align-items-center  gap-4 ps-5  ">
        <img src={Logo} alt="" height="50" className="" />
        <i className=" Icon_hover fa-solid fa-house fs-4 text-secondary"></i>
      </div>
      <div className="col-sm-12 col-md-4  d-flex justify-content-center align-items-center W-75  ">
        <div className=" search-box rounded-5  border w-100 ">
          <i className="fa-solid fa-magnifying-glass m-2"></i>
          <input
            type="search"
            placeholder="Search now"
            className="rounded-5 BorderHide p-2 w-75  "
          />
        </div>
        <i className="fa-solid fa-microphone m-3 fs-4 text-secondary Icon_hover"></i>
      </div>
      <div className="  col-sm-12 col-md-4  d-flex justify-content-center align-items-center flex-wrap  justify-content-around">
        <div className="  d-flex justify-content-center align-items-center flex-wrap justify-content-around  gap-4 ">
          <i className="Icon_hover fa-solid fa-circle-plus fs-4 text-secondary"></i>
          <i className="Icon_hover fa-solid fa-bell fs-4 text-secondary"></i>
          <i className="Icon_hover fa-solid fa-gear fs-4 text-secondary"></i>
        </div>
        <img
          src={ProfileImg}
          alt="Profile Photo"
          height="40"
          className="Icon_hover rounded-circle me-5"
        />
      </div>
    </div>
    </div>
  );
};

export default NavBar;
