import React from "react";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./ProfilePage.scss";
import Posts from "../Posts/Posts";
function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="container">
        <div className="images">
          <img
            src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2"
            alt=""
            className="cover"
          />
          <img
            src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600&amp;lazy=load"
            alt=""
            className="profilePic"
          />
        </div>
        <div className="profileContainer">
          <div className="uInfo">
            <h2>Johan Doe</h2>
            <div className="left">
              <ul>
                <li>
                  <a href="#">
                    <FacebookTwoToneIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <InstagramIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <PinterestIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <TwitterIcon />
                  </a>
                </li>
              </ul>
            </div>
            <div className="center">
              <ul>
                <li>
                  <a href="#">
                    <PlaceIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <LanguageIcon />
                  </a>
                </li>
                <li>
                  <button>Follow</button>
                </li>
              </ul>
            </div>
            <div className="right">
              <ul>
                <li>
                  <a href="#">
                    <EmailOutlinedIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <MoreVertIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Posts/>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
