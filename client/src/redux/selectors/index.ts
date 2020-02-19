import { RootState } from "../reducers";
import { createSelector } from "@reduxjs/toolkit";

import { PostDataType, UserDataType } from "../../interfaces";

export const getPosts = (state: RootState) => state.posts.posts;

const getId = (state: RootState, id?: string) => id;

export const getPostById = createSelector(
  [getPosts, getId],
  (posts: Array<PostDataType>, id?: string) => {
    return posts.find(post => String(post.postId) === id);
  }
);

export const getUserState = (state: RootState) => state.user;
export const getUserData = (state: RootState): UserDataType | undefined =>
  state.user.data;

export const getUserIsLoading = createSelector(
  getUserState,
  user => user.loading || !user.ready
);
