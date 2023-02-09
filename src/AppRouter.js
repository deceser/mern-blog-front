import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { isCheckAuth } from "./redux/slices/user/auth";
import { privateRoutes, publicRoutes } from "./routes";

import AllPosts from "./pages/allPosts";
import Login from "./pages/login";

const AppRouter = () => {
  const isAuth = useSelector(isCheckAuth);

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.component />} />
      ))}
      <Route path="*" element={<AllPosts />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.component />} />
      ))}
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
