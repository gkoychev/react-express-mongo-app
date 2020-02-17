import fetch from "node-fetch";
import mongoose from "mongoose";

import initMongoose from "../configs/mongoose";

async function start() {
  const db = await initMongoose();

  // get refs to the models we defined above
  var User = mongoose.model("User");
  var Post = mongoose.model("Post");

  // clear all existing documents from the collections
  await Post.deleteMany({});
  await User.deleteMany({});

  const users = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();
  const posts = await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();

  // create users
  await Promise.all(
    users.map(async (userData: any) => {
      const user = new User({ userId: userData.id, ...userData });
      const res = await user.save();
    })
  );

  console.log("Done!");
  db.close();
}

start();
