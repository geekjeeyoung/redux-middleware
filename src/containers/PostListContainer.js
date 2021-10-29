import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import PostList from "../components/PostList";
import { getPosts } from "../modules/posts";

function PostListContainer() {
  const { loading, data, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading && !data) return <div>Loading...</div>;
  if (error != null) return <div>Error!</div>;
  if (!data) return null;

  return <PostList posts={data} />;
}

export default PostListContainer;
