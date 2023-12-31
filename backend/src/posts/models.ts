// Models here, mirroring those from ../customers/models.ts
import mongoose, { model, Schema, Model, Document } from 'mongoose';

export interface IPost extends Document {
  title: string,
  postText: string,
  comments: string[],
  upvotes: number,
  course: string,
  id: string
}

const PostSchema: Schema = new Schema({
  title: { type: String, required: true },
  postText: { type: String, required: true },
  comments: { type: [String] },
  upvotes: { type: Number, default: 0 },
  course: { type: String },
  id: { type: String }
});

const Post = model('Post', PostSchema);

export type { Post };
