import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import postService from "../../../services/post.service";

const initialState = {
  post: [],
  isLoading: false,
  status: null,
};

export const getOnePost = createAsyncThunk("post/getOnePost", async ({ id }) => {
  try {
    const response = await postService.getOnePost(id);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const getOnePostSlice = createSlice({
  name: "onePost",
  initialState,
  reducers: {},
  extraReducers: {
    [getOnePost.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [getOnePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    [getOnePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    },
  },
});

export const getOnePostReducer = getOnePostSlice.reducer;
