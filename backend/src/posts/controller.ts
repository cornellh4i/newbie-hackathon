// Controllers here, following the pattern in ../customers/controllers.ts
import e from "express";
import { Db, MongoClient as MC, MongoError } from "mongodb";
import { Callback } from "mongoose";
import { cursorTo } from "readline";
import Post, { IPost } from "./models"

const { MongoClient } = require("mongodb");
const DEV_URI = process.env.DEV_URI;
const client = new MongoClient(DEV_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const get_all_posts = async () => {
    try {
        const database = client.db('Posts');
        const posts = database.collection('Posts');
        const query = { }
        const all_posts = await posts.find(query).toArray()
        return all_posts
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
}

const add_post = async (post : IPost) => {
  try {
    const database = client.db('Posts');
    const posts = database.collection('Posts');
    console.log("got here");
    const newPost = new Post(post);
    const addPost = posts.insertOne(newPost);
    return addPost; 
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}

export default { get_all_posts, add_post };