import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { toast } from "react-toastify";
import { AiOutlineDelete } from "react-icons/ai";

import { deleteComment } from "../../../redux/slices/comment/deleteComment";
import { getCommentsOfPost } from "../../../redux/slices/comment/getCommentOfPost";

import style from "./index.module.scss";

const CommentItem = ({ obj }) => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  // -------------------------------------------------------------

  // delete comment

  const commentId = obj._id;
  const postId = id;

  const handleDeleteComment = async () => {
    try {
      await dispatch(deleteComment({ postId, commentId }));
      await dispatch(getCommentsOfPost({ id }));
      toast.success("Deleted");
    } catch (error) {
      console.log(error);
    }
  };

  // -------------------------------------------------------------

  return (
    <div className={style.comment__item}>
      <div className={style.item__delete}>
        <div className={style.comment__user}>
          <h4>{obj.user?.username}</h4>
        </div>
        <div className={user?.id === obj.user?._id ? style.icon__delete : style.visibilyti}>
          <AiOutlineDelete size={21} onClick={handleDeleteComment} />
        </div>
      </div>
      <div className={style.comment__text}>
        <h4>{obj.text}</h4>
      </div>
    </div>
  );
};

export default CommentItem;
