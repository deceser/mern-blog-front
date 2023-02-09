import React from "react";
import { useSelector } from "react-redux";

import Post from "./index";

const PostList = ({}) => {
  const filterPost = useSelector((state) => state.posts.sortBy);

  if (!filterPost.length) {
    return <h1>no post</h1>;
  }

  return (
    <>
      {filterPost?.map((obj) => (
        <Post obj={obj} key={obj._id} />
      ))}
    </>
  );
};

export default PostList;
