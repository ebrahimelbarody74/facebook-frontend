import React from "react";
import "./Posts.scss";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
function Posts() {
  return (
    <div className="posts">
      <div className="post">
        <div className="container">
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600"
                alt=""
              />
              <div className="details">
                <Link to="/profile/2">
                  <span>Johan Doe</span>
                </Link>
                <span>1 min ago</span>
              </div>
            </div>
            <MoreHorizIcon />
          </div>
          <div className="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <img
              src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600"
              alt=""
            />
          </div>
          <div className="info">
            <ul>
              <li>
                <FavoriteBorderOutlinedIcon /> <span> 12 Likes</span>
              </li>
              <li>
                <TextsmsOutlinedIcon /> <span> 12 Comments</span>
              </li>
              <li>
                <ShareOutlinedIcon /> <span> 12 Share</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="post">
        <div className="container">
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600"
                alt=""
              />
              <div className="details">
                <Link to="/profile/2">
                  <span>Johan Doe</span>
                </Link>
                <span>1 min ago</span>
              </div>
            </div>
            <MoreHorizIcon />
          </div>
          <div className="content">
            <p>
              Tenetur iste voluptates dolorem rem commodi voluptate pariatur,
              voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a
              nam non adipisci minima modi tempore.
            </p>
          </div>
          <div className="info">
            <ul>
              <li>
                <FavoriteBorderOutlinedIcon /> <span> 12 Likes</span>
              </li>
              <li>
                <TextsmsOutlinedIcon /> <span> 12 Comments</span>
              </li>
              <li>
                <ShareOutlinedIcon /> <span> 12 Share</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
