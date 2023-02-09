import Register from "../pages/register";
import Login from "../pages/login";

import AllPosts from "../pages/allPosts";
import CreateComment from "../pages/createComment";
import MyPosts from "../pages/myPosts";
import CreatePost from "../pages/createPost";

// import Ui from "../pages/ui";

export const publicRoutes = [
  { path: "/registration", component: Register },
  { path: "/login", component: Login },
];

export const privateRoutes = [
  { path: "/posts", component: AllPosts },
  { path: "/comments/:id", component: CreateComment },
  { path: "/posts/:id/edit", component: CreatePost },
  { path: "/my-posts/:id", component: MyPosts },
  { path: "/create-post", component: CreatePost },
];
