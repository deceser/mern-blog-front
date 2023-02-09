import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import postService from "../../../services/post.service";

const initialState = {
  post: [],
  isLoading: false,
};

export const deletePost = createAsyncThunk("post/deletePost", async ({ id }) => {
  try {
    const response = await postService.deletePost(id);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const deletePostSlice = createSlice({
  name: "deletePost",
  initialState,
  reducers: {},
  extraReducers: {
    [deletePost.pending]: (state) => {
      state.isLoading = true;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = state.post.filter((post) => post._id !== action.payload._id);
    },
    [deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    },
  },
});

export const deletePostReducer = deletePostSlice.reducer;
