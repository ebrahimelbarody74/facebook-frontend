import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../apiCalls";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);

  const handelSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    login(dispatch, navigate, "login", {
      email,
      password,
    });

    console.log(currentUser);
    // const getUser = async () => {
    //   try {
    //     const res = await axios.post(
    //       "/auth/login",
    //       data
    //     );
    //     login(res.data);
    //     navigate("/");
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // getUser();
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
          <form onSubmit={handelSubmit}>
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
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
