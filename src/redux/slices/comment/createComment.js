import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import commentService from "../../../services/comment.service";

const initialState = {
  comment: [],
  isLoading: false,
};

export const createComment = createAsyncThunk("comment/createComment", async ({ id, text, userId }) => {
  try {
    const response = await commentService.createComment(id, text, userId);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    [createComment.pending]: (state) => {
      state.isLoading = true;
    },
    [createComment.fulfilled]: (state, action) => {
      state.comment.push(action.payload);
      state.isLoading = false;
    },
    [createComment.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const createCommentReducer = commentSlice.reducer;
