import React from "react";
import { NavLink } from "react-router-dom";

import ButtonDefault from "../buttonDefault";
import ButtonSecondary from "../buttonSecondary";

import style from "./index.module.scss";

const NavbarUi = ({ handleLogout, user }) => {
  return (
    <nav className={style.headerBtn}>
      <NavLink to="/posts">
        <ButtonDefault>Home</ButtonDefault>
      </NavLink>
      <NavLink to={`/my-posts/${user.id}`}>
        <ButtonDefault>My Posts</ButtonDefault>
      </NavLink>
      <NavLink to="create-post">
        <ButtonDefault disabled={!user.user?.activated}>Create Post</ButtonDefault>
      </NavLink>
      <NavLink>
        <ButtonSecondary onClick={handleLogout}>Log Out</ButtonSecondary>
      </NavLink>
    </nav>
  );
};

export default NavbarUi;
