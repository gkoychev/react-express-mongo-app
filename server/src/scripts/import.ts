import fetch from "node-fetch";
import mongoose from "mongoose";

import initMongoose from "../initializers/mongoose";

async function start() {
  const db = await initMongoose();
  // get refs to the models we defined above
  const User = mongoose.model("User");
  const Post = mongoose.model("Post");

  // fetch external data
  const users = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();
  const posts = await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();

  // clear all existing documents from the collections
  await Post.deleteMany({});
  await User.deleteMany({});

  // import Users
  await Promise.all(
    users.map(async (UserDataType: any) => {
      const user = new User({ userId: UserDataType.id, ...UserDataType });
      await user.save();
    })
  );

  // import Posts
  for (const postData of posts) {
    const post = new Post({ postId: postData.id, ...postData });
    const user = await User.findOne({ userId: postData.userId });
    post.set("_userId", user && user.id);
    await post.save();
  }

  console.log("Done!");
  db.close();
}

start();
