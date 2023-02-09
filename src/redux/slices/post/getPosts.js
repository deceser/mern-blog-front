import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import postService from "../../../services/post.service";

const initialState = {
  post: [],
  sortBy: [],
  isLoading: false,
  status: null,
};

export const getAllPost = createAsyncThunk("post/getAllPost", async () => {
  try {
    const response = await postService.getPosts();
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const getPostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    filterPosts: (state, action) => {
      state.sortBy = action.payload;
    },
  },
  extraReducers: {
    [getAllPost.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [getAllPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    [getAllPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    },
  },
});

export const { filterPosts } = getPostSlice.actions;

export const getPostReducer = getPostSlice.reducer;
