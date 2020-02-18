import express from "express";
import cors from "cors";

import initMongoose from "./initializers/mongoose";
import api from "./api";

const app = express();
app.use(cors());

const port = process.env.PORT || "8000";

const startServer = async () => {
  await initMongoose();

  // Load API routes
  app.use(api());

  app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });
};

startServer();
