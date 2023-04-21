import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function User({ person }) {
  const { currentUser } = useSelector((state) => state.auth);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [followed, setFollowed] = useState(
    person.followers.includes(currentUser._id)
  );
  const handleClick = async () => {
    try {
      if (followed) {
        const res = await axios.put(
          `https://facebook-server-lvi9.onrender.com/api/users/${person._id}/unfollow`,
          {
            userId: currentUser._id,
          }
        );
      } else {
        const res = await axios.put(
          `https://facebook-server-lvi9.onrender.com/api/users/${person._id}/follow`,
          {
            userId: currentUser._id,
          }
        );
      }
      setFollowed((prev) => !prev);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const res = await axios.get(
          "https://facebook-server-lvi9.onrender.com/api/users/" +
            currentUser._id
        );
        localStorage.setItem("user", JSON.stringify(res.data));
      } catch (err) {}
    };
    getCurrentUser();
  }, [followed]);

  return (
    <div className="user">
      <div className="userInfo">
        <img
          src={
            person.coverPicture
              ? person.coverPicture
              : PF + "person/noAvatar.png"
          }
        />
        <span>{person.username}</span>
      </div>
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
        {/* <button>Dismiss</button> */}
      </div>
    </div>
  );
}

export default User;
