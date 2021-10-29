import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../components/Post";
import { getPost, goToHome } from "../modules/posts";

function PostContainer({ postId }) {
  const { loading, data, error } = useSelector(
    (state) => state.posts.post[postId]
  ) || {
    loading: false,
    data: null,
    error: null,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(postId));
  }, [postId, dispatch]);

  if (loading && !data) return <div>Loading...</div>;
  if (error != null) return <div>Error!</div>;
  if (!data) return null;

  return (
    <>
      <button onClick={() => dispatch(goToHome())}>홈으로 이동</button>
      <Post post={data} />
    </>
  );
}

export default PostContainer;

/*
데이터를 제대로 캐싱하고 싶다면 아예 요청을 하지 않는 방식을 택하시고, 
포스트 정보가 바뀔 수 있는 가능성이 있다면 
새로 불러오긴 하지만 로딩중은 표시하지 않는 형태로 구현을 하시면 되겠습니다.
*/
