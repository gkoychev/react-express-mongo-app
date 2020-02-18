import mongoose from "mongoose";

// init schemas
import "../models/User";
import "../models/Post";

export default async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/test", {
      //todo: get from config
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    return mongoose.connection;
  } catch (error) {
    console.error(
      `Connection error: ${error.stack} on Worker process: ${process.pid}`
    );
    process.exit(1);
  }
};
