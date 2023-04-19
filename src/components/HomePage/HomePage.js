import React, { useContext, useEffect, useState } from "react";
import Stories from "../Stories/Stories";
import "./HomePage.scss";
import Share from "../Share/Share";
import Posts from "../Posts/Posts";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
import { useSelector } from "react-redux";
function HomePage() {
  const { currentUser } = useSelector((state) => state.auth);
  const [share, setShare] = useState("");
  const [posts, setPosts] = useState([]);
  const [file, setFile] = useState(null);

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
  useEffect(() => {
    const setPost = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/api/posts/timeline/" + currentUser._id
        );
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
  }, []);

  // console.log(posts);
  return (
    <div className="homePage">
      <div className="container">
        <Stories />
        <Share
          file={file}
          setFile={setFile}
          setShare={setShare}
          handelShare={handelShare}
          share={share}
        />
        {posts.map((post) => (
          <Posts post={post} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
