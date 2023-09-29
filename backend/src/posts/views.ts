import { Router, RequestHandler, Request, Response } from "express";
import { attempt } from "../utils/attempt";
import postsController from "./controller";
import Post, { IPost } from "./models";

const postRouter = Router();

postRouter.get(
    "/all",
    async (req: Request, res: Response) => {
      // #swagger.tags = ['Users']
      attempt(res, 200, () => postsController.get_all_posts());
    }
  );

 postRouter.post(
  "/addpost",
  async (req : Request, res : Response) => {
    try {
      const newPost = req.body as IPost;
      const result = await postsController.add_post(newPost);

      result
        ? res.status(201).send(`Successfully created a new post with id ${result.insertedId}`)
        : res.status(500).send("Failed to create a new post.");
        } catch (error) {
            console.error(error);
        }
  }
 );

export default postRouter;
