import React from "react";
import LeftBar from "../../components/LeftBar/LeftBar";
import RightBar from "../../components/RightBar/RightBar";
import "./Profile.scss";
import Navbar from "../../components/Navbar/Navbar";
import ProfilePage from "../../components/ProfilePage/ProfilePage";
function Profile() {
  return (
    <div className="profile">
      <Navbar />
      <div className="box">
        <LeftBar />
        <ProfilePage />
        <RightBar />
      </div>
    </div>
  );
}

export default Profile;
