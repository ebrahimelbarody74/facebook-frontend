import { configureStore, createStore } from "@reduxjs/toolkit";
import darkModeSlice from "./slices/darkModeSlice";
import authSlice from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    dark: darkModeSlice,
    auth: authSlice,
  },
});
