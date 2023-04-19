import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import LeftBar from "../../components/LeftBar/LeftBar";
import HomePage from "../../components/HomePage/HomePage";
import RightBar from "../../components/RightBar/RightBar";
import "./Home.scss";
import { useParams } from "react-router-dom";
import ProfilePage from "../../components/ProfilePage/ProfilePage";
import Profile from "../Profile/Profile";

function Home() {
  const handleClick = async () => {};
  return (
    <div className="home">
      <Navbar />
      <div className="box">
        <LeftBar />
        <HomePage />
        <RightBar />
      </div>
    </div>
  );
}

export default Home;
