import { createAction } from "@reduxjs/toolkit";
import { getPostsUrl } from "../../utils/apiUtils";
import { PostsResponce } from "../../interfaces";

export const postsSetPage = createAction<number>("posts/setPage");

export const fetchPostsStarted = createAction("posts/fetch/started");

export const fetchPostsSucceeded = createAction<PostsResponce>(
  "posts/fetch/succeeded"
);
const fetchPostsFailed = createAction<Error>("posts/fetch/failed");

interface FetchPostsParams {
  page: number;
  limit?: number;
}
export const fetchPosts = ({ page, limit = 10 }: FetchPostsParams) => (
  dispatch: any
) => {
  dispatch(fetchPostsStarted());

  return fetch(getPostsUrl({ page, limit }))
    .then(res => res.json())
    .then(
      (data: PostsResponce) => dispatch(fetchPostsSucceeded(data)),
      (error: Error) => dispatch(fetchPostsFailed(error))
    );
};
