import { createAction } from "@reduxjs/toolkit";
import { getPostsUrl } from "../../utils/apiUtils";

export const postsSetPage = createAction<number>("posts/setPage");

const fetchPostsStarted = createAction("posts/fetch/started");
const fetchPostsSucceeded = createAction<PostsResponce>(
  "posts/fetch/succeeded"
);
const fetchPostsFailed = createAction<Error>("posts/fetch/failed");

interface FetchPostsParams {
  page: number;
  limit?: number;
}
interface PostsResponce {
  currentPage: number;
  pages: number;
  total: number;
  posts: Array<{ postId: number; userId: number; title: string; body: string }>;
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
