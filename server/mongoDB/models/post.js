import mongoose from "mongoose";

//used when generating a new post
//schema for post

const Post = new mongoose.Schema({
    name: { type: String, required: true },
    prompt: { type: String, required: true },
    photo: { type: String, required: true },
});

//model for schema. (collection name, schema)
const PostSchema = mongoose.model("Post", Post);

export default PostSchema;