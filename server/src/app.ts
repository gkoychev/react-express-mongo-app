import express from "express";
import initMongo from "./configs/mongoose";
import initRoutes from "./routes";

const app = express();
const port = process.env.PORT || "8000";

const startServer = async () => {
  await initMongo();
  initRoutes(app);

  app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });
};

startServer();
