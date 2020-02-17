import mongoose from "mongoose";

export default async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 3000
    });
    return mongoose.connection;
  } catch (error) {
    console.error(
      `Connection error: ${error.stack} on Worker process: ${process.pid}`
    );
    process.exit(1);
  }
};
