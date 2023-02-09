import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import userService from "../../../services/user.service";

const initialState = {
  accessToken: null,
  refreshToken: null,
  isLoading: false,
};

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    const response = await userService.logout();
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const logoutSlice = createSlice({
  name: "logout",
  initialState,
  reducers: {},
  extraReducers: {
    [logout.pending]: (state) => {
      state.isLoading = true;
    },
    [logout.fulfilled]: (state) => {
      state.isLoading = false;
      state.accessToken = null;
      state.refreshToken = null;
    },
    [logout.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const logoutReducer = logoutSlice.reducer;
