import React, { useEffect, useState } from "react";
import "./Posts.scss";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { format } from "timeago.js";
import axios from "axios";
import { useSelector } from "react-redux";

function Posts({ post }) {
  const { currentUser } = useSelector((state) => state.auth);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState({});
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `https://facebook-server-lvi9.onrender.com/api/users?userId=${post.userId}`
      );
      setUser(res.data);
    };
    fetchUser();
  }, [post?.userId]);

  const likeHandler = () => {
    try {
      axios.put(
        "https://facebook-server-lvi9.onrender.com/api/posts/" +
          post._id +
          "/like",
        { userId: currentUser._id }
      );
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
    localStorage.setItem("like", JSON.stringify(isLiked));
  };
  // console.log(user);
  return (
    <div className="posts">
      <div className="post">
        <div className="container">
          <div className="user">
            <div className="userInfo">
              <img
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
              <div className="details">
                <Link to={`/profile/${user.username}`}>
                  <span>{user.username}</span>
                </Link>
                <span>{format(post?.createdAt)}</span>
              </div>
            </div>
            <MoreHorizIcon />
          </div>
          <div className="content">
            <p>{post?.desc}</p>
            {post.img && <img src={PF + post.img} />}
          </div>
          <div className="info">
            <ul>
              <li>
                {isLiked ? (
                  <>
                    <FavoriteOutlinedIcon onClick={likeHandler} />
                    <span> {like} likes</span>
                  </>
                ) : (
                  <>
                    <FavoriteBorderOutlinedIcon onClick={likeHandler} />{" "}
                    <span> {like} likes</span>
                  </>
                )}
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
