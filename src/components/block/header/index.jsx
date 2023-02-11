import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { filterPosts } from "../../../redux/slices/post/getPosts";
import { usePosts } from "../../../hooks/usePosts";
import { logout } from "../../../redux/slices/user/logout";

import NavbarUi from "../../ui/navbar";
import SearchUi from "../../ui/search";
import SelectUi from "../../ui/select";

import style from "./index.module.scss";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const posts = useSelector((state) => state.posts.post);

  // -------------------------------------------------------------

  // logout

  const handleLogout = async () => {
    localStorage.removeItem("token");
    dispatch(logout());
  };

  // -----------------------------------------------------------------

  // sort and search posts

  const [filter, setFilter] = React.useState({ sort: "", search: "" });

  const searchAndSort = usePosts(posts, filter.sort, filter.search);

  React.useEffect(() => {
    dispatch(filterPosts(searchAndSort));
  }, [searchAndSort]);

  // -----------------------------------------------------------------

  return (
    <header className={style.header}>
      <div className={style.header__left}>
        <h4>{user.user?.username}</h4>
        <SearchUi value={filter.search} onChange={(e) => setFilter({ ...filter, search: e.target.value })} />
        <SelectUi
          onChange={(sortSelect) => setFilter({ ...filter, sort: sortSelect })}
          options={[
            { value: "title", name: "Sort title" },
            { value: "text", name: "Sort description" },
            { value: "viewCount", name: "Sort views" },
          ]}
        />
      </div>
      <NavbarUi user={user} handleLogout={handleLogout} />
    </header>
  );
};

export default Header;
