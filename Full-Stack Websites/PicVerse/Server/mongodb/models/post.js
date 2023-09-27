import mongoose from 'mongoose';
const {Schema} = mongoose;

const Post = new Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true },
});

const PostSchema = mongoose.model('Post', Post);

export default PostSchema;