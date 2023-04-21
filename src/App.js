import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import { useContext, useState } from "react";
import { DarkMdeContext } from "./context/darkModeContext";
import { useSelector } from "react-redux";

function App() {
  // const { dark } = useContext(DarkMdeContext);
  const dark = useSelector((state) => state.dark.dark);

  const { currentUser } = useSelector((state) => state.auth);

  return (
    <div className={dark ? "App theme-dark" : "App"}>
      <Routes>
        <Route
          path="/"
          element={currentUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/register"
          element={currentUser ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/login"
          element={currentUser ? <Navigate to="/" /> : <Login />}
        />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
