import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { createPosts } from "../../redux/slices/post/createPost";
import { editPost } from "../../redux/slices/post/updatePost";

import { API_URL } from "../../api";
import postService from "../../services/post.service";

import InputFile from "../../components/ui/inputFile";
import InputTitle from "../../components/ui/inputTitle";
import TextField from "../../components/ui/textField";
import ButtonDefault from "../../components/ui/buttonDefault";
import ButtonSecondary from "../../components/ui/buttonSecondary";

import style from "./index.module.scss";

const CreatePost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [post, setPost] = React.useState({ title: "", text: "", imageUrl: "" });

  // -------------------------------------------------------------

  // edit post

  const isUpdate = Boolean(id);

  React.useEffect(() => {
    if (id) {
      postService
        .getOnePost(id)
        .then(({ data }) => {
          setPost({ title: data.title, text: data.text, imageUrl: data.imageUrl });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  // -------------------------------------------------------------

  // upload image

  const handleImageUpload = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("image", file);
      const { data } = await axios.post(`${API_URL}/uploads`, formData);
      postService.updatePost(formData);
      setPost({ ...post, imageUrl: data.url });
    } catch (error) {
      console.log(error);
    }
  };

  // delete image

  const handleImageDelete = () => {
    setPost({ ...post, imageUrl: "" });
  };

  // -------------------------------------------------------------

  // create and update post

  const addPost = async (event) => {
    event.preventDefault();
    try {
      if (isUpdate) {
        // update post
        await dispatch(editPost({ id, ...post }));
      } else {
        // create post
        await dispatch(createPosts(post));
      }
      toast.success("Sccess");
      navigate("/posts");
    } catch (error) {
      console.log(error);
    }
  };

  // -------------------------------------------------------------

  return (
    <section>
      <form className={style.createPost__page}>
        {post.imageUrl ? (
          <ButtonSecondary onClick={handleImageDelete}>Delete Image</ButtonSecondary>
        ) : (
          <InputFile onChange={handleImageUpload} />
        )}

        {post.imageUrl && <img className={style.image} src={`${API_URL}${post.imageUrl}`} alt="image" />}

        <InputTitle value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} />

        <div className={style.textfield}>
          <TextField value={post.text} onChange={(e) => setPost({ ...post, text: e.target.value })} />
        </div>

        <ButtonDefault disabled={!post.title || !post.text} onClick={addPost}>
          {isUpdate ? "Update Post" : "Create Post"}
        </ButtonDefault>
      </form>
    </section>
  );
};

export default CreatePost;
