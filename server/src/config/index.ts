process.env.NODE_ENV = process.env.NODE_ENV || "development";

export default {
  port: process.env.PORT || "8000",
  monogURI: process.env.MONGODB_URI,

  // API configs
  api: {
    prefix: "/api"
  }
};
