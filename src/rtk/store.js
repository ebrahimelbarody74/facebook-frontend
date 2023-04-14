import { configureStore, createStore } from "@reduxjs/toolkit";
import darkModeSlice from "./slices/darkModeSlice";

export const store = configureStore({
  reducer: {
    dark: darkModeSlice,
  },
});
