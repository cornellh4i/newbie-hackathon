import { Router, RequestHandler, Request, Response } from "express";
import { attempt } from "../utils/attempt";
import postsController from "./controller";
import Post, { IPost } from "./models";

const postRouter = Router();

postRouter.get(
  "/all",
  async (req: Request, res: Response) => {
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

postRouter.post(
  "/postcomment",
  async (req: Request, res: Response) => {
    try {
      // Assuming the request body contains "id" and "comment" properties
      const _id = req.body["_id"];
      const comments = req.body["comments"];

      // Call the controller function with the provided data
      const result = await postsController.post_comment(_id, comments);

      console.log(result)

      // Respond with the result
      return res.status(200).json(result);

    } catch (error) {
      // Handle errors and respond with an appropriate error message
      return res.status(500).json({ error: 'An error occurred while posting the comment.' });
    }
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
