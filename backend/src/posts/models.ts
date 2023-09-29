// Models here, mirroring those from ../customers/models.ts
import mongoose, { model, Schema, Model, Document } from 'mongoose';

interface IPost extends Document {
  title : string,
  information : string,
  comments : string[],
  upvotes : number, 
  course : string,
  id : string
}

const PostSchema : Schema = new Schema({
  title : {type : String, required : true}, 
  information : {type : String, required : true}, 
  comments : {type: [String]}, 
  upvotes : {type : Number, default : 0}, 
  course : {type : String}, 
  id : {type : String}
});

const Post = model('Post', PostSchema);

export default Post;