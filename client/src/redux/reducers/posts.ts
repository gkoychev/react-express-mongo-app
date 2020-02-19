import { createReducer, AnyAction } from "@reduxjs/toolkit";

const initialState = {
  ready: false,
  loading: false,
  posts: [],
  currentPage: 1,
  pages: 0,
  error: null
};
export type PostsState = typeof initialState;

export default createReducer(initialState, {
  "posts/fetch/started": (state: PostsState) => {
    state.loading = true;
  },

  "posts/fetch/failed": (state: PostsState, action: AnyAction) => {
    return {
      ...state,
      loading: false,
      error: action?.error?.message || "something went wrong"
    };
  },

  "posts/fetch/succeeded": (state: PostsState, { payload }: AnyAction) => {
    return { ...state, ...payload, ready: true, loading: false };
  },

  "posts/setPage": (state: PostsState, { payload }: AnyAction) => {
    state.currentPage = payload;
  }
});
