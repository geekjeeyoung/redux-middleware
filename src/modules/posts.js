import * as postsApi from "../api/posts";
import {
  createPromiseThunk,
  createPromiseThunkById,
  handleAsyncActions,
  handleAsyncActionsById,
  reducerUtils,
} from "../lib/asyncUtils";

/* 액션 타입 */

// 포스트 여러개 조회하기
const GET_POSTS = "GET_POSTS"; // 요청 시작
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS"; // 요청 성공
const GET_POSTS_ERROR = "GET_POSTS_ERROR"; // 요청 실패

// 포스트 하나 조회하기
const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";

export const getPosts = createPromiseThunk(GET_POSTS, postsApi.getPosts);
export const getPost = createPromiseThunkById(GET_POST, postsApi.getPostById);

const initialState = {
  posts: reducerUtils.initial(),
  post: {},
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      const postsReducer = handleAsyncActions(GET_POSTS, "posts", true);
      return postsReducer(state, action);

    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      const postReducer = handleAsyncActionsById(GET_POST, "post", true);
      return postReducer(state, action);

    default:
      return state;
  }
}
