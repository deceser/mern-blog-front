import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import userService from "../../../services/user.service";

const initialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isLoading: false,
};

export const registrationUser = createAsyncThunk("auth/registrationUser", async ({ username, email, password }) => {
  try {
    const response = await userService.registration(username, email, password);
    localStorage.setItem("token", response.data.accessToken);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {},
  extraReducers: {
    [registrationUser.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [registrationUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.status = action.payload;
      state.accessToken = action.payload;
      state.refreshToken = action.payload;
    },
    [registrationUser.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const registrationReducer = registrationSlice.reducer;
