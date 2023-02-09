import React from "react";
import { useSelector } from "react-redux";

import { isCheckAuth } from "../redux/slices/user/auth";

import Header from "../components/block/header";

const DefaultLayout = ({ children }) => {
  const isAuth = useSelector(isCheckAuth);
  return (
    <div className="container">
      {isAuth ? <Header /> : null}
      {children}
    </div>
  );
};

export default DefaultLayout;
