import mongoose from "mongoose";

import { PAGE_LIMIT } from "../constants";

export class PostService {
  async getPage(page: number, limit: number = PAGE_LIMIT) {
    const Post = mongoose.model("Post");

    const numOfPosts = await Post.count({});
    const foundPosts = await Post.find({}, { _id: 0, __v: 0, _userId: 0 })
      .skip((page - 1) * limit)
      .limit(limit);

    return {
      currentPage: page,
      posts: foundPosts,
      pages: Math.ceil(numOfPosts / limit),
      total: numOfPosts
    };
  }
}

export default new PostService();
