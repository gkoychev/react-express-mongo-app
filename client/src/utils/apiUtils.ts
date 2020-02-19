import { API_PREFIX, API_GET_USER, API_GET_POSTS } from "../constants";

export const getUserUrl = (id: number | string) =>
  `${API_PREFIX}/${API_GET_USER}/${id}`;

interface getPostUrlParams {
  page: number;
  limit?: number;
}
export const getPostsUrl = (params: getPostUrlParams) =>
  `${API_PREFIX}/${API_GET_POSTS}/${params.page}${
    params.limit ? `?limit=${params.limit}` : ""
  }`;
