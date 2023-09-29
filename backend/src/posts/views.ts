import { Router, RequestHandler, Request, Response } from "express";
import { attempt } from "../utils/attempt";
import postsController from "./controller";

const postRouter = Router();

postRouter.get(
    "/all",
    async (req: Request, res: Response) => {
      // #swagger.tags = ['Users']
      attempt(res, 200, () => postsController.get_all_posts());
    }
  );

export default postRouter;
