import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getMyPosts } from "../../redux/slices/post/getMyPosts";

import Post from "../../components/block/post";
import Loader from "../../components/ui/loader";
import ButtonDefault from "../../components/ui/buttonDefault";

import style from "./index.module.scss";

const MyPosts = () => {
  const dispatch = useDispatch();
  const id = useParams();
  const posts = useSelector((state) => state.myPosts.posts);
  const isLoading = useSelector((state) => state.myPosts.isLoading);
  const user = useSelector((state) => state.auth.user);

  // -------------------------------------------------------------

  // fetch my posts

  React.useEffect(() => {
    dispatch(getMyPosts(id));
  }, [dispatch]);

  // -------------------------------------------------------------

  if (isLoading) {
    return <Loader />;
  }

  // -------------------------------------------------------------

  if (!posts.length) {
    return (
      <>
        <h1>You don't have posts!</h1>
        <br />
        <NavLink to="/create-post">
          <ButtonDefault disabled={!user?.activated}>Create post!</ButtonDefault>
        </NavLink>
      </>
    );
  }

  return (
    <section className={style.mypost__page}>
      {posts?.map((obj) => (
        <Post obj={obj} key={obj._id} />
      ))}
    </section>
  );
};

export default MyPosts;
