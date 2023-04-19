import React, { useContext } from "react";
import "./LeftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";

import { AuthContext } from "../../context/authContext";
import { useSelector } from "react-redux";

function LeftBar() {
  const { currentUser } = useSelector((state) => state.auth);
  return (
    <div className="leftBar">
      <div className="container">
        <ul>
          <li>
            <img src={currentUser.profilePic} />
            <span>{currentUser.username}</span>
          </li>
          <li>
            <img src={Friends} />
            <span>Friends</span>
          </li>
          <li>
            <img src={Groups} />
            <span>Groups</span>
          </li>
          <li>
            <img src={Market} />
            <span>Market</span>
          </li>
          <li>
            <img src={Watch} />
            <span>Watch</span>
          </li>
          <li>
            <img src={Memories} />
            <span>Memories</span>
          </li>
        </ul>
        <hr />
        <ul>
          <span>Your shortcuts</span>
          <li>
            <img src={Events} />
            <span>Events</span>
          </li>
          <li>
            <img src={Gaming} />
            <span>Gaming</span>
          </li>
          <li>
            <img src={Gallery} />
            <span>Gallery</span>
          </li>
          <li>
            <img src={Videos} />
            <span>Videos</span>
          </li>
          <li>
            <img src={Messages} />
            <span>Messages</span>
          </li>
        </ul>
        <hr />
        <ul>
          <span>Others</span>
          <li>
            <img src={Fund} />
            <span>Fundraiser</span>
          </li>
          <li>
            <img src={Tutorials} />
            <span>Tutorials</span>
          </li>
          <li>
            <img src={Courses} />
            <span>Courses</span>
          </li>
          <li>
            <img src={Videos} />
            <span>Videos</span>
          </li>
          <li>
            <img src={Messages} />
            <span>Messages</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftBar;
