import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../components/Post";
import { getPost } from "../modules/posts";

function PostContainer({ postId }) {
  const { loading, data, error } = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(postId));
  }, [postId, dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error != null) return <div>Error!</div>;
  if (!data) return null;

  return <Post post={data} />;
}

export default PostContainer;
