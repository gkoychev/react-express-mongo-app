import mongoose from "mongoose";
import config from "../config";

// init schemas
import "../models/User";
import "../models/Post";

export default async () => {
  try {
    await mongoose.connect(
      config.monogURI || "mongodb://localhost:27017/test",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    return mongoose.connection;
  } catch (error) {
    console.error(
      `Connection error: ${error.stack} on Worker process: ${process.pid}`
    );
    process.exit(1);
  }
};
