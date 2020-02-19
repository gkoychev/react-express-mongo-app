export interface Post {
  postId: number;
  userId: number;
  title: string;
  body: string;
}

export interface PostsArray extends Array<Post> {}

export interface PostsResponse {
  currentPage: number;
  pages: number;
  total: number;
  posts: Array<Post>;
}

export interface UserResponse {
  address: any;
  company: any;
  userId: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}
