import { Router, Request, Response, NextFunction } from "express";

import UserService from "../services/UserService";

export default (router: Router) => {
  router.get(
    "/user/:userId",
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const userId = req.params.userId;
        const user = await UserService.getUser(+userId);
        if (user) {
          // setTimeout is not needed here it just to see loaders in Front-end
          setTimeout(() => {
            res.json(user);
          }, 500);
        } else {
          res.status(404).json({
            error: "User not found"
          });
        }
      } catch (err) {
        next(err);
      }
    }
  );
};
