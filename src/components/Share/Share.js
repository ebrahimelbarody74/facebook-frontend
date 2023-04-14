import React from "react";
import "./Share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
function Share({ setShare,handelShare }) {
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img
            src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600"
            alt=""
          />
          <input
            type="text"
            placeholder="what's on your mind Johan Doe?"
            onChange={(e) => setShare(e.target.value)}
          />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" />
            <label htmlFor="file">
              <img src={Image} />
              <span>Add Image</span>
            </label>
            <label>
              <img src={Map} />
              <span>Add Olace</span>
            </label>
            <label>
              <img src={Friend} />
              <span>Add Friends</span>
            </label>
          </div>
          <div className="right">
            <button onClick={handelShare}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Share;
