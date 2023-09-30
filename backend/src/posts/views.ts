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

  postRouter.get("/:id", async (req: Request, res: Response) => {
    // #swagger.tags = ['Users']
    attempt(res, 200, () => postsController.get_post_by_id(req.params.id));
  });

  postRouter.get("/course/:course", async (req: Request, res: Response) => {
    // #swagger.tags = ['Users']
    const course = req.params.course.replace("+", " ");
    attempt(res, 200, () => postsController.get_posts_by_course(course));
  });

  postRouter.delete(
    "/deletepost",
    async (req: Request, res: Response) => {
      try {
        const postId = req.body._id;
        const result = await postsController.delete_post(postId);
  
        result
          ? res.status(200).send(`Successfully deleted post with id ${postId}`)
          : res.status(500).send(`Failed to delete post with id ${postId}`);
      } catch (error) {
        console.error(error);
        res.status(500).send(`An error occurred`);
      }
    }
  );
  

export default postRouter;
