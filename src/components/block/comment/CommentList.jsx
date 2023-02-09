import React from "react";
import { useSelector } from "react-redux";

import CommentItem from "./index";

import style from "./index.module.scss";

const Comment = ({}) => {
  const comments = useSelector((state) => state.getCommentOfPost.comment);

  return (
    <article className={style.comment__block}>
      {comments?.map((obj) => (
        <CommentItem obj={obj} key={obj._id} />
      ))}
    </article>
  );
};

export default Comment;
