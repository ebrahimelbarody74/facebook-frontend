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
import axios from "axios";
import ProfileModal from "../ProfileModel/ProfileModel";

function Navbar() {
  // const { dark, toggle } = useContext(DarkMdeContext);
  const dark = useSelector((state) => state.dark.dark);
  const [search, setSearch] = useState("");
  const [person, setPerson] = useState([]);
  const [modalOpened, setModalOpened] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {}, [dark]);
  useEffect(() => {
    const getUserSearch = async () => {
      try {
        const res = await axios.get("/users/all");
        const filter = res.data.filter(
          (e) => e.username.slice(0, search.length) === search && search !== ""
        );
        setPerson(filter);
        console.log(filter);
      } catch (err) {}
    };
    getUserSearch();
  }, [search]);

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
          <input
            type="text"
            placeholder="Search ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {person && (
            <div className="personSearch">
              <ul>
                {person?.map((p) => (
                  <li
                    onClick={() => {
                      setPerson([]);
                      setSearch("");
                    }}
                  >
                    <Link to={`/profile/${p.username}`}>{p.username}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="right">
        <ul>
          <li onClick={() => setModalOpened(true)}>
            <PersonOutlinedIcon />
          </li>
          {modalOpened && (
            <ProfileModal
              setModalOpened={setModalOpened}
              modalOpened={modalOpened}
            />
          )}
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
