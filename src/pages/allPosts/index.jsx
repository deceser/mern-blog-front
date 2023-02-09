import React from "react";
import { useDispatch } from "react-redux";

import { getAllPost } from "../../redux/slices/post/getPosts";

import PostList from "../../components/block/post/PostList";

import style from "./index.module.scss";

const AllPosts = () => {
  const dispatch = useDispatch();

  // -------------------------------------------------------------

  // fetch all post

  React.useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);

  // -------------------------------------------------------------

  return (
    <section className={style.main__page}>
      <PostList />
    </section>
  );
};

export default AllPosts;
