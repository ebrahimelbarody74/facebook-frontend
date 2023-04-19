import React from "react";
import "./Share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import Cancel from "@mui/icons-material/Cancel";
import { useSelector } from "react-redux";
function Share({ setShare, handelShare, share, setFile, file }) {
  const { currentUser } = useSelector((state) => state.auth);
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
            placeholder={`what's on your mind ${currentUser.username}?`}
            value={share}
            onChange={(e) => setShare(e.target.value)}
          />
        </div>
        <hr />
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              accept=".png,.jpeg,.jpg"
              onChange={(e) => setFile(e.target.files[0])}
            />
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
