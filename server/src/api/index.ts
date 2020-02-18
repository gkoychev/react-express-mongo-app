import { Router, Request, Response, NextFunction } from "express";
import posts from "./posts";
import users from "./users";

// global 500 handler
const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500);
  res.json({ error: err.message });
};

export default () => {
  const app = Router();

  posts(app);
  users(app);

  app.use(errorHandler);

  return app;
};
