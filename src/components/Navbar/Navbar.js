import React, { useContext, useEffect, useState } from "react";
import "./Navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { DarkMdeContext } from "../../context/darkModeContext";
import { useDispatch, useSelector } from "react-redux";
import { darkMode } from "../../rtk/slices/darkModeSlice";

function Navbar() {
  // const { dark, toggle } = useContext(DarkMdeContext);
  const dark = useSelector((state) => state.dark.dark);
  useEffect(() => {
    console.log(dark);
  }, [dark]);

  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <div className="left">
        <h3>Orico Social</h3>
        <ul>
          <li>
            <Link to="/">
              <HomeOutlinedIcon />
            </Link>
          </li>
          <li>
            {dark ? (
              <WbSunnyOutlinedIcon onClick={() => dispatch(darkMode(false))} />
            ) : (
              <DarkModeOutlinedIcon onClick={() => dispatch(darkMode(true))} />
            )}
          </li>
          <li>
            <GridViewOutlinedIcon />
          </li>
        </ul>
      </div>
      <div className="center">
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search ..." />
        </div>
      </div>
      <div className="right">
        <ul>
          <li>
            <PersonOutlinedIcon />
          </li>
          <li>
            <EmailOutlinedIcon />
          </li>
          <li>
            <NotificationsOutlinedIcon />
          </li>
          <li>
            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" />
            <span>Ebrahim Elbarody</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
