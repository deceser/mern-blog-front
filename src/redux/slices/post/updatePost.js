import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import postService from "../../../services/post.service";

const initialState = {
  post: [],
  isLoading: false,
};

export const editPost = createAsyncThunk("post/editPost", async ({ id, title, text, imageUrl }) => {
  try {
    const response = await postService.updatePost(id, title, text, imageUrl);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const updatePostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [editPost.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [editPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    [editPost.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const upadatePostReducer = updatePostSlice.reducer;
