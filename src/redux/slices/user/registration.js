import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import userService from "../../../services/user.service";

const initialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isLoading: false,
  error: null,
};

export const registrationUser = createAsyncThunk(
  "auth/registrationUser",
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      const response = await userService.registration(username, email, password);
      localStorage.setItem("token", response.data.accessToken);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {},
  extraReducers: {
    [registrationUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [registrationUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
      state.accessToken = action.payload;
      state.refreshToken = action.payload;
    },
    [registrationUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const registrationReducer = registrationSlice.reducer;
