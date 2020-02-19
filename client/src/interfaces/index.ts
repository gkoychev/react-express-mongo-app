export interface Post {
  postId: number;
  userId: number;
  title: string;
  body: string;
}

export interface PostsArray extends Array<Post> {}

export interface PostsResponce {
  currentPage: number;
  pages: number;
  total: number;
  posts: Array<Post>;
}
