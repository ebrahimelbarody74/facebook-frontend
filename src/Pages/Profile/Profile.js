import React, { useEffect, useState } from "react";
import LeftBar from "../../components/LeftBar/LeftBar";
import RightBar from "../../components/RightBar/RightBar";
import "./Profile.scss";
import Navbar from "../../components/Navbar/Navbar";
import ProfilePage from "../../components/ProfilePage/ProfilePage";
import { useParams } from "react-router-dom";
import axios from "axios";
function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `https://facebook-server-lvi9.onrender.com/api/users?username=${username}`
      );
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <div className="profile">
      <Navbar />
      <div className="box">
        <LeftBar />
        <ProfilePage user={user} />
        <RightBar user={user} />
      </div>
    </div>
  );
}

export default Profile;
