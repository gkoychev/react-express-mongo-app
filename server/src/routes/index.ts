import { Request, Response, Express } from "express";

export default (app: Express) => {
  app.get("/", (_req: Request, res: Response) => {
    res.status(200).send("Hello World!!!");
  });
};
