import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { API_URL } from "../../../api";

const initialState = {
  user: null,
  accessToken: null,
  isLoading: false,
};

export const getMe = createAsyncThunk("auth/getMe", async () => {
  try {
    const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
    localStorage.setItem("token", response.data.accessToken);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [getMe.pending]: (state) => {
      state.isLoading = true;
    },
    [getMe.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.accessToken = action.payload;
    },
    [getMe.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const isCheckAuth = (state) => Boolean(state.auth.accessToken);

export const authReducer = authSlice.reducer;
