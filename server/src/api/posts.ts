import { Router, Request, Response, NextFunction } from "express";

import PostService from "../services/PostService";
import { PAGE_LIMIT } from "../constants";

export default (router: Router) => {
  router.get(
    "/posts/:page?",
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const page = req.params.page || 1;
        const limit = req.query.limit || PAGE_LIMIT;

        const pageData = await PostService.getPage(+page, +limit);

        // setTimeout is not needed here it just to see loaders in Front-end
        setTimeout(() => {
          res.json(pageData);
        }, 500);
      } catch (err) {
        next(err);
      }
    }
  );
};
