import { Router, Request, Response, NextFunction } from "express";

import PostService from "../services/PostService";

export default (router: Router) => {
  router.get(
    "/posts/:page?",
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const page = req.params.page || 1;

        const pageData = await PostService.getPage(+page);

        res.json(pageData);
      } catch (err) {
        next(err);
      }
    }
  );
};
