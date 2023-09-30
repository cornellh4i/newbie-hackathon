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

postRouter.post(
  "/postincreaseupvote",
  async (req: Request, res: Response) => {
    try {
      // Assuming the request body contains “id” and “comment” properties
      const _id = req.body["_id"];
      // Call the controller function with the provided data
      const result = await postsController.increase_upvote(_id);
      // Respond with the result
      return res.status(200).json(result);
    } catch (error) {
      // Handle errors and respond with an appropriate error message
      return res.status(500).json({ error: 'An error occured while upvoting the post' });
    }
  }
)

export default postRouter;
