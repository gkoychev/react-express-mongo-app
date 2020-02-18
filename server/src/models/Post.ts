import { Schema, model } from "mongoose";

const postSchema = new Schema({
  _userId: Schema.Types.ObjectId,

  postId: Number,
  userId: Number,
  title: String,
  body: String
});

const Post = model("Post", postSchema);

export default Post;
