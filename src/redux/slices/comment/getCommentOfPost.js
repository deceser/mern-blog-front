import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import commentService from "../../../services/comment.service";

const initialState = {
  comment: [],
  isLoading: false,
  status: null,
};

export const getCommentsOfPost = createAsyncThunk("comment/getCommentsOfPost", async ({ id }) => {
  try {
    const response = await commentService.getCommentsOfPost(id);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const getCommentsOfPostSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    [getCommentsOfPost.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [getCommentsOfPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = action.payload;
    },
    [getCommentsOfPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    },
  },
});

export const getCommentsOfPostReducer = getCommentsOfPostSlice.reducer;
