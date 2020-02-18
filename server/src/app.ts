import express from "express";
import cors from "cors";

import initMongoose from "./initializers/mongoose";
import api from "./api";
import config from "./config";

const app = express();
app.use(cors());

const startServer = async () => {
  await initMongoose();

  // Load API routes
  app.use(config.api.prefix, api());

  app.listen(config.port, () => {
    console.log(`Listening to requests on http://localhost:${config.port}`);
  });
};

startServer();
