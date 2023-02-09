import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

import { toast } from "react-toastify";
import { BsEye } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { BsPencil } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

import { deletePost } from "../../../redux/slices/post/deletePost";
import { getAllPost } from "../../../redux/slices/post/getPosts";
import { getMyPosts } from "../../../redux/slices/post/getMyPosts";

import { API_URL } from "../../../api";

import style from "./index.module.scss";

const Post = ({ obj }) => {
  const id = useParams();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  // -------------------------------------------------------------

  // delete post

  const handleDeletePost = async () => {
    try {
      await dispatch(deletePost({ id: obj._id }));
      await dispatch(getAllPost());
      await dispatch(getMyPosts(id));
      toast.success("Deleted");
    } catch (error) {
      console.log(error);
    }
  };

  // -------------------------------------------------------------

  return (
    <article className={style.post}>
      <div className={style.image}>
        {obj.imageUrl ? <img alt="image" src={`${API_URL}${obj.imageUrl}`} /> : <h1>No Image</h1>}
      </div>

      <div className={style.title}>
        <h1>{obj.title}</h1>
      </div>

      <div className={style.text}>
        <h4>{obj.text}</h4>
      </div>

      <div className={style.info__post}>
        <div className={style.author__post}>
          <h3>Author:</h3>
          <p>{obj.user?.username}</p>
        </div>

        <div className={style.icon}>
          <div className={user?.id === obj.user?._id ? style.delete : style.visibilyti}>
            <AiOutlineDelete onClick={handleDeletePost} size={22} />
          </div>
          <div className={user?.id === obj.user?._id ? style.update : style.visibilyti}>
            <NavLink to={`/posts/${obj._id}/edit`}>
              <BsPencil size={20} />
            </NavLink>
          </div>
          <div className={style.view}>
            <BsEye size={22} />
            <p>{obj.viewCount}</p>
          </div>
          <div className={style.comment}>
            <NavLink to={`/comments/${obj._id}`}>
              <BiComment size={24} />
              <p>Write a comment...</p>
            </NavLink>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Post;
