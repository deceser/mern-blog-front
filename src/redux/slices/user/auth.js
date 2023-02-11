import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { API_URL } from "../../../api";

const initialState = {
  user: null,
  accessToken: null,
  isLoading: false,
  error: null,
};

export const getMe = createAsyncThunk("auth/getMe", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
    localStorage.setItem("token", response.data.accessToken);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [getMe.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getMe.fulfilled]: (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.user = action.payload;
      state.accessToken = action.payload;
    },
    [getMe.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const isCheckAuth = (state) => Boolean(state.auth.accessToken);

export const authReducer = authSlice.reducer;
