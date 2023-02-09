import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import postService from "../../../services/post.service";

const initialState = {
  post: [],
  isLoading: false,
};

export const createPosts = createAsyncThunk("post/createPost", async ({ title, text, imageUrl }) => {
  try {
    const response = await postService.createPost(title, text, imageUrl);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [createPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [createPosts.fulfilled]: (state, action) => {
      state.post.push(action.payload);
      state.isLoading = false;
    },
    [createPosts.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const createPostReducer = postSlice.reducer;
