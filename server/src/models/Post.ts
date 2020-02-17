import { Schema, model } from "mongoose";

const postSchema = new Schema({
  postId: Number,
  userId: Number,
  title: String,
  body: String
});

const Post = model("Post", postSchema);

export default Post;
