import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import commentService from "../../../services/comment.service";

const initialState = {
  comment: [],
  isLoading: false,
};

export const deleteComment = createAsyncThunk("comment/deleteComment", async ({ postId, commentId }) => {
  try {
    const response = await commentService.deleteComment(postId, commentId);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const deleteCommentSlice = createSlice({
  name: "deleteComment",
  initialState,
  reducers: {},
  extraReducers: {
    [deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = state.comment.filter((comment) => comment._id !== action.payload._id);
    },
    [deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const deleteCommentReducer = deleteCommentSlice.reducer;
