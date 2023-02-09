import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import commentService from "../../../services/comment.service";

const initialState = {
  comments: [],
  isLoading: false,
  status: null,
};

export const getAllComment = createAsyncThunk("comment/getAllComment", async () => {
  try {
    const response = await commentService.getAllComment();
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const getCommentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllComment.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [getAllComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [getAllComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    },
  },
});

export const getCommentReducer = getCommentSlice.reducer;
