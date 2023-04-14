import React, { useContext, useEffect, useState } from "react";
import Stories from "../Stories/Stories";
import "./HomePage.scss";
import Share from "../Share/Share";
import Posts from "../Posts/Posts";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
function HomePage() {
  const { currentUser } = useContext(AuthContext);
  const [share, setShare] = useState("");
  const handelShare = () => {
    const data = {
      userId: currentUser._id,
      desc: share,
    };
    const setPost = async () => {
      try {
        const res = await axios.post("http://localhost:8800/api/posts/", data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    setPost();
  };
  useEffect(() => {}, []);
  return (
    <div className="homePage">
      <div className="container">
        <Stories />
        <Share setShare={setShare} handelShare={handelShare} />
        <Posts />
      </div>
    </div>
  );
}

export default HomePage;
