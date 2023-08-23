import React from "react";
import Searchbar from "../SearchBar/Searchbar";
import AppName from "../AppName/AppName";
import User from "../User/User";
import Sonu from "../../assets/sonu.png";
import Instagram from "../../assets/insta.png";
import Abhi from "../../assets/abhishek.png"
import sushil from "../../assets/sushil.png"
import FB from "../../assets/facebook.png"
import twiter from '../../assets/twitter.png'



const BigBox = () => {
  return (
    <div className="bg-light rounded-3 shadow mt-2">
      <Searchbar />
      <div className="d-flex  align-items-center justify-content-between   ">
        <AppName title="All" coption="09" />
        <AppName title="Fb" coption="03" />
        <AppName title="Ig" coption="05" />
        <AppName title="Tw" coption="01" />
      </div>
      <hr  />
      <div>
      <User
        title="Sonu Sharma"
        Caption="1h ago"
        UserImg={Sonu}
        UseApp={Instagram}
      />
      <User
        title="Abhishek Sharma"
        Caption="5h ago"
        UserImg={Abhi}
        UseApp={FB}
      />
      <User
        title="Sushil Sharma"
        Caption="39m ago"
        UserImg={sushil}
        UseApp={twiter}
      />
      </div>
    </div>
  );
};

export default BigBox;
