import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import userService from "../../../services/user.service";

const initialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isLoading: false,
  error: null,
};

export const loginUser = createAsyncThunk("auth/loginUser", async ({ username, password }, { rejectWithValue }) => {
  try {
    const response = await userService.login(username, password);
    localStorage.setItem("token", response.data.accessToken);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.user = action.payload;
      state.accessToken = action.payload;
      state.refreshToken = action.payload;
    },
    [loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const loginReducer = loginSlice.reducer;
