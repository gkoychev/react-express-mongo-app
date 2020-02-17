import express from "express";
import initMongoose from "./configs/mongoose";
import initRoutes from "./routes";

const app = express();
const port = process.env.PORT || "8000";

const startServer = async () => {
  await initMongoose();
  initRoutes(app);

  app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });
};

startServer();
