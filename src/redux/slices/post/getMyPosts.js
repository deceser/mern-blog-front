import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import postService from "../../../services/post.service";

const initialState = {
  posts: [],
  isLoading: false,
  status: null,
};

export const getMyPosts = createAsyncThunk("post/getMyPosts", async ({ id }) => {
  try {
    const response = await postService.getMyPosts(id);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const getMyPostsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getMyPosts.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [getMyPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [getMyPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    },
  },
});

export const getMyPostsReducer = getMyPostsSlice.reducer;
