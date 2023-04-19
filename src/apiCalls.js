import axios from "axios";
import { loginStart, loginSuccess, loginFailure } from "./rtk/slices/authSlice";

export const login = async (dispatch, navigate, api, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`/auth/${api}`, user);
    console.log(res);
    dispatch(loginSuccess(res.data));
    localStorage.setItem("user", JSON.stringify(res.data));
    navigate("/");
  } catch (err) {
    dispatch(loginFailure());
    console.log(err);
  }
};
