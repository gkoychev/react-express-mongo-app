import { RootState } from "../reducers";
import { createSelector } from "@reduxjs/toolkit";

import { Post } from "../../interfaces";

export const getPosts = (state: RootState) => state.posts.posts;

const getId = (state: RootState, id?: string) => id;

export const getPostById = createSelector(
  [getPosts, getId],
  (posts: Array<Post>, id?: string) => {
    return posts.find(post => String(post.postId) === id);
  }
);

export const getUser = (state: RootState) => state.user;
export const getUserIsLoading = createSelector(
  getUser,
  user => user.loading || !user.ready
);
