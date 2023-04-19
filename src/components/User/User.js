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
    console.log(followed);
    try {
      if (followed) {
        const res = await axios.put(
          `http://localhost:8800/api/users/${person._id}/unfollow`,
          {
            userId: currentUser._id,
          }
        );
        console.log(res);
      } else {
        const res = await axios.put(
          `http://localhost:8800/api/users/${person._id}/follow`,
          {
            userId: currentUser._id,
          }
        );
        console.log(res);
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
            followed ? "button fc-button UnfollowButton" : "button followButton fc-button"
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
