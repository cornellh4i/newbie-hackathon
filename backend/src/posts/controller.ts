// Controllers here, following the pattern in ../customers/controllers.ts
import e from "express";
import { Db, MongoClient as MC, MongoError } from "mongodb";
import { Callback, model } from "mongoose";
import { cursorTo } from "readline";
import Post, { IPost } from "./models";

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
    const query = {}
    const all_posts = await posts.find(query).toArray()
    return all_posts
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};

const post_comment = async (id: string, comment: string) => {
  try {
    const database = client.db('Posts');
    const posts = database.collection('Posts');
    const query = { "_id": id };

    // Define the update operation
    const updateOperation = {
      $push: { "comments": comment },
    };

    // Perform the update operation with options
    const result = await posts.findOneAndUpdate(query, updateOperation);
    if (result.value) {
      // The post was found and updated successfully
      return result.value;
    } else {
      // Handle the case where the post with the given ID was not found
      throw new Error('Post not found');
    }
  } finally {
    // Ensure that the client will close when you finish/error
    await client.close();
  }
};

const get_post_by_id = async (id: string) => {
    try {
        const database = client.db('Posts');
        const posts = database.collection('Posts');
        const query = { "_id": id }
        const response = await posts.find(query).toArray()
        const post = new Post(response[0])
        return post
      } finally {
        await client.close();
      }
};

const get_posts_by_course = async (course: string) => {
    try {
        const database = client.db('Posts');
        const collection = database.collection('Posts');
        const query = { "course": course }
        const response = await collection.find(query).toArray()
        const posts = response.map((element: any) => {
            return new Post(element);
          });
        return posts
      } finally {
        await client.close();
      }
};

const get_posts_by_search = async (search: string) => {
    try {
        const database = client.db('Posts');
        const collection = database.collection('Posts');
        const all_posts = await get_all_posts()
        console.log(all_posts)

        const searchTextLowered = search.toLowerCase();
        const searchable_posts = all_posts.map((post: any) => {
            const title: string = post["title"].toLowerCase();
            if (title.indexOf(searchTextLowered)) {
                return post;
            }
          });
        console.log(searchable_posts)
        return searchable_posts;
      } finally {
        await client.close();
      }
}

export default { get_all_posts, get_post_by_id, get_posts_by_course, get_posts_by_search, post_comment };
