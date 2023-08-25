import React from "react";
import "./Socail_profile.css";
import Video_play from "../Video_Play/Video_play";
import Cricket from "../../assets/ViratKohli.jpg";
import Football from "../../assets/football.jpg";
import Musk from "../../assets/musk.jpg";
import Event from "../Event/Event";
import Profile_img from "../Profile_img/Profile_img";
import Profile_name from "../Profile_name/Profile_name";
import BigBox from "../BigBox/BigBox";
import Follow from "../Follow/Follow";
import Friends from "../Friends/Friends";
import SmallBox from "../SmallBox/SmallBox";
import Socail_media_app from "../Socail_media_app/Socail_media_app";
import Chat from "../Chat/Chat";
import Dhani from "../../assets/dhaniii.png";
import Aditya from "../../assets/changgaa.png";
import insta from "../../assets/insta.png";
import Fb from "../../assets/facebook.png";
import Twiter from "../../assets/twitter.png";
import Yadav from "../../assets/yadav.png";
import Massege from '../Massege/massege'

const Socail_profile = () => {
  return (
    <div className="row d-flex">
      <div className=" pding_MEdia col-sm-12 col-md-4 pt-5 ps-5 pe-5 border-end ">
        <div className="d-flex justify-content-between">
          <h5 className="text-secondary m-0">Your Shortcuts</h5>
          <button className="text-primary border-0 bg-light">
            <b>Edit</b>
          </button>
        </div>
        <div className="d-flex justify-content-between ">
          <div className="d-flex gap-4 align-items-center opacity-50">
            <i className="items fa-solid fa-lock text-secondary"></i>
            <p className="items text-secondary m-0 "> Private Chat</p>
          </div>
          <span className=" Num_box bg-danger-subtle mt-2 rounded-5 d-flex justify-content-center align-items-center fw-bold text-secondary">
            <p className="m-0 items m-0">5</p>
          </span>
        </div>
        <div className="   d-flex justify-content-between mt-2 mb-2 ">
          <div className="   d-flex gap-4 align-items-center">
            <i className=" items fa-regular fa-circle-pause text-primary fs-5"></i>
            <p className=" items text-primary m-0 ">Watch</p>
          </div>
          <button className="border-0 bg-light">
            <i className="  fa-regular fa-square-caret-down fs-4 text-primary me-1 "></i>
          </button>
        </div>
        <div className=" row justify-content-between">
          <span className="col-sm-4 ">
            <Video_play Video={Cricket} title="Live" />
          </span>
          <span className="col-sm-4 ">
            <Video_play Video={Football} title="Saved" />
          </span>
          <span className="col-sm-4 ">
            <Video_play Video={Musk} title="Latest" />
          </span>
        </div>
        <hr />
        <Event />
        <Follow />
      </div>
      <div className="col-sm-12 col-md-4 pt-5 ps-5 pe-5 pb-2 border-end">
        <Profile_img />
        <Profile_name />
        <BigBox />
      </div>
      <div className="col-sm-12 col-md-4 pt-5 ps-5 pe-5 pb-2 border-end">
        <Friends />
        <div className="d-flex justify-content-between align-items-center m-0 p-0">
          <SmallBox />
          <Socail_media_app />
        </div>
        <hr />
        <Chat
          Title="Mohit Dhani"
          Caption="today"
          ParsonImg={Dhani}
          SocailImg={insta}
        />
        <Chat
          Title="Aditya Changha"
          Caption="today"
          ParsonImg={Aditya}
          SocailImg={Fb}
        />
        <Chat
          Title="Pankaj Darinda"
          Caption="today"
          ParsonImg={Yadav}
          SocailImg={Twiter}
        />
        <Massege />
      </div>
    </div>
  );
};

export default Socail_profile;
