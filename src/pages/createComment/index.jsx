import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { getOnePost } from "../../redux/slices/post/getOnePost";
import { getCommentsOfPost } from "../../redux/slices/comment/getCommentOfPost";
import { createComment } from "../../redux/slices/comment/createComment";

import Post from "../../components/block/post";
import CommentList from "../../components/block/comment/CommentList";

import TextField from "../../components/ui/textField";
import ButtonDefault from "../../components/ui/buttonDefault";

import style from "./index.module.scss";

const CreateComment = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.onePost.post);
  const user = useSelector((state) => state.auth.user);
  const comments = useSelector((state) => state.getCommentOfPost.comment);

  const [text, setComment] = React.useState("");

  // -------------------------------------------------------------

  // fetch one post id

  React.useEffect(() => {
    dispatch(getOnePost({ id }));
  }, [dispatch]);

  // -------------------------------------------------------------

  // user id

  const userId = user.id;

  // create comment

  const addComment = async (event) => {
    event.preventDefault();
    try {
      await dispatch(createComment({ id, text, userId }));
      await dispatch(getCommentsOfPost({ id }));
      toast.success("Success");
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  // -------------------------------------------------------------

  // fetch comments of post

  React.useEffect(() => {
    dispatch(getCommentsOfPost({ id }));
  }, [dispatch]);

  // -------------------------------------------------------------

  return (
    <section className={style.postId__page}>
      <div>
        <Post obj={post} />
      </div>
      <div>
        {!comments.length ? null : <CommentList />}

        <div className={style.textfield}>
          <TextField value={text} onChange={(e) => setComment(e.target.value)} />
        </div>
        <ButtonDefault disabled={!text} onClick={addComment}>
          Create comment
        </ButtonDefault>
      </div>
    </section>
  );
};

export default CreateComment;
