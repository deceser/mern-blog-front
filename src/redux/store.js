import { configureStore } from "@reduxjs/toolkit";

import userService from "../services/user.service";
import postService from "../services/post.service";
import commentService from "../services/comment.service";

import { loginReducer } from "./slices/user/login";
import { registrationReducer } from "./slices/user/registration";
import { authReducer } from "./slices/user/auth";
import { logoutReducer } from "./slices/user/logout";

import { createPostReducer } from "./slices/post/createPost";
import { getPostReducer } from "./slices/post/getPosts";
import { getMyPostsReducer } from "./slices/post/getMyPosts";
import { getOnePostReducer } from "./slices/post/getOnePost";
import { deletePostReducer } from "./slices/post/deletePost";
import { upadatePostReducer } from "./slices/post/updatePost";

import { getCommentReducer } from "./slices/comment/getComments";
import { createCommentReducer } from "./slices/comment/createComment";
import { deleteCommentReducer } from "./slices/comment/deleteComment";
import { getCommentsOfPostReducer } from "./slices/comment/getCommentOfPost";

const store = configureStore({
  reducer: {
    login: loginReducer,
    registration: registrationReducer,
    auth: authReducer,
    logout: logoutReducer,

    post: createPostReducer,
    posts: getPostReducer,
    myPosts: getMyPostsReducer,
    onePost: getOnePostReducer,
    deletePost: deletePostReducer,
    upadatePost: upadatePostReducer,

    comment: createCommentReducer,
    comments: getCommentReducer,
    deleteComment: deleteCommentReducer,
    getCommentOfPost: getCommentsOfPostReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: userService,
        extraArgument: postService,
        extraArgument: commentService,
      },
      serializableCheck: false,
    }),
});

export default store;
