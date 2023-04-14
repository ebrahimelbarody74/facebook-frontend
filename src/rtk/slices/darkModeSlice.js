import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
  name: "darkModeSlice",
  initialState: { dark: JSON.parse(localStorage.getItem("dark")) || false },
  reducers: {
    darkMode: (state, action) => {
      state.dark = action.payload;
      localStorage.setItem("dark", JSON.stringify(action.payload));
    },
  },
});

export const { darkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
