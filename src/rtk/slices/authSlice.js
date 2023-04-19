import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const postData = createAsyncThunk("postData", async (data, thunkAPI) => {
  const response = await axios.post("/auth/login", data);

  return response.data;
});
const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    isFeching: false,
    error: false,
    currentUser: JSON.parse(localStorage.getItem("user")) || null,
  },
  reducers: {
    loginStart: (state, actios) => {
      state.isFeching = true;
    },
    loginSuccess: (state, action) => {
      state.isFeching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state, action) => {
      state.isFeching = false;
      state.error = true;
    },
  },
  extraReducers: (builder) => {
    // Do something while pending if you want.
    builder.addCase(postData.pending, (state, action) => {
      loginStart();
    });
    // Do something when passes.
    builder.addCase(postData.fulfilled, (state, action) => {
      loginSuccess(action.payload);
    });
    // Do something if fails.
    builder.addCase(postData.rejected, (state, action) => {
      loginFailure();
    });
  },
});

export const { loginStart, loginSuccess, loginFailure } = authSlice.actions;
export default authSlice.reducer;
