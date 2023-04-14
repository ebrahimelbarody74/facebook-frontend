import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import { AuthContext } from "../../context/authContext";
import axios from "axios";

function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handelSubmit = () => {
    const data = {
      email,
      password,
    };
    const getUser = async () => {
      try {
        const res = await axios.post(
          "http://localhost:8800/api/auth/login",
          data
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
    <div className="login">
      <div className="box">
        <div className="left">
          <h1>Hello World.</h1>
          <p>Welcome to Orico </p>
          <span>Don't you have an account?</span>
          <Link to="register">Register</Link>
        </div>
        <div className="right">
          <h2>Login</h2>
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
          <button onClick={handelSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
