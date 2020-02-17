import { Schema, model } from "mongoose";

const postSchema = new Schema({
  postId: Number,
  // userId: Number,
  _userId: Schema.Types.ObjectId,
  title: String,
  body: String
});

const Post = model("Post", postSchema);

export default Post;
