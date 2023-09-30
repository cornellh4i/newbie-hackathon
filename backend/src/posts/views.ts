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

  postRouter.get("/:id", async (req: Request, res: Response) => {
    // #swagger.tags = ['Users']
    attempt(res, 200, () => postsController.get_post_by_id(req.params.id));
  });

  postRouter.get("/course/:course", async (req: Request, res: Response) => {
    // #swagger.tags = ['Users']
    const course = req.params.course.replace("+", " ");
    attempt(res, 200, () => postsController.get_posts_by_course(course));
  });

export default postRouter;
