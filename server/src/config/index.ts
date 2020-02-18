process.env.NODE_ENV = process.env.NODE_ENV || "development";

export default {
  monogURI: process.env.MONGODB_URI
};
