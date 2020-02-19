export interface PostDataType {
  postId: number;
  userId: number;
  title: string;
  body: string;
}

export interface PostsArray extends Array<PostDataType> {}

export interface PostsResponse {
  currentPage: number;
  pages: number;
  total: number;
  posts: Array<PostDataType>;
}

export interface UserDataType {
  address: any;
  company: any;
  userId: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}
