import { Schema, model } from "mongoose";

const userSchema = new Schema({
  userId: Number,
  name: String,
  username: String,
  email: String,
  phone: String,
  website: String,
  address: {
    street: String,
    suite: String,
    city: String,
    zipcode: String
  },
  company: {
    name: String,
    catchPhrase: String,
    bs: String
  }
});

const User = model("User", userSchema);

export default User;
