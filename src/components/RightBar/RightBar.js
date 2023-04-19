import React, { useEffect, useState } from "react";
import "./RightBar.scss";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import User from "../User/User";
import FollowersModal from "../FollowersModal/FollowersModal";

function RightBar({ user, location }) {
  const { currentUser } = useSelector((state) => state.auth);
  const [suggestions, setSuggestions] = useState([]);
  const [friends, setFriends] = useState([]);
  const [modalOpened, setModalOpened] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  // suggestions users
  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const res = await axios.get("/users/all");
        setSuggestions(res.data);
      } catch (err) {}
    };
    getAllUsers();
  }, []);

  // frindes users
  useEffect(() => {
    const getFriends = async () => {
      try {
        const res = await axios.get("/users/friends/" + user._id);
        setFriends(res.data);
      } catch (err) {}
    };
    getFriends();
  }, [user?._id]);

  const HomeRightbar = () => {
    return (
      <div className="rightBar">
        <div className="container">
          <div className="item">
            <h3>Suggestions For You</h3>
            {location
              ? suggestions.map((person, id) => {
                  if (currentUser._id !== person._id)
                    return <User person={person} key={id} />;
                })
              : suggestions.slice(0, 4).map((person, id) => {
                  if (currentUser._id !== person._id)
                    return <User person={person} key={id} />;
                })}
            {!location && (
              <span
                style={{ cursor: "pointer",textAlign:"center" }}
                onClick={() => setModalOpened(true)}
              >
                Show More
              </span>
            )}
            <FollowersModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
            />
          </div>
          {!location && (
            <>
              <div className="item">
                <h3>Latest Activities</h3>
                <div className="user">
                  <div className="userInfo">
                    <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                    <span>Ebrahim Elbarody</span>
                  </div>
                  <span>1 min ago</span>
                </div>
                <div className="user">
                  <div className="userInfo">
                    <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                    <span>Ebrahim Elbarody</span>
                  </div>
                  <span>1 min ago</span>
                </div>
                <div className="user">
                  <div className="userInfo">
                    <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                    <span>Ebrahim Elbarody</span>
                  </div>
                  <span>1 min ago</span>
                </div>
                <div className="user">
                  <div className="userInfo">
                    <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                    <span>Ebrahim Elbarody</span>
                  </div>
                  <span>1 min ago</span>
                </div>
                <div className="user">
                  <div className="userInfo">
                    <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                    <span>Ebrahim Elbarody</span>
                  </div>
                  <span>1 min ago</span>
                </div>
                <div className="user">
                  <div className="userInfo">
                    <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                    <span>Ebrahim Elbarody</span>
                  </div>
                  <span>1 min ago</span>
                </div>
              </div>
              <div className="item">
                <h3>Online Friends</h3>
                <div className="user">
                  <div className="userInfo">
                    <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                    <span>Ebrahim Elbarody</span>
                  </div>
                </div>
                <div className="user">
                  <div className="userInfo">
                    <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                    <span>Ebrahim Elbarody</span>
                  </div>
                </div>
                <div className="user">
                  <div className="userInfo">
                    <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                    <span>Ebrahim Elbarody</span>
                  </div>
                </div>
                <div className="user">
                  <div className="userInfo">
                    <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                    <span>Ebrahim Elbarody</span>
                  </div>
                </div>
                <div className="user">
                  <div className="userInfo">
                    <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                    <span>Ebrahim Elbarody</span>
                  </div>
                </div>
                <div className="user">
                  <div className="userInfo">
                    <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                    <span>Ebrahim Elbarody</span>
                  </div>
                </div>
                <div className="user">
                  <div className="userInfo">
                    <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                    <span>Ebrahim Elbarody</span>
                  </div>
                </div>
                <div className="user">
                  <div className="userInfo">
                    <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                    <span>Ebrahim Elbarody</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <button className="rightbarFollowButton">
            {/* {followed ? "Unfollow" : "Follow"} */}
            {/* {followed ? <Remove /> : <Add />} */}
          </button>
        )}
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 1
                ? "Married"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {friends.map((friend) => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "person/noAvatar.png"
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

export default RightBar;
