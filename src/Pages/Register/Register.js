import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.scss";
import axios from "axios";
import { AuthContext } from "../../context/authContext";

function Register() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    const val = {
      username,
      email,
      password,
    };
    const getUser = async () => {
      try {
        const res = await axios.post(
          "http://localhost:8800/api/auth/register",
          val
        );
        login(res.data);
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  };
  return (
    <div className="register">
      <div className="box">
        <div className="left">
          <h1>Orico Social.</h1>
          <p>Welcome to Orico </p>
          <span>Do you have an account?</span>
          <Link to="/">Login</Link>
        </div>
        <div className="right">
          <form>
            <h2>Register</h2>
            <input
              type="text"
              placeholder="Enter Your Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="text" placeholder="Enter Your Name" />
            <button onClick={handelSubmit}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
