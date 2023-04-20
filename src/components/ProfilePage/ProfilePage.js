import React, { useContext, useEffect, useState } from "react";
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
import axios from "axios";
import { AuthContext } from "../../context/authContext";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Share from "../Share/Share";
function ProfilePage({ user }) {
  const { currentUser } = useSelector((state) => state.auth);
  const username = useParams().username;
  const [posts, setPosts] = useState();
  const [share, setShare] = useState("");
  const [file, setFile] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  // posts profile
  useEffect(() => {
    const setPost = async () => {
      try {
        const res = await axios.get("/posts/profile/" + username);
        setPosts(
          res.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
          })
        );
      } catch (err) {
        console.log(err);
      }
    };
    setPost();
  }, [username]);

  //share

  const handelShare = async () => {
    const newPost = {
      userId: currentUser._id,
      desc: share,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    const setPost = async () => {
      if (share !== "") {
        try {
          const res = await axios.post(
            "http://localhost:8800/api/posts/",
            newPost
          );
          setPosts([...posts, res.data]);
          setShare("");
          window.location.reload();
        } catch (err) {
          console.log(err);
        }
      }
    };
    setPost();
  };

  const [followed, setFollowed] = useState();

  useEffect(() => {
    const a = async () => {
      const b = await user.followers.includes(currentUser._id);
      setFollowed(b);
    };
    a();
  }, [user._id]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(
          `http://localhost:8800/api/users/${user._id}/unfollow`,
          {
            userId: currentUser._id,
          }
        );
      } else {
        await axios.put(`http://localhost:8800/api/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
      }
      setFollowed((prev) => !prev);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const res = await axios.get("/users/" + currentUser._id);
        localStorage.setItem("user", JSON.stringify(res.data));
      } catch (err) {}
    };
    getCurrentUser();
  }, [followed]);

  return (
    <div className="profilePage">
      <div className="container">
        <div className="images">
          <img
            src={
              user.coverPicture
                ? PF + user.coverPicture
                : PF + "person/noCover.png"
            }
            alt=""
            className="cover"
          />
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="profilePic"
            style={{ marginBottom: "40px" }}
          />
        </div>
        <div className="profileContainer">
          {username !== currentUser.username ? (
            <div className="uInfo">
              <h2>{username}</h2>
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
                    <div className="buttons" onClick={handleClick}>
                      <button
                        className={
                          followed
                            ? "button fc-button UnfollowButton"
                            : "button followButton fc-button"
                        }
                      >
                        {followed ? "Unfollow" : "Follow"}
                      </button>
                    </div>
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
          ) : (
            <Share
              file={file}
              setFile={setFile}
              setShare={setShare}
              handelShare={handelShare}
              share={share}
            />
          )}
          {posts?.map((post) => (
            <Posts key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
