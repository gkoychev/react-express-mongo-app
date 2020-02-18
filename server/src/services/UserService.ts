import mongoose from "mongoose";

export class UserService {
  async getUser(id: number) {
    const User = mongoose.model("User");
    const user = await User.findOne({ userId: id }, { _id: 0, __v: 0 });
    return user;
  }
}

export default new UserService();
